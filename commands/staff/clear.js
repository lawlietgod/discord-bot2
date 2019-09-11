const commando = require('discord.js-commando');
const Discord = require('discord.js');
class ClearCommand extends commando.Command
{

    constructor(client)
    {
        super(client,
            {
            name: 'clear' ,
            group: 'staff',
            memberName: 'clear',
            description: 'Clears the chat'
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
        const PREFIX = '!';
        const deletemsg = message.content.substring(PREFIX.length).split(" ");
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(missingPermissionsEmbed);
      else   if (!deletemsg[1]) return message.reply(missingArgsEmbed2);
        else message.channel.bulkDelete(deletemsg[1])//.catch(console.error);
    }

}
module.exports = ClearCommand;