const mongoose = require("mongoose");

const Question = mongoose.model("question", new mongoose.Schema({
    prompt: String,
    answer: String
}));

module.exports = Question;
