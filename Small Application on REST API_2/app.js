const express=require('express');
const home=require('./routes/home');
const table=require('./routes/table');
const app=express();
app.listen(process.env.port || 8888);
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(home);
app.use(table);