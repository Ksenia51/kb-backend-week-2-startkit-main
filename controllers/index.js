const gameRouteController = require("./game");
const defaultRouteController = require("./default");
const mainRouteController = require("./main");
const voteRouteController = require("./vote");

module.exports = (
    gameRouteController,
    mainRouteController,
    defaultRouteController,
    voteRouteController
);