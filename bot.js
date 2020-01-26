const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const readline = require("readline");
var prefix = "^";

bot.on("ready", () => {
  console.log(bot.user.tag + " is online");
});

bot.on("message",message=>{

  if(message.author.bot) return
  if(message.content.startsWith(prefix +"dm")){
  	
  	let msg = message.content.slice((prefix +"dm ").length)

    

    try{
      message.guild.members.forEach(member => {
        if (member.id != bot.user.id && !member.user.bot) member.send(msg);
      });}catch(e){
        
      }
      return message.channel.send("Sending DM to all, it may take a while")
  }

})
bot.login("NjY5NTg0ODQ3MDEzOTM3MTY0.Xi0pPQ.wWFqGt-6pU_LmXVnxEWxGBYR3bk");
