const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const fetch = require('@replit/node-fetch');

const keepAlive = require("./server")

// Discord bot client setup
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const apiURL = 'https://api.mcstatus.io/v2/status/java/play.dorahsmp.fun';

// Event: Bot ready
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  updateMinecraftPlayerCount();
  setInterval(updateMinecraftPlayerCount, 60000); // Update every 1 minute

  const status = await getMinecraftPlayerCount();
  setBotActivity(status);
  console.log(`Updated bot status to: ${status}`);
});

// Function: Update Minecraft player count
async function updateMinecraftPlayerCount() {
  try {
    const status = await getMinecraftPlayerCount();
    setBotActivity(status);
    console.log(`Updated bot status to: ${status}`);
  } catch (error) {
    console.error('Failed to update Minecraft player count:', error);
    setBotActivity(false);
  }
}

// Function: Get Minecraft player count
async function getMinecraftPlayerCount() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    const playerCount = data.players?.online || false;
    return playerCount;
  } catch (error) {
    console.error('Failed to fetch Minecraft player count:', error);
    throw error;
  }
}

// Function: Set bot's activity
function setBotActivity(status) {
  let activityName;
  if (status !== false) {
    const playerText = status === 1 ? 'Player' : 'Players';
    activityName = `${status} ${playerText} online`;
  } else {
    activityName = 'Server Offline';
  }

  client.user.setActivity({
    name: activityName,
    type: ActivityType.Watching,
  });
}

keepAlive()
// Bot login
client.login(process.env.DISCORD_TOKEN);
