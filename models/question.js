const Mongoose = require('mongoose');

const QuestionSchema = Mongoose.Schema({
    quizzId: String,
    title: String
});

module.exports = Mongoose.model('Question', QuestionSchema);