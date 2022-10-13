const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');
const { convertTime } = require("../../structures/ConvertTime.js");

module.exports = {
    name: ["music", "remove"],
    description: "Remove song from queue!",
    category: "Music",
    options: [
        {
            name: "position",
            description: "The position in queue want to remove.",
            type: ApplicationCommandOptionType.Integer,
            required: true,
        }
    ],
    run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });
        const tracks = interaction.options.getInteger("position");    
        const player = client.manager.get(interaction.guild.id);

        const noplayer = new EmbedBuilder()
        .setTitle(`${client.i18n.get(language, "noplayer", "no_player_title")}`)
        .setDescription(`${client.i18n.get(language, "noplayer", "no_player")}`)
        .setColor(client.color)

        const novoice = new EmbedBuilder()
        .setTitle(`${client.i18n.get(language, "noplayer", "no_player_title")}`)
        .setDescription(`${client.i18n.get(language, "noplayer", "no_player")}`)
        .setColor(client.color)

        const removealready = new EmbedBuilder()
        .setDescription(`${client.i18n.get(language, "music", "removetrack_already")}`)
        .setColor(client.color)

        const removenotfound = new EmbedBuilder()
        .setDescription(`${client.i18n.get(language, "music", "removetrack_notfound")}`)
        .setColor(client.color)


		if (!player) return interaction.editReply({ embeds: [noplayer]});
        const { channel } = interaction.member.voice;
        if (!channel || interaction.member.voice.channel !== interaction.guild.members.me.voice.channel) return interaction.editReply({ embeds: [novoice] });

        if (tracks == 0) return interaction.editReply({ embeds: [removealready]});
        if (tracks > player.queue.length) return interaction.editReply({ embeds: [removenotfound]});

        const song = player.queue[tracks - 1];

        player.queue.splice(tracks - 1, 1);

        const embed = new EmbedBuilder()
            .setDescription(`${client.i18n.get(language, "music", "removetrack_desc", {
                name: song.title,
                url: song.uri,
                duration: convertTime(song.duration, true),
                request: song.requester,
                user: interaction.user
            })
            .setColor(client.color)
        }`)

        return interaction.editReply({ content: " ", embeds: [embed] });
    }
}