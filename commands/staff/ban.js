const commando = require('discord.js-commando');
const Discord = require('discord.js');
class BanCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'ban' ,
            group: 'staff',
            memberName: 'ban',
            description: 'bans the mentioned'
        });
    } 
    async run(message,args)
    {
        const userb = message.mentions.members.first();
        var modlogs = message.guild.channels.find(channel => channel.name === `mod-logs`);
        var modlog = new Discord.RichEmbed()
        .setTitle(':athletic_shoe: **MEMBER BANNED!** :athletic_shoe: ')
        .addField('By:' , message.author)
        .addField('Who:' , userb)
        .addField('In:' , message.channel)
        .setTimestamp()
        var banned = new Discord.RichEmbed() 
        .setColor(`RANDOM`)
        .addField('**Banned by:**' , message.author.tag)
        .setTitle(':x:**YOU WERE BANNED**:x: ')
        .addField('**Server:**' , message.guild.name)
        .setFooter('Thank you for being a member in the server')
        .setTimestamp()
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
        
                    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(missingPermissionsEmbed);
                  else    if (!args[1]) return message.channel.send(missingArgsEmbed2) ;
                        
                       else if (userb) {
                        
                        const member = message.guild.member(userb);
                        if (member) {
                            var delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                           
                            member.send(banned);
                            await delay(500);
                            member.ban('You were BANNED!').then(()=> {
                                message.reply (`${userb} was sucessfully banned!`);
                            }).catch(err => {
                                message.reply(':x: | **I was unable to ban the member!**');
                                console.log(err);
                            });
                            modlogs.send(modlog).catch(console.error);
                        }
                     }


        }
        

}
module.exports = BanCommand;