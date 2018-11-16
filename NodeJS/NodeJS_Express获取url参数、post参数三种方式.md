get请求:  
参数在url中时  
    * /path/:id,参数在`req.params`.id中,
    注意：req.params是一个参数容器对象，而req.param()是函数;  
    * /path?id=xx,参数在`req.query`.id中  


post请求:
```
示例:127.0.0.1:40000/index, post了一个name=xxx的值.
    req.body.name;  //请求的body
```
    