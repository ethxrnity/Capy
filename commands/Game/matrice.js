const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: ["matrice"],
  description: "Returns info of ToF characters matrice stats.",
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

     /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */

run: async (interaction, client, user, language) => { 
    const character = interaction.options.getString("character");   

    const matrice = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `${client.i18n.get(language, "interaction", "request_from")} ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

      switch (character) {
        case "Shiro":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/shiro2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/shiromatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "shiro_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "shiro_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_shiro")}` },)
          break;
        case "Frigg":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/frigg2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/friggmatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "frigg_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "frigg_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_limited")}` },)
          break;  
        case "Nemesis":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/nemesis2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/nemesismatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "nemesis_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "nemesis_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_limited")} ` },)
          break; 
        case "Claudia":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/claudia2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/claudiamatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "claudia_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "claudia_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_limited")} ` },)
          break;   
        case "Cobalt-B":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cobalt-b.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/cobaltmatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "cobalt_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "cobalt_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `
            ${client.i18n.get(language, "game", "hto_limited")}
            ` },)
          break; 
        case "Cocoritter":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cocoritter2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/cocomatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "coco_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "coco_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_coco")}` },)
          break; 
        case "Huma":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/huma2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/humamatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "huma_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "huma_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_huma")}` },)
          break;   
        case "Crow":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/crow2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/crowmatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "crow_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "crow_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_crow")}` },)
          break;
        case "King":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/king2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/kingmatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "king_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "king_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_king")}` },)
          break;  
        case "Meryl":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/meryl2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/merylmatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "meryl_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "meryl_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_meryl")}` },)
          break;
        case "Samir":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/samir2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/samirmatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "samir_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "samir_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_samir")}` },)
          break; 
        case "Tsubasa":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/tsubasa2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/tsubasamatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "tsubasa_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "tsubasa_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_tsubasa")}` },)
          break;  
        case "Zero":
          matrice.setTitle(`${character} ${client.i18n.get(language, "game", "matrix_set")}`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/zero2.webp");
          matrice.setImage("https://hodnoceni-ucitelu.fun/core/img/Capy/zeromatrice.png")
          matrice.addFields(

            { name: `${client.i18n.get(language, "game", "2piece")}`, value: `${client.i18n.get(language, "game", "zero_2piece")}` },
            { name: `${client.i18n.get(language, "game", "4piece")}`, value: `${client.i18n.get(language, "game", "zero_4piece")}`, },
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "hto")}`, value: `${client.i18n.get(language, "game", "hto_zero")}` },)
          break;     
             
  
        default:
          break;
      }
      return await interaction.reply({ embeds: [matrice] })
  },
};
