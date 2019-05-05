import * as Http from 'http';

setInterval(function() {
    Http.get("https://ts-comm-chat-bot.herokuapp.com/");
}, 29 * 60 * 1000);