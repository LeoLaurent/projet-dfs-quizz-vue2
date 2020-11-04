const express = require('express');
const router = express.Router();

const schema  = require('../../schema/schema');
console.log(schema);

router.get('/quizz/:idQuizz/questions', (req, res)=> {

    //let quizz = schema.RootQuery.quizz({id: req.params.idQuizz});
    console.log('recoucou');
    l = [];
    let question;
    for (question in quizz.questions){
        l.push(question.id)
    }
    res.json({
        quizz: quizz.title
    })
});
router.get('/', (req,res) => {
    console.log('coucou');
    res.json({title: 'coucou'})
})


module.exports = router;