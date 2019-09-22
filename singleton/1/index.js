// 构造获取dom对象的封装函数
var $ = function(id){
    return typeof id === 'string' ? document.getElementById(id) : id;
} 

// 封装弹框构造函数
var Modal = function (id, html){
    this.html = html;       //内容
    this.id = id;           //id名称
    this.open = false;      //判断弹框是否打开
}

// open方法

Modal.prototype.create = function() {
    if (!this.open) {
        var modal = document.createElement('div');
        
        modal.innerHtml = this.html;
        modal.id = this.id;
        document.body.appendChild(modal);

        setTimeout(function() {
            modal.classList.add('show')
        }, 0);

        this.open = true;
    }
}


// close方法

Modal.prototype.delete = function() {
    if (this.open) {
        var modal = $(this.id)
    }

    modal.classList.add('hide');
    setTimeout(function() {
        document.body.removeChild(modal);
    }, 200);

    this.open = false;
}


//创建实例

var createInstance = (function () {
    var instance;
    return function(){
        return instance || (instance = new Modal('modal', '这是一个弹框'))
    }
})()
//1. 最重要的部分，利用闭包封装了instance私有变量并返回一个函数
//2. 如果instance存在则返回instance变量，如果instance不存在则返回后面那个函数。
//以上是为了确保只存在一个弹窗实例

//按钮操作

var operate = {
    setModal: null,
    open: function() {
        this.setModal = createInstance();
        this.setModal.create();
    },
    delete: function() {
        this.setModal ? this.setModal.delete(): '';
    }
}
//将按钮操作放在operate对象中，使得打开和关闭操作可以通过this获取实例setModal

//绑定事件
$('open').onclick = function(){
    operate.open();
}

$('delete').onclick = function() {
    operate.delete();
}
//将删除与添加方法放上去