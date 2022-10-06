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

  run: async (interaction, client, language) => {
    const character = interaction.options.getString("character");

    const matrice = new EmbedBuilder()
      .setColor("#bb6464")
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();

      switch (character) {
        case "Shiro":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/shiro2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: `${client.i18n.get(language, "game", "shiro_2piece")}` },
            { name: '4-piece Set', value: 'Upon entering battle, gain a 20%/25%/30%/35% damage boost for 35 seconds. Reset 5 seconds after exiting battle.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Lucia
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Shiro Matrix Box
            ` },)
          break;
        case "Frigg":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/frigg2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Increase frost ATK by 8%/10%/12%/15% for 10 seconds when switching between frost weapons. This sets effects work with others, but only the set with the highest star ratings effect will take effect.' },
            { name: '4-piece Set', value: 'When unleashing a frost domain with the weapon "Balmung," enemies within the frost domain receive frost damage equal to 55%/65%/75%/85% of ATK every second.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Obtain from Matrix Limited Orders
            ` },)
          break;  
        case "Nemesis":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/nemesis2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'When a target is being healed, their volt ATK is increased by 8%/10%/12%/15% for 20 seconds. The effect does not stack, and only the highest levels effect is applied when obtained repeatedly.' },
            { name: '4-piece Set', value: 'When healing yourself or your Electrode, the healed target gains a charge of "Lightning". The next attack within 30 seconds will cast lightning upon the target, dealing volt damage equal to 240%/300%/360%/420% of volt ATK, and damage caused by electrodes is reduced by 50%. Cannot be triggered more than once in 10 seconds. "Lightning" charges do not stack. Only the highest levels effect is applied when obtained repeatedly.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Obtain from Matrix Limited Orders
            ` },)
          break; 
        case "Claudia":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/claudia2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Increase damage by 13%/17%/20%/23% when hitting a target in mid-air or initiating an aerial attack. Reset double-jump upon hitting the target in mid-air.' },
            { name: '4-piece Set', value: 'Hitting an enemy with a skill reduces the cooldowns of all weapon skills by 1.5/2/2.5/3 seconds and increases the damage of discharge skills by 58%/80%/103%/126% for 15 seconds.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Obtain from Matrix Limited Orders
            ` },)
          break;   
        case "Cobalt-B":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cobalt-b.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Restore 1 dodge every 4 dodges. Dodge attacks add burn to the target, dealing 13%/17%/21%/25% attack damage per second for 10 seconds.' },
            { name: '4-piece Set', value: 'Increases damage by 13%/17%/21%/25% to targets with abnormal statuses.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Obtain from Matrix Limited Orders
            ` },)
          break; 
        case "Cocoritter":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cocoritter2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Increase healing capability and healing received by 10%/12%/14%/16%.' },
            { name: '4-piece Set', value: 'When you or your teammates are healed, increase ATK by 12.5%/15%/17.5%/20% for 6 seconds. Only the highest levels effect is applied when obtained repeatedly.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Cocoritter Matrix Box
            ` },)
          break; 
        case "Huma":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/huma2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Hitting targets with dodge skills inflicts bleed, dealing damage equal to 15%/19%/22.5%/26% of ATK every second for 5 seconds.' },
            { name: '4-piece Set', value: 'Reduce ATK of all targets within 8 meters that are taking damage over time by 10%/12%/13%/15%. Only the highest levels effect is applied when obtained repeatedly.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Frost Bot
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Huma Matrix Box
            ` },)
          break;   
        case "Crow":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/crow2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Increase crit damage to targets with less than 60% HP by 24%/30%/36%/42%.' },
            { name: '4-piece Set', value: 'Crits deal additional damage over time equal to 18%/22%/26%/30% of ATK every second for 5 seconds. Does not stack.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Sobek
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Crow Matrix Box
            ` },)
          break;
        case "King":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/king2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'When a target is shattered, grant 8%/10%/12%/14% damage boost for 25 seconds. Only the highest levels effect is applied when obtained repeatedly.' },
            { name: '4-piece Set', value: 'When there are more than 2 enemies around, hit restore HP equal to 14%/18%/22%/26% of damage dealt upon attacking. The maximum HP restored every 0.5 seconds must not exceed 36%/ of ATK.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Robarg
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open King Matrix Box
            ` },)
          break;  
        case "Meryl":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/meryl2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'If HP is less than 30% after being attacked, gain a shield equal to 20%/26%/32%/40% of Max HP for 10 seconds. Cooldown: 90 seconds.' },
            { name: '4-piece Set', value: 'Increase Whirlwinds damage by 36%/45%/54%/63% and restore HP equal to 30%/38%/44%/50% of the damage dealt while Whirlwind is active. The maximum HP restored every 0.5 seconds cannot exceed 60%/72%/81%/90% of ATK.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Barbarossa
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Meryl Matrix Box
            ` },)
          break;
        case "Samir":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/samir2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Increase damage progressively by 1% upon hitting a target. Stack up to 10/13/16/20 times. Last for 1.5 seconds.' },
            { name: '4-piece Set', value: 'Increase Dual EM Stars electrical explosion damage by 16%/22%/30%/40% of ATK.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Interdimensional Frostfire Dragon
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Samir Matrix Box
            ` },)
          break; 
        case "Tsubasa":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/tsubasa2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Increase damage dealt by 14%/16%18%/20% when there are no enemies within 4 meters.' },
            { name: '4-piece Set', value: 'Upon a headshot or using Icewind Arrow: Piercing Shot, increase ATK by 15%/18%/21%/25% for 8 seconds.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Apophis
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Tsubasa Matrix Box
            ` },)
          break;  
        case "Zero":
          matrice.setTitle(`${character} (Matrix Set)`)
          matrice.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/zero2.webp");
          matrice.addFields(

            { name: '2-piece Set', value: 'Upon using a discharge skill to switch to the current weapon, gain a shield equal to 150%/200%/250%/300% of ATK for 6 seconds.' },
            { name: '4-piece Set', value: 'While the shield is active, you and your teammates deal 16%/20%/24%/28% more damage.', },
            { name: '\u200B', value: '\u200B' },
            { name: 'How to Obtain', value: `
            Drop from Devourer
            Fuse from Workshop
            Reward from Joint Operation
            Reward from Void Rifts
            Obtain from Matrix Special Orders
            Open Zero Matrix Box
            ` },)
          break;     
             
  
        default:
          break;
      }
      return await interaction.reply({ embeds: [matrice] })
  },
};
