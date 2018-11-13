实际需求:比如wiki的展示，包含富文本;且动态加载;  

解决方案：将wiki富文本以html和css加载,将内容转html字符串存数据库中，然后再从数据中获取html字符串;  
若在React中直接插入这段html字符串的话显示的就只是字符串，而不会转义.下面是解决方法:  
`<div dangerouslySetInnerHTML={{__html:"<p style='color:red'>哈哈_test</div>"}}/>`

注:将html结构转html字符串:[三方在线工具](http://tools.jb51.net/transcoding/html2js)