# 最大滑动窗口
思路

1. 可以运用堆的思想，就像第k个最大值一样，我们可以将其放在堆里，对于比最大值大的，就对其进行调整，把它放堆顶，而对于没有比最大值大的，我们就将其插入到后面。对整个堆进行调整。
跟第k个最大值是差不多的思路，复杂度是这样的。遍历全部为n,堆的排序为log n.所以复杂度为nlog n.

2. 还可以用另外一种解法，就是运用长度为3的队列，然后对其进行一个入队，然后，如果比最大值大，那么我们就可以将队列进行排空再把元素放入数组最左边，如果不大，那么我们就需要将其进行入队。

var maxSlidingWindow = function(nums, k) {
    let len = nums.length;
    if(len*k == 0) return [];
    if (k == 1) return nums;
    let queue = nums.slice(0,k);
    let cur = k-1;
    let target = [];
    while(cur<len){
        let max = Math.max.apply(Math,queue);
        target.push(max);
        cur++;
        queue.push(nums[cur]);
        queue.shift();
    }
    return target;
};

这个方法更简单。直接滑动窗口。