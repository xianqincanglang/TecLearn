https://blog.csdn.net/corner2030/article/details/54346263
https://blog.csdn.net/allocator/article/details/51724406
https://www.cnblogs.com/zhoujie/p/nodejs2.html

* 不同语言效率不同，所以为了提高程序效率可混用;

python脚本输出到控制台的内容在nodejs的程序中被完全解析为字符串，存放于回调函数的输入参数stdout中.

NodeJS和其他脚本的交互过程:
js使用`chile_process`模块创建子进程，子进程调用命令行且传递参数完成python等脚本代码的使用
