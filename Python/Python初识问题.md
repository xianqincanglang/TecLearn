* ImportError:No module named pymongo  
解决方法:`sudo pip install pymongo(包名)`  

* pip的安装:  
    方法一:在mac上最简便的方法：`brew reinstall python`(跟随python一起安装)  
    方法二: 已安装过python,可单独安装pip;  

* ImportError: No module named jenkins  
解决方法：`sudo pip install python-jenkins`  

* ImportError: No module named http_client   
解决方案:`sudo pip install jira --ignore-installed`  

* python报错UnicodeDecodeError:`'ascii' codec can't decode byte 0xe8 in position 0 `  
![UnicodeDecodeError](./assets/python_UnicodeDecodeError.png)  
解决方案:  
```
方案一:第二行设置: # -*- coding: utf-8 -*-

方案二：
    import sys
    reload(sys)
    sys.setdefaultencoding('UTF-8')

方案三:
    使用中文处unicode编码.eg:unicode('你好')
```
