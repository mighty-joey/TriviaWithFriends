const mongoose = require("mongoose");
const Question = require('./question').schema;

const Game = mongoose.model("game", new mongoose.Schema({
    gameId: Number,
    gameName: String,
    roundsNumber: Number,
    userId: String,
    questions: [Question]
}));

module.exports = Game;
