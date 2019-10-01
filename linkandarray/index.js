var reverseList = function(head){
    // 设定两个指针，一个为cur它指向当前的头节点，另一个为pre指针，它代表的是null(也就是cur的前驱，在该题我把它看作最后一个指针)
        var cur = head;
        var pre = null;
        //进入循环，当cur指向最后一个节点时，值为null,则退出循环。
        while(cur != null){
            //存贮一个temp是当前节点的后继，方便未来cur的变动，如果最后 直接cur = cur.next会导致它指向的是空（因为此时的cur已经指向最后一个位置了），从而返回空值
            var temp = cur.next;
            //交换位置啦
            cur.next = pre;
            pre = cur;
            //最后移动cur给它的下一位，完成cur的后移
            cur = temp;
        }
        return pre;
    }

