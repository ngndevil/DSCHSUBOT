const Discord = require("discord.js");
const config = require("./config.json");

var bot = new Discord.Client();

bot.on('ready', () => {
	console.log('Bot is online!');
});

// bot.on("guildMemberAdd", MemberAdd => {
//     MemberAdd.guild.channels.find("name", "general").send("Chào mày đã đến với server");
// });


bot.on('message', message => {	
    switch (message.content.toLowerCase()){ //auto reply
        case "now": //send date and time
            var today = new Date();
            var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            message.channel.send(date+' '+time);
            break;
        case "my avatar":
            message.reply(message.author.displayAvatarURL());
            break;
        
    }		
        
//     // if(`${message.author.tag}` != 'DSCBOT#9203'){
// 	//     message.channel.send(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
//     //     console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
//     // }
})

bot.login(config.token);
