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


