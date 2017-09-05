var a=[{list:"raghav"}];
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://raghav:raghav0604@ds127034.mlab.com:27034/raghavdb');
var scheme=mongoose.Schema({item:String});
var mod=mongoose.model('TODOS',scheme);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports=function(app)
{
    app.get('/',function(req,res){
        mod.find({},function (err,data) {
            if(err) throw err;
            res.render('index',{list:data});
        })
    });
    app.post('/',urlencodedParser,function(req,res)
    {
        a.push(req.body);
    });
};