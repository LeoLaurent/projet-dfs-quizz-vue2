const { calculateScore } = require('../calculateScore');

describe("Score", () => {
    test("calcul strict", () => {
        let answer = {
            1: 50,
            2: 40,
            3: 30,
            4: 10
        };
        let ids_correct = [13, 40, 30, 51];
        expect(calculateScore(answer, ids_correct)).toBe(50);
    });
});

