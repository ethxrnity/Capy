const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");
const mongoose = require('mongoose');
const Languages = require('../../schemas/language-schema');
const language = require('../../../lang.json');

module.exports = {
        data: new SlashCommandBuilder()
        .setName("language")
        .setDescription("Select the language of the bot")
        .addStringOption((setLanguage) =>
        setLanguage
          .setName("language")
          .setDescription("Select the character you desire to get info for.")
          .setRequired(true)
          .addChoices(
            { name: "English", value: "English" },
            { name: "Russian", value: "Russian" },
          )
      ),

    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */

      async execute(interaction, client) {
        const { options } = interaction;
        const setLanguage = options.getString("language");
        const user = interaction.user;

        let langProfile = await Languages.findOne({ guildId: interaction.guild.id });
        if (!langProfile) { langProfile = await new Languages({
            guildId: interaction.guild.id,
            guildLanguage: language,
        });

        await langProfile.save().catch(console.error);
        console.log(langProfile);
    }

    const setlanguage = new EmbedBuilder()
        .setColor("#bb6464") 
        .setFooter({ text: `Request from ${interaction.user.username}`, iconURL: user.displayAvatarURL()})
        .setTimestamp();
    
    switch (setLanguage) {
      case "English":
        setlanguage.setDescription(`Language was succesfully changed to ${setLanguage}`)
        break;
      case "Russian":
        setlanguage.setDescription(`Language was succesfully changed to ${setLanguage}`)
        break;     
      default:
        break;
    }
    return await interaction.reply({ embeds: [setlanguage] })       
}
}