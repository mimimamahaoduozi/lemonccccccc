// // let arr=[1,2,3]
// // let arr2=Array.from(new Set([...arr,2]))
// // console.log(arr2);
// let da=new Date().getTime();
// var de = new Date( da ).toLocaleString();
// console.log(da);
// console.log(de);
//1231243423401

const data=new Object({
    '1231243123401':213,
    '1231243223402':213,
    '1231243323403':231,
    '1231243423404':233,
    '1231243423405':353,
    '1231243523406':123,
    '1231243623407':123,
    '1231243723408':123,
    '1231243823409':234,
    '1231243923410':345,
    '1231241123411':123,
    '1231241223412':234,
    '1231241323413':123,
    '1231241423414':234,
    '1231241523415':123,
    '1231241623416':234,
    '1231241723417':123,
    '1231241823418':123,
});
// let date=1231243423401;
// let handleDara =(data)=>{
//     let newData={};
//     for (let i=0; i<60; i++){
//         // newData.push({
//         //     date : date,
//         //     value: data[date] || 0
//         // });
//         newData[date]=parseInt(Math.random()*200)
//         date+=60000;
//     }
//     return newData;
// };
//
// console.log(handleDara(data));
//
// let newData = [];
// let time =new Date(1231243123401).getMinutes();
// let date='';let value=0;
// for(let i in data) {
//     if (new Date(parseInt(i)).getMinutes() == time) {
//         date=i;
//         value+=data[i]
//     }else {
//         newData.push({
//             date:date,
//             value:value
//         });
//         time=new Date(parseInt(i)).getMinutes();
//         value=data[i]
//         date=i
//     }
// }


// console.log(newData);
let time=new Date().getTime().toString();
console.log(time);

time=(time.slice(0,8))*100000;
console.log(new Date(time).toLocaleString());


