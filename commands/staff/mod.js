const commando = require('discord.js-commando');
const Discord = require('discord.js');
class modCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'mod' ,
            group: 'staff',
            memberName: 'mod',
            description: 'mods the mentioned'
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
        var embedmod = new Discord.RichEmbed()
                    .setTitle(':tada: **YOU HAVE BEEN PROMOTED TO MOD!** :tada: ')
                    .addField('**Promoted by:**' , message.author.tag)
                    .setColor(0x19d400)
                     var modfail = new Discord.RichEmbed()
                     .setTitle(':writing_hand:** PROMOTION FAILED** :writing_hand: ')
                     .setColor(0xc20404)
                     .addField('THIS PERSON IS ALREADY MOD!', ':heavy_multiplication_x: ')
                    var mod = message.mentions.members.first();
                    var modlogs = message.guild.channels.find(channel => channel.name === "mod-logs");
                    var embedPromote = new Discord.RichEmbed()
                      .setColor(0x19d400)
                      .setTitle('            :white_check_mark: **SUCCESSFULLY PROMOTED** :white_check_mark: ')
                      .addField('User:' , `${mod}`)
                      .addField('Mod Given by:', message.author.tag)
                      .addField('Promoted to:' , 'Mod')
         
                     if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.hasPermission('BAN_MEMBERS') && !message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(missingPermissionsEmbed);
                     if (!args[1]) return message.channel.send(missingArgsEmbed2);
                     if (mod.roles.find(role => role.name === "Mod")){
                         message.delete();
                         return message.channel.send(modfail);
                     }
                     else {
                    mod.addRole('615533592273092658');
                    mod.addRole('615576343492427781');
                    mod.removeRole('620038986143891466');
                    mod.addRole('620039041538064406');
                    mod.removeRole('620039104113147934');
                    
                    modlogs.send(embedPromote);
                    mod.send(embedmod)
                                 
                       
    }

}
}
module.exports = modCommand;