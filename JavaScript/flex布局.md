## 基本概念
采用flex布局的元素，称为flex容器，简称"容器".它的所有子元素自动成为容器成员，称为flex项目(flex item)，简称"项目".  

## 容器的属性
* 6个属性设置在容器上  
    - flex-direction  
    - flex-wrap  
    - flex-flow  
    - justify-content  
    - align-items  
    - align-content    
* justify-content:定义项目在主轴上的对齐方式.
    - flex-start(默认值):左对齐
    - flex-end:右对齐
    - center:居中
    - space-between:两端对齐，项目之间的间隔相等
    - space-around:每个项目两侧的间隔相等.所以，项目之间的间隔比项目与边框的间隔大一倍.

## 项目的属性