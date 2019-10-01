let dataSource = [
    {
      key: "china",
      value:["160-165/84-86", "165-170 / 88-90", "167-172 / 92-96","168-173 / 98-102", "170-176 / 106-110"]
   }
]
let columns =[
   {
   title: '中国',
   dataIndex: 'china',
   key: 'china',
   }]

//  let result =  columns.map(item =>{
//     for(let i = 0; i < dataSource.length; i++){
//         if(item.key === dataSource[i].key){
//            return  dataSource[i].value.map((it) => {
//                   it
//             })
//         }
//     }
// })

let result1 = function(columns, dataSource){
    for(let i = 0; i < columns.length; i++){
        for(let j = 0; j < dataSource.length; j++){
            if(columns[i].key === dataSource[j].key){
                return dataSource[j].value.map(it => {
                    return it
                })
            }
        }
    }
}

console.log(result1(columns,dataSource))