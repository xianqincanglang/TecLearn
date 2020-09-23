* 前言:在NodeJS中使用express框架并没有自带的日志模块，可集成log4js.
* 安装log4js:`npm install log4js`
* 在app.js中配置log4js
    ```
    const log4js = require('log4js');//加载log4js模块
    //配置log4js：这里只有控制台的
    log4js.configure({
      "appenders":{
        out:{type:'console'}//控制台输出
      },
      categories:{
        default:{appenders:['out'],level:'info'},
      }
    });
    var logger = log4js.getLogger('normal');
    logger.level = 'info';

    //在所有中间件上写入
    app.use(log4js.connectLogger(logger,{level:log4js.levels.INFO}));
    ```