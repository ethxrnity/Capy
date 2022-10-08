const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["kiss"],
  description: "Use this command to show another user how u feel",
  category: "Media",
  options: [
    {
        name: "receiver",
        description: "Select user that will recieve your kiss",
        type: ApplicationCommandOptionType.User,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    

    var kissapi = await neko.kiss()
    const receiver = interaction.options.getUser("receiver"); 

    const kiss = new EmbedBuilder()
      .setColor(client.color)
      .setDescription(`**${interaction.user}** ${client.i18n.get(language, "media", "kiss")} ${receiver}`)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(kissapi.url)
      .setTimestamp();


    interaction.reply({ embeds: [kiss]})  

}
}