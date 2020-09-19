module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
          message.channel.send("Pong...").then(msg => {
    msg.edit(`**Pong!** ${Date.now() - message.createdTimestamp} ms`)
  });
	}
};
        