

* 基于单个键(列)的唯一索引  
```
db.getCollection("sdkname_version_collection").createIndex({name:1,version:1,terminal:1,business:1}, {unique:true});
```

* 基于复合键(列)的唯一索引  
```
db.getCollection("sdkname_version_collection").createIndex({name:1}, {unique:true});
```

* 