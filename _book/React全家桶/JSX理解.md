* JSX会转换为原生的JavaScript，因此有一些关键词不可作为JSX标签的属性名.如:for(用htmlFor替代)和class(用className)替代;  
* 在使用条件判断时,在JSX的花括号中直接加入if语句会渲染出无效的JavaScript。  
    - 解决方方法1:使用三目运算符  
    - 解决方方法2:设置一个变量并在属性中引用它  
    - 解决方方法3:将逻辑转换到函数中  
        ```
        contentSwitchDetailInput(){
            const {aaa,bbb} = this.props;
            const {ccc} = this.state;
            //函数变量
            const renderInput = (element)=>{
                let areaInputDisabled = false; ;
                if(element){
                    。。。。
                }else{
                }                    
                return(
                    <TextArea 
                        value={element} 
                    />
                )
            }
        return(
            <div>
             {
                renderInput(ccc)    //转为一个函数变量
             }
            </div>
        );
    }
        ```
    - 解决方方法4:使用&&运算符  
    