const env = require('../.env')
const Telegraf = require ('telegraf')
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)


const tecladoTeste = Markup.keyboard([
    ['tecla 1', 'tecla 2', 'tecla 3'],
    ['a', 'b', 'c'],
    ['teste de teclado']
]).resize().extra()

bot.start(async ctx => {
    await ctx.reply(`Bem vindo, ${ctx.update.message.from.first_name}!`)
    await ctx.reply(`QUal bebida você prefere?`, 
        Markup.keyboard(['Coca', 'Pepsi']).resize().oneTime().extra())
})

bot.hears(['Coca', 'Pepsi'], async ctx => {
    await ctx.reply(`Nossa! Eu também gosto de ${ctx.match}`)
    await ctx.reply(`Qual a sua carne predileta?`, tecladoTeste)
})

bot.hears('tecla 1', ctx => ctx.reply('A minha predileta também'))
bot.hears('teste de teclado', ctx => ctx.reply('Parabéns'))
bot.on('text', ctx => ctx.reply('Legal!'))

bot.startPolling()