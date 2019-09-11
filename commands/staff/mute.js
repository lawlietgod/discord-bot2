const commando = require('discord.js-commando');
const Discord = require('discord.js');
class MuteCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'mute' ,
            group: 'staff',
            memberName: 'mute',
            description: 'mutes the mentioned'
        });
    } 
    async run(message,args)
    {  var mutedmember = message.mentions.members.first();
        var missingPermissionsEmbed = new Discord.RichEmbed() 
        .setColor(0xc20404)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(':x:**NO PERMISSIONS!**:x: ')
        .setDescription('**You do not own permissions for this action.**')
        .setTimestamp()
        var missingArgsEmbed2 = new Discord.RichEmbed() 
        .setColor(0xfff833)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(':heavy_minus_sign: Missing Arguments!:heavy_minus_sign: ')
        
        .setTimestamp()
        
                         var muteembed = new Discord.RichEmbed()
                         .setTitle(':mute: ** YOU HAVE BEEN MUTED ** :mute:')
                         .addField('**Server:**' , message.guild.name)
                         .addField('**Muted by:**' , message.author.tag)
                         var modlogs = message.guild.channels.find(channel => channel.name === "mod-logs");
                           // let user = message.mentions.members.first();
                           var mutedembed = new Discord.RichEmbed()
                           .setTitle(':mute: **MUTED MEMBER** :mute:')
                           .addField('**Member:**' , mutedmember)
                           .addField('**Muted By:**' , message.author)
                           .addField('**In:**' , message.channel)
                           
                           var mutefail = new Discord.RichEmbed()
                           .setTitle(':x: **MUTATION FAILED** :x:')
                           .setDescription('**This person is already muted!**')
                           
                         if (!args[1]) return message.reply(missingArgsEmbed2);
                           if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(missingPermissionsEmbed);
                          
                           if (mutedmember.roles.find(role => role.name === "Muted")) return message.channel.send(mutefail);
                            
                        
                         else 
                             {  
                                const member = message.mentions.members.first()
                                 const muted = message.guild.roles.find(r => r.name === "Muted");
                             member.addRole(muted).catch(console.error);;
                             modlogs.send(mutedembed).catch(console.error);;
                             mutedmember.send(muteembed).catch(console.error);;
                             message.channel.send('Successfully muted!').catch(console.error);;


                    }
                             
                         
                       
    }

}
module.exports = MuteCommand;