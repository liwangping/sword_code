- 实现LRU缓存。

### 什么是LRU缓存？
 可以实时找到最近点击次数最多的那个点击事件，当我们get一次key值后，相对应的次数会增加，而当我们put一个值后，相对应的值会进行一个判断，将先加入的值进行排出，那么后加入的值占据新的地方。比较常用于搜索框。

### 如何解决呢？
    1. 用双向链表和哈希表。
    2. 双向链表用来将那个搜索的数据进行存储，然后链表中的值，会被存储在链表上。
    3. 由于对链表的查找和遍历，所以我们的时间复杂度和空间复杂度都为O(n)，所以采用哈希表来存储之前的值，达到时间复杂度为o(1).空间复杂度为(n)

## 形象的形容一下过程

1. 缓存列表                                     [] 限制长度为3
2. 搜索A                                       [A]
3. 搜索B，查找不到放置到数组前面。                 [B,A]
4. 查找C, 查找不到插入C                          [C,B,A]
5. 查找B，查找到并把这个前置。所以                 [B,C,A]
6. 查找D, 查找不到就将这个数插入到最前面，把A排出    [D,B,C]


//链表的更新涉及到
1. 把节点脱离出来，这样子的情况下，要考虑节点是否是尾元素这点，并做出判断。
2. 然后把节点插入到链表里，需要将元素插入到头指针后面，而这样子判断插入后，后一个元素是否为空。用来更新尾指针。


=左右的指针指向问题？

this.next = node
this.next  -> node

1. 对于=左边表示的是要图示的左边，而右边的则是一个被指向的东西。


总结：对于这种算法题，
1. 应该是仔细读题，然后在纸上画出简单的模型，然后用文字写流程，或者是写伪代码。
2. 由于链表比较麻烦，所以我们需要将明白链表中指针的所有指向，将指向理解明白。
3. 对于这类问题中，主要的难度是考的对链表的操作。对于思路并没有那么难。主要是适应链表的书写方法。
4. 对于链表，我们常常对于链表结构可以采用哨兵，也就是头尾伸长一截，可以有效减少链表操作的难度。