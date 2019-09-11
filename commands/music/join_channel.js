const commando = require('discord.js-commando');
const Discord = require('discord.js');
const YTDL = require('ytdl-core');
const ffmpeg = require('ffmpeg');
function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end" , function(){
if(server.queue[0])
{
    Play(connection, message);
}
else {
    connection.disconnect();
}
    });
}
class JoinChannelCommand extends commando.Command
{

    constructor(client)
    {
        super(client,
            {
            name: 'join' ,
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the commander'
        });
    } 
    async run(message,args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id]) 
                {
                    servers[message.guild.id] = {queue: []}
                }
               
                 message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        message.reply("Succesfully joined!");
                        server.queue.push(args);

                    Play(connection, message).catch(console.error);
                    })
            }
        }
       else 
       {
           message.reply("You must be in my voice channel to summon me!")
       }
    }

}
module.exports = JoinChannelCommand;