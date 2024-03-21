// install , require mongoose

const mongoose=require('mongoose');

//connect mongodb --- 27017 default port number --- test databae name
mongoose.connect('mongodb://127.0.0.1:27017/test')
// succesed  or  error

mongoose.connection.on('open',()=>{ 
    console.log("got it");
 })
mongoose.connection.on('error',()=>{ 
    console.log("error");
 })
mongoose.connection.on('close',()=>{ 
    console.log("close");
 })

 // close mongodb connection
setTimeout(()=>{
    mongoose.disconnect()
},5000)