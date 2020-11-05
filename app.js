const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser')


// allow cross-origin requests
app.use(cors());
app.use( bodyParser.json() );
(async () => {
    try {
        await mongoose.connect("mongodb+srv://squizz:root@cluster.zb4we.mongodb.net/squizz?retryWrites=true&w=majority");
    } catch (err) {
        console.log('error: ' + err)
    }
})();
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

api = require('./routes');
app.use('/api', api);

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


module.exports = app;