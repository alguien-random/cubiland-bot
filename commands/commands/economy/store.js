const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../config');
const db = require('quick.db');

module.exports = {
    config: {
        name: "store",
        noalias: [""],
        category: "economy",
        description: "Shows list of items",
        usage: " ",
        accessableby: "everyone"
    },
    run: async (bot, message, args) => {
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let embed = new MessageEmbed()
            .setDescription(`**Ranks**\n\nVip: 17000 Coins [${prefix}buy/${prefix}sell Vip]\n Vip+: 23500 Coins [${prefix}buy/${prefix}sell Vip +]\nMega: 30500 Coins [${prefix}buy/${prefix}sell Mega]\nMega+: 45000 Coins [${prefix}buy/${prefix}sell Mega +]\n Ultra: 55000 Coins [${prefix}buy/${prefix}sell Ultra]\n Ultra+: 70000 Coins [${prefix}buy/${prefix}sell Ultra +]`)
            .setColor("GREEN")
        message.channel.send(embed)
    }
}