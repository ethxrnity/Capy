const {
    SlashCommandBuilder,
    ChatInputCommandInteraction,
    EmbedBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("weapon")
      .setDescription("Returns info of ToF characters weapon stats.")
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
      ),
      
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
      const { options } = interaction;
      const character = options.getString("character");
      const user = interaction.user

      const weapon = new EmbedBuilder()
        .setColor("#bb6464") 
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
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/tsubasa.webp");
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
            { name: 'Tips & Tricks', value: 'Best option with **Meryl or Frigg**'},)
          break;

          case "Nemesis":
            weapon.setTitle(`${character} - Venus`)
          weapon.setDescription("<:healer:1025743791761666090><:volt:1025743781380751470> DPS Healer")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/nemesis.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: 'Ability', value: 'Venus fires a guided missile that explodes on contact with enemy targets, dealing damage equal to 233.2% of ATK + 12 and knocking down targets. 25-second cooldown.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, switching to this weapon will clear all debuffs from the user and command Venus to fire a cross-shaped ray at the ground, creating an unstable area and reducing targets movement speed by 70% for 5 seconds. After a brief delay, unleash an electromagnetic burst that deals damage equal to 393.9% of ATK + 21. Using a discharge attack will spawn 1 Electrode near the enemys position that attacks once every 1.5 seconds, dealing damage equal to 39.9% of ATK + 2. The Electrode gains 100% of the Wanderers stats, can be attacked or healed, and loses 3% of its max HP every second. Only 1 Electrode can exist at any given time, and summoning a new Electrode will replace the previous one.', },
            { name: 'Dodge', value: 'Tap normal attack during the short perfect attack window to trigger a slowing magnetic field. Venus fires a charged orb that travels forward a set distance and explodes in contact with targets. Deal damage equal to 171.6% of ATK + 9, and generate a slowing magnetic field for 3 seconds, which reduces the movement speed and attack speed of all enemies caught within by 35%. Dodging will trigger a healing chain that heals nearby allies by 67.7% of the Wanderers ATK; for the next 10 seconds, a small healing chain will trigger every 2 seconds, which heals nearby allies by 22.5% of the Wanderers ATK. Dodging grants 1 stack of healing chain enhance, which increases the effects of healing chains by 25% (stacks up to 5 times) and lasts for 30 seconds. Switching weapons will cancel this effect.'},
            { name: 'Attack - Normal', value: 'While on the ground, use Venus to attack 5 times in a row.'},
            { name: 'Attack - Hold', value: 'Hold normal attack to charge a shot and release an electrified ball that explodes on hit, dealing damage equal to 118.4% of ATK + 6 to nearby enemies.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Samir or Crow**\nNemesis can be very strong while in air with her turrets.\nDashing backwards while attacking will summon slow buble which leads to easy sustain.\nNemesis was first released Limited character on global' },)
          break;

          case "Crow":
            weapon.setTitle(`${character} - Thunderblades`)
          weapon.setDescription("<:dps:1025579949479968869><:volt:1025743781380751470> Main DPS and immunity granter")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/crow.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: 'Ability', value: 'Fire 6 returning blades, each dealing damage equal to 52.8% of ATK + 3. Gains hyperbody for up to 8 seconds, and the effect is removed when the blades return. 45 -second cooldown.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, remove all debuffs from the wielder and blink to the target location upon switching to this weapon and attack, dealing damage equal to 86.9% of ATK + 5 and electrocuting the target (after 5 seconds, deals volt damage equal to 15% of damage dealt, up to 350% of the Wanderers ATK. This is an abnormal status that can be dispelled). Also spawn 3 blades that orbit around the Wanderer, dealing damage equal to 65.2% of ATK + 3 to those that touch them.', },
            { name: 'Dodge', value: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Flying Blades. Slash a target 5 times, each dealing damage equal to 26.4% of ATK + 1. Grant immunity to control effects while phasing.'},
            { name: 'Attack - Normal', value: 'While on the ground, swing the dual blades to attack 5 times in a row.'},
            { name: 'Attack - Hold', value: 'After the third normal attack, hold the normal attack button to trigger Rapid Lunge. Upon hit, strongly suspend the target, dealing total damage equal to 116.8% of ATK + 6.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Samir or Nemesis**\nAfter the nerfs in patch 1.5 Crow isnt worth abusing with Jetpack.\nAttacking enemies from behind will increase your final dmg.\nCrow was first victim of global renaming his new name is Cuervo' },)
          break;

          case "Samir":
            weapon.setTitle(`${character} - Dual EM Stars`)
          weapon.setDescription("<:dps:1025579949479968869><:volt:1025743781380751470> Main DPS")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/samir.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '18', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '14', inline: true },
            { name: 'Ability', value: 'Perform a backflip and fire 3 piercing shots, with the main shot deals damage equal to 269.8% of ATK + 14, and the other two shots deal 60% damage. In addition, knock targets back and stun them for 5 seconds if they collide with an obstacle. Cooldown: 12 seconds.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, remove all debuffs from the wielder, and create a hailstorm at the target location upon switching to this weapon, dealing damage equal to 238% of ATK + 13. The storm has a 10% chance to inflict a 2 seconds freeze effect. Gain cold front, and increase speed by 45% for 7 seconds.', },
            { name: 'Dodge', value: 'Tap normal attack after dodging to strongly suspend targets and deal damage equal to 122.6% of ATK + 6.'},
            { name: 'Attack - Normal', value: 'While on the ground, tap normal attack to attack 5 times in a row.'},
            { name: 'Attack - Hold', value: 'Hold attack button to maintain constant fire, each hit dealing 23% of ATK + 1 base damage.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Crow or Nemesis**\nOne of the most useless characters in ToF.\nGetting Samir on s6 is the last thing u would like to do.\nSamir was proclaimed to be the best character even tho her whole kit is bad and her dps is even lower than Cocos' },)
          break;

          case "King":
            weapon.setTitle(`${character} - Scythe of the Crow`)
          weapon.setDescription("<:dps:1025579949479968869><:fire:1025743777652023366>  AOE ShieldBreaker")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/king.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '16', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '6', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: 'Ability', value: 'Swing the scythe, dealing damage equal to 499.9% of ATK + 26. Cooldown: 45 seconds.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, remove all debuffs from the wielder and create a Flaming Scythe upon switching to this weapon, dealing damage equal to 398.3% of ATK + 21 and lasts for 10 seconds. Additionally, spawn Flaming Scythes Domain every 2 seconds. The scythes summon volcanic eruptions from the ground, which deal damage equal to 66% of ATK + 3 to targets and suspend them.', },
            { name: 'Dodge', value: 'Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Rapid Lunge. Deal up to 126.9% of ATK + 7 damage and pull in nearby enemies.'},
            { name: 'Attack - Normal', value: 'While on the ground, swing the scythe to launch 5 consecutive attacks.'},
            { name: 'Attack - Hold', value: 'Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Asunder. While falling, deal damage equal to 12.5% of ATK + 1 each hit. Upon landing, deal damage equal to 71.9% of ATK + 4 and deliver a knockdown.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Any DPS or Cobalt-B**\nOne of the most useless characters in ToF.\nGetting King on s6 is the last thing u would like to do.\nKing can be useful for big horde of enemies otherwise his whole kit is pointless' },)
          break;

          case "Cobalt-B":
            weapon.setTitle(`${character} - Flaming Revolver`)
          weapon.setDescription("<:dps:1025579949479968869><:fire:1025743777652023366>  DPS ShieldBreaker")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cobalt.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '16', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1010', inline: true },
            { name: '<:Critic:1025569265463603270>', value: '11', inline: true },
            { name: 'Ability', value: 'Constant fire in a frontal cone area to deal 666% of ATK + 35 damage. Cooldown: 60 seconds.' },
            { name: 'Discharge', value: 'When weapon charge is full or Phantasia is triggered, switching to this weapon from another weapon removes all debuffs from the wielder and unleashes 3 grenades forward, dealing 570% of ATK + 30 AOE damage and causing launch.', },
            { name: 'Dodge', value: 'Use normal attack right after dodging to trigger Close Quarters. Deal damage equal to 156.1% of ATK + 8 to targets in a frontal cone area.'},
            { name: 'Attack - Normal', value: 'On the ground, use normal attack button to launch 5 attacks in a row.'},
            { name: 'Attack - Hold', value: 'Tap and hold normal attack to charge a shot and release to fire rounds, dealing 95.4% of ATK + 5 damage, plus an explosion 3 seconds later or if the target dies), dealing 23.9% of ATK as damage to nearby enemies. Each time the target is dealt damage before the explosion (up to 4 times), AOE is doubled and damage is increased.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Huma or Zero**\nOne of few character that were buffed on global.\nGoing for Cobalt-B is only good if u have enough money to get her on s5.\nCobalt has super slow attackspeed so u have to play around it well' },)
          break;

          case "Zero":
            weapon.setTitle(`${character} - Negating Cube`)
          weapon.setDescription("<:healer:1025743791761666090><:fire:1025743777652023366>  Healer and Shielder")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/zero.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '14', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '9', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: 'Ability', value: 'Create shielding for self and nearby allies to block up to 800% of ATK in damage for 10 seconds, and deal 142.9% of ATK + 8 damage to nearby targets and launch them. Each cube in possession when this skill is used adds 160% of ATK to max shielding and exhaust the cube. Cooldown: 60 seconds.' },
            { name: 'Discharge', value: 'When weapon chargeis full or Phantasia is triggered, remove all debuffs from the wielder and gain 5 cubes upon switching to this weapon, then unleash the 5 cubes along with a Shockwave. This Shockwave deals damage equal to 171% of ATK + 9 to nearby targets, and launches them into the air. Each cube also deals damage equal to 48.5% of ATK + 3. If allies are in the vicinity, they gain damage immunity for 3 seconds.', },
            { name: 'Dodge', value: 'Dodge right before getting hit to trigger a Phantasia, which reduces speed of enemies within range and grants hitstun immunity for 0.5 seconds. If the Wanderer has less than 5 cubes, each successful dodge has a 40% chance to restore 1 dodge attempt. Successful dodges do not interrupt normal attack combos. Passive: Gain a cube for every successful aerial dodge.'},
            { name: 'Attack - Normal', value: 'While on the ground, manipulate the cube to attack 5 times in a row.'},
            { name: 'Attack - Hold', value: 'On the third normal attack, hold the normal attack button to trigger Omnium Shock. A pillar of energy launches nearby targets into the air, dealing damage equal to 68.4% of ATK + 4. The pillar lasts 5 seconds and deals damage equal to 28.5% of ATK + 2 to nearby targets every second.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Cobalt or Coco**\nWith Coco hes currently the best healer.\nS5 Zero can drop DMG BOOST orbs.\nZero has highest Charge in ToF.\nZero can reset his jump 5 times thanks to his cube after that hes no longer to perform that unless he gets rid of the cubes' },)
          break;

          case "Huma":
            weapon.setTitle(`${character} - Molten Shield V2`)
          weapon.setDescription("<:tank:1025743783981240432><:fire:1025743777652023366>  Tank and ShieldBreaker")
          weapon.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/huma.webp");
          weapon.addFields(

            { name: '<:Attack:1025574462336286771>', value: '14', inline: true },
            { name: '<:Resistance:1025561730669105162>', value: '9', inline: true },
            { name: '<:Health:1025574438785257502>', value: '1165', inline: true },
            { name: 'Ability', value: 'Shield Conversion: Switch from shield form to axe form and smash the ground, dealing damage equal to 373.8% of ATK + 587 and strongly suspends the target. Leave a large flame zone for 5 seconds that burns the target, dealing continuous damage equal to 233.6% of ATK + 367. Axe Conversion: Switch from axe form to shield form and slam it to the ground, dealing damage equal to 309.5% of ATK + 486 to the target and knocking them back. Prevent the target from switching weapons for 5 seconds. Cooldown: 25 seconds. Shield Conversion, and Axe Conversion share a cooldown.' },
            { name: 'Discharge', value: 'When weapon charge is full or when Phantasia is triggered, remove all debuffs from the wielder and unleash a flame shockwave upon switching to this weapon, dealing damage equal to 352% of ATK + 533. Taunt enemies for 5 seconds, during which gain 15% damage reduction. Scatter shield-shaped objects based on the number of targets taunted. Objects last 20 seconds and provide 10 seconds of 5% damage reduction (stackable), restoring dodge by 1.', },
            { name: 'Dodge', value: 'Swing an axe to deal damage equal to 226.3% of ATK + 356, and reduce incoming healing effects on targets by 30% for 10 seconds.'},
            { name: 'Attack - Normal', value: 'While on the ground, swing the shield axe to attack 4 times in a row.'},
            { name: 'Attack - Hold', value: 'Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Air Branch attacks.'},
            { name: '\u200B', value: '\u200B' },
            { name: 'Tips & Tricks', value: 'Best option with **Cobalt or Meryl**\nBest ShieldBreaker in ToF.\nHuma can stack both deffense and attack.' },)
          break;
  
        default:
          break;
      }
      return await interaction.reply({ embeds: [weapon] })
    },
  };
  