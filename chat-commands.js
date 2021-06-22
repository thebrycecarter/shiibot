module.exports = client => {
    client.on('message', message => {
        if(message.content.toLowerCase() == '!shiibot'){
            message.channel.send({embed: {
                color: 3447003,
                title: "Current Shiibot Commands",
                fields: [
                    { name: "Command           ", value: "!help\n!raidtime", inline: true },
                    { name: "Use", value: "Lists commands\nResponds with guild raid times", inline: true }
                ]
            }
        });
        if(message.content.toLowerCase() == '!raidtime'){
            message.channel.send('Guild raids are always at **5:30 pm server time** (Pacific Standard). Raids are *usually* tuesdays and thursdays, but always double check.')
        }
    };
});
}