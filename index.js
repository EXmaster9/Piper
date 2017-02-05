var Discord = require("discord.js");
var client = new Discord.Client();

var lastid;
var clientenabled = true;

function sGeneral(meesg) {
    client.guilds.forEach(x => x.defaultChannel.sendMessage(meesg));
}

function sGeneralTG(meesg) {
    client.guilds.get('271815925890678786').defaultChannel.sendMessage(meesg);
}
client.on("message", msg => {
    if (msg.content.startsWith(";enable")) {
        msg.channel.sendMessage("Enabling functions...");
        clientenabled = true;
    }
    if (msg.content.startsWith(";disable")) {
        msg.channel.sendMessage("Disabling functions...");
        clientenabled = false;
    }
    if (clientenabled === true) {
        if (msg.content.startsWith(";ping")) {
            msg.channel.sendMessage("pong! (" + client.ping + "ms)");
        }
        if (msg.content.startsWith(";pong")) {
            msg.channel.sendMessage("ping! (" + client.ping + "ms)");
        }
        if (msg.content.startsWith("piper, speak")) {
            msg.channel.sendMessage("bark. was that good enough?");
        }
        if (msg.content.startsWith("piper, who has the worst haircut?")) {
            msg.channel.sendMessage("calculating... \nIt is a tie between Jude and Jakob!");
        }
        if (msg.content.startsWith(";random")) {
            msg.channel.sendMessage(Math.round(Math.random() * 100));
        }
        if (msg.content.startsWith(";notify") && msg.author.username == "EliDaC?der" || msg.content.startsWith(";notify") && msg.author.username == "ChiLing12") {
            client.users.forEach(x => x.sendMessage("Hi! I'm Piper. Find me on Chief of Games and The Gamers!"));
        }
        if (msg.channel.type == 'dm' && msg.author.username == 'EliDaC?der') {
            sGeneralTG(msg.content);
        }
        if (msg.content.startsWith(";js")) {
            let args = msg.content.split(" ").slice(1);
            try { msg.channel.sendMessage(":arrow_right:  `" + eval(args.join(' ')) + "`"); } catch (err) { msg.channel.sendMessage(":x:  `" + err + "`"); }
        }
        if (msg.content.startsWith(";reload")) {
            process.exit();
        }
        if (msg.content.startsWith(";reload")) {
            process.exit();
        }
        if (msg.content.startsWith(";shutdown")) {
            client.destroy();
        }
    }
    //Don't mind this other stuff:
    if (msg.channel.type == 'text') {
        console.log("{on #" + msg.channel.name + " of " + msg.member.guild.name + "} " + msg.author.username + ": " + msg.content);
    }
    if (msg.channel.type == 'dm') {
        console.log("{Direct Message} " + msg.author.username + ": " + msg.content);
    }
    if (msg.channel.type == 'dm' && msg.author.username !== "Piper") {
        client.users.get('130875094133112833').sendMessage("{Direct Message} <@" + msg.author.id + ">: " + msg.content);
    }
});

client.on('ready', () => {
    console.log('I am ready!');
    sGeneral('I am online or was just reloaded. :smile:');
    var TG = client.guilds.get('271815925890678786')
    var CoG = client.guilds.get('260522156633358346')
});

client.login("MjcyNTUyMzMwOTk2NzQ0MTky.C2Wptw.dYqjnhcKnHtXQS0hOs2alqp1ed4");