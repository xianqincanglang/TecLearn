### CAAnimation 
* duration：动画的持续时间
* repeatCount：重复次数，无限循环可以设置HUGE_VALF或者MAXFLOAT
* repeatDuration：重复时间
* removedOnCompletion：默认为YES，代表动画执行完毕后就从图层上移除，图形会恢复到动画执行前的状态。如果想让图层保持显示动画执行后的状态，那就设置为NO，不过还要设置fillMode为kCAFillModeForwards
* 
