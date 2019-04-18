//define无依赖
define(function(){
  var iHtml=function(id){
    $(id).html("调用成功");
  }
  return {
      iHtml:iHtml
  };
})