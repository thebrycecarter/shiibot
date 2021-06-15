module.exports = client => {
    const verifyChannel = client.channels.cache.find(channel => channel.name === 'new-channel')
    var denied = false
    var accepted = false
    client.on('message', msgRole => {
        console.log(msgRole)
        if(msgRole.channel.type == "dm"){
            denied = false
            accepted = false
            if(msgRole.content === "1"){
                verifyChannel.send("@here " + msgRole.author.username + " is requesting raider role. Give? (y/n) \nThey have been temporarily given pug role.")
                client.on('message', messageVerify => {
                    if(messageVerify.channel.name === "new-channel" && denied == false && accepted == false){
                        if(messageVerify.content.toLowerCase() === "y") {
                            if(accepted == false){
                                client.guilds.cache.get('854219360972308531').members.cache.get(msgRole.author.id).roles.add('854274252340199465')
                                verifyChannel.send("Confirmed. " + msgRole.author.username + " has raider role now. Further changes must be done manually.")
                            }
                            accepted = true
                        }else if(messageVerify.content.toLowerCase() === "n") {
                            if(denied == false && accepted == false){
                                verifyChannel.send("Raider role denied. " + msgRole.author.username + " will keep their pug role for now. Further changes must be done manually.")
                            }
                            denied = true
                        }
                    };
                });
            }else if(msgRole.content === "2"){
                verifyChannel.send("@here " + msgRole.author.username + " is requesting PvPer/Casual role. Give? (y/n)\nThey have been temporarily given pug role.")
                client.on('message', messageVerify => {
                    if(messageVerify.channel.name === "new-channel" && denied == false && accepted == false){
                        if(messageVerify.content.toLowerCase() === "y") {
                            if(accepted == false){
                                client.guilds.cache.get('854219360972308531').members.cache.get(msgRole.author.id).roles.add('854274283861442601')
                                verifyChannel.send("Confirmed. " + msgRole.author.username + " has PvPer/casual role now. Further changes must be done manually.")
                            }
                            accepted = true
                            return;
                        }else if(messageVerify.content.toLowerCase() === "n") {
                            if(denied == false && accepted == false){
                                verifyChannel.send("PvPer/Casual role denied. " + msgRole.author.username + " will keep their pug role for now. Further changes must be done manually.")
                            }
                            denied = true
                            return;
                        }
                        return;
                    };
                    return;
                });
                return;
            }
        }
    });
}