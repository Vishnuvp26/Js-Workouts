//-------------------OBJECT SUM-------------------//
// const ab = [
//     { af: [4, 34, 343] },
//     { af: [4, 34, 343] },
//     { af: [4, 34, 343] },
//     { af: [4, 34, 343] }
// ];

// for (let i = 0; i < ab.length; i++) {
//     ab[i].af = ab[i].af.reduce((acc, curr) => acc + curr, 0)
// }

// console.log(ab);
//-------------------------------------------------------------------------//


//-------------------Count of zero-------------------//
// const ab = [{ af: [3, 98, 23, 0, 0, 22] }, { af: [3, 98, 23, 22] }, { af: [3, 98, 23, -322] }];

// let count = 0;

// ab.forEach((x) => {
//     x.af.forEach((value) => {
//         if (value === 0) {
//             count++;
//         }
//     });
// });

// console.log(count);
//-------------------------------------------------------------------------//


//-------------------Average marks-------------------//
// const student = {
//     name: "Vishnu",
//     marks: { math: 80, science: 90, english: 85 }
// };

// let mark = Object.values(student.marks)
// let total = mark.reduce((a, c) => a + c, 0)
// let res = total / mark.length

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Delete key-------------------//
// function deleteIndex(obj, index) {
//     let keys = Object.keys(obj)
//     if (index < 0 || index >= keys.length) return -1
    
//     let target = keys[index]
//     delete obj[target]
//     return obj
// }

// let obj = { a: 10, b: 20, c: 30, d: 40 };
// console.log(deleteIndex(obj, 2));
//-------------------------------------------------------------------------//


//-------------------Find by id-------------------//
// const data = {
//     users: [
//         { id: 1, name: "Alice" },
//         { id: 2, name: "Bob" },
//         { id: 3, name: "Charlie" }
//     ]
// };

// function findUserById(data, id) {
//     return data.users.find(user => user.id === id) || null
// }

// console.log(findUserById(data, 3));
//-------------------------------------------------------------------------//


//-------------------Sum-------------------//
let obj = '{"a":[10,20,5],"b":10,"c":18,"d":[10,20,30]}'

let arr = JSON.parse(obj)
let res = Object.values(arr)

for (let i = 0; i < res.length; i++){
    if (Array.isArray(res[i])) {
        res.splice(i, 1, ...res[i])
    }
}

let out = res.reduce((acc, curr) => acc + curr, 0)

console.log(out);
//-------------------------------------------------------------------------//


//-------------------Merge 2 objects-------------------//
const a = { a: 2, b: 3, c: 4 };
const b = { a: 3, c: 32, e: 3 };

for (let keys in b) {
    if (!a.hasOwnProperty(keys)) { 
        a[keys] = b[keys];
    }
}

console.log(a);
//-------------------------------------------------------------------------//