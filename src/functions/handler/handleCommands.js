const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = async() => {
    const { commands, commandArray } = client;
    const commandFolders = fs.readdirSync(`./src/commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter(file => file.endsWith(".js"));

      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
      }
    }

    const rest = new REST({ version: '10' }).setToken(process.env.token);
    const clientId = process.env['clientid'];

    try {
      console.log(`Started refreshing application (/) commands.`);
  
      await rest.put(
        Routes.applicationCommands(clientId),
        { body: commandArray, },
      );
  
      console.log(`Successfully reloaded application (/) commands.`);
    } catch (error) {
      console.error(error);
    }
  };
};
