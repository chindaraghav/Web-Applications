const express=require('express');
var list=[{name:"giig",id:"haah"}];
var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var router=express.Router();
var db=require('../model/db');
router.get('/',function (req,res){
res.render('home');
});
router.post('/',urlencodedParser,function(req,res)
{
    db.create(req.body,function(){
        console.log("Done!");
        res.json();
    });
});

module.exports=router;