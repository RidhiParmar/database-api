
var mongoose =require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/sdata');
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
// var newstud = new stud({
//     Name:'Anami',
//     age:21,
//     completed:false
// })

// newstud.save().then((data)=>
// {
//   console.log('data save is:',data)
// },(e)=>
// {
// console.log('unable to save the data')
// })

var otherstd = new stud(
    {
        Name:'Radha',
        age:20
    }
)

otherstd.save().then((data)=>
{
  console.log('data save is:',data)
},(e)=>
{
console.log('unable to save the data',e)
})
var ud =mongoose.model('ud',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
})
var newud = new ud({
    email:' riddhi.parmar@kevit.io '
})

newud.save().then((data)=>
{
  console.log('data save is:',data)
},(e)=>
{
console.log('unable to save the data')
})