const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILD_MESSAGES"]});
require("dotenv").config();

client.login(process.env.DISCORD_ACCESS_KEY)
    .then(console.log("Hello world"));


// This lets us know we're ready to rock
client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}`);
    client.user.setActivity("Hello world");
    // incoming message handler


    client.on("interactionCreate", () => {
        console.log("I should be seeing this happen");
    });
    
    
});

