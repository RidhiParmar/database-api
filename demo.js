const {ObjectId} =require('mongodb')
const {mongoose} =require('./server/db/datacon');
const {ud} =require('./server/model/umodel')

var id = '5c7f72243c29984f3deb0dca'
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
        
        console.log('User data by ID:',user)
    
    })