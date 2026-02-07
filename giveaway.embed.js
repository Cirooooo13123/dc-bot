const config = require('./config')

module.exports = {
    // Wenn das Giveaway erstellt wurde
    started: {
        title: '🎉 Giveaway Gestartet! 🎉',
        description: 'Das Giveaway wurde erfolgreich in {giveawayChannel} gestartet!',
        color: config.colors.GREEN,
    },
    // Wenn man dem Giveaway Beitritt
    join: {
        title: '✅ Erfolgreich beigetreten ✅',
        description: 'Erfolgreich dem [Giveaway]({msgLink}) beigetreten',
        color: config.colors.GREEN
    },
    // Wenn man das Giveaway gewonnen hat
    end: {
        title: ' 🎁 Glückwunsch 🎁',
        description: 'Glückwunsch, {winner}\n\nDu hast das [Giveaway]({msgLink}) gewonnen!\n\n**Preis:** *{prize}*\n\nEröffne ein Ticket, um deinen Gewinn beanspruchen zu können.',
        color: config.colors.BLUE
    },
};
