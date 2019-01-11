var Express = require('express');
var gpp = require('./src/passport/index');
var auth = require('./src/auth/router');
var path = require('path');
var app = Express();


//Social auth
app.use('/auth', auth);
app.get('/', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, './client/index.html')));
});
//Server
app.listen(8000, () => {
    console.log('server started.');
})