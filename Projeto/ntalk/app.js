var express = require('express')
    , load = require('express-load')
    , routes = require('./routes')
    , app = express()
;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/usuarios', routes.user.index);

load('models')
    .then('controllers')
    .then('routes')
    .then(app);


app.listen(3000, function () {
    console.log("NTalk no ar!");
});