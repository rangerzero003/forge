const Express = require('express');

const app = Express();
const port = process.env.PORT || 80;

app.route('/')
.get((request, response, next) => {
    response.send('Forge is up and running on Azure');
});

app.listen(port, () => {
    console.log('App started and listening on ' + port);
});