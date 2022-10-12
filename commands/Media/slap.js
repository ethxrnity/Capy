const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const axios = require('axios');

module.exports = {
  name: ["slap"],
  description: "Use this command to show another user how u feel",
  category: "Media",
  options: [
    {
        name: "target",
        description: "Select user that will recieve your slap",
        type: ApplicationCommandOptionType.User,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    

    const result = await axios.get('https://api.otakugifs.xyz/gif?reaction=slap&format=gif')
    const target = interaction.options.getUser("target"); 

    const slap = new EmbedBuilder()
      .setColor(client.color)
      .setDescription(`**${interaction.user}** ${client.i18n.get(language, "media", "slap")} ${target}`)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(result.data.url)
      .setTimestamp();


    interaction.reply({ embeds: [slap]})  

}
}