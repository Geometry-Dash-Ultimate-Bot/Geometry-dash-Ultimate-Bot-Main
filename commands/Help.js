const { MessageEmbed } = require('discord.js');
const emote = require('../src/emotes.json');

module.exports = {
    name: 'help',
    description: 'Help command',
    execute(message) {
        
        const embed = new MessageEmbed()
           .setTitle(`${emote.info} Help`)
           .setColor('#0384fc')
           .setDescription('The Default Prefix is \`&\`')
           .addField(`Level search`, '`&level`', true)
           .addField(`Gauntlets`, '`&gauntlets`', true)
           .addField(`${emote.star} featured`, '`&featured`', true)
           .addField(`${emote.creator} settings`, '`&settings`', true)
           .addField(`${emote.demon} Weekly`, '`&weekly`', true)
           .addField(`${emote.play} Daily`, '`&daily`', true)
           .addField(`${emote.mod} Mod List`, '`&mods`', true)
           .addField(`${emote.info} Leaderboard`, '`&leaderboard`', true);
        message.channel.send(embed);
    }
        
}
