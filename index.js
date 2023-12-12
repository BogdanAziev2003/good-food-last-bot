const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(
    chatId,
    `Бот переехал!!!
Текущий адресс: @goodfood_bsln_bot`,
    {
      reply_markup: {
        remove_keyboard: true,
      },
    }
  );
});
