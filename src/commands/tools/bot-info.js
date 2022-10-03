const {
  Client,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  EmbedBuilder,
  PermissionsBitField,
} = require("discord.js");
const { version, dependencies } = require("../../../package.json");
const ms = require("ms");
const os = require("os");
const { utc } = require("moment");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bot-info")
    .setDescription("Returns Bot OS info.")
    .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
  /**
   *
   * @param {Client} client
   * @param {ChatInputCommandInteraction} interaction
   * @returns
   */
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("#ffd9c0")
      .addFields({
        name: "General",
        value: `**❯ Client:** ${client.user.tag} (${client.user.id})
                  **❯ Servers:** ${client.guilds.cache.size.toLocaleString()} 
                  **❯ Channels:** ${client.channels.cache.size.toLocaleString()}
                  **❯ Creation Date:** ${utc(
                    client.user.createdTimestamp
                  ).format("Do MMMM YYYY HH:mm:ss")}
                  **❯ Node.js:** ${process.version}
                  **❯ Version:** v${version}
                  **❯ Discord.js:** v${dependencies["discord.js"]}`,
      })
      .setTimestamp();

    interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
