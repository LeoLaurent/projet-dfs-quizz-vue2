var express = require('express');
var router = express.Router();

router.use('/', require('./quizzPage'));
router.use('/', require('./createQuizz'));
router.use('/', require('./leaderboard'));


module.exports = router;
