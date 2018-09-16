* 定义字典

```
var jsonDic = {
		code:"S00000",
		msg:""
	};
访问时，
	jsonDic.code = "S00001";
	jsonDic.msg = "hee",
	不可写成jsonDic[code];
```
	
* 删除键

```
var dic = {"name":"笑话"};
delete dic["name"];
```


### issue
1.Port 4000 is already in use
> lsof -i:4000  # 查看哪些进程在使用
> kill -15 ptid(使用进程的ptid)

三爱富 -240.81

在现实生活中，大家都知道在从事某项工作之前，首先需要好好学习相关知识.医生要学习医药知识,律师要学习法律知识;
