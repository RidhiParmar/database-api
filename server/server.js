const express=require('express');
const bodyparse =require('body-parser')


const {mongoose}=require('./db/datacon')
const {ud} =require('./model/umodel')
const {sdata} =require('./model/sdata')


var app =express();
app.use(bodyparse.json())

app.post('/Udata',(req,res)=>
{
   var udata = new ud({
           email:req.body.email
       })
       udata.save().then((data)=>
       {
            res.send(data)
       },(e)=>
       {
           res.status(400).send(e);
       })
})
app.get('/udata',(req,res)=>
{
   ud.find().then((udata)=>
   {
            res.send({udata})
   },(e)=>
   {
         res.status(400).send(e)
   })
})
app.listen(6600,()=>
{
    console.log('work on port number 6600')
})