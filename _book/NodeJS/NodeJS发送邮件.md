* 重点：使用nodemailer发送公司邮件,搭建公司邮件服务;  
* [官网地址](https://nodemailer.com/about/)  

### 基本代码:
```
let transporter = NodeMailer.createTransport({
        host:'smtp.163.com',    //邮件服务器，形式不固定，也有"mail.xxx.com"的形式
        secureConnection:true,//use ssl
        port:'465',
        secure:false,    //一般情况port为465设置为ture,其他端口号设置为false
        auth:{
            user:'m15993343056',    //用户名
            pass: 'tian@fang',//'123456x',//授权码(QQ,163)或者密码(若无法成功，可设置secure为false试一下),
        },
    });

    // 设置邮件内容(谁发送什么给谁)
    let mailOptions = {
        from:'<m15993343056@163.com>',//发件人
        to:'bbb@163.com,xxxx@qq.com',//收件人,可采用数组形式
        subject:'测试主题sss',
        text:'text,hhh',
        html:'<b>哈哈哈</b>'


    };
   //发送邮件
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log("err");
            console.log(err);
            return;
        }
        console.log("info");
        console.log(info);
        return;
    })
```

* 若采用公司内部邮箱，一般情况下公司都有自己的内部邮件服务，可找公司相关团队对接即可，没必要重新搞一套;



 
