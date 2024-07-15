// bot.js
const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'I_am_Taha.aternos.me', // Minecraft server IP
  port: 24499,                  // Minecraft server port (default: 25565)
  username: 'server_bot',     // Minecraft account username
  password: 'taha@123',     // Minecraft account password
  version: false                // Auto-detect Minecraft version
});

bot.on('login', () => {
  console.log('Bot has logged in');
  bot.chat('Hello, I am here to keep the server alive!');
});

bot.on('end', () => {
  console.log('Bot has disconnected');
});

// Perform some activity to keep the server alive
bot.on('spawn', () => {
  setInterval(() => {
    bot.chat('Still here!');
  }, 300000); // Every 5 minutes
});

bot.on('error', (err) => console.log(err));
bot.on('kicked', (reason) => console.log(`Kicked: ${reason}`));
