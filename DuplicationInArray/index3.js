//还有类似的一些数组的操作，比如移除一些特定的数字
// 给定 nums = [3,2,2,3], val = 3,

// 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

// 你不需要考虑数组中超出新长度后面的元素。
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums === null){
        return null
    }
    let i =0;
    for (let j = 0; j < nums.length; j++){
        if (val !== nums[j]){
            nums[i] = nums[j]
            i++
        }
    }
    return i;
};