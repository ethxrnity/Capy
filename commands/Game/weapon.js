const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: ["weapon"],
  description: "Returns info of ToF characters weapon stats.",
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

    const weapon = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

      switch (character) {
        case "Shiro":
          weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "shiro_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:phys:1025579947886116874> ${client.i18n.get(language, "game", "shiro_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/shiro.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '19', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '13', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "shiro_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "shiro_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "shiro_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "shiro_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "shiro_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "shiro_tips_tricks")}`},)

          break;
        case "Claudia":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "claudia_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:phys:1025579947886116874> ${client.i18n.get(language, "game", "claudia_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/claudia.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '14', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '5', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1010', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "claudia_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "claudia_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "claudia_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "claudia_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "claudia_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "claudia_tips_tricks")}`},)
          break;

          case "Frigg":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "frigg_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:frost:1025743794471194685> ${client.i18n.get(language, "game", "frigg_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/frigg.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "frigg_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "frigg_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "frigg_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "frigg_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "frigg_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "frigg_tips_tricks")}`},)
          break;

          case "Cocoritter":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "coco_weapon")}`)
          weapon.setDescription(`<:healer:1025743791761666090><:frost:1025743794471194685> ${client.i18n.get(language, "game", "coco_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/coco.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '15', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '7', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "coco_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "coco_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "coco_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "coco_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "coco_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "coco_tips_tricks")}`},)
          break;

          case "Meryl":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "meryl_weapon")}`)
          weapon.setDescription(`<:tank:1025743783981240432><:frost:1025743794471194685> ${client.i18n.get(language, "game", "meryl_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/meryl.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '15', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '7', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "meryl_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "meryl_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "meryl_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "meryl_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "meryl_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "meryl_tips_tricks")}`},)
          break;

          case "Tsubasa":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "tsubasa_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:frost:1025743794471194685> ${client.i18n.get(language, "game", "tsubasa_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/tsubasa.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "tsubasa_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "tsubasa_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "tsubasa_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "tsubasa_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "tsubasa_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "tsubasa_tips_tricks")}`},)
          break;

          case "Nemesis":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "nemesis_weapon")}`)
          weapon.setDescription(`<:healer:1025743791761666090><:volt:1025743781380751470> ${client.i18n.get(language, "game", "nemesis_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/nemesis.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "nemesis_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "nemesis_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "nemesis_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "nemesis_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "nemesis_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "nemesis_tips_tricks")}`},)
          break;

          case "Crow":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "crow_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:volt:1025743781380751470> ${client.i18n.get(language, "game", "crow_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/crow.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "crow_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "crow_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "crow_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "crow_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "crow_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "crow_tips_tricks")}`},)
          break;

          case "Samir":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "samir_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:volt:1025743781380751470> ${client.i18n.get(language, "game", "crow_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/samir.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "samir_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "samir_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "samir_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "samir_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "samir_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "samir_tips_tricks")}`},)
          break;

          case "King":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "king_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:fire:1025743777652023366> ${client.i18n.get(language, "game", "king_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/king.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '16', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '6', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "king_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "king_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "king_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "king_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "king_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "king_tips_tricks")}`},)
          break;

          case "Cobalt-B":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "cobalt_weapon")}`)
          weapon.setDescription(`<:dps:1025579949479968869><:fire:1025743777652023366> ${client.i18n.get(language, "game", "cobalt_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cobalt.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '16', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1010', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '11', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "cobalt_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "cobalt_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "cobalt_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "cobalt_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "cobalt_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "cobalt_tips_tricks")}`},)
          break;

          case "Zero":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "zero_weapon")}`)
          weapon.setDescription(`<:healer:1025743791761666090><:fire:1025743777652023366> ${client.i18n.get(language, "game", "zero_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/zero.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '14', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '9', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "zero_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "zero_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "zero_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "zero_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "zero_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "zero_tips_tricks")}`},)
          break;

          case "Huma":
            weapon.setTitle(`${character} - ${client.i18n.get(language, "game", "huma_weapon")}`)
          weapon.setDescription(`<:tank:1025743783981240432><:fire:1025743777652023366> ${client.i18n.get(language, "game", "huma_desc")}`)
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/huma.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '14', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '9', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: `${client.i18n.get(language, "game", "ability")}`, value:  `${client.i18n.get(language, "game", "huma_ability")}`},
            { name: `${client.i18n.get(language, "game", "discharge")}`, value: `${client.i18n.get(language, "game", "huma_discharge")}`},
            { name: `${client.i18n.get(language, "game", "dodge")}`, value: `${client.i18n.get(language, "game", "huma_dodge")}`},
            { name: `${client.i18n.get(language, "game", "attack_normal")}`, value: `${client.i18n.get(language, "game", "huma_attack_normal")}`},
            { name: `${client.i18n.get(language, "game", "attack_hold")}`, value: `${client.i18n.get(language, "game", "huma_attack_hold")}`},
            { name: '\u200B', value: '\u200B' },
            { name: `${client.i18n.get(language, "game", "tips_tricks")}`, value: `${client.i18n.get(language, "game", "huma_tips_tricks")}`},)
          break;
  
        default:
          break;
      }
      return await interaction.reply({ embeds: [weapon] })
  },
};
