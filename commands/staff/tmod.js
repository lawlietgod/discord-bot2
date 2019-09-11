const commando = require('discord.js-commando');
const Discord = require('discord.js');
class TmodCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'tmod' ,
            group: 'staff',
            memberName: 'tmod',
            description: 'tmods the mentioned'
        });
    } 
    async run(message,args)
    {  

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
        var embedTmod = new Discord.RichEmbed()
        .setTitle(':tada: **YOU HAVE BEEN PROMOTED TO T-MOD!** :tada: ')
        .addField('**Promoted by:**' , message.author.tag)
        .setColor(0x19d400)
         var tmodfail = new Discord.RichEmbed()
         .setTitle(':writing_hand:** PROMOTION FAILED** :writing_hand: ')
         .setColor(0xc20404)
         .addField('THIS PERSON IS ALREADY T-MOD!', ':heavy_multiplication_x: ')
        var tmod = message.mentions.members.first();
        var modlogs = message.guild.channels.find(channel => channel.name === "mod-logs");
        var embedPromote = new Discord.RichEmbed()
          .setColor(0x19d400)
          .setTitle('            :white_check_mark: **SUCCESSFULLY PROMOTED** :white_check_mark: ')
          .addField('User:' , `${tmod}`)
          .addField('T-Mod Given by:', message.author.tag)
          .addField('Promoted to:' , 'T-Mod')

         if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(missingPermissionsEmbed);
         if (!args[1]) return message.channel.send(missingArgsEmbed2);
         if (tmod.roles.find(role => role.name === "T-Mod")){
             message.delete();
             return message.channel.send(tmodfail);
         }
         else {
        tmod.addRole('615533592273092658');
        tmod.addRole('615576343492427781');
        tmod.addRole('620038986143891466');
        tmod.removeRole('620039041538064406');
        tmod.removeRole('620039104113147934');
        
        modlogs.send(embedPromote);
        tmod.send(embedTmod)
        
         }               
                       
    }

}
module.exports = TmodCommand;