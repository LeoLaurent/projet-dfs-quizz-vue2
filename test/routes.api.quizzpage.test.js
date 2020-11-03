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


test('GET /api/current/quizz/1/questions', (done) => {
    user
        .get('/api/current/contact/loutre/1')
        .expect(200)
        .expect(function(res) {
            expect(res.body).toMatchObject({
                //mettres les id
            })
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }
            done()
        })
});

test('GET')