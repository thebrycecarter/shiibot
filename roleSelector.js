const { TeamMember } = require("discord.js");
const roleVerify = require("./role-verification");

module.exports = client => {
    client.on('message', msg => {
        if(msg.channel.type == "dm"){
            if(msg.content === "1"){
                msg.author.send("Raider role requires officer approval. Officers have been notified. Pug role has been temporarily given.");
                client.guilds.cache.get('812571683432300595').members.cache.get(msg.author.id).roles.add('854274315725307945')
                return; 
            }else if(msg.content === "2"){
                msg.author.send("PvPer/Casual role requires officer approval. Officers have been notified. Pug role has been temporarily given.");
                client.guilds.cache.get('812571683432300595').members.cache.get(msg.author.id).roles.add('854274315725307945')
                return;
            }else if(msg.content === "3"){
                msg.author.send("Pug role given.");
                client.guilds.cache.get('812571683432300595').members.cache.get(msg.author.id).roles.add('854274315725307945')
                return;
            }else{
                msg.author.send("Invalid response, try again.");
                return;
            }
        }
    })
}