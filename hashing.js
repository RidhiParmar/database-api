const {SHA256} =require('crypto-js')

var message = 'hello hi how are you'
var hash = SHA256(message).toString()

console.log(`message : ${message}`)
console.log(`hash : ${hash}`)

var data={
    id:4
}
var token ={
    data,
hash:SHA256(JSON.stringify(data)+'somemsg').toString()
}

token.data.id=5
token.hash=SHA256(JSON.stringify(data)).toString()

var rhash =SHA256(JSON.stringify(token.data)+'somemsg').toString()

if(rhash === token.hash)
{
    console.log('data not change')
}
else{
    console.log('change data not trust ')
}