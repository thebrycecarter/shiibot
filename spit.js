module.exports = client => {
    var i = 5

    client.on('message', spitCheck => {
        if(spitCheck.author.id === "158300686793048065" && i%10 == 0){
            spitCheck.channel.send('/spit Ispitonu')
            i++
        }else if(spitCheck.author.id === '158300686793048065'){
            i++
        }
    })

}