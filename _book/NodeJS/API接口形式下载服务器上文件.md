* 开始本想通过`<a href='' download="">`形式下载服务器上JSON文件，但会暴露该文件在服务器上的路径且会出现下载不成功的情况，浏览器直接以预览形式打开，达不到下载的效果.。故采用API接口形式.  
* 采用接口形式下载文件

```
var fs = require('fs');
var path = require('path');

//主要代码
//fileName，接口传入参数，前端只需传入文件名即可，具体路径对其屏蔽;
//filePath，可通过path.join(path.resolve(__direname,xxxxx),fileName)，第一个参数获取目录

 if(!fs.existsSync(filePath)){
        res.statusCode = 404;//文件不存在返回404
        res.end();
    }else
    {
        var stats = fs.statSync(filePath);
        if (stats.isFile()) {
            res.set({
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename=' + fileName,
                "Content-Length": stats.size
            });
            fs.createReadStream(filePath).pipe(res);
        } else {
            res.end(404);
        }

```