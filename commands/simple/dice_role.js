const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{

    constructor(client)
    {
        super(client,
            {
            name: 'roll' ,
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a dice'
        });
    } 
    async run(message,args)
    {
        var diceRoll = Math.floor(Math.random() * 6)+ 1;
        message.reply(":game_die: | **Your dice landed on** " + diceRoll + "| :game_die:");
    }

}
module.exports = DiceRollCommand;