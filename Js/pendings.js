//================== APARNA ==================//

// Largest even with reduce
// let arr = [2, 3, 52, 23, 28, 87]

// let res = arr.reduce((acc, curr) => {
//     if (curr % 2 !== 0) {
//         return acc < curr ? curr : acc
//     }
//     return acc
// }, 0)

// console.log(res);
//-------------------------------------------------------------------------//

// Second largest key value pair
// let obj = { a: 10, b: 20, c: 30, d: 40 }

// let a = Object.entries(obj).sort((a, b) => b[1] - a[1])

// let secondLargest = a[1]

// console.log({ [secondLargest[0]]: secondLargest[1] })
//-------------------------------------------------------------------------//

// Array sum recursion
function sumArray(arr) {
    if(arr.length === 0) return 0
    return arr[0] + sumArray(arr.splice(1));
};

console.log(sumArray([1, 2, 3, 4, 5]));
//-------------------------------------------------------------------------//

// Unique number
// let nums = [1, 2, 1, 4, 2, 5, 8, 4, 9, 0, 0, 6]
// let res = []
// let obj = {}

// for (let elem of nums) {
//     obj[elem] = (obj[elem] || 0) + 1
// }

// for (let keys in obj) {
//     if (obj[keys] === 1) {
//         res.push(Number(keys))
//     }
// }

// console.log(res);
//-------------------------------------------------------------------------//

// Delete last element from object
// let obj = { a: 10, b: 20, c: 40, f: 50 };

// let keys = Object.keys(obj)
// delete obj[keys[keys.length - 1]]
// console.log(obj);
//-------------------------------------------------------------------------//

// Quick sort
// function quickSort(arr){
//     if(arr.length < 2){
//         return arr;
//     }
    
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for(let i = 0; i < arr.length-1; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         } else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)];
// };

// let arr = [-6, 20, 8, -2, 4];
// console.log(quickSort(arr));
//-------------------------------------------------------------------------//




//================== PRANAV SANKAR ==================//

// Count of zeros without split('')
// let arr = [1000, 2000, 4000];
// let count = 0

// for (let i = 0; i < arr.length; i++) {

//     let num = arr[i]

//     while (num > 0) {
//         if (num % 10 === 0) {
//             count++
//         }
//         num = Math.floor(num / 10)
//     }
// }

// console.log(count);

// METHOD 2
//--------------
// let a = [1000, 200];
// let str = '';

// for(let val of a){
//     str += val
// }

// let count = 0

// for(let i of str){
//     if(i === '0') count++
// }

// console.log(count)
//-------------------------------------------------------------------------//

// Proxy object -  used to define custom behavior for fundamental operations
// const target = { name: 'Vishnu' }

// const handler = {
//     get: (obj, prop) => {
//         return prop in obj ? obj[prop] : 'Property does not exist'
//     }
// }

// const proxy = new Proxy(target, handler)

// console.log(proxy.name);
// console.log(proxy.age);
//-------------------------------------------------------------------------//

// Largest word in a string without split('')
// let str = 'hello javascript is best';
// let temp = ''
// let largest = ''

// for (let i = 0; i < str.length; i++){
//     temp += str[i]
//     if (str[i] === ' ') {
//         if (temp.length > largest.length) {
//             largest = temp
//         }
//         temp = ''
//     }
// }

// console.log(largest);
//-------------------------------------------------------------------------//

// Largest word in a string without split('')
let word = 'aa bbbbbbb ddd c'
let largest = ''
let secondLargest = ''
let temp = ''

for (let i = 0; i < word.length; i++) {
    temp += word[i];

    if (word[i] === ' ') {
        if (temp.length > largest.length) {
            secondLargest = largest;
            largest = temp;
        } else if (temp.length > secondLargest.length) {
            secondLargest = temp;
        }
        temp = "";
    }
}

console.log(secondLargest)
//-------------------------------------------------------------------------//

let str = 'apple'
let res = ''

for(let i = 0; i < str.length; i++) {
    res += str[i].repeat(i + 1)
    
    if(i < str.length - 1) {
        res += '-'
    }
}

console.log(res)
//-------------------------------------------------------------------------//



//================== VIPIN VARGHESE ==================//

// Reverse sub array
const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

const result = arr.map(subArray => {
    let reverse   = [];
    for (let i = subArray.length - 1; i >= 0; i--) {
        reverse.push(subArray[i]);
    }
    return reverse;
});

console.log(result);

//-------------------------------------------------------------------------//

// Object sum
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

// Count of zero
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