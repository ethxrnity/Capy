const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Returns Embed with list of avaible commands'),
    async execute(interaction, client) {
        const user = interaction.user

        const help = new EmbedBuilder()
        .setColor("#bb6464") 
        .setFooter({ text: `Request from ${interaction.user.username}`, iconURL: user.displayAvatarURL()})
        .setTimestamp()
        .setTitle('test')
        .setDescription('test');

        interaction.reply({ embeds: [help] })
    }
}    