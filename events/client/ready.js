const { green, white } = require('chalk');
const Premium = require('../../settings/models/Premium.js');
const { ActivityType } = require('discord.js')

module.exports = async (client) => {
    await client.manager.init(client.user.id);

    console.log(white('[') + green('INFO') + white('] ') + green(`${client.user.tag} (${client.user.id})`) + white(` is Ready!`));

    const users = await Premium.find();
    for (let user of users) {
      client.premiums.set(user.Id, user);
    }

    client.pickPresence = async () => {
        const options = [
            {
               type: ActivityType.Playing,
               text: "Tower of Fantasy 1.5",
               status: "dnd"
            },
            {
              type: ActivityType.Listening,
              text: "Clan from milet",
              status: "dnd"
            },
            {
              type: ActivityType.Competing,
              text: "Infinity still no.1",
              status: "dnd"
            },
            {
                type: ActivityType.Watching,
                text: "for 2.3 update",
                status: "dnd"
            },
            {
                type: ActivityType.Watching,
                text: "over Aesperia",
                status: "dnd"
            },
            {
                type: ActivityType.Watching,
                text: "over Silvercoast Lab",
                status: "dnd"
            },
          ];
        const option = Math.floor(Math.random() * options.length);

        client.user.setPresence({
            activities: [{
                name: options[option].text,
                type: options[option].type
            }],
            status: options[option].status
        });
    }

    setInterval(client.pickPresence, 10 * 1000);

};
