const {SlashCommandBuilder, ApplicationCommandType} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Returns Capys ping'),
    type: ApplicationCommandType.ChatInput,
    async execute(interaction, client) {
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `API Latency: ${client.ws.ping}\nClient Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
        await interaction.editReply({
            content: newMessage
        });
    }
}