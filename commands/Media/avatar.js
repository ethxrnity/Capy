const { EmbedBuilder } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["avatar"],
  description: "Use this command to generate an avatar",
  category: "Media",

run: async (interaction, client, user, language) => {    

    var avatarapi = await neko.avatar()

    const avatar = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(avatarapi.url)
      .setTimestamp();


    interaction.reply({ embeds: [avatar]})  

}
}