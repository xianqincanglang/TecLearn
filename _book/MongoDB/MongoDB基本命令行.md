* 删除已有字段  
`db.表.update({"需要删除的字段":{"$exists":true}},{"$unset":{"需要删除的字段":""}},{multi:true})`  
&emsp;$exists:判断存在该字段;  
&emsp;multi:true，删除多行;

* 更新  

```
db.getCollection("集合名").update(criteria,objNew,upset,multi)
    criteria:update的查询条件,类似sql update查询内where后面的;
    objNew:update的对象和一些更新的操作符(如$,$inc,$set...)等;
    upsert:若不存在update的记录，是否插入objNew,true为插入，默认是false,不插入;
    multi:默认是false,只更新找到的第一条记录，若为true，将按条件查询出来的多条记录全部更新;

//更新多条数据
db.getCollection("集合名").updateMany(filter,update,options)

```

* 本地连接远程数据库  
`mongo --host <IP地址>:数据库端口号`

* 查看当前数据库服务包含的数据仓库  
`show dbs`

* 使用数据库  
`use 数据库名`

* 退出命令行  
输入`exit`
