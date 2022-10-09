const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const axios = require('axios')

module.exports = {
  name: ["love"],
  description: "Use this command to show another user how u feel",
  category: "Media",
  options: [
    {
        name: "receiver",
        description: "Select user that will recieve your love",
        type: ApplicationCommandOptionType.User,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    

    const result = await axios.get('https://api.otakugifs.xyz/gif?reaction=love&format=gif')
    const receiver = interaction.options.getUser("receiver"); 

    const love = new EmbedBuilder()
      .setColor(client.color)
      .setDescription(`**${interaction.user}** ${client.i18n.get(language, "media", "love")} ${receiver}`)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(result.data.url)
      .setTimestamp();


    interaction.reply({ embeds: [love]})  

}
}