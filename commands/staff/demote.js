const commando = require('discord.js-commando');
const Discord = require('discord.js');
class demoteCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'demote' ,
            group: 'staff',
            memberName: 'demote',
            description: 'demotes the mentioned'
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
        var embeddemotes = new Discord.RichEmbed()
        .setTitle(':small_red_triangle_down:  **YOU HAVE BEEN DEMOTED ** :small_red_triangle_down:  ')
        .addField('**Demoted by:**' , message.author.tag)
        .setColor(0xc20404)
       var mentioneds = message.mentions.members.first();
       var modlogs = message.guild.channels.find(channel => channel.name === "mod-logs");
       var embedDemote = new Discord.RichEmbed()
       .setColor(0x19d400)
       .setTitle('            :white_check_mark:** SUCCESSFULLY DEMOTED **:white_check_mark: ')
       .addField('User:' , `${mentioneds}`)
       .addField('Demoted by:', message.author.tag)
       var embedDfail = new Discord.RichEmbed()
       .setColor(0xc20404)
       .setTitle(':writing_hand:** DEMOTION FAILED** :writing_hand: ')
       .addField('THIS PERSON IS NOT STAFF!', ':heavy_multiplication_x: ')
       
       
       
       if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(missingPermissionsEmbed);
       if(!args[1]) return message.channel.send(missingArgsEmbed2); 
       if(!mentioneds.roles.find(role => role.name === "Staff Team")) {
            message.delete();
            return message.channel.send(embedDfail);
        }
        else {
           mentioneds.removeRole('620039041538064406');
           mentioneds.removeRole('620038986143891466');
           mentioneds.removeRole('620039104113147934');
           mentioneds.removeRole('615576343492427781');
           mentioneds.removeRole('615533592273092658')
           modlogs.send(embedDemote);
           mentioneds.send(embeddemotes);
           
           
       }             
                       
    }

}

module.exports = demoteCommand;