* 使用数据库  
`use 数据库名`

* 删除已有字段  
`db.yourcollection.update({},{$unset:{"需要删除的字段":""}},false,true)`

