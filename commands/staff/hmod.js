const commando = require('discord.js-commando');
const Discord = require('discord.js');
class hmodCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'hmod' ,
            group: 'staff',
            memberName: 'hmod',
            description: 'hmods the mentioned'
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
        var embedhmod = new Discord.RichEmbed()
                            .setTitle(':tada: **YOU HAVE BEEN PROMOTED TO HEAD MOD!** :tada: ')
                            .addField('**Promoted by:**' , message.author.tag)
                            .setColor(0x19d400)
                             var hmodfail = new Discord.RichEmbed()
                             .setTitle(':writing_hand:** PROMOTION FAILED** :writing_hand: ')
                             .setColor(0xc20404)
                             .addField('THIS PERSON IS ALREADY HEAD MOD!', ':heavy_multiplication_x: ')
                            var hmod = message.mentions.members.first();
                            var modlogs = message.guild.channels.find(channel => channel.name === "mod-logs");
                            var embedPromote = new Discord.RichEmbed()
                              .setColor(0x19d400)
                              .setTitle('            :white_check_mark: **SUCCESSFULLY PROMOTED** :white_check_mark: ')
                              .addField('User:' , `${hmod}`)
                              .addField('Head Mod Given by:', message.author.tag)
                              .addField('Promoted to:' , 'Head Mod')
                 
                             if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(missingPermissionsEmbed);
                             if (!args[1]) return message.channel.send(missingArgsEmbed2);
                             if (hmod.roles.find(role => role.name === "Head Mod")){
                                 message.delete();
                                 return message.channel.send(hmodfail);
                             }
                             else {
                            hmod.addRole('615533592273092658');
                            hmod.addRole('615576343492427781');
                            hmod.removeRole('620038986143891466');
                            hmod.removeRole('620039041538064406');
                            hmod.addRole('620039104113147934');
                            
                            modlogs.send(embedPromote);
                            hmod.send(embedhmod)
                            
                             }              
                       
    }

}

module.exports = hmodCommand;