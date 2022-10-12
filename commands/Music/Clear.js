const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: ["music", "clear"],
    description: "Clear song in queue!",
    category: "Music",
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });        
        const player = client.manager.get(interaction.guild.id);identifier

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

        await player.queue.clear();
        
        const cleared = new EmbedBuilder()
            .setDescription(`${client.i18n.get(language, "music", "clearqueue_msg")}`)
            .setColor(client.color);

        interaction.editReply({ content: " ", embeds: [cleared] });
        
    }
}