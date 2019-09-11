
const Commando = require('discord.js-commando');
const bot = new Commando.Client({autoReconnect:true});
const token = "NjIxMDgzNzQ3MTM5NDUyOTQ4.XXgL2g.F-gfi-p_SOZS3lxuBB19VQaRj_4";
bot.registry.registerGroup('simple' , 'Simple');
bot.registry.registerGroup('music' , 'Music');
bot.registry.registerGroup('staff' , 'Staff');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');
global.servers = {};
    
    
    bot.on("ready" , () => {
        bot.user.setStatus("dnd")
        console.log('Ready!');
        
        setInterval(() => {
            bot.user.setStatus('dnd')
              bot.user.setActivity(`with MEMBERS`, {type: 'PLAYING'}); 
          }, 1);
      });
      
      bot.on('ready', () => {
        bot.user.setStatus('dnd')
          setInterval(() => {
              bot.user.setActivity(`lawliet#0599`, {type: 'WATCHING'}); 
          }, 2);
      });
      bot.on('guildMemberAdd', member => {
        const channel = member.guild.channels.find(channel => channel.name === "welcome");
           if(!channel) return;
       
           
           channel.send(`Welcome to our server, ${member}, please read do rule in the rules channel`);
       
       
          
       
       })
       bot.on('guildMemberAdd', guildMember => {
           guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Member"));
       })

bot.login(token);