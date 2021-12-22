const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config')
const axios = require('axios');

Asena.addCommand({ on: 'text', fromMe: false,onlyPm: true }, (async (message, match) => {

    var blaah = await axios.get(Config.IMG, { responseType: 'arraybuffer' })

    let T1Julie = new RegExp('.')
    let T2Julie = new RegExp('a')
    let T3Julie = new RegExp('e')
    let T4Julie = new RegExp('i')
    let T5Julie = new RegExp('o')
    let T6Julie = new RegExp('u')

    if (T1Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(blaah.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (T2Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(blaah.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (T3Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(blaah.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (T4Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(blaah.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (T5Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(blaah.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
    else if (T6Julie.test(message.message)) {
        await message.sendMessage(Buffer.from(blaah.data), MessageType.image, {
        mimetype: Mimetype.png, caption: Config.TEXT})
        
    }
}));
