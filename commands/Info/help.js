const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: ["help"],
  description: "Returns info of ToF types matrice stats.",
  category: "Info",
  options: [
    {
        name: "type",
        description: "Select the type you desire to get info for.",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: "Filter", value: "Filter" },
            { name: "Game", value: "Game" },
            { name: "Media", value: "Media" },
            { name: "Music", value: "Music" },
            { name: "Playlist", value: "Playlist" },
            { name: "Info", value: "Info" },
        ]
    },
],

     /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */

run: async (interaction, client, user, language) => { 
    const type = interaction.options.getString("type");   

    const help = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `${client.i18n.get(language, "interaction", "request_from")} ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

      switch (type) {
        case "Filter":
          help.setTitle(`${client.i18n.get(language, "info", "filter_help")}`)
          help.setDescription(`${client.i18n.get(language, "info", "help_desc")}`)
          help.addFields(

            { name: `${client.i18n.get(language, "info", "command_list")}`, value: `${client.i18n.get(language, "info", "filter_commands")}`},
            { name: `\u200B`, value: `${client.i18n.get(language, "info", "contact_owner")}`, },
            ) 

          break;
        case "Game":
          help.setTitle(`${client.i18n.get(language, "info", "game_help")}`)
          help.setDescription(`${client.i18n.get(language, "info", "help_desc")}`)
          help.addFields(

            { name: `${client.i18n.get(language, "info", "command_list")}`, value: `${client.i18n.get(language, "info", "game_commands")}`},
            { name: `\u200B`, value: `${client.i18n.get(language, "info", "contact_owner")}`, },
            )

          break; 
        case "Info":
          help.setTitle(`${client.i18n.get(language, "info", "info_help")}`)
          help.setDescription(`${client.i18n.get(language, "info", "help_desc")}`)
          help.addFields(

            { name: `${client.i18n.get(language, "info", "command_list")}`, value: `${client.i18n.get(language, "info", "info_commands")}`},
            { name: `\u200B`, value: `${client.i18n.get(language, "info", "contact_owner")}`, },
            )

          break; 
        case "Media":
          help.setTitle(`${client.i18n.get(language, "info", "media_help")}`)
          help.setDescription(`${client.i18n.get(language, "info", "help_desc")}`)
          help.addFields(

            { name: `${client.i18n.get(language, "info", "command_list")}`, value: `${client.i18n.get(language, "info", "media_commands")}`},
            { name: `\u200B`, value: `${client.i18n.get(language, "info", "contact_owner")}`, },
            )

          break;
        case "Music":
          help.setTitle(`${client.i18n.get(language, "info", "music_help")}`)
          help.setDescription(`${client.i18n.get(language, "info", "help_desc")}`)
          help.addFields(

            { name: `${client.i18n.get(language, "info", "command_list")}`, value: `${client.i18n.get(language, "info", "music_commands")}`},
            { name: `\u200B`, value: `${client.i18n.get(language, "info", "contact_owner")}`, },
            )

          break;
        case "Playlist":
          help.setTitle(`${client.i18n.get(language, "info", "playlist_help")}`)
          help.setDescription(`${client.i18n.get(language, "info", "help_desc")}`)
          help.addFields(

            { name: `${client.i18n.get(language, "info", "command_list")}`, value: `${client.i18n.get(language, "info", "playlist_commands")}`},
            { name: `\u200B`, value: `${client.i18n.get(language, "info", "contact_owner")}`, },
            )

          break;    
        default:
          break;
      }
      return await interaction.reply({ embeds: [help] })
  },
};
