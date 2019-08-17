var SlackBot = require('slackbots');

// create a bot
// const envKey = process.env.TOKEN
var bot = new SlackBot({
    token: "xoxb-706011687892-731651638150-N1qqgaexgEqrQ7RNuOpw0nip", // Add a bot https://my.slack.com/services/new/bot and put the token
    name: "Mr. Jim Cramer the Mad Money Man"
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':ant:'
    };

    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot.postMessageToChannel('daily-discussion', "BOOOYAHHHHHH");

    // define existing username instead of 'user_name'
    bot.postMessageToUser('Anthony Ding', 'Anthony');

    // If you add a 'slackbot' property,
    // you will post to another user's slackbot channel instead of a direct message
    bot.postMessageToUser('Anthony Ding', 'ant ', { 'slackbot': true, icon_emoji: ':ant:' });

    // define private group instead of 'private_group', where bot exist
    // bot.postMessageToGroup('private_group', 'meow!', params);
});
