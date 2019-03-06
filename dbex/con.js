const mclient =require('mongodb').MongoClient;

mclient.connect('mongodb://localhost:27017/abc',(err,db)=>
{
    if(err)
    {
        return console.log('sorry not connect with the database')
    }

    console.log('connection done');

    let dbase = db.db('userdata');

    dbase.collection('udata').insertOne({
        id:104,
        name:'Anami'
    },(err,result)=>
    {
            if(err)
            {
                return console.log('unable to insert')
            }
            
            console.log(JSON.stringify(result.ops,undefined,2))
    })
    db.close();

})  