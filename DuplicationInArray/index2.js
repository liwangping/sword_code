//解法二，要求不能开辟一个新的内存空间，时间复杂度低，
//示例 输入[1, 1, 2, 3, 4] 留下一个数组，并返回去重后的数组。
// => [1, 2, 3, 4]  返回4

let nums = [1, 1, 2, 3, 4]
/**
 * 
 * @param {[1, 1, 2, 3, 4]} nums 
 */
let deplica = function (nums){
    if(nums === null){
        return null
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(deplica(nums),nums)