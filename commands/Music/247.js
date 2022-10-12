const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: ["music", "247"],
    description: "24/7 in voice channel",
    category: "Music",
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

        try {
            if (user && user.isPremium) {
                if (player.twentyFourSeven) {
                    player.twentyFourSeven = false;

                    const off = new EmbedBuilder()
                        .setDescription(`${client.i18n.get(language, "music", "247_off")}`)
                        .setColor(client.color);

                interaction.editReply({ content: " ", embeds: [off] });
                } else {
                    player.twentyFourSeven = true;

                    const on = new EmbedBuilder()
                        .setDescription(`${client.i18n.get(language, "music", "247_on")}`)
                        .setColor(client.color);

                    interaction.editReply({ content: " ", embeds: [on] });
                }
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