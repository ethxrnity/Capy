const { EmbedBuilder } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["waifu"],
  description: "Use this command to see random waifu",
  category: "Media",

run: async (interaction, client, user, language) => {    

    var waifuapi = await neko.waifu()

    const waifu = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(waifuapi.url)
      .setTimestamp();


    interaction.reply({ embeds: [waifu]})  

}
}