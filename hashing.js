const {SHA256} =require('crypto-js')
const bcrypt =require('bcryptjs')

// var message = 'hello hi how are you'
// var hash = SHA256(message).toString()

// console.log(`message : ${message}`)
// console.log(`hash : ${hash}`)

var password = 'keepsecret12'
// bcrypt.genSalt(10,(err,salt)=>
// {
//     bcrypt.hash(password,salt,(err,hash)=>
//     {
//         console.log(hash)
//     })
// })

var hashpass ='$2a$10$tfF/LCBLL/vlTLELrRPzY.E2GlPZtHIrWo2sJ2zPblRVnyNI2tkji'

bcrypt.compare('keepsecret',hashpass,(err,res)=>
{
   console.log(res)
})

// var data={
//     id:4 
// }
// var token ={
//     data,
// hash:SHA256(JSON.stringify(data)+'somemsg').toString()
// }

// token.data.id=5
// token.hash=SHA256(JSON.stringify(data)).toString()

// var rhash =SHA256(JSON.stringify(token.data)+'somemsg').toString()

// if(rhash === token.hash)
// {
//     console.log('data not change')
// }
// else{
//     console.log('change data not trust ')
// }