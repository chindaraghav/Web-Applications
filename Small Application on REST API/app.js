var express=require('express');
var app=express();
var home=require('./routes/home');
app.use(express.static('public'));
app.set('view engine','ejs');
app.listen(8888);
home(app);
