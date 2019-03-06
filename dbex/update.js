const {MongoClient,ObjectId} =require('mongodb')

MongoClient.connect('mongodb://localhost:27017/userdata',(err,db)=>
{
    if(err)
    {
        return console.log('sorry not connect with the database')
    }

    console.log('connection done')

    let dbase = db.db('userdata')

    dbase.collection('udata').findOneAndUpdate({
        _id:new ObjectId('5c7d14ae3ab5df4de1ff3411')
    },{
        $set:{
            name:'Anami'
        }  
        }).then((data)=>{
                console.log(JSON.stringify(data,undefined,2))
    },(err)=>
    {
            if(err)
            {
                 console.log('unable to update')
            }
    })
    db.close();

})  