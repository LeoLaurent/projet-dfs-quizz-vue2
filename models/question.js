const Mongoose = require('mongoose');
const Answer = require('answer');

const QuestionSchema = Mongoose.Schema({
    title: String,
    answers: [Answer],
});

module.exports = Mongoose.model('Question', QuestionSchema);