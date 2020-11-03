const Mongoose = require('mongoose');

const ScoreSchema = Mongoose.Schema({
    username: String,
    score: Number,
});

module.exports = Mongoose.model('Score', ScoreSchema);