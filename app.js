var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res)
    {
        res.send('<h1>Go to localhost:3000/double/:number<h1>');
    }
);

app.get('/double/:number', function(req,res)
    {
        var number = req.params.number;
        res.render('index', {number: number});
    }
);

app.listen(3000, function()
    {
        console.log('started server');
    }
);