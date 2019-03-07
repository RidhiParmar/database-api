const express=require('express');
const bodyparse =require('body-parser')
const _=require('lodash');
const {ObjectId}=require('mongodb')

const {mongoose}=require('./db/datacon')
const {ud} =require('./model/umodel')
const {sdata} =require('./model/sdata')
const {authenticate}=require('./middleware/authenticate')

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
    console.log(id)
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

app.patch('/Udata/:id',(req,res)=>
{
    var id = req.params.id 
    var body = _.pick(req.body,['email'])
    if(!ObjectId.isValid(id))
    {
         return res.status(400).send();
    }
    ud.findByIdAndUpdate(id,{$set:body},{new:true}).then((udata)=>
    {
         if(!udata)
         {
             return res.status(404).send()
         }
         res.send({udata})
    }).catch((e)=>
    {
        res.status(400).send()
    })
})

app.post('/User',(req,res)=>
{
    var body =_.pick(req.body,['email','password'])

    var udata = new ud(body)
    udata.generateAuthToken().then((result)=>
    {
        res.header('x-auth',result).send(udata)

    }).catch((e)=>
    {
        console.log(e)
         res.status(400).send(e)
    })

})

app.get('/user/me',authenticate,(req,res)=>
{
    res.send(req.user)

})
app.listen(6600,()=>
{
    console.log('work on port number 6600')
})