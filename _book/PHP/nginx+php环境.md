## mac搭建nginx和php   
[参考链接]https://www.cnblogs.com/ym1992it/p/4599112.html

## 启动  
mac开机后或者重启，若想用nginx+php，需要启动php-fpm（php-fpm相当于一个接口，nginx和php之间的通信通过php-fpm）  
    * 启动php-fpm  
    `launchctl load -w /usr/local/opt/php/homebrew.mxcl.php.plist`
    * 停止php-fpm  
    `launchctl unload -w /usr/local/opt/php/homebrew.mxcl.php.plist`
