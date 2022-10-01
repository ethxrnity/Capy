const {EmbedBuilder} = require('discord.js');

module.exports = {
  name: "ready",
  once: "true",
  async execute(client) {
    console.log('Bot is up and ready to work!')
   //const uptime = new EmbedBuilder ()
   //.setColor('ffd9c0')
   //.addFields(
   //     { name: 'Capy is back and online!', value: 'Bot was probably offline due to a bug or maintenance.'},
   //    { name: '\u200b', value: 'If Capy isnt working how is he supposed to be contact on of our Developers or contact <@574849327650963469> directly.'},
   //)
   //const channel = client.channels.cache.get('1024722769549725736');    
   //channel.send({ embeds: [uptime] });

  setInterval(client.pickPresence, 10 * 1000);
  },
};
