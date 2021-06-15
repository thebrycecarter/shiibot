module.exports = client => {

    client.on('guildMemberAdd', member => {
        console.log(member)
        
        member.send('Welcome to the Dusk til Dawn discord server! What is your role here?')
        member.send({embed: {
            color: 3447003,
            title: "Role Selection",
            fields: [
                { name: "#", value: "1\n2\n3\n4", inline: true },
                { name: "Role", value: "Raider\nPvPer/Casual\nPug\nFriend", inline: true }
            ]
        }
    })
})}