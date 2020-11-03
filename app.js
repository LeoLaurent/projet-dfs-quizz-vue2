const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect("mongodb+srv://squizz:root@cluster.zb4we.mongodb.net/squizz?retryWrites=true&w=majority");
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


module.exports = app;