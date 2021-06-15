const Discord = require('discord.js')
const client = new Discord.Client({disableEveryone: false})

const config = require('./config.json')
const privateMessage = require('./private-message')
const welcome = require('./welcome')
const roleSelector = require('./roleSelector')
const roleVerify = require('./role-verification')

client.on('ready', () => {
    console.log('The client is ready.')

    privateMessage(client, 'ping', 'pong')
    welcome(client)
    roleSelector(client)
    roleVerify(client)
})

client.login(config.token)