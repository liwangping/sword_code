//我们需要定义一个双向链表,用来进行存储我们所要的数据
function Node(key, val){
    this.val = val;
    this.key = key;
    this.pre = this.next = null;
}


//定义缓存的数据结构
//有一个参数代表这个缓存的大小
//其中数据的结构包含有该节点，


let LRUCache1 = function(capacity){
    this.capacity = capacity;//定义缓存的容量
    this.head = this.tail = new Node(-2, -2);
    //map数据结构保证了时间复杂度为O(1)
    this.map = new Map();
}


LRUCache1.prototype.get = function(key){
    let node = this.map.get();
    //一种是没有找到缓存中的值，这种的话，会进行缓存。
    if (node === undefined)  {return -1;}
    //如果多了的话，还会进行最后一个元素的删除
    //一种是找到了缓存中的值，所以会对其进行提升，将其放置在头结点之后。

    //这一步相当于将节点从整个链中取出来，其中有判断是否是尾结点这种情况。
    node.pre.next = node.next;          //将找到的相应的节点，将其前后节点的pre指针从前往后相连
    if(this.tail != node){              //判断是不是伪指针
        node.next.pre = node.pre;       //找到相应的节点，将其前后节点的next指针从后往前相连
    } else {
        this.tail =  this.tail.pre;     //如果是尾指针时，将其伪元素往前移动
    }
    
    //将其插入头结点之后（将node节点的pre指针指向头部）（从前往后流向的指向改变)
    node.pre = this.head;
    node.next = this.head.next;

    //如果该节点后一个结点不为空的话，将节点next指针方向进行改变，指向其本身。为空说明是最后一项，所以会将其指向尾指针(从后往前流向的指针改变)
    if(node.next != null){
        node.pre.next = node;
    }
    else {
        //尾元素进行更新
        this.tail = node;
    }
    //插入头结点的后一位（将头结点next指针指向node节点），然后进行返回节点的值（从后往前流向的指向改变)
    this.head.next = node;
    return node.val;
}

//存储之用
LRUCache1.prototype.put = function(key, value){
    let node = this.map.get(key);
    //如果找到了，则将其提前到头指针之后。
    //更新值，并将其提前，提前的过程中需要注意的是node需要明确下，这个值是不是尾结点，如果是的话，需要将其进行相应的改变
    //普通改变就是说，将当前节点后面的节点的pre指向前面那个节点next，单向数据的改变，而还有一种特殊变化，就是说尾结点，
    // 后面不存在一个节点，所以有一个特殊处理  
    //抽象结构如图       head -> prev | item | next  < -- > prev | item |next  < -- > prev | item | next  < - tail
    //                 null <-  (null与tail不同，是单独提出            (null与tail不同，是单独提出来的)        ->  null
    //另外就是更新后
    if(node !== undefined){
        node.val = value;
        node.pre.next = node.next;
        if(this.tail != node) {
            node.next.pre = node.pre; //null指针没有pre. tail没有next指针
        } else{
            this.tail = this.tail.pre;//尾结点向前移一格
        }
        //插入到头结点之后
        node.pre = this.head;
        node.next = this.head.next;
        if(node.next != null) {
            node.pre.next = node
        }else {
            this.tail = node//节点的下一位为空的时候，将其置为尾节点。
        }
        this.head.next = node;
    }
    else {
        //如果没有找到该值，则创建节点并将其加入，并将最后一个进行淘汰
        node = new Node(key, value);
        //当链表为空的时候
        if(this.map.size == 0){
            this.tail = node;
            node.pre = this.head;
            node.next = this.head.next;
            this.head.next = node;
        } else {
            node.pre = this.head;
            node.next = this.head.next;
            node.next.pre = node;
            this.head.next = node;
        }
        if(this.map.size >= this.capacity) {
            //如果缓存容量达到上限，需要将最近的最久最久未使用的那条数据淘汰掉
            //即淘汰最后一条数据
            this.map.delete(this.tail.key);
            this.tail = this.tail.pre;
            this.tail.next = null;
        }
        //将新节点的key注册到map中，方便在o(1)的时间中获取到值。
        this.map.set(key, node)
    }
}

let cache = new LRUCache1(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);   //返回  1
cache.put(3, 3);//该操作会使得
                //密钥2被淘汰
cache.get(2);   //返回 -1 (未找到)
cache.put(4, 4);//该操作会使得
                //密钥1被淘汰
cache.get(1);   //返回 -1 (未找到)
cache.get(3);   //返回  3
cache.get(4);   //返回  4

console.log(cache)




