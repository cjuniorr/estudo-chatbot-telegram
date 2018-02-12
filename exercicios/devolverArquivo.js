const env = require('../.env')
const Telegraf = require ('telegraf')
const axios = require('axios')
const bot = new Telegraf(env.token)

bot.on('voice', async ctx => {
    const id = ctx.update.message.voice.file_id
    console.log(`O id é: ${id}`)
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    console.log(res.data.result.file_path)
    ctx.replyWithVoice({ url: `${env.apiFileUrl}/${res.data.result.file_path}`})
})

bot.on('photo', async ctx => {
    const id = ctx.update.message.photo[0].file_id
    console.log(`O id é: ${id}`)
    const res = await axios.get(`${env.apiUrl}/getFile?file_id=${id}`)
    console.log(res.data.result.file_path)
    console.log(`${env.apiFileUrl}/${res.data.result.file_path}`)
    ctx.replyWithPhoto({ url: `${env.apiFileUrl}/${res.data.result.file_path}` })
})

bot.startPolling()