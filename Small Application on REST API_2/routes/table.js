const express=require('express');
var db=require('../model/db');
const router=express.Router();
table=[{name:"raghav",id:"1233"},{name:"raghav",id:"1233"},{name:"Vansh",id:"bc"}];
router.get('/portfolio',getIt);

function getIt(req,res)
{
    db.find({},function (err,data) {
        if(err) throw err;
        res.render('table',{data:data});
    });
}

module.exports=router;