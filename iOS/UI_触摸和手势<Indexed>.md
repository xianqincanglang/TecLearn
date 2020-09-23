 -  (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event

 

 - (void)touchesEnded:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event            有时候无法触发怎么回事

 问题：好像是和- (void)touchesCancelled:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event冲突了,

 原因：

 可能同时也添加了手势识别UIGestureRecognizer，已经判断为手势了，如果判断为手势后，就不走touchesEnded，而是touchesCancelled了。

 

 -----

 

#### UITouch

 当用户用一根手指触摸屏幕时，会创建一个和手指相关联的UITouch对象，一根手指对应一个UITouch对象

 

 触摸所处的窗口

 @property(nullable,nonatomic,readonly,strong) UIWindow *window;



 触摸所处的视图

 @property(nullable,nonatomic,readonly,strong) UIView *view;

 

 短时间内点按屏幕的次数，可以根据tapCount判断单击、双击或更多的点击

 @property(nonatomic,readonly) NSUInteger          tapCount; 

 

记录触摸事件产生或变换的时间，单位是秒

@property(nonatomic,readonly) NSTimeInterval      timestamp;



当前触摸所处的状态：

@property(nonatomic,readonly) UITouchPhase        phase;typedef NS_ENUM(NSInteger, UITouchPhase) {

    UITouchPhaseBegan,             // 触摸开始

    UITouchPhaseMoved,             // 接摸点移动

    UITouchPhaseStationary,        // 接触点无移动

    UITouchPhaseEnded,             // 触摸结束

    UITouchPhaseCancelled,         // 触摸取消

};


### 触摸事件
UISwipeGestureRecognizer(纵扫和横扫)

UIPinchGestureRecognizer(捏合)

UIRotationGestureRecognizer(旋转)

UILongPressGestureRecognizer(长按)

UIPanGestureRecognizer(拖曳)

UITapGestureRecognizer(点击)

 

* 一般，Tap（单击）、只是一个简单的单个触摸，它有一定的局限性，所以多点触摸出现了。 UIEvent的allTouches方法，可以获得触摸点的集合，可以判断多点触摸。

* 为了实现多点触摸，首先做下列事情：

    * 设置view的属性multipleTouchEnabled = YES(注意：默认值是NO)；

    * 使用CFDictionaryRef来保存触摸过程的参数。


