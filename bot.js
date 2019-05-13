const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

const botconfig = require('./bot/botconfig.json');
const prefix = '!'
// !add https://beardycast.com/feed https://news.yandex.ru/internet.rss

const commandFiles = fs.readdirSync('./bot/commands/').filter((file) => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./bot/commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!\n`);
});

client.on('message', (msg) => {
  if (msg.content.startsWith(prefix + 'about')) {
    client.commands.get('about').execute(msg);
  } else if (msg.content.startsWith(prefix + 'add')) {
    client.commands.get('add').execute(msg);
  } else if (msg.content.startsWith(prefix + 'clear')) {
    client.commands.get('clearRSS').execute(msg);
  } else if (msg.content.startsWith(prefix + 'help')) {
    client.commands.get('help').execute(msg);
  } else if (msg.content.startsWith(prefix + 'how')) {
    client.commands.get('how').execute(msg);
  } else if (msg.content.startsWith(prefix + 'language')) {
    client.commands.get('language').execute(msg);
  } else if (msg.content.startsWith(prefix + 'news')) {
    client.commands.get('news').execute(msg);
  } else if (msg.content.startsWith(prefix + 'ping')) {
    client.commands.get('ping').execute(msg);
  } else if (msg.content.startsWith(prefix + 'settings')) {
    client.commands.get('settings').execute(msg);
  }
});

//client.login(botconfig.token);
client.login(process.env.BOT_TOKEN);
