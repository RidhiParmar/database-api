var mongoose =require('mongoose') 

var ud =mongoose.model('ud',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
})
module.exports = {ud}