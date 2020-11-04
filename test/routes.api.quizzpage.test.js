const request = require('supertest');

const app = require('../app');

let user;
let server;

beforeAll(async () => {
    user = await request.agent(app);
    server = await app.listen(4000);
});

afterAll(async () => {
    await server.close();
});


test('GET /api/current/quizz/5fa1b5af247894f77e7e925a/questions', (done) => {
    user
        .get('/api/current/quizz/5fa1b5af247894f77e7e925a/questions')
        .expect(200)
        .expect(function(res) {
            expect(res.body).toMatchObject({
                quizz: "Quizz 1"
            })
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done()
        })
});