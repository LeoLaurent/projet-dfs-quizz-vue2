var express = require('express');
var router = express.Router();
var {stringify} = require('JSON');

var { query, mutation }  = require('../../schema/schema');

module.exports = function (router) {
    router.get('/quizz/:idQuizz/questions', (req, res)=> {
        var quizz = query.quizz(req.params.idQuizz);
        l = [];
        var question;
        for (question in quizz.questions){
            l.push(question.id)
        }
        res.json(stringify(l))
    })
};