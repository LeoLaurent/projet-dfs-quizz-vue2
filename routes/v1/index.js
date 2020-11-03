var express = require('express');
var router = express.Router();

module.exports = router;

router.use('/', require('./createQuizz'));
router.use('/', require('./leaderboard'));
router.use('/', require('./createQuizz'));