const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config')
const axios = require('axios');

Asena.addCommand({ on: 'Hi', fromMe: false,onlyPm: true }, (async (message, match) => {
    await message.sendMessage(Config.TEXT), MessageType.text}));
