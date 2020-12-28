const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on("ready", async () => {
  console.log(`Bot Is Ready To Go - ${client.user.tag}`);
});





const { badwords } = require("./data.json") 

client.on('message', message => {



    let confirm = false;
   
    var i;
    for(i = 0;i < badwords.length; i++) {
      
      if(message.content.toLowerCase().includes(badwords[i].toLowerCase()))
        confirm = true;


      
    }

    if(confirm) {
      const log = client.channels.cache.get(config.channel);
const user = message.member
              const logEmbed = new discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setDescription(`Message: ${message.content}`)

      message.delete()
      message.channel.send(`**${message.author}, you are not allowed to send cuss words here! More warnings will result in a mute!**`)
      log.send(logEmbed)
      db.add(`warns_${message.author}`, 1)

      const warns = db.fetch(`warns_${message.author}`)

      if (warns > 2) {
          const member = message.guild.roles.cache.find(
 (role) => role.name === 'config.memberRole'
);

const mute = message.guild.roles.cache.find(
 (role) => role.name === 'config.muteRole'
);

const chatEmbed = new discord.MessageEmbed()
.setColor("RED")
.setDescription(`**${user} was muted for continuous infractions.**`)

user.roles.add(mute)
user.roles.remove(member)
message.channel.send(chatEmbed)
db.delete(`warns_${message.author}`)
      }
      
      
    }    
   
 
})

