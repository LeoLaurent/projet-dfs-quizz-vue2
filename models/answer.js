const Mongoose = require('mongoose');

const AnswerSchema = Mongoose.Schema({
    questionId: String,
    text: String,
    correct: Boolean
});

module.exports = Mongoose.model('Answer', AnswerSchema);