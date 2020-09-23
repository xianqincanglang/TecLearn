* labelCol只能是对象  
```
问题:Failed prop type: Invalid prop `labelCol` of type `number` supplied to `FormItem`, expected `object`.

解决方法:
源代码：<FormItem label="名称" labelCol={span:2} wrapperCol={span:4}></FormItem>
新代码：<FormItem label="名称" labelCol={{span:2}} wrapperCol={{span:4}}></FormItem>

```