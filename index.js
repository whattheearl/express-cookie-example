const express = require('express');
const cookieParser = require('cookie-parser');

const {some_middleware_arrow, some_middleware_classic} = require('./helper');

const app = express();

// options default path / domain ect
const cookieParserOptions = {}
app.use(cookieParser(cookieParserOptions));

app.use(some_middleware_arrow);
app.use(some_middleware_classic);

// match all paths, set cookies / 200
app.get('**', (req,res) => {
    let cookieName = 'arrow';
    let cookieValue = 'arrowed!';
    res.cookie(cookieName, cookieValue)
    cookieName = 'classic';
    cookieValue = 'classic is ugly';
    res.cookie(cookieName, cookieValue);
    res.sendStatus(200)
});


app.listen(5000, () => {
    console.log('now listening on port 5000');
})