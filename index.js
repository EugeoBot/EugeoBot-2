"use strict";

const TeleBot = require("telebot");
const dotenv = require("dotenv");
const { User } = require("./booking");
dotenv.config();
const { manager } = require("./train");
const bot = new TeleBot(process.env.BOT_TOKEN);
// Load the model. Then connect to the Telegram bot

const userDatabase = {};
User.bot = bot;
(async () => {
  manager.load();

  bot.on("text", async function (msg) {
    let response;

    let chatid = msg.chat.id;
    if (!(chatid in userDatabase)) {
      userDatabase[chatid] = new User(manager, "tg", chatid);
    }
    if (msg.text === "/start") {
      await msg.reply.text("Hello! My name's Eugeo. How can I help you?");
    } else {
      response = await manager.process("en", msg.text);
      response = await userDatabase[chatid].onIntent(response);
      await msg.reply.text(response.answer);
    }
  });
  bot.start();
})();
