const Mongoose = require('mongoose');

const AnswerSchema = Mongoose.Schema({
    text: String,
    correct: Boolean
});

module.exports = Mongoose.model('Answer', AnswerSchema);