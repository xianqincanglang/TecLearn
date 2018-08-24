// 去掉字符串左右两边的空格
export function trim(str){
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 获取cookieDic
export function getCookieDic(){
  var cookieDic = {};
  if(document.cookie.length > 0){
    var strArray = document.cookie.split(';');
    
    strArray.forEach(element => {
      if(element.indexOf('&&')!=-1){
        var eleArray = element.split('&&');
        eleArray.forEach(ele =>{
          var eleItemArray = ele.split('=');
          if(eleItemArray.length == 3){
            cookieDic[trim(eleItemArray[1])]=trim(eleItemArray[2]);
          }else{
            if(eleItemArray.length == 2){
              cookieDic[trim(eleItemArray[0])]=trim(eleItemArray[1]);
            }
          }
          
        });
      }else{
        var eleItemArray = element.split('=');
        if(eleItemArray.length == 3){
          cookieDic[trim(eleItemArray[1])]=trim(eleItemArray[2]);
        }else{
          if(eleItemArray.length == 2){
            cookieDic[trim(eleItemArray[0])]=trim(eleItemArray[1]);
          }
        }
      }
    });
  }
  return cookieDic;
}

git stash apply stash@{0}