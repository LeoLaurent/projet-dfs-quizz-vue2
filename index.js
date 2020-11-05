const app = require('./app');

config = {
    baseUrl: "localhost",
    port: 4500
}


app.listen(config.port, () => {
    console.log('server is running at: ' + 'http://' + config.baseUrl + ':' + config.port);
});
