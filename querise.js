const {ObjectId} =require('mongodb')
const {mongoose} =require('./server/db/datacon');
const {ud} =require('./server/model/umodel')

var id = '5c7f72243c29984f3deb0dca'
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