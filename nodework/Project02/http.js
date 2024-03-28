//set up a back-end service program

//1,import http module
const http=require('http')
//2, define the port
const port=8080;
//3,create a service obj
const server=http.createServer((request,response)=>{
    //这里的代码 每收到一次请求，就会执行一次
    response.end('hello http module')//no other code be written after this method
})
//4,调用 服务器的监听方法
server.listen(port,(error)=>{
    //用来监听有没有出错
    console.log("got it...");
    console.log("error");
})

//a port can be used by only one server