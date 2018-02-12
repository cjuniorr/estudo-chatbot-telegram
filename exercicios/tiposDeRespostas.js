const env = require('../.env')
const Telegraf = require ('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
     const name = ctx.update.message.from.first_name
    await ctx.reply(`Seja bem vindo, ${name}! 😎`)
    await ctx.replyWithHTML(`Testando mensagem <b>HTML</b> <i>de várias</i> <code> formas</code> <pre>possíveis</pre> <a href="https://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destando mensagem *Markdown*' 
    + '_de várias_ `formas` ```possíveis```'
    + ' [Google](https://www.google.com)')
})

bot.startPolling()