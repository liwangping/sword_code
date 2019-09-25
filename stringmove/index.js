// //对于字符串的一个替换长字符的问题。示例
// // "I am happy" => "I%20am%20happy" 将字符串中的空格替换成特殊的字符串，这是很常见的需求。


// let str = "I am happy";
// // var blankNumber = (str) => {
// //     for(let i = 0; i < str.length; i++) {
// //         console.log(str[i])
// //     }
// // }
// let strArr = str.split('')
// console.log(strArr)
// let blankNumber = (strArr) => {
//     let blank = 0;
//     console.log(strArr);
//     for(let i = 0; i < strArr.length; i++){
//         if(strArr[i] === " "){
//             blank++
//         }
//     }
//     return blank
// }   
// let newstrlength = blankNumber(strArr) * 2+ strArr.length + 1;
// let p = strArr.length,q = newstrlength;
// for(;p >= 0; p--){
//     if(strArr[p] === " "){
//         strArr[q] = 0;
//         strArr[q-1] = 0;
//         strArr[q-2] = 0;
//         q -= 2
//     }else{
//         strArr[q] === strArr[p],
//         q--
//     }
// console.log(p,q);
// console.log(strArr);
// }
// console.log(strArr)

