const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: ["music", "skip"],
    description: "Skips the song currently playing.",
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

        if (player.queue.size == 0) {
            await player.destroy();
            await client.UpdateMusic(player);
            await client.clearInterval(client.interval);

            const skipped = new EmbedBuilder()
                .setDescription(`${client.i18n.get(language, "music", "skip_msg")}`)
                .setColor(client.color);
    
            msg.edit({ content: " ", embeds: [skipped] });
        } else {
            await player.stop();
            await client.clearInterval(client.interval);

            const skipped = new EmbedBuilder()
                .setDescription(`${client.i18n.get(language, "music", "skip_msg")}`)
                .setColor(client.color);
    
            msg.edit({ content: " ", embeds: [skipped] });
        }
    }
}