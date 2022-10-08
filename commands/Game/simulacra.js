const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: ["simulacra"],
  description: "Returns info of ToF characters simulacra.",
  category: "Game",
  options: [
    {
        name: "character",
        description: "Select the character you desire to get info for.",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: "Shiro", value: "Shiro" },
            { name: "Claudia", value: "Claudia" },
            { name: "Frigg", value: "Frigg" },
            { name: "Meryl", value: "Meryl" },
            { name: "Cocoritter", value: "Cocoritter" },
            { name: "Tsubasa", value: "Tsubasa" },
            { name: "King", value: "King" },
            { name: "Cobalt-B", value: "Cobalt-B" },
            { name: "Zero", value: "Zero" },
            { name: "Huma", value: "Huma" },
            { name: "Nemesis", value: "Nemesis" },
            { name: "Samir", value: "Samir" },
            { name: "Crow", value: "Crow" },  
        ]
    },
],

run: async (interaction, client, user, language) => { 
  const character = interaction.options.getString("character");    

    const simulacra = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

      switch (character) {
        case "Shiro":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/shiro3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "shiro_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "shiro_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "shiro_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "shiro_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "shiro_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "shiro_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "shiro_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "shiro_2trait")}`},
            )

          break;
        case "Claudia":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/claudia3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "claudia_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "claudia_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "claudia_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "claudia_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "claudia_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "claudia_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "claudia_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "claudia_2trait")}`},
            )

          break;

          case "Frigg":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/frigg3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "frigg_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "frigg_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "frigg_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "frigg_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "frigg_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "frigg_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "frigg_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "frigg_2trait")}`},
            )

          break;

          case "Cocoritter":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cocoritter3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "coco_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "coco_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "coco_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "coco_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "coco_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "coco_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "coco_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "coco_2trait")}`},
            )

          break;

          case "Meryl":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/meryl3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "meryl_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "meryl_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "meryl_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "meryl_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "meryl_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "meryl_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "meryl_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "meryl_2trait")}`},
            )
            
          break;

          case "Tsubasa":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/tsubasa3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "tsubasa_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "tsubasa_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "tsubasa_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "tsubasa_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "tsubasa_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "tsubasa_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "tsubasa_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "tsubasa_2trait")}`},
            )
            
          break;

          case "Nemesis":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/nemesis3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "nemesis_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "nemesis_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "nemesis_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "nemesis_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "nemesis_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "nemesis_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "nemesis_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "nemesis_2trait")}`},
            )

          break;

          case "Crow":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/crow3.png");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "crow_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "crow_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "crow_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "crow_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "crow_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "crow_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "coco_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "crow_2trait")}`},
            )
            
          break;

          case "Samir":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/samir3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "samir_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "samir_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "samir_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "samir_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "samir_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "samir_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "samir_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "samir_2trait")}`},
            )
            
          break;

          case "King":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/king3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "king_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "king_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "king_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "king_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "king_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "king_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "king_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "king_2trait")}`},
            )
            
          break;

          case "Cobalt-B":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cobalt3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "cobalt_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "cobalt_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "cobalt_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "cobalt_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "cobalt_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "cobalt_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "coco_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "cobalt_2trait")}`},
            )
            
          break;

          case "Zero":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/zero3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "zero_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "zero_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "zero_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "zero_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "zero_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "zero_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "zero_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "zero_2trait")}`},
            )
            
          break;

          case "Huma":
          simulacra.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/huma3.webp");
          simulacra.addFields(

            { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "huma_1star")}`},
            { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "huma_2star")}`},
            { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "huma_3star")}`},
            { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "huma_4star")}`},
            { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "huma_5star")}`},
            { name: `${client.i18n.get(language, "game", "6star")}`, value: `${client.i18n.get(language, "game", "huma_6star")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "1trait")}`, value: `${client.i18n.get(language, "game", "huma_1trait")}`},
            { name: `${client.i18n.get(language, "game", "2trait")}`, value: `${client.i18n.get(language, "game", "huma_2trait")}`},
            )
            
          break;
  
        default:
          break;
      }
      return await interaction.reply({ embeds: [simulacra] })
  },
};
