const jwt =require('jsonwebtoken')
 var data={
     id :6
 }
var token = jwt.sign(data,'data66')
console.log(token)
var ddata = jwt.verify(token,'data66')
console.log(ddata)