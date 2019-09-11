const commando = require('discord.js-commando');
const Discord = require('discord.js');
class AvatarCommand extends commando.Command
{

    constructor(client)
    {
        super(client,
            {
            name: 'avatar' ,
            group: 'simple',
            memberName: 'avatar',
            description: 'Sends embed avatar'
        });
    } 
    async run(message,args)
    {
        
        
        var embedauthor = new Discord.RichEmbed()
        .setColor(0x7aff45)
            .setTitle('Your Avatar:')
            .setImage(message.author.avatarURL)
            .setTimestamp(message.timestamp)

       
      if (!args[1])return message.channel.send(embedauthor);
          
          
      else {
        const user = message.mentions.users.first();
        const avatarEmbed = new Discord.RichEmbed()
            .setTitle(`${user.username}'s Avatar:`)
            .setColor(0x7aff45)
            .setTimestamp(message.timestamp)
            .setImage(user.displayAvatarURL);
        message.channel.send(avatarEmbed);
    
     }
      
     
       
    }

}
module.exports = AvatarCommand;