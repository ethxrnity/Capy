const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("tof")
      .setDescription("Returns info of ToF characters stats.")
      .addStringOption((character) =>
        character
          .setName("character")
          .setDescription("Select the character you desire to get info for.")
          .setRequired(true)
          .addChoices(
            { name: "Shiro", value: "Shiro" },
            { name: "Claudia", value: "Claudia" }
          )
      )
      .addStringOption((type) =>
        type
          .setName("type")
          .setDescription("Matrice or weapon")
          .setRequired(true)
          .addChoices(
            { name: "Matrice", value: "Matrice" },
            { name: "Weapon", value: "Weapon" }
          )
      ),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
      const { options } = interaction;
      const character = options.getString("character");
      const type = options.getString("type");
  
      let op; // embed color for each type
      switch (type) {
        case "Weapon":
          op = "Red";
          break;
        case "Matrice":
          op = "Green";
          break;
        default:
          break;
      }
      const skills = new EmbedBuilder()
        .setTitle(`${type} for ${character}`)
        .setColor(op);
  
      switch (character) {
        case "Shiro":
          skills.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/shiro.webp");
          break;
        case "Claudia":
          break;
  
        default:
          break;
      }
      return await interaction.reply({ embeds: [skills] });
    },
  };
  
