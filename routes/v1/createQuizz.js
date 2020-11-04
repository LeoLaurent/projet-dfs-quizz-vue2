var express = require('express');
var router = express.Router();

module.exports = function (router) {
    //router.get(blabla){}
    router.post('/saveQuiz', function (req, res) {
        console.log(req, "saved")
    })
};