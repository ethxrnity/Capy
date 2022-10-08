const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: ["relic"],
  description: "Returns info of ToF relic.",
  category: "Game",
  options: [
    {
        name: "relic",
        description: "Select the relic you desire to get info for.",
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: "Jetpack", value: "Jetpack" },
            { name: "Quantum Cloak", value: "Quantum Cloak" },
            { name: "Hovering Cannon", value: "Hovering Cannon" },
            { name: "Couant", value: "Couant" },
            { name: "Strange Cube", value: "Strange Cube" },
            { name: "Omnium Handcannon", value: "Omnium Handcannon" },
            { name: "Jetboard", value: "Jetboard" },
            { name: "Magnetic Storm", value: "Magnetic Storm" },
            { name: "Missile Barrage", value: "Missile Barrage" },
            { name: "Lava Bomb", value: "Lava Bomb" },
            { name: "Cybernetic Arm", value: "Cybernetic Arm" },
            { name: "Magnetic Pulse", value: "Magnetic Pulse" },
            { name: "Alternate Destiny", value: "Alternate Destiny" },  
            { name: "Confinement", value: "Confinement" },
            { name: "Hologram Projector", value: "Hologram Projector" },
            { name: "Drone", value: "Drone" },
            { name: "Spacetime Rift", value: "Spacetime Rift" },
            { name: "Type V Armor", value: "Type V Armor" },
            { name: "Omnium Shield", value: "Omnium Shield" },
            { name: "Colossus Arm", value: "Colossus Arm" },
        ]
    },
],

run: async (interaction, client, user, language) => { 
  const relic = interaction.options.getString("relic");    

    const relics = new EmbedBuilder()
      .setColor(client.color)
      .setFooter({
        text: `Request from ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTimestamp();


switch (relic) {
    case "Jetpack":
        relics.setTitle(`${client.i18n.get(language, "game", "jetpack_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "utility")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/jetpack.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "jetpack_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "jetpack_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "jetpack_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "jetpack_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "jetpack_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "jetpack_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Quantum Cloak":
        relics.setTitle(`${client.i18n.get(language, "game", "quantum_cloak_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "defense")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/quantumcloak.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "quantum_cloak_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "quantum_cloak_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "quantum_cloak_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "quantum_cloak_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "quantum_cloak_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "quantum_cloak_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;  

    case "Hovering Cannon":
        relics.setTitle(`${client.i18n.get(language, "game", "hovering_cannon_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/hoveringcannon.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "hovering_cannon_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "hovering_cannon_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "hovering_cannon_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "hovering_cannon_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "hovering_cannon_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "hovering_cannon_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break; 

    case "Jetboard":
        relics.setTitle(`${client.i18n.get(language, "game", "jetboard_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "utility")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/jetboard.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "jetboard_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "jetboard_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "jetboard_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "jetboard_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "jetboard_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "jetboard_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;  

    case "Magnetic Storm":
        relics.setTitle(`${client.i18n.get(language, "game", "magnetic_storm_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/magneticstorm.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "magnetic_storm_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "magnetic_storm_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "magnetic_storm_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "magnetic_storm_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "magnetic_storm_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "magnetic_storm_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break; 

    case "Missile Barrage":
        relics.setTitle(`${client.i18n.get(language, "game", "missile_barrage_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/missilebarrage.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "missile_barrage_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "missile_barrage_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "missile_barrage_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "missile_barrage_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "missile_barrage_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "missile_barrage_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;  

    case "Couant":
        relics.setTitle(`${client.i18n.get(language, "game", "couant_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/couant.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "couant_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "couant_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "couant_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "couant_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "couant_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "couant_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break; 

    case "Strange Cube":
        relics.setTitle(`${client.i18n.get(language, "game", "strange_cube_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/strangecube.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "strange_cube_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "strange_cube_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "strange_cube_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "strange_cube_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "strange_cube_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "strange_cube_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Omnium Handcannon":
        relics.setTitle(`${client.i18n.get(language, "game", "omnium_handcannon_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "utility")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/omniumhandcannon.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "omnium_handcannon_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "omnium_handcannon_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "omnium_handcannon_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "omnium_handcannon_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "omnium_handcannon_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "omnium_handcannon_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Lava Bomb":
        relics.setTitle(`${client.i18n.get(language, "game", "lava_bomb_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/lavabomb.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "lava_bomb_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "lava_bomb_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "lava_bomb_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "lava_bomb_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "lava_bomb_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "lava_bomb_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;  

    case "Cybernetic Arm":
        relics.setTitle(`${client.i18n.get(language, "game", "cybernetic_arm_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "utility")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/cyberneticarm.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "cybernetic_arm_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "cybernetic_arm_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "cybernetic_arm_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "cybernetic_arm_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "cybernetic_arm_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "cybernetic_arm_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Magnetic Pulse":
        relics.setTitle(`${client.i18n.get(language, "game", "magnetic_pulse_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/magneticpulse.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "magnetic_pulse_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "magnetic_pulse_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "magnetic_pulse_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "magnetic_pulse_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "magnetic_pulse_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "magnetic_pulse_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;   

    case "Alternate Destiny":
        relics.setTitle(`${client.i18n.get(language, "game", "alternate_destiny_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")} + ${client.i18n.get(language, "game", "defense")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/alternatedestiny.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "alternate_destiny_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "alternate_destiny_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "alternate_destiny_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "alternate_destiny_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "alternate_destiny_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "alternate_destiny_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break; 

    case "Hologram Projector":
        relics.setTitle(`${client.i18n.get(language, "game", "hologram_projector_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/hologramprojector.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "hologram_projector_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "hologram_projector_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "hologram_projector_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "hologram_projector_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "hologram_projector_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "hologram_projector_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break; 

    case "Drone":
        relics.setTitle(`${client.i18n.get(language, "game", "drone_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")} + ${client.i18n.get(language, "game", "defense")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/drone.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "drone_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "drone_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "drone_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "drone_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "drone_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "drone_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Confinement":
        relics.setTitle(`${client.i18n.get(language, "game", "confinement_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")} + ${client.i18n.get(language, "game", "defense")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/confinement.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "confinement_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "confinement_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "confinement_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "confinement_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "confinement_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "confinement_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Spacetime Rift":
        relics.setTitle(`${client.i18n.get(language, "game", "spacetime_rift_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/spacetimerift.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "spacetime_rift_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "spacetime_rift_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "spacetime_rift_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "spacetime_rift_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "spacetime_rift_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "spacetime_rift_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Type V Armor":
        relics.setTitle(`${client.i18n.get(language, "game", "type_v_armor_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")} + ${client.i18n.get(language, "game", "defense")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/typevarmor.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "type_v_armor_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "type_v_armor_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "type_v_armor_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "type_v_armor_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "type_v_armor_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "type_v_armor_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;                                                                                                      

    case "Omnium Shield":
        relics.setTitle(`${client.i18n.get(language, "game", "omnium_shield_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")} + ${client.i18n.get(language, "game", "defense")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/omniumshield.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "omnium_shield_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "omnium_shield_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "omnium_shield_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "omnium_shield_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "omnium_shield_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "omnium_shield_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;

    case "Colossus Arm":
        relics.setTitle(`${client.i18n.get(language, "game", "colossus_arm_title")}`)
        relics.setDescription(`${client.i18n.get(language, "game", "attack")} + ${client.i18n.get(language, "game", "defense")}`)
        relics.setThumbnail("https://hodnoceni-ucitelu.fun/core/img/Capy/colossusarm.png")

        relics.addFields(

          { name: `${client.i18n.get(language, "game", "relic_effect")}`, value: `${client.i18n.get(language, "game", "colossus_arm_effect")}`},
          { name: '\u200B', value: '\u200B' },
          { name: `${client.i18n.get(language, "game", "1star")}`, value: `${client.i18n.get(language, "game", "colossus_arm_1star")}`},
          { name: `${client.i18n.get(language, "game", "2star")}`, value: `${client.i18n.get(language, "game", "colossus_arm_2star")}`},
          { name: `${client.i18n.get(language, "game", "3star")}`, value: `${client.i18n.get(language, "game", "colossus_arm_3star")}`},
          { name: `${client.i18n.get(language, "game", "4star")}`, value: `${client.i18n.get(language, "game", "colossus_arm_4star")}`},
          { name: `${client.i18n.get(language, "game", "5star")}`, value: `${client.i18n.get(language, "game", "colossus_arm_5star")}`},
          { name: '\u200B', value: '\u200B' },
          )

        break;        
    default:
        break;
    }
    return await interaction.reply({ embeds: [relics] })
},
};    