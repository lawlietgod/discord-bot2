const commando = require('discord.js-commando');
const Discord = require('discord.js');
class WarnCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'warn' ,
            group: 'staff',
            memberName: 'warn',
            description: 'warns the mentioned'
        });
    } 
    async run(message,args)
    {  
        var modlogchannel = message.guild.channels.find(channel => channel.name === "mod-logs");
        var missingPermissionsEmbed = new Discord.RichEmbed() 
            .setColor(0xc20404)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle(':x: Insufficient Permissions!:x: ')
            .setDescription('|:x:| **You do not own permissions for this action.**')
            .setTimestamp();
        var missingArgsEmbed = new Discord.RichEmbed() 
            .setColor(0xfff833)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle(':heavy_minus_sign: Missing Arguments!:heavy_minus_sign: ')
            .setDescription('Usage: `!warn [@User] [Reason]')
            .setTimestamp();
         if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed);
         let mentioned = message.mentions.users.first(); 
        if(!mentioned) return message.channel.send(missingArgsEmbed) ;
        //let reason = argss.slice(1).join(' ')
        let reason = message.content.slice(`!warn ${mentioned} `.length); 
        if(!reason) return message.channel.send(missingArgsEmbed); 
    var notif = new Discord.RichEmbed()
            .setColor(0xc20404)
            .setTitle(':warning: **MEMBER WARNED!** :warning: ')
            
        var warningEmbed = new Discord.RichEmbed() 
            .setColor(0xc20404)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle(`You've been warned in ${message.guild.name}`)
            .addField('Warned by', message.author.tag)
            .addField('Reason', reason)
            .setTimestamp();
        mentioned.send(warningEmbed);
        var warnSuccessfulEmbed = new Discord.RichEmbed() 
            
            .setColor(0x19d400)
            .setTitle(':exclamation: User Successfully Warned!:exclamation: ')
            .addField('**User:**' , `${mentioned}`)
            .addField('**By:**' , message.author)
            .addField('**Reason:**' , reason)
            .addField('**In:**' , message.channel)
            
        modlogchannel.send(warnSuccessfulEmbed); 
        message.delete();
        message.channel.send(notif);                   
                         
                       
    }

}
module.exports = WarnCommand;