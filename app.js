"use strict";
exports.__esModule = true;
var Http = require("http");
setInterval(function () {
    Http.get("https://ts-comm-chat-bot.herokuapp.com/");
}, 300000);
