const { EmbedBuilder } = require('discord.js');
const delay = require("delay");

module.exports = {
    name: ["filter", "daycore"],
    description: "Turning on daycore filter",
    category: "Filter",
    run: async (interaction, client, user, language) => {
    try {
      if (user && user.isPremium) {    
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
                equalizer: [
                    { band: 0, gain: 0 },
                    { band: 1, gain: 0 },
                    { band: 2, gain: 0 },
                    { band: 3, gain: 0 },
                    { band: 4, gain: 0 },
                    { band: 5, gain: 0 },
                    { band: 6, gain: 0 },
                    { band: 7, gain: 0 },
                    { band: 8, gain: -0.25 },
                    { band: 9, gain: -0.25 },
                    { band: 10, gain: -0.25 },
                    { band: 11, gain: -0.25 },
                    { band: 12, gain: -0.25 },
                    { band: 13, gain: -0.25 },
                ],
                timescale: {
                    pitch: 0.63,
                    rate: 1.05
                },
            }
    
            await player.node.send(data);

        const daycored = new EmbedBuilder()
            .setDescription(`${client.i18n.get(language, "filters", "filter_on", {
                name: "daycore", user: interaction.user
            })}`)
            .setColor(client.color);

        await delay(2000);
        interaction.editReply({ content: " ", embeds: [daycored] });

    } else {
        const embed = new EmbedBuilder()
            .setTitle(`${client.i18n.get(language, "nopremium", "premium_title")}`)
            .setDescription(`${client.i18n.get(language, "nopremium", "premium_desc")}`)
            .setColor(client.color)
            .setTimestamp()

        return interaction.editReply({ content: " ", embeds: [embed] });
    }
} catch (err) {
    console.log(err);
    interaction.editReply({ content: `${client.i18n.get(language, "nopremium", "premium_error")}` })
}
}
} 