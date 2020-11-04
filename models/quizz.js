const Mongoose = require('mongoose');

const Question = require('question');
const Score = require('score');

const QuizzSchema = Mongoose.Schema({
    title: String,
    password: String,
    description: String,
    questions: [Question],
    scores: [Score]
});

module.exports = Mongoose.model('Quizz', QuizzSchema);