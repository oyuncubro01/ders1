const Discord = require("discord.js");
exports.run = async (client, message, args) => {
message.channel.send("**Pong 14**")
  
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'ping'
}
