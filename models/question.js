const Mongoose = require('mongoose');
const Answer = require('answer');

const QuestionSchema = Mongoose.Schema({
    quizzId: String,
    title: String
});

module.exports = Mongoose.model('Question', QuestionSchema);