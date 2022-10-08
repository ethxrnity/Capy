const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["slap"],
  description: "Use this command to show another user how u feel",
  category: "Media",
  options: [
    {
        name: "receiver",
        description: "Select user that will recieve your slap",
        type: ApplicationCommandOptionType.User,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    

    var slappapi = await neko.slap()
    const receiver = interaction.options.getUser("receiver"); 

    const slap = new EmbedBuilder()
      .setColor(client.color)
      .setDescription(`**${interaction.user}** ${client.i18n.get(language, "media", "slap")} ${receiver}`)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(slappapi.url)
      .setTimestamp();


    interaction.reply({ embeds: [slap]})  

}
}