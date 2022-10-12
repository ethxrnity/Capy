const { EmbedBuilder } = require('discord.js');
const delay = require("delay");

module.exports = {
    name: ["filter", "earrape"],
    description: "Destroy your ear!",
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
    
        await player.setVolume(500);
        const data = {
            op: 'filters',
            guildId: interaction.guild.id,
        }
        await player.node.send(data);

        const earrapped = new EmbedBuilder()
            .setDescription(`${client.i18n.get(language, "filters", "filter_on", {
                name: "earrape", user: interaction.user
            })}`)
            .setColor(client.color);

        await delay(2000);
        interaction.editReply({ content: " ", embeds: [earrapped] });
        
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