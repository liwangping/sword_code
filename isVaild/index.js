
// s = "([])"
// var isValid = function(s) {
//     let leftarr = [];
//     let paran_map = { "(": ")", "{": "}", "[":"]"};
//     for(let ch of s){
//         if(ch in paran_map) leftarr.push(ch); //将左括号进行顺序保存
//         else {  //为右括号时，与数组末尾进行匹配
//             if(ch != paran_map[leftarr.pop()])
//                 return false;
//         }
//     }
//     return !leftarr.length //防止全部为左括号
// };

// console.log(isValid(s));
// var isValid = function (s) {
//     var map = {
//         "(": ")",
//         "[": "]",
//         "{": "}"
//     }
//     var leftArr = []
//     for (var ch of s){
//         if (ch in map) leftArr.push(ch); //为左括号时，顺序保存
//         else { //为右括号时，与数组末位匹配
//             if(ch != map[leftArr.pop()]) return false;
//         }
//     }
//     return !leftArr.length //防止全部为左括号
// };


// s = "{{}}"

// let isValid = function(s){
//     let leftArr = [];
//     let map = { "{": "}", "[": "]", "(": ")"};
//     for(let item of s){
//         //如果存在左括号，则将其插入到数组
//         if(item in map){
//             leftArr.push(item)
//         }
//         //如果不是左括号则进行匹配
//         else{
//             //下面的leftArr.pop()会自动执行。
//             if(item != map[leftArr.pop()]){
//             return false;
//         }}
//     }
//     return !leftArr.length;//防止全部为左括号
// }

// console.log(isValid(s))

let s = "{{}}";

let isValid = function(s){
    let leftArr =[];//用来存左括号
    let map = {
        "{": "}",
        "[": "]",
        "(": ")"
    };
    for(let ch of s){//遍历字符串的每一项
        if(ch in map){//遍历map的左项
            leftArr.push(ch)
        }
        else {
            if (ch != map[leftArr.pop()]){
                return false//排除掉右括号不等于左括号的情况
            }
        }
    }
    return !leftArr.length;//排除掉还剩下左括号的情况
}

console.log(isValid(s))