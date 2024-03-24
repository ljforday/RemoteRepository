// install , require mongoose

const mongoose=require('mongoose');

//connect mongodb --- 27017 default port number --- test databae name
mongoose.connect('mongodb://127.0.0.1:27017/test02')
// succesed  or  error  

mongoose.connection.once('open',()=>{ 
    console.log("got it");
    //5，create file struct obj.设置集合中文档的属性及属性值类型
    let BookSchema = new mongoose.Schema({
        name:String,
        auther:String,
        price:Number
    });
    // //6，create module obj .对文档操作的 封装对象，完成对文档的增删改查
    let BookModel =mongoose.model('books',BookSchema);

    // //7,新增
    BookModel.create({
        name:'西游记',
        auther:'吴承恩',
        price:20
    },(err,data)=>{
        // is error?
        if (err) {
            console.log('err');
            return;
        }
        // correct,则输出插入后的文档 对象
        console.log(data);
        //关闭数据库连接（项目运行过程中，不会添加该代码）
        // mongoose.disconnect();
    });

 })
// mongoose.connection.once('error',()=>{ 
//     console.log("error");
//  })
// mongoose.connection.once('close',()=>{ 
//     console.log("close");
//  })
