
nums = [0,0,0,0];

var threeSum = function(nums) {
    let result = [];
    nums.sort((a, b) => a -b )
    if(nums[0] <= 0 && nums[nums.length - 1] >= 0){
        for(let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;
            let res = sort(i, left, right);
            if(res){
                result.push(res)
            }
        }
    }
    
    function sort (i, left, right){
        while(left < right){
            // console.log("一处",nums[i], nums[left], nums[right] ,i) 
            if(nums[left] + nums[right] === -nums[i]){
                // console.log(nums, left, right ,i)
                return [nums[i], nums[left], nums[right]]
            }
            if((nums[left] + nums[right]) < -nums[i]){
                // while (nums[left] === nums[++left]) {}
                left++
            }else if((nums[left] + nums[right]) > -nums[i]){
                // while (nums[right] === nums[--right]) {}
                right--
            }
        }
    }
    return result;
};

console.log(threeSum(nums))