const express =require('express')


const {ObjectId} =require('mongodb')
const {mongoose} =require('./server/db/datacon');
const {ud} =require('./server/model/umodel')

var app =express()
var id ='5c7f8ef9a42948583f192b04'
// if(!ObjectId.isValid(id))
// {
//   console.log('object id is invalid');
// }

    // ud.find(
    // {
    //     _id:id
    // }).then((udata)=>
    // {
    //     console.log('UserEmail:',udata);
    // })
    // ud.findOne({
    //     _id:id
    // }).then((user)=>
    // {
    //     console.log('USerEmail by One:',user)
    // })

    
    ud.findById(id).then((user)=>
    {
        if(!user)
        {
          return  console.log('user data not found')
        }
        
        console.log(JSON.stringify(user)) 
    
    }).catch((e)=>
    {
        console.log(e)
    })

    