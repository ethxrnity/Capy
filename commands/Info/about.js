const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
  name: ["about"],
  description: "Use this command to see all info about this bot!",
  category: "Info",

run: async (interaction, client, user, language) => {    

    const about = new EmbedBuilder()
      .setTitle("Capy - Multipurpose bot with Music!")
      .setDescription("Capy is multipurpose bot with Tower of Fantasy theme and commands. Main reason in creating this bot was to help new or old players to see or find info they seek. Our bot has addional music commands on top of that for people who love listening to music on Discord!")
      .setColor(client.color)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter({ text: `Request from ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: `Main info`, value: `**Category**:\nMusic, Tower of Fantasy, Utility, Moderation\n\n**Bot Devloper**:\n<@574849327650963469>\n\n**[Open-Source](https://github.com/ethxrnity/Capy)**\n**[Website](https://github.com/ethxrnity/Capy)**\n**[Silvercoast Lab](https://github.com/ethxrnity/Capy)**`, inline: true },
        { name: `Bot info`, value: `**Version**:\nAlfa 1.0\n\n**Discord.js**:\nNewest build\n\n**Node.js**:\nv16.17.1`, inline: true },
        )
      
      .setTimestamp();

    const row = new ActionRowBuilder()
    .setComponents(
        new ButtonBuilder()
        .setLabel("Invite Bot")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.com/oauth2/authorize?client_id=1024092707808878702&scope=bot&permissions=1345715264"),
        new ButtonBuilder()
        .setLabel("Support Server")
        .setStyle(ButtonStyle.Link)
        .setURL("https://discord.gg/PStEX9XFm6")
    )


    interaction.reply({ embeds: [about], components: [row]})  

}
}