const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["pat"],
  description: "Use this command to show another user how u feel",
  category: "Media",
  options: [
    {
        name: "receiver",
        description: "Select user that will recieve your pat",
        type: ApplicationCommandOptionType.User,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    

    var patapi = await neko.pat()
    const receiver = interaction.options.getUser("receiver"); 

    const pat = new EmbedBuilder()
      .setColor(client.color)
      .setDescription(`**${interaction.user}** ${client.i18n.get(language, "media", "pat")} ${receiver}`)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(patapi.url)
      .setTimestamp();


    interaction.reply({ embeds: [pat]})  

}
}