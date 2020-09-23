1.在项目目录下新增一个文件`.gitignore`, 和`.git目录同级`。  
2.运行下列命令:
```
git rm -r --cached .  #可将以前未追踪的文件也生效
git add .
git commit -s  #提交添加注释
```