const {MongoClient,ObjectId} =require('mongodb')

MongoClient.connect('mongodb://localhost:27017/userdata',(err,db)=>
{
    if(err)
    {
        return console.log('sorry not connect with the database')
    }

    console.log('connection done')

    let dbase = db.db('userdata')
    // dbase.collection('udata').deleteMany({
    //     id: 106
    // }).then((data)=>{
    //             console.log(data)
    // })

    // dbase.collection('udata').deleteOne({
    //     id: 105
    // }).then((data)=>{
    //             console.log(data)
    // })
    dbase.collection('udata').findOneAndDelete({
            id: 104
         }).then((data)=>{
                     console.log(data)
         })
    //db.close();

})  