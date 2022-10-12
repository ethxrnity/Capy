const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const client = require('nekos.life');
const neko = new client();

module.exports = {
  name: ["feed"],
  description: "Use this command to fed other user",
  category: "Media",
  options: [
    {
        name: "target",
        description: "Select user that will recieve your food",
        type: ApplicationCommandOptionType.User,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    

    var feedapi = await neko.feed()
    const target = interaction.options.getUser("target");

    const feed = new EmbedBuilder()
      .setColor(client.color)
      .setDescription(`**${interaction.user}** ${client.i18n.get(language, "media", "food")} ${target}`)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(feedapi.url)
      .setTimestamp();


    interaction.reply({ embeds: [feed]})  

}
}