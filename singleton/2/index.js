// 用代理模式实现单例模式

// 使用一个单例类，作用是负责在页面里创建唯一的div节点

var CreateDiv = function (html){
    this.html = html;
    this.init()
}

CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
}

var ProxySingletonCreateDiv = (function() {
    var instance;
    return function( html ){
        if ( !instance ){
            instance = new CreateDiv( html );
        }
        return instance; 
    }
})();

var a = new ProxySingletonCreateDiv("sven1");
var b = new ProxySingletonCreateDiv("sven2");

console.log(a === b)


