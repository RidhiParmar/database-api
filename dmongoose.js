const {ObjectId} =require('mongodb')
const {mongoose} =require('./server/db/datacon');
const {ud} =require('./server/model/umodel')

  var id = '5c7f8ef9a42948583f192b04'

    ud.findOneAndRemove({_id: id}).then((user)=>
    {
            console.log(user);
    })
    
    // ud.findByIdAndRemove(id).then((user)=>
    // {
        
    //     console.log('User data by ID:',user)
    
    // })

    // ud.remove({}).then((result)=>
    // {
    //         console.log(result)
    // })