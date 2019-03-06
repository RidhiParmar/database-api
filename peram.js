const express=require('express');
const bodyparse =require('body-parser')
const {ObjectId}=require('mongodb')


const {mongoose}=require('./server/db/datacon')
const {ud} =require('./server/model/umodel')
const {sdata} =require('./server/model/sdata')


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

app.get('/Udata/:id',(req,res)=>
    {
        var id =req.params.id
        if(!ObjectId.isValid(id))
        {
            return res.status(404).send();
        }
        ud.findById(id).then((udata)=>
        {
             if(!udata)
             {
                 return res.status(404).send()
             }
             res.send(udata)
        }).catch((e)=>
        {
            res.status(400).send()
        })
    })

app.delete('/Udata/:id',(req,res)=>
{
    var id =req.params.id
    if(!ObjectId.isValid(id))
    {
        return res.status(404).send();
    }
    ud.findByIdAndRemove(id).then((udata)=>
    {
         if(!udata)
         {
             return res.status(404).send()
         }
         res.send(udata)
    }).catch((e)=>
    {
        res.status(400).send()
    })
})
app.listen(6600,()=>
{
    console.log('work on port number 6600')
})