const mongoose = require("mongoose");
const Question = require('./question').schema;

const Game = mongoose.model("game", new mongoose.Schema({
    userId: String,
    name: String,
    numberRounds: Number,
    shouldShowBonusQuestions: Boolean,
    shouldShowFinalQuestion: Boolean,
    shouldShowHalftimeQuestion: Boolean,
    finalQuestionMaxWager: Number,
    questions: [Question],
    bonusQuestions: [Question],
    finalQuestion: Question,
    halftimeQuestion: Question
}));

module.exports = Game;
