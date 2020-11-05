const express = require('express');
const router = express.Router();
const Quizz = require('../../models/quizz');
const Question = require('../../models/question');
const Answer = require('../../models/answer');
const Score = require('../../models/score');
const { calculateScore } = require('../../calculateScore');
const schema  = require('../../schema/schema');

router.post('/quizz/:idQuizz/answers', (req, res)=> {
    console.log('answers');
    Quizz.findById(req.params.idQuizz, (e, quizz) => {
        Question.find({quizzId: quizz.id}, (e2, questions) => {
            const ids_questions = [];
            for(q of questions) ids_questions.push(q.id);
            Answer.find({questionId: { "$in": ids_questions }}, (e3, answers) => {
                const ids_correct = [];
                for(a of answers){
                    if(a.correct) {
                        ids_correct.push(a.id);
                    }
                }
                let scoreCalc = calculateScore(req.body.answers, ids_correct);
                console.log(req.body.username);
                score = new Score({score: scoreCalc, username: req.body.username, quizzId: req.params.idQuizz});
                score.save();
                res.json({
                    score
                })
            });

        });
    });
});


module.exports = router;