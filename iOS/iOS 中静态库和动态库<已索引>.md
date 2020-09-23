函数库：分为静态库和动态库两种。和我们熟悉的静态语言和动态语言一样，所谓的静态和动态是分别对应编译期和运行期的。

静态库在程序编译时会被链接到目标代码中，程序运行时将不再需要该静态库。而动态库在程序编译时并不会被链接到目标代码中，只是在程序运行时才被载入，因为在程序运行期间才需要动态库的存在。

iPad只支持静态库联编。

差异| 静态库 | 动态库
--- | --- |-----
link联调方法 | Build Phases-Tab下的Link Binary with Libraries| General -Tab下的General-Framewokrs,Libraries,and Enbedded Content
