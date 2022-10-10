const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: ["profile"],
  description: "Use this command to see players ToF profile",
  category: "Game",
  options: [
    {
        name: "profile",
        description: "Select which users info will be displayed",
        type: ApplicationCommandOptionType.User,
        required: true,
    },
],

run: async (interaction, client, user, language) => {    
    
    const profile = interaction.options.getUser("profile"); 

    const profileembed = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setImage(`/api/getImageStatsByName?name=${profile}`)
      .setTimestamp();


    interaction.reply({ embeds: [profileembed]})  

}
}