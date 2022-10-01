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
      const user = interaction.user
  
      let op; 
      switch (type) {
        case "Weapon":
          op = "#bb6464";
          break;
        case "Matrice":
          op = "#f2d388";
          break;
        default:
          break;
      }
      const weapon = new EmbedBuilder()
        .setColor(op) 
        .setFooter({ text: `Request from ${interaction.user.username}`, iconURL: user.displayAvatarURL()})
        .setTimestamp();
  
      switch (character) {
        case "Shiro":
          weapon.setTitle(`${character} - Chakram of the Seas`)
          weapon.setDescription("<:dps:1025579949479968869><:phys:1025579947886116874> Mainly Shatter character")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/shiro.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '19', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '13', inline: true },
            { name: 'Ability', value: 'Create a Chakram Domain with the Wanderer at the center for 8 seconds. At the same time, enemies are pulled in, and their speed is reduced by 30% for 8 seconds. Fire 5 chakrams that bounce between enemies, dealing damage equal to 24.2% of ATK + 38 to targets along their paths, bouncing up to 5 times. The split chakrams triggered by Waning Moon will also bounce up to 5 times. Cooldown: 45 seconds.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, switching to this weapon from another weapon removes all debuffs from the wielder and unleashes Chakram of the Seas at a target. Struck target causes AOE stun for 1 second, plus 1 attack each against up to 3 units every second (each attack has 10% change of stunning the target for 1.5 seconds), dealing 41.4% x ATK + 65 damage for 10 seconds.', },
            { name: 'Dodge', value: 'Tap normal attack during the short period after dodging to trigger Waning Moon. Toss a spinning chakram forward, dealing damage equal to 132.9% of ATK + 209to the target and inflicting a stun effect for 0.5 seconds. The chakram then splits into 3 and keeps traveling, dealing damage equal to 24.2% of ATK + 38 to targets along their path. Split chakram will bounce during Full Bloom.'},
            { name: 'Attack - Normal', value: 'While on the ground, brandish the chakram to unleash 5 spinning attacks.'},
            { name: 'Attack - Hold', value: 'After the second normal attack, hold attack button to activate Scatter. Fire five penetrating chakrams forward, each hit dealing 43.5% of ATK + 68 damage, with minor knockback.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips&Tricks', value: 'Best option with **Claudia**\nUse her ability only for shatter or when u are sure that enemy wont run away from it (**Centaur, Lucia and Frost)**' },)

          break;
        case "Claudia":
            weapon.setTitle(`${character} - Guren Blade`)
          weapon.setDescription("<:dps:1025579949479968869><:phys:1025579947886116874> Mainly DPS Buff character")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/claudia.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '14', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '5', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1010', inline: true },
            { name: 'Ability', value: 'Dance through targets while swinging the blade, dealing damage equal to 418% of ATK + 22 in total to up to 5 targets (attack on the same target deal 20% less damage). At the end of the Skill, slash the space in front, dealing damage equal to 264% of ATK + 14 to targets, and suspend them. Immune to crowd-control effects while ability is in use, and all damage taken is reduced by 50%. Cooldown: 15 seconds.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, switching to this weapon from another weapon removes all debuffs from the wielder, who charges and strongly suspends a target, dealing 523.3% of ATK + 28 damage, leaving behind a Bladestorm that deals 209.6% of ATK + 11 damage to the target, while gaining immunity to grievous/freeze/burn/electrify effects for 5 seconds.', },
            { name: 'Dodge', value: 'Tap normal attack during the short period after dodging to trigger Leap Attack. The Wanderer swings their blade and deals damage equal to 37.9% of ATK + 2 to the target, strongly suspending them and becoming airborne, then dealing additional damage equal to 56.8% of ATK + 3.'},
            { name: 'Attack - Normal', value: 'While on the ground, swing the blade to attack 5 times in a row.'},
            { name: 'Attack - Hold', value: 'Hold the normal attack button after normal attacks to trigger Cyclone. Upon hit, suspend the target and deal 47.8% of ATK + 3 to a single target.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Shiro**\nUse her ability only when u are sure that enemy wont run away from it (**Centaur, Lucia and Frost)**' },)
          break;

          case "Frigg":
            weapon.setTitle(`${character} - Balmung`)
          weapon.setDescription("<:dps:1025579949479968869><:frost:1025743794471194685> Mainly DPS Buff character")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/frigg.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: 'Ability', value: 'Slash the space around the Wanderer, dealing total damage equal to 577.5% of ATK + 30. Can suspend and launch targets, and grant damage immunity while this skill is in use. 30-second cooldown. After unleashing "Fimbulwinter", a large frost domain will be formed around you for 25 seconds. The number of dodges you can perform will not be deducted when you perform the Balmung dodge within the frost domain. Grant "Domain of Frost I" when you are in the frost domain, increase frost ATK by 15%, and shatter by 25% when using a frost weapon.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, clear all debuffs from the user and dash forward upon switching to this weapon, temporarily controlling opponents in an area before unleashing a gigantic slash. Deal damage equal to 618.2%of ATK + 33 and launch enemies into the air.', },
            { name: 'Dodge', value: 'Tap normal attack during the short perfect attack window to trigger Multislash. Unleash multiple slashes at a set distance in front of the user, dealing total damage equal to 143.9% of ATK + 8.'},
            { name: 'Attack - Normal', value: 'Initiate 5 attacks in a row with Balmung when on the ground.'},
            { name: 'Attack - Hold', value: 'While normal attacking, hold normal attack to trigger Soaring Slash. Lunge forward with a horizontal swipe, then launch the target into the air before soaring up with the target. Deal a maximum of 134.3% of ATK + 7 damage.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Tsubasa or Meryl**\nWhen u are going frost team with Frigg always use her trait.\nFrigg discharge can "stop" time while u are casting which sometimes leads into good dps for carries.\nBest way to use Frigg is to spam dashes with left-click' },)
          break;

          case "Cocoritter":
            weapon.setTitle(`${character} - Absolute Zero`)
          weapon.setDescription("<:healer:1025743791761666090><:frost:1025743794471194685> Main Healer and immunity granter")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/coco.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '15', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '7', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: 'Ability', value: 'Create a healing zone that moves with the Wanderer and heals nearby allies for 95% of ATK + 5/29/59/89/119/149/179/209/X once every 0.5 seconds for 6 seconds. 60—second cooldown.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, switching to this weapon from another weapon removes all debuffs from the wielder, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for 118.8% of ATK + 6/36/74/111/149/187/224/262/X HP for 7 seconds.', },
            { name: 'Dodge', value: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to 45.9% of ATK + 2/14/29/43/58/72/87/101/X to targets. Grant 75 weapon charge points upon use.'},
            { name: 'Attack - Normal', value: 'While on the ground, swing the staff to attack 5 times in a row.'},
            { name: 'Attack - Hold', value: 'Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every 0.2 seconds, for a total of 123.8% of ATK + 7/38/77/116/155/194/234/273/X damage.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Zero or Nemesis**\nWhen u are going to be healer always use Cocos trait\nCocos ability grants you immunity for 15sec.\nCoco is insanely good for catching people in pvp with her aa+aa+hold' },)
          break;

          case "Meryl":
            weapon.setTitle(`${character} - Rosy Edge`)
          weapon.setDescription("<:tank:1025743783981240432><:frost:1025743794471194685> Main DPS and immunity granter")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/meryl.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '15', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '7', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: 'Ability', value: 'Swing the greatsword to launch sword auras forward, each dealing damage equal to 141.7% of ATK + 7 and increasing damage dealt by 5% with each hit. While active, immune to control effects. Cooldown: 45 seconds.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, upon switching to this weapon, remove all debuffs from the wielder and smash the ground to form a barrier, dealing damage equal to 503.2% of ATK + 26 to nearby enemies, suspending the targets. This reduces their speed by 50% and stops them from dodge or jump. The barrier lasts 5 seconds and blocks projectiles.', },
            { name: 'Dodge', value: 'Tap normal attack during the short period after dodging to trigger Crescent Slash. Swing the greatsword to unleash sword auras forward, each dealing damage equal to 49.6% of ATK + 3.'},
            { name: 'Attack - Normal', value: 'While on the ground, swing a greatsword to attack 4 times in a row.'},
            { name: 'Attack - Hold', value: 'After the third normal attack, hold normal attack to trigger Rising Slash. Upon hit, strongly suspend the target and go airborne, dealing damage equal to 64.3% of ATK + 3.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Tsubasa or Frigg**\nWhile using Meryl only use her hold attack or ability.\nIf u are fighting Boss that tends to running away always lock them in your cage before they try to pefrom their movement ability.\nMeryl may be tank but her main power is her dps and immunity so try to play around that' },)
          break;

          case "Tsubasa":
            weapon.setTitle(`${character} - Icewind Arrow`)
          weapon.setDescription("<:dps:1025579949479968869><:frost:1025743794471194685> Mainly DPS Buff character")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/meryl.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: 'Ability', value: 'Perform a backflip and fire 3 piercing shots, with the main shot deals damage equal to 258.3% of ATK + 14, and the other two shots deal 60% damage. In addition, knock targets back and stun them for 5 seconds if they collide with an obstacle. Cooldown: 12 seconds.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, remove all debuffs from the wielder, and create a hailstorm at the target location upon switching to this weapon, dealing damage equal to 570% of ATK + 30. The storm has a 10% chance to inflict a 2 seconds freeze effect. Gain cold front, and increase speed by 45% for 7 seconds.', },
            { name: 'Dodge', value: 'Tap attack after dodging to trigger a Loaded Arrow, which knocking the target back and dealing damage equal to 124% of ATK + 7.'},
            { name: 'Attack - Normal', value: 'While on the ground, draw the bow repeatedly to attack 5 times.'},
            { name: 'Attack - Hold', value: 'After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to 287.2% of ATK + 15 area damage to targets.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Tsubasa or Frigg**\nWhile using Meryl only use her hold attack or ability.\nIf u are fighting Boss that tends to running away always lock them in your cage before they try to pefrom their movement ability.\nMeryl may be tank but her main power is her dps and immunity so try to play around that' },)
          break;
  
        default:
          break;
      }
      return await interaction.reply({ embeds: [weapon] });
    },
  };
  