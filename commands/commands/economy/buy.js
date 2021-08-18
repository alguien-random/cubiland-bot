const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const { PREFIX } = require('../../config');

module.exports = {
    config: {
        name: "buy",
        noalias: [""],
        category: "economy",
        description: "buys items",
        usage: "[item]",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let user = message.author;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`❌ You need 17000 coins to buy Vip`);


        if (args.join(' ').toLocaleLowerCase() == 'Vip') {
            if (author < 17000) return message.channel.send(Embed)

            await db.fetch(`Vip_${user.id}`);
            db.set(`Vip_${user.id}`, true)

            let Embed2 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Vip For 17000 Coins`);

            db.subtract(`money_${user.id}`, 23500)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'Vip+') {
            let Embed3 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 23500 coins to buy Vip+`);

            if (author < 23500) return message.channel.send(Embed3)

            await db.fetch(`Vip+_${user.id}`)
            db.add(`Vip+_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Vip+ For 23500 Coins`);

            db.subtract(`money_${user.id}`, 30500)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'Mega') {
            let Embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 30500 coins to purchase Mega`);

            if (author < 30500) return message.channel.send(Embed5)

            await db.fetch(`mega_${user.id}`)
            db.add(`mega_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Mega for 30500 Coins`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 45000)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'Mega+') {
            let Embed7 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`❌ You need 45000 coins to purchase Mega+`);

            if (author < 45000) return message.channel.send(Embed7)

            await db.fetch(`Mega+_${user.id}`)
            db.add(`Mega+_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`✅ Purchased Mega+ for 45000 Coins`);

            db.subtract(`money_${user.id}`, 45000)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor("GREEN")
                    .setDescription(`❌ Enter An Item To Buy!\nType ${prefix}store To See List Of Items!`)
                return message.channel.send(embed9)
            }
        }
    }
}