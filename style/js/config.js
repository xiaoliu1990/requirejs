(function(win, doc) {
  var admin = {
      version: "1",
      source: [
          'css!adminCss',
          'jquery',
          'b'
      ]
  };
  win.admin = admin;
}(window, document));

requirejs.config({
  baseUrl: "",//参照于引入这个js文件的index.html页面的相对路径,因为此时mian.js文件已经导入到了index.html中
  waitSeconds: 20,//加载超时
  urlArgs: "v=" + new Date().toLocaleDateString(),//RequireJS获取资源时附加在URL后面的额外的query参数。用来解决缓存问题
  paths: {
      css: "style/js/require/css",
      adminCss: "style/css/main",
      jquery: "style/js/jquery",
      b: "style/js/b"
  },
  shim: {
    jquery: {
      exports: 'jquery'
    }
  }
});
//define有依赖的时候可以直接调用相关js
define(admin.source, function() {
  $("#test").html("调用成功");
});

//define无依赖的时候需要嵌套调用
// require(['jquery'],function($){
//   require(['b'], function(iTml) {
//     iTml.iHtml("#test");
//   });
// });
