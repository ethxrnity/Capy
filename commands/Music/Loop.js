const { EmbedBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: ["music", "loop"],
    description: "Loop the current song/queue.",
    category: "Music",
    options: [
        {
            name: "type",
            description: "Type of loop",
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: "Current",
                    value: "current"
                },
                {
                    name: "Queue",
                    value: "queue"
                }
            ]
        }
    ],
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


        if(interaction.options._hoistedOptions.find(c => c.value === "current")) {
            if (player.trackRepeat === false) {
                player.setTrackRepeat(true);

                const looped = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "music", "loop_current")}`)
                    .setColor(client.color);

                return interaction.editReply({ content: " ", embeds: [looped] });
            } else {
                player.setTrackRepeat(false);

                const unlooped = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "music", "unloop_current")}`)
                    .setColor(client.color);

                return interaction.editReply({ content: " ", embeds: [unlooped] });
            }
        } else if(interaction.options._hoistedOptions.find(c => c.value === "queue")) {
            if (player.queueRepeat === true) {
                player.setQueueRepeat(false);

                const unloopall = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "music", "unloop_all")}`)
                    .setColor(client.color);

                return interaction.editReply({ content: " ", embeds: [unloopall] });
            } else {
                player.setQueueRepeat(true);

                const loopall = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "music", "loop_all")}`)
                    .setColor(client.color);

                return interaction.editReply({ content: " ", embeds: [loopall] });
            }
        }
    }
}
