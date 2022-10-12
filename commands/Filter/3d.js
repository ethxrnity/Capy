const { EmbedBuilder } = require('discord.js');
const delay = require("delay");

module.exports = {
    name: ["filter", "3d"],
    description: "Turning on 3d filter",
    category: "Filter",
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });
        const player = client.manager.get(interaction.guild.id);

        const noplayer = new EmbedBuilder()
        .setTitle(`${client.i18n.get(language, "noplayer", "no_player_title")}`)
        .setDescription(`${client.i18n.get(language, "noplayer", "no_player")}`)
        .setColor(client.color)
        .setTimestamp();

        const novoice = new EmbedBuilder()
        .setTitle(`${client.i18n.get(language, "noplayer", "no_player_title")}`)
        .setDescription(`${client.i18n.get(language, "noplayer", "no_player")}`)
        .setColor(client.color)
        .setTimestamp();

		if (!player) return interaction.editReply({ embeds: [noplayer]});
        const { channel } = interaction.member.voice;
        if (!channel || interaction.member.voice.channel !== interaction.guild.members.me.voice.channel) return interaction.editReply({ embeds: [novoice] });

            const data = {
                op: 'filters',
                guildId: interaction.guild.id,
                rotation: { rotationHz: 0.2 }
            }

            await player.node.send(data);

        const embed = new EmbedBuilder()
            .setDescription(`${client.i18n.get(language, "filters", "filter_on", {
                name: "3d", user: interaction.user
            })}`)
            .setColor(client.color);

        await delay(2000);
        interaction.editReply({ content: " ", embeds: [embed] });
    
    }
}