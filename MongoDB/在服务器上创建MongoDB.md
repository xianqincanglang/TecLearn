* 创建属于自己的一份mongod.conf  
```
# 数据库文件存储位置
dbpath =  /DBData # 数据存放目录路径 ,目录名可指定为DBData

# log文件存储位置
logpath = /mongodb.log # mongodb.log路径

# 使用追加的方式写日志
logappend = true

# 是否以守护进程方式运行
fork = true

bind_ip = 服务器ip,127.0.0.1 # 逗号之间不能有空格 ,前面一个是服务器的ip，用于(外界连接)

# 端口号(指定，没有冲突就行)
port = 27118  # 
```

* 启动mongod  
终端执行：`mongod --config mongod.conf(上面创建的那个)`  
success提示:child process started successfully, parent exiting.  





