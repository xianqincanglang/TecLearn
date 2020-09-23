
### Select
* placeholder:选择框默认文字 ，string
* value:指定当前选中的条目，string|string[]|number|number[]

### 分割线 Divider

### Button
* type:按钮类型,可选值为primary(主按钮),不设置为默认按钮,dashed(虚线按钮),danger(危险按钮),

### Input
* value:输入框的内容。string
* onChange:输入框内容变化时的回调.function(e)
* onPressEnter:按下回车的回到.function(e)

### 表格Table  
* table
    - onChanage:分页、排序、筛选变化时触发. Function(pagination,filters,sorter)
    - 
* Column:
    - filterDropdown:可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互. ReactNode.  
    - filterIcon:自定义filter图标. ReactNode|(filtered: boolean) => ReactNode 
    - onFilter:本地模式下，确定筛选的运行函数。 Function
    - onFilterDropdownVisibleChange:自定义筛选菜单可见变化时调用。function(visible) {}  
    - sorter:排序函数
    - sortOrder：排序的受控属性
        

## Message 全局提示  
* content:提示内容 .string|ReactNode  
* duration:自动关闭的延时，单位秒。设为 0 时不自动关闭。number,默认为3  
* onClose:关闭时触发的回调函数。function  
* 静态方法:  
    - message.success(content, [duration], onClose)
    - message.error(content, [duration], onClose)
    - message.info(content, [duration], onClose)    
    - message.warning(content, [duration], onClose)    
    - message.loading(content, [duration], onClose)    
## Modal对话框
