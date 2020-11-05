const request = require('supertest');
const bodyParser = require('body-parser');

const app = require('../app');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let user;
let server;

beforeAll(async () => {
    user = await request.agent(app);
    server = await app.listen(4000);
});

afterAll(async () => {
    await server.close();
});


test('POST /quizz/:idQuizz/answers', function (done) {
    var body = {
            answers: {
                '5fa1fe4a635171317b40559d': '5fa1fec2635171317b4055a0',
                '5fa1fe58635171317b40559e': '5fa1feda635171317b4055a1'
            },
            username: 'allo'
        };
    return user
        .post('/api/current/quizz/5fa1b5af247894f77e7e925a/questions')
        .send(body)
        .expect(200)
        .then(res => {
            console.log(JSON.stringify(res.body));
            expect(JSON.stringify(res.body).score.score).toBe(50);
            expect(JSON.stringify(res.body).score.username).toBe('allo')
        })
        .catch((err, res) => {
            if (err) {
                return done(err);
            }
            done()
        })
});