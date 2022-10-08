const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  name: ["relic"],
  description: "Returns info of ToF characters simulacra.",
  category: "Game",
  options: [
    {
        name: "relic",
        description: "Select the character you desire to get info for.",
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
            { name: "Colossus Arms", value: "Colossus Arms" },
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
    case "jetpack":
        
        break;

    default:
        break;
    }
    return await interaction.reply({ embeds: [relics] })
},
};    