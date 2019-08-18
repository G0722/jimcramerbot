const SlackBot = require('slackbots');
const axios = require('axios')
const {token, name, pic} = require("./botconfig.json");
const channel = "daily-discussion"

// Create new bot
const bot = new SlackBot({
    token: token,
    name: name
});

// Bring bot online
bot.on('start', () => {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    const params = {
        icon_emoji: ':ant:'
    };
    console.log(bot.name+" is connected!")
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    //bot.postMessageToChannel(channel, "@Alan", pic);

    // define private group instead of 'private_group', where bot exist
    // bot.postMessageToGroup('private_group', 'meow!', params);
});

// Error handler
bot.on("error", err => {
  console.log(err);
});

// Message handler
bot.on("message", data => {
  if (data.type !== "message"){
    return;
  }
  handleMessage(data.text);
});

// Message response
function handleMessage(message){
  const params = {
    icon_emoji: ":duck:"
  }
  if(message.includes(" cramer")){
    bot.postMessageToChannel(channel, "BOOOOYEAHHHHH", pic);
  }
}
