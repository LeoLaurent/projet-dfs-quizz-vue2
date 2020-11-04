const Mongoose = require('mongoose');

const QuizzSchema = Mongoose.Schema({
    title: String,
    password: String,
    description: String
});

module.exports = Mongoose.model('Quizz', QuizzSchema);