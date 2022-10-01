const {ActivityType} = require('discord.js');

module.exports = (client) => {
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
                text: "for Vera update",
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
}