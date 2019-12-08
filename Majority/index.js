// 求众数  leetcode 169  保证每个数组都有Majority

// var nums = [2,2,1,1,1,2,2];


// var majorityElement = function(nums) {
//     let SortNum = nums.sort((a, b) => a - b);
//     console.log(SortNum);
//     return SortNum[Math.floor(SortNum.length / 2)];
// };

// console.log(majorityElement(nums));

// 很取巧的一种写法 哈哈哈

// var nums = [2,2,1,1,1,2,2];
var nums = [3,2,3];


var majorityElement = function(nums) {
    let myMap = new Map();
    nums.map(item =>  {
        if(myMap.has(item)){
            myMap.set(item, myMap.get(item)+1)
        }else{
            myMap.set(item, 1);
        }
    })
    let majority = 0;
    let maxItem = 0;
    console.log(myMap);
    for ( let [key, value] of myMap){
        if(value > majority){
            majority = value;
            maxItem = key;
        }
    }
    return maxItem;
};

console.log(majorityElement(nums));
