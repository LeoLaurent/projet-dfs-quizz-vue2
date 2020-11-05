function calculateScore(answers, ids_correct) {
    let score = 0;
    for (let qid in answers){
        if(ids_correct.indexOf(answers[qid]) !== -1) {
            score += 1;
        }
    }
    return score * 100 / ids_correct.length;
}

// {answers : {5fmescouilles: 5flareponse, 5f2emequestion: 5fladeuxziemerep} }

module.exports = {
    calculateScore: calculateScore,
};