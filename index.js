const TelegramBot = require("node-telegram-bot-api");
// replace the value below with the Telegram token you receive from @BotFather
const token = "2129797929:AAENItln2XfAFCR6tFzlrgfC0Izg3LOnPwA";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "sssssss");
});
bot.onText(/\/newcommand/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: {
      resize_keyboard: true,
      one_time_keyboard: true,
      inline_keyboard: [
        [
          {
            text: "Development",
            callback_data: "development",
          },
          {
            text: "Lifestyle",
            callback_data: "lifestyle",
          },
          {
            text: "Other",
            callback_data: "other",
          },
        ],
      ],
    },
  };
  //   const chatId = msg.chat.id;
  //   const resp = match[1]; // the captured "whatever"

  //   // send back the matched "whatever" to the chat
  //   bot.sendMessage(chatId, "sssssss");
});
const requestPhoneKeyboard = {
  reply_markup: {
    one_time_keyboard: true,
    inline_keyboard: [
      [
        [
          {
            text: "Development",
            callback_data: "development",
          },
          {
            text: "Lifestyle",
            callback_data: "lifestyle",
          },
          {
            text: "Other",
            callback_data: "other",
          },
        ],
      ],
    ],
  },
};

// Listener (handler) for retrieving phone number
bot.onText(/\/phone/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Can we get access to your phone number?",
    requestPhoneKeyboard
  );
  //   bot.sendMessage(msg.chat.id, "I'm a test robot", opts);
});
bot.onText(/\/bogo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, "sssssss");
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message hehehe");
});
