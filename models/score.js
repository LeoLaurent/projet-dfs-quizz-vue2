const Mongoose = require('mongoose');

const ScoreSchema = Mongoose.Schema({
    quizzId: String,
    username: String,
    score: Number,
});

module.exports = Mongoose.model('Score', ScoreSchema);