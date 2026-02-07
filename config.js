require('dotenv').config();
const { ActivityType } = require("discord.js");

const config = {
    bot: {
        token: process.env.BOT_TOKEN,
        images: {
            logo: "https://media.discordapp.net/attachments/1467903816874852402/1469665841510351027/Logo_Animation.gif?ex=69887c79&is=69872af9&hm=4bf9996f42dfbec309ee21b721fe32a6da75299ff6ef4a73aa33fe81aa8852e9&=", // Logo des Bots
            transparentlogo: "https://media.discordapp.net/attachments/1467903816874852402/1469665837001740433/3D_logo.png?ex=69887c78&is=69872af8&hm=930d790bd580d5e78d436ea7068a1facdaec9e1137bed49781051e157a67b36f&=&format=webp&quality=lossless&width=856&height=856",
            banner: "https://media.discordapp.net/attachments/1467903816874852402/1469665837282496626/Banner_Animation.gif?ex=69887c78&is=69872af8&hm=7e17926402762496c2f02b67b27f3320c723def242d3888c0e6033f24e2169f8&=", // Banner des Bots
            welcomeBanner: "https://media.discordapp.net/attachments/1467903816874852402/1469665837282496626/Banner_Animation.gif?ex=69887c78&is=69872af8&hm=7e17926402762496c2f02b67b27f3320c723def242d3888c0e6033f24e2169f8&=",
            leaveBanner: "https://media.discordapp.net/attachments/1467903816874852402/1469665837282496626/Banner_Animation.gif?ex=69887c78&is=69872af8&hm=7e17926402762496c2f02b67b27f3320c723def242d3888c0e6033f24e2169f8&=",
            ticketBanner: "https://media.discordapp.net/attachments/1467903816874852402/1469665837282496626/Banner_Animation.gif?ex=69887c78&is=69872af8&hm=7e17926402762496c2f02b67b27f3320c723def242d3888c0e6033f24e2169f8&="
        },
        guildId: process.env.GUILD_ID, // ID des Servers
        docsLink: 'https://docs.berni.tech'
    },
    statuses: [ // Verfügbar: Playing, Streaming, Listening, Watching, Competing
        {
            name: "CalienteCl",
            type: ActivityType.Listening // Aktive Statusart
        },
        {
            name: ".gg/calientecl",
            type: ActivityType.Watching // Aktive Statusart
        },
        {
            name: "made by c11ro",
            type: ActivityType.Playing // Aktive Statusart
        }
    ],
    roles: {
        admin: "1441852873074806886 , 1441852873968193546 ", // Rolle für Administratoren
        teamverwaltung: "1441852868259872929 , 1441852869203464242 ", // Rolle für Teamverwaltung
        team: "1441852913923264604", // Rolle für Teammitglieder
        verify: "123", // Rolle für Verifizierung
        autoJoinRole: "123", // Automatische Beitrittsrollen ID
        teamlisteRoles: [ // Rollen die in der Teamliste angezeigt werden
            "1441852857426116670", // Projektinhaber
            "1441852858520703086", // STV. Projektinhaber
            "1441852860177317928", // Projektleitung
            "1441852861070966936", // STV. Projektleitung
            "1441852865613267095",  // Management
            "1441852866426830938",  // STV. Management
            "1441852868259872929",  // Teamleitung
            "1441852869203464242",  // STV. Teamleitung
            "1441852870138789899",  // Superadmin
            "1441852873074806886" , // Administrator
            "1441852873968193546" , // Test Administrator
            "1441852875054645308" , // Moderator 3
            "1441852876417667286" , // Moderator 2
            "1441852877537542454" , // Moderator 1
            "1441852878519275621" , // Test Moderator 
            "1441852879710191646" , // Supportleitung
            "1441852880498982973" , // Support 3
            "1441852881102831640" , // Support 2
            "1441852882222714940" , // Supporter 1
            "1441852883170492456" , // Test Supporter
            "1441852886006104198" , // Analysten Leitung
            "1441852886790312038" , // Analyst
            "1441852887796813976" , // Test Analyst
        ]
    },
    icons: {
        umfrage1: "✅", // Emoji für Umfrage 1
        umfrage2: "❌", // Emoji für Umfrage 2
        boostemoji: "♥️", // Emoji für Booster
        ticketClose: "🗑️", // Emoji für Ticket schließen
        ticketweitergeben: "❌", // Emoji für Ticket weitergeben
        transcript: "🗒️", // Emoji für Transkripte
        claim: "✅", // Emoji für Claim
        yes: "✅",
        no: "❌"
    },
    settings: {
        color: "#D4AF37", // Hauptfarbe des Bots (für Embeds)
        supportPing: "true", // Support Ping aktivieren
        selfverify: "true", // Selbstverifizierung aktivieren
        autoJoinRole: "false", // Ob der User automatisch eine Rolle beim Joinen bekommt
        enableSafetyKick: "false",
        minAccountAge: 7, // Minimales Kontoalter in Tagen
        actionOnYoungAccount: "ban", // Aktion bei jungen Konten: "ban" oder "kick"
        teamlisteRefresh: 1 // Refresh Intervall der Teamliste in Minuten
    },
    ticket: {
        support: {
            name: "Support Ticket", // Name des Support-Tickets
            desc: "Erstelle ein Support Ticket, wenn du Hilfe benötigst", // Beschreibung des Support-Tickets
            channelName: "support", // Kanalname für Support
            categoryId: "1441853144568041644", // ID für die Support-Kategorie
            roles: ["1441852913923264604"], // Rolle für Suppot
            icon: "📂" // Emoji für Support
        },
        Teambewerbung: {
            name: "Teambewerbung Ticket",
            desc: "Erstelle ein Teambewerbungs Ticket, wenn du ins Team möchtest",
            channelName: "Team Ticket",
            categoryId: "1441853147462107266",
            roles: ["1441852868259872929 , 1441852869203464242"],
            icon: "👤"
        },
        creator: {
            name: "Creator Ticket",
            desc: "Erstelle ein Creator Ticket, um Creator zu werden",
            channelName: "Creator Ticket",
            categoryId: "1441853151371333685",
            roles: ["1469719605504377015"], // Sen. Developer, Jun. Developer
            icon: "📹"
        },
        highteam: {
            name: "HighTeam Ticket",
            desc: "Erstelle ein HighTean Ticket, um mit dem HighTeam kontakt aufzunehmen",
            channelName: "HighTeam Ticket",
            categoryId: "1441853154088980681",
            roles: ["1469719810152595569"],
            icon: "👑"
        },
        spenden: {
            name: "Spenden Ticket",
            desc: "Erstelle ein Spenden Ticket, um etwas zu kaufen",
            channelName: "Spenden Ticket",
            categoryId: "1441853157855592468",
            roles: ["1441852857426116670"],
            icon: "💵"
        },
        partner: {
            name: "Partner Ticket",
            desc: "Erstelle ein Partner Ticket, um eine Partnerschaft zu beantragen",
            channelName: "Partner Ticket",
            categoryId: "1447931417513427006",
            roles: ["1441852865613267095"],
            icon: "🫱🏽‍🫲🏽"
        }
    },
    reactionRoles: {
        roles: {
            role1: {
                name: "roleName1", // Name der Rolle 1
                desc: "Wähle die Rolle, um ...", // Beschreibung der Rolle 1
                id: "reactionRole1Id", // ID der Rolle 1
                emoji: "🤝" // Emoji für Rolle 1
            },
            role2: {
                name: "roleName2",
                desc: "Wähle die Rolle, um ...",
                id: "reactionRole2Id",
                emoji: "🤝"
            },
            role3: {
                name: "roleName3",
                desc: "Wähle die Rolle, um ...",
                id: "reactionRole3Id",
                emoji: "🤝"
            }
        },
    },
    texte: {
        footer: "2026 - Caliente Crimelife", // Fußzeile für den Bot
        invalidRole: "Du kannst diesen Command nicht nutzen", // Nachricht bei ungültiger Rolle
        successSentMessage: "Erfolgreich gesendet", // Bestätigung, dass die Nachricht gesendet wurde
        verifyMsg: "Du bist nun erfolgreich Verifiziert!" // Nachricht bei erfolgreicher Verifizierung
    },
    channels: {
        // Welcome
        welcome: "1465668359193497723", // Kanal-ID für Begrüßung
        // Boost
        boost: "1441853210552827954", // Kanal-ID für Boost-Nachrichten
        boostLog: "1442105574492995686", // Kanal-ID für Boost-Logs
        // Support Ping
        supportVoice: "123", // Kanal-ID für Sprachunterstützung
        supportMessage: "123", // Kanal-ID für Support-Nachrichten
        // Feedback
        feedbackChannel: "1441853339544322118", // Kanal-ID für Feedback
        // Ticket
        ticketLog: "1442106087682605087" // Kanal-ID für Ticket-Logs
    },
    // Giveaway
    giveaway: {
        defaultColor: '#FF0000',
        reaction: '🎉',
    },
    colors: {
        RED: '#FF0000',
        ORANGE: '#FFAA00',
        GREEN: '#00FF0F',
        BLUE: '#00B2FF',
    }
};

module.exports = config;