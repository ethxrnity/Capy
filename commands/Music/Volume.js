const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: ["music", "volume"],
    description: "Adjusts the volume of the bot.",
    category: "Music",
    options: [
        {
            name: "amount",
            description: "The amount of volume to set the bot to.",
            type: ApplicationCommandOptionType.Integer,
            required: false,
        }
    ],
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });       
        const value = interaction.options.getInteger("amount");
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

        if (!value) return msg.edit(`${client.i18n.get(language, "music", "volume_usage", {
            volume: player.volume
        })}`);
        if (Number(value) <= 0 || Number(value) > 100) return msg.edit(`${client.i18n.get(language, "music", "volume_invalid")}`);

        await player.setVolume(Number(value));

        const changevol = new EmbedBuilder()
            .setDescription(`${client.i18n.get(language, "music", "volume_msg", {
                volume: value, user: interaction.user
            })}`)
            .setColor(client.color);
        
        msg.edit({ content: " ", embeds: [changevol] });
        
    }
}