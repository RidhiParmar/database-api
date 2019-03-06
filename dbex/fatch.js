const {MongoClient,ObjectId} =require('mongodb')

MongoClient.connect('mongodb://localhost:27017/userdata',(err,db)=>
{
    if(err)
    {
        return console.log('sorry not connect with the database')
    }

    console.log('connection done')

    let dbase = db.db('userdata')

    dbase.collection('udata').find({id:105}).toArray().then((data)=>{
                console.log(JSON.stringify(data,undefined,2))
    },(err)=>
    {
            if(err)
            {
                 console.log('unable to fatch')
            }
    })
    db.close();

})  