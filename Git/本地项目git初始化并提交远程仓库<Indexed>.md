* 1.先在远程仓库创建项目，为了避免错误，不需要初始化README,等其他文件;
* 2.本地创建
    - `git init` #初始化本地仓库
    - `git add .` #添加文件到本地仓库
    - `git commit -s ""`提交文件
* 3.关联本地仓库和远程仓库:git remote add origin {远程仓库地址}
* 4.推送push到远程仓库:
    - git push --set-upstream origin master
