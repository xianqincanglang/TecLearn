在node中，有三种创建进程的方法:
* exec/execFile
* spawn
* fork

#### fork
fork(modulePath,args,options)实际上是spawn的一个特例，会创建一个新的V8实例。新创建的进程只能用来运行node脚本，不能运行其他命令;会创立父子进程的IPC通道，能够进行通信;

