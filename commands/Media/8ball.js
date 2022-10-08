const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["8ball"],
  description: "Use this command to answer your worst questions",
  category: "Media",
  options: [
    {
        name: "question",
        description: "Select your question",
        type: ApplicationCommandOptionType.String,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    

    var eightBallapi = await neko.eightBall()
    const question = interaction.options.getString("question"); 

    const eightBall = new EmbedBuilder()
      .setColor(client.color)
      .setDescription(`${interaction.user}:${client.i18n.get(language, "media", "8ball")}**${question}**${client.i18n.get(language, "media", "8ball2")}`)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(eightBallapi.url)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp();


    interaction.reply({ embeds: [eightBall]})  

}
}