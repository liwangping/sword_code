function Node(key, val) {
        //定义双链表的结点
        this.key = key;
        this.val = val;
        this.pre = this.next = null;
    }
    
    /**
     * @param {number} capacity
    */
   var LRUCache = function(capacity) {
       this.capacity = capacity;
        //定义头结点，不存值，作用方便结点的插入和删除
       //双链表，head始终指向头结点，tail始终指向最后一个结点
       this.tail = this.head = new Node(-2, -2);
       //map，键是结点的属性key，值是指向结点的指针
       //map作用保证了O（1）时间内实现get与put操作
       this.map = new Map();
   };
   
   /** 
    * @param {number} key
    * @return {number}
    */
   LRUCache.prototype.get = function(key) {
       let node = this.map.get(key);
       //当key值不存在或已被淘汰时，返回-1
       if(node === undefined) return -1;
      //当key值存在于链表中，返回值并将对应结点移到链表首部
       //注：链表具有头结点，故移到首部，实际上是移到头结点之后
       node.pre.next = node.next;
       if(this.tail != node) {
           node.next.pre = node.pre;
       } else {
           this.tail = this.tail.pre;
       }
       node.pre = this.head;
       node.next = this.head.next;
       if(node.next != null) node.next.pre = node;
       else this.tail = node;
       this.head.next = node;
       return node.val;
   };
   
   /** 
    * @param {number} key 
    * @param {number} value
    * @return {void}
    */
   LRUCache.prototype.put = function(key, value) {
       let node = this.map.get(key);
       if(node !== undefined) {
           //如果key存在于双链表中，更新值并将key对应的那个结点移到链表首部
           //注：链表具有头结点，故移到首部，实际上是移到头结点之后
           node.val = value;
           node.pre.next = node.next;
           if(this.tail != node) {
            node.next.pre = node.pre;
           } else {
               this.tail = this.tail.pre;
           }
           node.pre = this.head;
           node.next = this.head.next;
           if(node.next != null) node.next.pre = node;
           else this.tail = node;
           this.head.next = node;
       } else {
           //如果key不在双链表中，创建一个新结点，并将结点插入链表首部
           //注：链表具有头结点，故插入首部，实际上是插入到头结点之后
           node = new Node(key, value);
           if(this.map.size == 0) {
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
               //如果缓存容量达到上限，需要将最近最久未使用的那条数据淘汰
               //即淘汰最后一条数据
               this.map.delete(this.tail.key);
              this.tail = this.tail.pre;
               this.tail.next = null;
           }
           //将新结点的key注册到map中，方便在O（1）的时间内获取到值
           this.map.set(key, node);
    }
};

let cache = new LRUCache( 3 /* 缓存容量 */ );

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

console.log(cache);


