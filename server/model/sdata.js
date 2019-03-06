var mongoose =require('mongoose');

var stud =mongoose.model('stud',{
    Name:{
        type:String,
        required:true,
        minlength:3,
        trim:true
    },
    age:{
        type:Number,
        required:true,
        min:18
    },
    completed:
    {
        type:Boolean,
        default:false
    }
})

module.exports={stud}