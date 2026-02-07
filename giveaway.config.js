const config = require('./config')

module.exports = {
    giveaway: "🎉 **GIVEAWAY** 🎉",
    giveawayEnded: "🎉 **GIVEAWAY BEENDET** 🎉",
    title: '{this.prize}',
    inviteToParticipate: `Reagiere mit ${config.giveaway.reaction} um teilzunehmen!`,
    winMessage: 'Gratulation, {winners}! Du hast **{this.prize}** gewonnen!\nMelde dich in einem Ticket um deinen Gewinn beanzuspruchen.',
    drawing: 'Ende: {timestamp}',
    embedFooter: '{this.winnerCount} gewinner',
    noWinner: 'Es gibt keinen Gewinner, da nicht genug personen teilgenommen haben',
    winners: 'Gewinner:',
    endedAt: 'Geendet',
    hostedBy: 'Gestartet von: {this.hostedBy}'
};