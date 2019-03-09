const express = require('express');
const bodyParser = require("body-parser");
const route = require('./routes/api_routes');

// init App
const app = express();

// static display of UI pages
app.use(express.static(__dirname + '/UI'))

// heroku Port
const port = process.env.PORT || 3000

// body Parser middleware
app.use(bodyParser.json());

app.use('/', route);

app.listen(port, () => {
    console.log(`Strated up at port ${port}`);
});

module.exports = app;