* 删除已有字段  
`db.表.update({"需要删除的字段":{"$exists":true}},{"$unset":{"需要删除的字段":""}},{multi:true})`  
&emsp;$exists:判断存在该字段;  
&emsp;multi:true，删除多行;

* 本地连接远程数据库  
`mongo --host <IP地址>:数据库端口号`

* 查看当前数据库服务包含的数据仓库  
`show dbs`

* 使用数据库  
`use 数据库名`

* 退出命令行  
输入`exit`
