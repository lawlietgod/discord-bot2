const commando = require('discord.js-commando');
const Discord = require('discord.js');
class UnmuteCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'unmute' ,
            group: 'staff',
            memberName: 'unmute',
            description: 'unmutes the mentioned'
        });
    } 
    async run(message,args)
    {  var unmutedmember = message.mentions.members.first();
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
        
                         var unmuteembed = new Discord.RichEmbed()
                         .setTitle(':mute: ** YOU HAVE BEEN UNMUTED ** :mute:')
                         .addField('**Server:**' , message.guild.name)
                         .addField('**Muted by:**' , message.author.tag)
                         var modlogs = message.guild.channels.find(channel => channel.name === "mod-logs");
                           // let user = message.mentions.members.first();
                           var unmutedembed = new Discord.RichEmbed()
                           .setTitle(':mute: **UNMUTED MEMBER** :mute:')
                           .addField('**Member:**' , unmutedmember)
                           .addField('**Muted By:**' , message.author)
                           .addField('**In:**' , message.channel)
                           
                           var unmutefail = new Discord.RichEmbed()
                           .setTitle(':x: **MUTATION FAILED** :x:')
                           .setDescription('**This person is not muted!**')
                           
                         if (!args[1]) return message.reply(missingArgsEmbed2);
                           if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(missingPermissionsEmbed);
                          
                           if (!unmutedmember.roles.find(role => role.name === "Muted")) return message.channel.send(unmutefail);
                            
                        
                         else 
                             {  
                                const member = message.mentions.members.first()
                                 const muted = message.guild.roles.find(r => r.name === "Muted");
                             member.removeRole(muted).catch(console.error);;
                             modlogs.send(unmutedembed).catch(console.error);;
                             unmutedmember.send(unmuteembed).catch(console.error);;
                             message.channel.send('Successfully unmuted!').catch(console.error);;


                    }
                             
                         
                       
    }

}
module.exports = UnmuteCommand;