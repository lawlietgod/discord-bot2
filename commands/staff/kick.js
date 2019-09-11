const commando = require('discord.js-commando');
const Discord = require('discord.js');
class KickCommand extends commando.Command

{

    constructor(client)
    {
        super(client,
            {
            name: 'kick' ,
            group: 'staff',
            memberName: 'kick',
            description: 'Kicks the mentioned'
        });
    } 
    async run(message,args)
    {
        const user = message.mentions.members.first();
        var modlogs = message.guild.channels.find(channel => channel.name === `mod-logs`);
        var modlog = new Discord.RichEmbed()
        .setTitle(':athletic_shoe: **MEMBER KICKED!** :athletic_shoe: ')
        .addField('By:' , message.author)
        .addField('Who:' , user)
        .addField('In:' , message.channel)
        .setTimestamp()
        var kicked = new Discord.RichEmbed() 
        .setColor(`RANDOM`)
        .addField('**Kicked by:**' , message.author.tag)
        .setTitle(':x:**YOU WERE KICKED**:x: ')
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
        
                        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(missingPermissionsEmbed); 

                      else if(!args[1]) message.channel.send(missingArgsEmbed2) 
                      
                    else if (user) {
                        const member =message.guild.member(user);
                        
                        if (member) {
                            var delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                           
                            member.send(kicked);
                            await delay(500);
                            
                            member.kick('You were kicked.').then(()=>{
                                message.reply(`${user} was sucessfully kicked`);
                                
                            }).catch(err => {   
                                message.reply('I was unable to kick the member');
                                console.log(err);
                            });
                            modlogs.send(modlog).catch(console.error);
                        }else{
                             message.reply('User is not in the server!') ;  
                            } 
                        } 
                       
    }

}
module.exports = KickCommand;