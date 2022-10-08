const { EmbedBuilder } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["neko"],
  description: "Use this command to generate a neko",
  category: "Media",

run: async (interaction, client, user, language) => {    

    var nekoapi = await neko.neko()

    const nekoembed = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(nekoapi.url)
      .setTimestamp();


    interaction.reply({ embeds: [nekoembed]})  

}
}