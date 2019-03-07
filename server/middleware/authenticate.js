var {ud} = require('./../model/umodel')
var authenticate = (req,res,next) =>
{
    var token = req.header('x-auth')    
    ud.findByToken(token).then((user)=>
    {
            if(!user)
            {
                return Promise.reject()
            }
           req.user = user
           req.toke =token
           next()
    }).catch((e)=>
    {
            res.status(401).send(e)
    })
}

module.exports={authenticate}