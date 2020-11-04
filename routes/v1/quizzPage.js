const express = require('express');
const router = express.Router();
const Quizz = require('../../models/quizz');
const Question = require('../../models/question');
const Answer = require('../../models/answer');

const schema  = require('../../schema/schema');

router.post('/quizz/:idQuizz/answers', (req, res)=> {
    let score = 0, q, i;
    console.log('answers');
    Quizz.findById(req.params.idQuizz, (e, quizz) => {
        Question.find({quizzId: quizz.id}, (e2, questions) => {
            const ids_questions = [];
            for(q of questions) ids_questions.push(q.id);
            Answer.find({questionId: { "$in": ids_questions }}, (e3, answers) => {
                const ids_answers = [];
                for(a of answers){
                    if(a.correct)
                        ids_answers.push(a.id);
                }

                console.log(req.body);
                for (let qid in req.body.answers){
                    if(ids_answers.indexOf(req.body.answers[qid]) !== -1) score += 1;
                }
                score = score * 100 / questions.length;

                res.json({
                    score
                })
            });

        });
    });
});


module.exports = router;