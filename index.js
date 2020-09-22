const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, status } = require('./config.json');
const bot = require('./src/bot.json');
const emote = require('./src/emotes');
const string = require('./strings/english');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};


client.once('ready', () => {
    client.user.setActivity(`${status}`, {
  type: "PLAYING"
});
    client.channels.cache.get(bot.log).send(`${emote.info} ${string.turn_on} \`${client.user.tag}\``);
    console.log(`${client.user.tag} is ready!`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.channel.send(`${emote.x} ${string.error} \n ${emote.check} i have sent a log to the developer!`);
                client.channels.cache.get(bot.log).send(`${emote.x} **${string.error} while executing a command!** \n author: \`${message.author.tag}\` \n command: \`${message.content}\` \n error: \`${error}\` `);
	};
});

client.login(token);