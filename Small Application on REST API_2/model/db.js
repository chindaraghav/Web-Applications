var mongoose=require('mongoose');

mongoose.connect('mongodb://raghav:raghav3896@ds127044.mlab.com:27044/rv');

var scheme=mongoose.Schema({
    name:{
        type:String,
        required:[true,"The name is required boy"]
    },
    id:{
        type:String
    }
});
var mode=mongoose.model('TABLE',scheme);

module.exports=mode;