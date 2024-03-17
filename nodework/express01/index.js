const express = require('express')
const path =require('path')
const app = express();

//创建一个数组，用来存储用户信息
const USERS =[
    {
        username:'abc',
        password:'123',
        nickname:'admin01'
    },
    {
        username:'xyz',
        password:'123456',
        nickname:'admin02'
    },
]

//配置静态资源路径,中间件. public 相当于 根目录（localhost:3000）

app.use(express.static(path.resolve(__dirname,'public')))

//引入解析请求体的中间件
app.use(express.urlencoded())

app.post('/login',(req,res)=>{
    //默认情况下，express不会自动解析请求体，引入 中间件
    //console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;

    //获取 用户名和密码后，在到 数组中查找 对应的 用户。
   const loginUser= USERS.find((item)=>{
        return item.username === username && item.password === password
    })

    if (loginUser) {
        res.send('log in susceed')
    } else{
        res.send('error...')
    }

    // if (username==='abc' && password==='123') {
    //     res.send('post请求已收到')
    // } else {
    //     res.send('error...')
    // }
})

app.post('/register',(req,res)=>{
    //获取用户 输入的数据

    const {username,password,pwd,nickname}=req.body

    //验证数据是否存在

    const user =USERS.find((item)=>{
        return item.username === username || item.nickname===nickname
    })

    if (!user) {
        //进入判断，说明用户不存在。可注册
        USERS.push({
            username,
            password,
            nickname
        })
        res.send('register susceed')
    }else{

        res.send('用户名已存在')
    }

    
})

app.listen(3000,()=>{
    console.log('got it...');
})