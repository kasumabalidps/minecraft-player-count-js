## Discord Minecraft Bot

This is a Discord bot built using the `discord.js` library. The bot retrieves the player count of a Minecraft server and displays it as its activity status in a Discord server.

### Features
- Automatically updates the player count every minute
- Displays the player count as the bot's activity status
- Handles server offline scenarios gracefully

### Technologies Used
- [Discord.js](https://discord.js.org/) - A powerful JavaScript library for interacting with the Discord API.
- [replit.com](https://replit.com/) - Used for hosting the bot and ensuring it stays online.
- [cron-job.org](https://cron-job.org/) - Used for scheduling regular updates and keeping the bot online 24/7. Be sure to copy the Replit URL to the cron job.

### Setup

1. Clone the repository:
2. Install the required dependencies:
3. Set up the environment variable:

- Create a file named `.env` in the project root directory.
- Add the following line to the `.env` file, replacing `<discord_token>` with your Discord bot token:

  ```
  DISCORD_TOKEN=<discord_token>
  ```

4. Update the `apiURL` variable in the `index.js` file with the URL of your Minecraft server API.
5. Run the bot:
6. The bot will log in to Discord and display the initial status. It will then update the status every minute based on the number of players online.
You can now invite the bot to your Discord server and it will automatically monitor and display the Minecraft server status.

**Note:** Ensure that you have Node.js and npm installed on your system before running the bot.
Feel free to customize the bot's activity and appearance by modifying the code as needed.

