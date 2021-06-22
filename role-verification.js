module.exports = client => {
    const verifyChannel = client.channels.cache.find(channel => channel.name === 'officer-chat')
    var denied = false
    var accepted = false
    var _newRequester
    var _requestedRole
    var _previousRequester

    client.on('message', msgRole => {
        if(_previousRequester != msgRole.author && msgRole.channel.type == 'dm'){
            denied = false
            accepted = false
        }
        if(msgRole.channel.type == "dm" && accepted == false && denied == false){
            if(msgRole.content === "1"){
                _requestedRole = 'raider'
                _newRequester = msgRole.author
                verifyChannel.send("@here " + msgRole.author.username + " is requesting raider role. Give? **(y/n)** \nThey have been temporarily given pug role.")
                console.log('requesting role ' + _newRequester.username)
                _previousRequester = msgRole.author
            }else if(msgRole.content === "2"){
                _requestedRole = 'casual'
                _newRequester = msgRole.author
                verifyChannel.send("@here " + msgRole.author.username + " is requesting PvPer/Casual role. Give? **(y/n)**\nThey have been temporarily given pug role.")
                console.log('requesting role ' + _newRequester.username)
                _previousRequester = msgRole.author
            }
        }
    })
    client.on('message', messageVerify => {
        if(_requestedRole == 'raider'){
            if(messageVerify.channel.name === "officer-chat"){
                if(messageVerify.content.toLowerCase() === "y") {
                    let role = messageVerify.guild.roles.cache.find(r => r.name === "Raider");
                    let requester = client.guilds.cache.get('812571683432300595').members.cache.get(_newRequester.id)
                    requester.roles.add(role)
                    console.log('giving role to ' + _newRequester.username)
                    verifyChannel.send("Confirmed. " + _newRequester.username + " has raider role now. Further changes must be done manually.")
                    accepted = true
                }else if(messageVerify.content.toLowerCase() === "n") {
                    verifyChannel.send("Raider role denied. " + _newRequester.username + " will keep their pug role for now. Further changes must be done manually.")
                    denied = true
                }
            };
        }
    });
    client.on('message', messageVerify => {
        if(_requestedRole == 'casual'){
            if(messageVerify.channel.name === "officer-chat"){
                if(messageVerify.content.toLowerCase() === "y") {
                    if(accepted == false){
                        let role = messageVerify.guild.roles.cache.get('812584936434827334');
                        let requester = client.guilds.cache.get('812571683432300595').members.cache.get(_newRequester.id)
                        requester.roles.add(role)
                        console.log('giving role to ' + _newRequester.username)
                        verifyChannel.send("Confirmed. " + _newRequester.username + " has PvPer/Casual role now. Further changes must be done manually.")
                        accepted = true
                    }
                }else if(messageVerify.content.toLowerCase() === "n") {
                    if(denied == false && accepted == false){
                        verifyChannel.send("PvPer/Casual role denied. " + _newRequester.username + " will keep their pug role for now. Further changes must be done manually.")
                        denied = true
                    }
                }
            };
        }
    });
    client.on('message', officer => {
        if(officer.channel.name === 'officer-chat'){
            console.log(officer.author.username)
            console.log(officer.content)
        }
    });
}