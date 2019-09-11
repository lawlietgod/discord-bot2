const commando = require('discord.js-commando');
const Discord = require('discord.js');
class CoinFlipCommand extends commando.Command
{

    constructor(client)
    {
        super(client,
            {
            name: 'flip' ,
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, landing on either Heads or Tails'
        });
    } 
    async run(message,args){
        var embedH = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(":dvd: **YOUR COIN LANDED ON HEADS!**:dvd: ")
        var embedt = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(":dvd: **YOUR COIN LANDED ON TAILS!** :dvd: ")
        var chance = Math.floor(Math.random() *2);
        if (chance === 0){
            message.reply(embedH);

        }
        else message.reply(embedt);
    }

}
module.exports = CoinFlipCommand;