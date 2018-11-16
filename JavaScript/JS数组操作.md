* 在数组头部添加一个元素  
```
方法:unshift(element1,element2,...);//返回新数组的长度，不会返回一个新数组，而是直接在原数组上修改
```

* 在数组尾部添加一个元素  


* 去掉数组中重复的元素  
```
方法:Array.from(new Set(去重数组));

let values = ["1","2","3","1"];
values = Array.from(new Set(values));

console.log(values); //["1","2","3"]
```