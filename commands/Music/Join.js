const { EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    name: ["music", "join"],
    description: "Summon the bot to your voice channel.",
    category: "Music",
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });

        const nojoin = new EmbedBuilder()
        .setTitle(`${client.i18n.get(language, "noplayer", "no_player_title")}`)
        .setDescription(`${client.i18n.get(language, "music", "play_join")}`)
        .setColor(client.color)
        .setTimestamp();

        const nospeak = new EmbedBuilder()
        .setTitle(`${client.i18n.get(language, "noplayer", "no_player_title")}`)
        .setDescription(`${client.i18n.get(language, "music", "play_speak")}`)
        .setColor(client.color)
        .setTimestamp();
        
        const novoice = new EmbedBuilder()
        .setTitle(`${client.i18n.get(language, "noplayer", "no_player_title")}`)
        .setDescription(`${client.i18n.get(language, "music", "join_voice")}`)
        .setColor(client.color)
        .setTimestamp();


        const { channel } = interaction.member.voice;
        if(!channel) return interaction.editReply({embeds: [novoice]});
        if (!interaction.guild.members.cache.get(client.user.id).permissionsIn(channel).has(PermissionsBitField.Flags.Connect)) return interaction.editReply({embeds: [nojoin]});
        if (!interaction.guild.members.cache.get(client.user.id).permissionsIn(channel).has(PermissionsBitField.Flags.Speak)) return interaction.editReply({embeds: [nospeak]});

        const player = client.manager.create({
            guild: interaction.guild.id,
            voiceChannel: interaction.member.voice.channel.id,
            textChannel: interaction.channel.id,
            selfDeafen: true,
        });

        await player.connect();

        const embed = new EmbedBuilder()
            .setDescription(`${client.i18n.get(language, "music", "join_msg", {
                channel: channel.name, user: interaction.user
            })}`)
            .setColor(client.color)

        interaction.editReply({ content: " ", embeds: [embed] })
        
    }
}
