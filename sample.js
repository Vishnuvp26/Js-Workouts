//--------------Sort 'a' named friuts and capitalize 'A' --------------//
// const fruits = ["apple", "orange", "anar", "grape"];
// let newFruits = [];
// let arr = [];

// // Sort 'a' named fruits to new array
// for (let i = 0; i < fruits.length; i++){
//     if (fruits[i].charAt(0) == 'a') {
//         newFruits.push(fruits[i]);
//     }
// };

// // uppercase 'A'
// for (let key of newFruits) { //for of loop
//     let updatedKey = key.charAt(0).toUpperCase() + key.slice(1);
//     arr.push(updatedKey)
// }

// console.log(newFruits);
// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Palindrome with loop-------------------//
// let str = 'malayalam';
// let isPalindrome = true;

// let leftIndex = 0;
// let rightIndex = str.length-1;

// for (let i = 0; i < str.length / 2; i++){
//     if (str[leftIndex] !== str[rightIndex]) {
//         isPalindrome = false;
//         break;
//     }
//     leftIndex++;
//     rightIndex--;
// }

// if (isPalindrome) {
//     console.log(`${str} is palindrome`);
// } else {
//     console.log(`${str} is not palindrome`);
// }
//-------------------------------------------------------------------------//


//-------------------Palindrome with functions-------------------//
// let str = 'malayalam';
// if (str == str.split('').reverse().join('')) {
//     console.log(`${str} is palindrome`);
// } else {
//     console.log(`${str} is not palindrome`);
// }
//-------------------------------------------------------------------------//


//-------------------function palindrome-------------------//
// function isPalindrome (str) {
//     if (str == str.split('').reverse().join('')) {
//         console.log(`${str} is palindrome`);
//     } else {
//         console.log(`${str} is not palindrome`);
//     }
// }

// isPalindrome('malayalam');
// isPalindrome('vishnu');
//-------------------------------------------------------------------------//


//-------------------sum of first 2 index-------------------//
// const arr1 = [10, 20, 30, 40];
// const arr2 = [50, 60, 70, 80];

// let sumArr = arr1[0] + arr2[0];

// console.log(`sum = ${sumArr}`);
//-------------------------------------------------------------------------//


//-------------------Sum using promise-------------------//
// function findSum(num1, num2) {
//     return new Promise((resolve, reject) => {
//         resolve(num1 + num2);
//     });
// }

// findSum(10, 40)
//     .then(result => console.log(`The sum is: ${result}`))
//     .catch(error => console.error(error.message));
//-------------------------------------------------------------------------//


//-------------------async await-------------------//
// async function fetchData(dataNumber) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`Data ${dataNumber} fetched`);
//             resolve();
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log('Getting data 1....');
//     await fetchData(1);
//     console.log('Getting data 2....');
//     await fetchData(2);
//     console.log('Getting data 3....');
//     await fetchData(3);
//     console.log('Getting data 4....');
//     await fetchData(4);
//     console.log('Getting data 5....');
//     await fetchData(5);
// }

// getAllData();
//-------------------------------------------------------------------------//


//-------------------Print 1 to 50 while & do while loop-------------------//
//while
// let number = 1;
// while (number <= 50) {
//   console.log(number);
//   number++;
// }

//do while
// let num = 1;
// do {
//     console.log(num);
//     num++;
// } while (num <= 50);
//-------------------------------------------------------------------------//


//-------------------Largest string in an array-------------------//
// const fruits = ["Apple","Pomegranates"];

// const newFruits = fruits.reduce((acc, curr) => {
//     if (acc.length < curr.length) {
//         acc = curr;
//         return acc;
//     }
// });

// console.log(`The largest string is : ${newFruits}`);
//-------------------------------------------------------------------------//


//-------------------Length of strings in array-------------------//
// const arr = ["apple", "banana", "orange", "grape"];
// const lengths = arr.map(arr =>arr.length);

// console.log(lengths);
//-------------------------------------------------------------------------//


//-------------------CALL-------------------//
// const person = {
//     name: 'vishnu',
//     age: 24
// }

// function greet(message) {
//     console.log(message+ ' '+this.name);
// }

// greet.call(person, 'Helloo')
//-------------------------------------------------------------------------//


//-------------------APPLY-------------------//
// const person = {
//     name: 'Vishnu',
//     age: 24
// }

// function greet(message) {
//     console.log(message+ ' '+this.name);
// }

// greet.bind(person, ['hello dear']);
//-------------------------------------------------------------------------//


//-------------------BIND-------------------//
// const person = {
//     name: 'Vishnu',
//     age: 24
// }

// function greet(message) {
//     console.log(message+ ' '+this.name);
// }

// wish = greet.bind(person, ['hello dear']);
// wish();
//-------------------------------------------------------------------------//


//-------------------Array Destructuring-------------------//
// const colors = ['red', 'green', 'blue'];

// const [first, second, third] = colors;

// console.log(first);
//-------------------------------------------------------------------------//


//-------------------Object Destructuring-------------------//
// const person = {
//     name: 'Vishnu',
//     age: 24,
//     city: 'Calicut'
// };

// const { name, age, city } = person;

// console.log(age);
//-------------------------------------------------------------------------//


//-------------------Prime Generator-------------------//
// function primeGenerator(num) {
//     let count = 0;

//     for (let i = 3; i < 1000; i++){
//       let flag = 0
//         for (let j = 2; j < i; j++){
//             if (i % j == 0) {
//               flag = 1;
//               break
//             }
//         }

//         if (flag == 0 && count <= num) {
//           console.log(i);
//           count++
//         }
//     }
// }

// primeGenerator(2);
//-------------------------------------------------------------------------//


//-------------------Prime from Array-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//     let flag = 0;
//     for (let j = 2; j < arr[i]; j++) {
//         if (arr[i] % j === 0) {
//             flag = 1;
//             break;
//         }
//     }
//     if (flag === 0) {
//         console.log(arr[i]);
//     }
// }
//-------------------------------------------------------------------------//


//-------------------Prime using Filter-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const primeNumbers = arr.filter(num => {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < Math.sqrt(num); i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// });

// console.log(primeNumbers);
// -------------------------------------------------------------------------//


//-------------------Filter Even Numbers-------------------//
// const array = [1, 3, 2, 5, 4, 7, 6, 9, 8];

// const evenArray = array.filter(num => num % 2 == 0)

// console.log(evenArray);
//-------------------------------------------------------------------------//


//-------------------Reduce Sum of Array-------------------//
// const array = [1, 3, 2, 5, 4, 7, 6, 9, 8];

// const sum = array.reduce((acc, curr) => acc + curr, 0)

// console.log(`Sum = ${sum}`);
//-------------------------------------------------------------------------//


//-------------------Average with reduce-------------------//
// const array = [10, 3, 20, 50, 40, 7, 60, 9, 80];

// const sumArr = array.reduce((acc, curr) => acc + curr, 0)

// const avgArr = sumArr / array.length;

// console.log(`Sum = ${sumArr}`);
// console.log(`Average = ${avgArr}`)
//-------------------------------------------------------------------------//


//-------------------Delete multiples of 3-------------------//
// const arr = [2, 9, 12, 10, 6, 3, 25, 15, 20];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr.splice(i, 1)
//         i--;
//     }
// }

// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Delete multiples of 3, method2-------------------//
// const arr = [2, 9, 12, 10, 6, 3, 25, 15, 20];

// var newSize = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 3 !== 0) {
//         arr[newSize] = arr[i];
//         newSize++;
//     }
// }

// for (let i = 0; i < newSize; i++){
//     console.log(arr[i]);
// }
//-------------------------------------------------------------------------//


//-------------------Delete multiples of 3, Splice-------------------//
// const arr = [2, 9, 12, 10, 6, 3, 18];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         arr.splice(i, 1);
//         i--;
//     }
// }

// console.log(`After deleting multiples of 3: ${arr}`);
//-------------------------------------------------------------------------//


//-------------------SPLICE-------------------//
// const numbers = [1, 2, 3, 4, 5];

// let res = numbers.splice(0,3);

// console.log(numbers);
// console.log(res);
//-------------------------------------------------------------------------//


//-------------------RECURSION-------------------//
// function factorial(n) {
//     if (n == 1 || n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(4));
//-------------------------------------------------------------------------//


//-------------------Sum of all Numbers-------------------//
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }
// console.log('Sum :', sum);
//-------------------------------------------------------------------------//


//-------------------Double values with for in-------------------//
// const numbers = [1, 2, 3, 4, 5];
// for (const index in numbers) {
//     numbers[index] *= 2;
// }
// console.log(numbers);
//-------------------------------------------------------------------------//


//-------------------Sum of keys-------------------//
// const object = { a: 10, b: 20, c: 20, d: 50 };
// let sum = 0;
// for (const key in object) {
//     sum += object[key];
// }
// console.log(`Sum = ${sum}`);
//-------------------------------------------------------------------------//


//-------------------Higher Order Functions-------------------//
// function calculator(a, b, values) {
//     return values(a, b);
// }

// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// console.log(calculator(10,40, add));
// console.log(calculator(2,10, multiply));
//-------------------------------------------------------------------------//


//-------------------Remove Duplicates from an array-------------------//
// function removeDuplicates(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 array.splice(j, 1);
//                 j--;
//             }
//         }
//     }
// }

// const array = [1, 2, 2, 3, 4, 4, 5];
// removeDuplicates(array);
//-------------------------------------------------------------------------//


//-------------------Remove duplicate from array O(n) time-------------------//
// let arr = [1, 2, 1, 2, 5, 6, 9, 6, 4, 77];

// let res = []
// let seen = {}

// for (let val of arr) {
//     if (!seen[val]) {
//         res.push(val)
//         seen[val] = true
//     }
// }

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Remove duplicate from array includes-------------------//
// let arr = [1, 2, 1, 2, 5, 6, 9, 6, 4, 77];

// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//         res.push(arr[i])
//     }
// }

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Set-------------------//
// const arr = [1, 2, 2, 3, 4, 4, 5];

// const newArr = new Set(arr);

// console.log(newArr);
//-------------------------------------------------------------------------//


//-------------------FLATEN ARRAY-------------------//
// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// const ans = nestedArray.flat();

// console.log(ans);
//-------------------------------------------------------------------------//


//-------------------FLAT MAP-------------------//
// const arr = [1, 2, 3, 4];

// const mappedArray = arr.flatMap((x) => [x * 2, x * 3]);

// console.log(mappedArray);
//-------------------------------------------------------------------------//


//-------------------MAP-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const output = arr.filter((value) => {
//     if (value % 2 == 0) {
//         return value
//     }
// })

// console.log(output);
//-------------------------------------------------------------------------//


//-------------------String to Array-------------------//
// let str = 'Hello Vishnu';

// let newStr = str.split(' ')

// console.log(newStr);
//-------------------------------------------------------------------------//

//-------------------Constructor-------------------//
// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello my name is ${this.name} and iam ${this.age} years old`);
//     }
// };

// const Vishnu = new Person('Vishnu', 24);
// Vishnu.greet();
//-------------------------------------------------------------------------//


//-------------------Prototype-------------------//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//  }
 
//  Person.prototype.sayHello = function() {
//     console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
//  };
 
//  const person1 = new Person("Alice", 30);
 
//  console.log(person1.name);
//  console.log(person1.age);
//  person1.sayHello();
//-------------------------------------------------------------------------//


//-------------------Shallow Copy-------------------//
// const Person = {
//     name: "John",
//     age: 30,
//     adress: {
//       state: "Kerala",
//       city: "New York"
//     }
// };

// const result = {...Person }

// result.adress.city = 'Calicut';

// console.log(Person);
// console.log(result);
//-------------------------------------------------------------------------//


//-------------------Deep Copy-------------------//
// const obj = {
//   name: "John",
//   age: 30,
//   adress: {
//     state: "Kerala",
//     city: "New York"
//   }
// };
  
//   const deepCopy = JSON.parse(JSON.stringify(obj));
  
//   deepCopy.adress.state = 'Delhi';
  
//   console.log(obj);
//   console.log(deepCopy);
//-------------------------------------------------------------------------//


//-------------------Hoisting-------------------//
// var x = 20;

// function sum() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }
// sum();
//-------------------------------------------------------------------------//


//-------------------Largest from three numbers-------------------//
// let a = 260;
// let b = 20;
// let c = 100;
// let largest;

// if (a > b && a > c) {
//   largest = a;
// } else if (b > c) {
//   largest = b;
// } else {
//   largest = c;
// }

// console.log(`Largest number is ${largest}`);
//-------------------------------------------------------------------------//


//-------------------CURRYING-------------------//
// function curriedAdd(a) {
//   return function (b) {
//     return a + b;
//   }
// }

// const addTwo = curriedAdd(2);
// console.log(addTwo(3));
//-------------------------------------------------------------------------//


//-------------------Object Spread & Change Property-------------------//
// const originalObject = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA"
//   }
// };

// const modifiedObject = {
//   ...originalObject,
//   age: 35
// };

// console.log(modifiedObject);
//-------------------------------------------------------------------------//


//-------------------Delete & Add Key from object-------------------//
// const obj = {
//   name: "Vishnu",
//   age: 30,
//   city: "Calicut"
// };

// obj.mob = 8848881691 // adding new key
// delete (obj.age); // deleting key

// console.log(obj);
//-------------------------------------------------------------------------//


//-------------------REDUCE sum mixed array-------------------//
// const arr = [10, 40, 'hello', 20, 'a', 30];

// const res= arr.reduce((acc, curr) => {
//   if (typeof curr == 'number') {
//     return acc + curr;
//   } else {
//     return acc;
//   }
// },0);

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Reverse Array using Reduce-------------------//
// const arr = [1,2,3,4];

// const reverseArr = arr.reduce((acc, curr) => [curr, ...acc], [])

// console.log(reverseArr);
//-------------------------------------------------------------------------//


//-------------------Math methods-------------------//
// console.log(Math.abs(-5)); // Output: 5
// console.log(Math.abs(3));  // Output: 3

// console.log(Math.round(4.7)); // Output: 5
// console.log(Math.round(4.2)); // Output: 4

// console.log(Math.floor(4.7)); // Output: 4
// console.log(Math.floor(4.2)); // Output: 4

// console.log(Math.ceil(4.7)); // Output: 5
// console.log(Math.ceil(4.2)); // Output: 5

// console.log(Math.min(5, 10, -3, 8)); // Output: -3

// console.log(Math.max(5, 10, -3, 8)); // Output: 10

// console.log(Math.random()); // Output: a random number between 0 and 1

// console.log(Math.pow(2, 3)); // Output: 8 (2^3)

// console.log(Math.sqrt(9)); // Output: 3
//-------------------------------------------------------------------------//


//-------------------Sum of even numbers-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenSum = arr.filter(x => x % 2 === 0).reduce((acc, curr) => acc + curr, 0);

// console.log(`Sum of even numbers : ${evenSum}`);
//-------------------------------------------------------------------------//


//-------------------Sum of Prime using Filter & Reduce-------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const primeSum = arr.filter((value) => {
//     if (value <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(value); i++) {
//         if (value % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }).reduce((acc,curr)=>acc+curr,0)

// console.log(`sum of prime numbers : ${primeSum}`);
//-------------------------------------------------------------------------//


//-------------------Array Frequency-------------------//
// function frequency(array){
//     let freqArr = [];
//     for (i = 0; i < array.length; i++){
//         if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
//             freqArr.push(array[i])
//         }
//     }
//     return freqArr;
// }

// const arr = [1, 2, 3, 3, 4, 5, 1, 2, 3, 6];
// console.log(frequency(arr));
//-------------------------------------------------------------------------//


//-------------------Objects inside array-------------------//
// const a = [{ a: 10 }, { a: 50 }, { a: 20 }, { a: 40 }, { a: 30 }];

// const largest = a.reduce((acc, curr) => {
//     if (acc.a < curr.a) {
//         return curr;
//     }
//     return acc;
// }, a[0]);

// console.log(largest);
//-------------------------------------------------------------------------//


//-------------------Remove largest element-------------------//
// const arr = [10, 30, 80, 40, 20];

// let max = arr[0];

// arr.forEach(element => {
//     if (element > max) {
//         max = element;
//     }
// });

// let maxIndex = arr.indexOf(max);
// arr.splice(maxIndex, 1);

// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Remove largest element-------------------//
// const arr = [10, 30, 80, 40, 20];

// const max = arr.indexOf(Math.max(...arr));

// arr.splice(max, 1);

// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Even Number Generator-------------------//
// function evenGenerator(num) {
//     let count = 0;
//     for (let i = 2; count < num; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//             count++;
//         }
//     }
// }

// evenGenerator(6);
//-------------------------------------------------------------------------//


//-------------------Nullish Operator-------------------//
// const a = 20;
// const b = ' ';
// const c = null;
// const d = undefined;
// const e = 'helo';

// const result1 = a ?? 'default';
// const result2 = b ?? 'default';
// const result3 = c ?? 'default';
// const result4 = d ?? 'default';
// const result5 = e ?? 'default';

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);
//-------------------------------------------------------------------------//


//-------------------SetTimeout-------------------//
// function delayedMessage() {
//     setTimeout(() => {
//         console.log('Hello i came after 3 second');
//     }, 3000)
// };

// delayedMessage();
//-------------------------------------------------------------------------//


//-------------------SetInterval-------------------//
// function delayedMessage() {
//     let counter = 0;
//     const clear = setInterval(() => {
//         console.log('Printing is started');
//         counter++;

//         if (counter === 3) {
//             clearInterval(clear);
//             console.log('Printing ended');
//         }
//     }, 1000);
// };

// delayedMessage();
//-------------------------------------------------------------------------//


//-------------------Count of Vowels-------------------//
// const str = "UnderCoverAgent";
// let count = 0;
// for (const words of str) {
//     const char = words.toLowerCase();
//     if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
//         count++;
//     }
// };

// console.log(`count of vowels in ${str} = ${count}`);
//-------------------------------------------------------------------------//


//-------------------AsyncAwait-------------------//
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ name: "Vishnu", age: 24, city: "Kozhikode" });
//         }, 3000)
//     });
// }

// async function fetchUserData() {
//     console.log('Fetching user data.....');
//     const data = await fetchData();
//     console.log(data);
// }

// fetchUserData();
//-------------------------------------------------------------------------//


//-------------------Loop an object to print key value-------------------//
// const obj = {
//     name: 'Vishnu',
//     age: 24,
//     location: 'Kerala'
// };

// for (let key in obj) {
//     console.log(key);
//     // console.log(`${key}: ${obj[key]}`);
// };
//-------------------------------------------------------------------------//


//-------------------IIFE-------------------//
// (function () {
//     console.log('hello IIFE');
// })();
//-------------------------------------------------------------------------//


//-------------------REVERSE FIRST AND LAST INDEX-------------------//
// const a = [1, 2, 3, 4, 5];

// let temp;

// temp = a[a.length - 1];
// a[a.length - 1] = a[0];
// a[0] = temp;

// console.log(a);
//-------------------------------------------------------------------------//


//-------------------REPLACE A WITH E-------------------//
// let a = 'malayalam';
// const b = a.split('')
// const c=b.map((num)=>{
//     if(num=='a'){
//         return 'e'
//     }
//     else{
//         return num
//     }
// })
// console.log(c.join(''));
//-------------------------------------------------------------------------//


//-------------------Sort Two Arrays-------------------//
// const a = [1, 3, 5];
// const b = [2, 4, 6];

// const c = [...a, ...b];

// for(let i=0;i<c.length;i++){
//     for(j=i+1;j<c.length;j++){
//         if(c[j]<c[i]){
//             temp = c[j];
//             c[j] = c[i];
//             c[i] = temp;
//         }
//     }
// }
// console.log(c);
//-------------------------------------------------------------------------//


//-------------------CHECK AN ARRAY EMPTY OR NOT-------------------//
// const a = [2, 3, 3];
// if(a.length==0){
//     console.log('Array is empty');
// }
// else{
//     console.log('Array is not empty');
// }
//-------------------------------------------------------------------------//


//-------------------CHECK IF AN OBJECT EMPTY OR NOT-------------------//
// const person = { name: 'John' }
// console.log(Object.entries(obj) == 0)
//-------------------------------------------------------------------------//


//-------------------Alphabetic order sort-------------------//
// const a = 'Javascript';

// const b = a.split('').sort();
// console.log(b.join(''));
//-------------------------------------------------------------------------//


//-------------------Random Number Generator-------------------//
// function random(number) {
//     return Math.floor(Math.random() * number);
// };
// console.log(random(10000));
//-------------------------------------------------------------------------//


//-------------------Closure-------------------//
// function a() {
//     let a = 100;
//     function b() {
//         let b = 7
//         function c() {
//             console.log(a, b);
//         }
//         c();
//     }
//     b();
// }
// a();
//-------------------------------------------------------------------------//


//-------------------SECOND LARGEST-------------------//
// function secondLarge(arr) {
//     let max = -Infinity
//     let secondMax = -Infinity
    
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max) {
//             secondMax = max
//             max = arr[i]
//         } else if (arr[i] > secondMax) {
//             secondMax = arr[i]
//         }
//     }
//     return secondMax
// }

// let arr = [1, 3, 15, 4, 9, 7, 23]
// secondLarge(arr)
//-------------------------------------------------------------------------//


//-------------------Second Largest with reduce-------------------//
// const a = [12,2,3,4,5]
// const { secMax } = a.reduce((acc, curr) => {
//     if (curr > acc.max) {
//         acc.secMax = acc.max
//         acc.max = curr
//     } else if (curr > acc.secMax) {
//         acc.secMax = curr
//     }
//     return acc
// }, {
//     max: -Infinity,
//     secMax: -Infinity
// });

// console.log(secMax)
//-------------------------------------------------------------------------//


//-------------------Missing Numbers-------------------//
// let arr = [1, 2, 5, 9];

// for (let i = 0; i < Math.max(...arr); i++){
//     if (i != 0 && !arr.includes(i)) {
//         console.log(i);
//     }
// }
//-------------------------------------------------------------------------//


//-------------------First Missing Number-------------------//
// let arr = [1, 2, 4, 7, 8]

// for (let i = 1; i < arr.length; i++){
//     if (!arr.includes(i)) {
//         console.log(i);
//         break
//     }
    
// }
//-------------------------------------------------------------------------//


// function which takes an sentence and converts it to an array of words
// function buildArr(str) {
//     return str.split(' ').filter(word => word.trim() !== '')
// }

// console.log(buildArr('men  are brave '))


//-------------------Paliandrome while-------------------//
// function isPaliandrome(str) {
//     let left = 0;
//     let right = str.length - 1;
    
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

// console.log(isPaliandrome('malayalam'));
//-------------------------------------------------------------------------//


//-------------------Proxy Object-------------------//
// let target = { name: 'John' }

// let handler = {
//     get: (obj, prop) => {
//         return prop in obj ? obj[prop] : 'Property not exist'
//     }
// }

// const proxy = new Proxy(target, handler)

// console.log(proxy.name);
// console.log(proxy.age);
// //-------------------------------------------------------------------------//


//-------------------Validation with proxy object-------------------//
let target = {
    name: "vishnu",
    age: 26
}

let handler = {
    set: (obj, prop, value) => {
        if (prop === 'age') {
            if (value < 18 || value > 30) {
                throw new Error("Age must be between 18 and 30")
            }
        }
        obj[prop] = value
        return true
    }
}

let proxy = new Proxy(target, handler);

try {
    proxy.age = 32
    console.log(`Age ${proxy.age} has been updated`);
} catch (error) {
    console.log(error.message);
}
//-------------------------------------------------------------------------//


//-------------------Filter numbers-------------------//
// let arr = [1, 5, null, 9, undefined, 9, 3, 0];

// for (let i = 0; i < arr.length; i++){
//     if (typeof arr[i] !== 'number') {
//         arr.splice(i, 1)
//         i--
//     }
// }

// console.log(arr);
//-------------------------------------------------------------------------//


//-------------------Largest key-------------------//
// let obj = { a: 10, b: 30, s: 5, f: 41, g: 4 }

// let maxKey = Object.keys(obj).reduce((currKey, maxKey) => {
//     return obj[currKey] > obj[maxKey] ? currKey : maxKey
// })

// console.log(maxKey);
//-------------------------------------------------------------------------//


//-------------------Default parameter-------------------//
// function revStr(str = 'hello') {
//     return str.split('')
// }
// console.log(revStr());
//-------------------------------------------------------------------------//


//-------------------First half & second half multiply-------------------//
// function multiplier(arr) {
//     let limit = Math.floor(arr.length / 2)
//     return arr.map(num =>  num < limit ? num * 2 : num * 5)
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(multiplier(arr));
//-------------------------------------------------------------------------//


//-------------------Print 1 to 10 with setTimeout-------------------//
// for (let i = 1; i <= 10; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000);
// }
//-------------------------------------------------------------------------//


//-------------------second least occurance-------------------//
// let arr = [1,1,1,3,3,3,3,3,3,3,4,4,1,1,1,2,2]
// let obj = {}

// for(let val of arr){
//     obj[val] = (obj[val] || 0) + 1
// }
// let freq = [...new Set(Object.values(obj))].sort((a, b) => a - b)

// let secondLeast = freq[1]

// let res = Object.keys(obj).find((key) => obj[key] === secondLeast)

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Move zeros to end without change in order-------------------//
// let nums = [0, 1, 2, 0, 3, 0, 4];

// let nonZeros = nums.filter(num => num !== 0)
// let zeros = nums.filter(num => num == 0)

// let res = [...nonZeros, ...zeros]
// console.log(res);
//-------------------------------------------------------------------------//


//-------------------First non repeating character-------------------//
// function firstNonRepeatChar(str) {
//     let obj = {}

//     for (let char of str) {
//         obj[char] = (obj[char] || 0) + 1
//     }

//     for (let key in obj) {
//         if (obj[key] === 1) {
//             return key
//         }
//     }
//     return null;
// }

// let str = 'swiss'
// console.log(firstNonRepeatChar(str));
//-------------------------------------------------------------------------//


//-------------------Capitalise starting letter of string-------------------//
// function capitaliser(str) {
//     return str
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ')
// }

// let str = 'react is awsome library'
// console.log(capitaliser(str));
//-------------------------------------------------------------------------//


//-------------------Capitalise starting letter of array-------------------//
// let arr = ['apple', 'orange', 'grape', 'banana'];

// let res = arr.map(x => {
//     return x.charAt(0).toUpperCase() + x.slice(1)
// })

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Have unique characters-------------------//
// HASH MAP
// function hasUniqueCharacters(string) {
//     let str = string.split('')
//     let obj = {}

//     for (let char of str) {
//         obj[char] = (obj[char] || 0) + 1
//     }
    
//     for (let key in obj) {
//         if (obj[key] !== 1) {
//             return false
//         }
//     }
//     return true
// }


// let str = 'abcdef'
// console.log(hasUniqueCharacters(str));

// SET ()
// function hasUniqueCharacters(string) {
//     let set = new Set()

//     for (let char of str) {
//         if (set.has(char)) {
//             return false
//         }
//         set.add(char)
//     }
//     return true
// }

// let str = 'abcddef'
// console.log(hasUniqueCharacters(str));
//-------------------------------------------------------------------------//


//-------------------Duplicate zeros-------------------//
// let arr = [1,0,2,3,0,4,5,0]

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 0) {
//         arr.pop()
//         arr.splice(i, 0, 0)
//         i++
//     }
// }

// console.log(arr)
//-------------------------------------------------------------------------//


//-------------------Count of maximum occurance-------------------//
// let arr = ['a', 'b', 'a', 'n', 'z', 't', 'a'];

// let obj = {}

// for(let char of arr){
//     obj[char] = (obj[char] || 0) + 1
// }

// let max = Math.max(...Object.values(obj))

// let res = Object.keys(obj).filter(char => obj[char] === max)

// console.log(res)
//-------------------------------------------------------------------------//


//-------------------SECOND LEAST OCCURANCE-------------------//
// let arr = [1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 4, 4, 1, 1, 1, 2, 2]

// let obj = {}

// for (let elem of arr) {
//     obj[elem] = (obj[elem] || 0) + 1
// }

// let freq = [...new Set(Object.values(obj))].sort((a, b) => a - b)

// let res = Object.keys(obj).find(key => obj[key] === freq[1])

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Highest score-------------------//
// const entries = [
//     { name: "Alice", score: 123 },
//     { name: "Bob", score: 12 },
//     { name: "Charlie", score: 456 },
//     { name: "Dave", score: 78 },
//     { name: "Eve", score: 78 }
// ];

// let max = 0
// let res = ''

// for (let i of entries) {
//     if (i.score > max) {
//         max = i.score
//         res = i.name
//     }
// }

// console.log(res)
//-------------------------------------------------------------------------//


//-------------------Return duplicate odd-------------------//
// function repeatOdds(arr) {
//     let obj = {}

//     arr.forEach(num => {
//         if (num % 2 !== 0) {
//             obj[num] = (obj[num] || 0) + 1
//         }
//     })

//     return Object.keys(obj)
//     .filter(value => obj[value] > 1).map(Number)
// }

// let arr = [1, 2, 4, 1, 5, 7, 1, 7];
// console.log(repeatOdds(arr));
//-------------------------------------------------------------------------//


//-------------------Numbers with Even Number of Digits count-------------------//
// const findNumbers = function(nums) {
//     let arr = nums.join(' ').split(' ')
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].length % 2 === 0){
//             count++
//         }
//     }
//     return count
// };

// const nums = [12,345,2,6,7896]
// console.log(findNumbers(nums))
//-------------------------------------------------------------------------//


//-------------------Sum of digits without converting to string-------------------//
// let num = 1234
// let sum = 0

// while(num > 0) {
//     sum += num % 10
//     num = Math.floor(num / 10)
// }

// console.log(sum)
//-------------------------------------------------------------------------//


//-------------------Find index of the prefix-------------------//
// function indexFinder(sentence, prefix) {
//     let words = sentence.split(' ')
//     for (let i = 0; i < words.length; i++){
//         if (words[i].startsWith(prefix)) {
//             return i
//         }
//     }
//     return -1
// }

// let sentence = "i love eating burger", prefix = "burg"
// console.log(indexFinder(sentence, prefix));
//-------------------------------------------------------------------------//


//-------------------Consecutive odds-------------------//
// function consecutiveOdds(arr) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
//             arr.splice(i, 2)
//             i--
//         }
//     }
//     return arr
// }

// console.log(consecutiveOdds([1, 2, 2, 5, 6, 9, 8, 4, 1]));
//-------------------------------------------------------------------------//


//-------------------Extra characters-------------------//
// let a = 'aabbcc'
// let b = 'aabbcccd'

// let aMap = {}
// let bMap = {}

// for(let val of a){
//     aMap[val] = (aMap[val] || 0) + 1
// }

// for(let val of b){
//     bMap[val] = (bMap[val] || 0) + 1
// }

// let res = []

// for (let i in bMap) {
//     if(i in aMap){
//         if(bMap[i] > aMap[i]){
//             res.push(i)
//         }
//     } else {
//         res.push(i)
//     }
// }

// console.log(res)
//-------------------------------------------------------------------------//


//-------------------Missing odd numbers-------------------//
// let arr = [5, 7, 9, 11, 17]

// for (let i = 1; i < Math.max(...arr); i++){
//     if (!arr.includes(i)) {
//         if (i % 2 !== 0) {
//             console.log(i);
//         }
//     }
// }
//-------------------------------------------------------------------------//


//-------------------First occurance to Capital-------------------//
function capitalizer(str){
    let obj = {}
    for(let char of str){
        obj[char] = (obj[char] || 0) + 1
    }
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]] === 1){
            return str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
        }
    }
}

let str = 'swiss'
console.log(capitalizer(str))
//-------------------------------------------------------------------------//


//-------------------Funtion borrowing-------------------//
// let person1 = {
//     firstName: 'Jane',
//     lastName: 'Smith',
//     fullName: function () {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
// }

// let person2 = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// person1.fullName.call(person2)
//-------------------------------------------------------------------------//


//-------------------Remove duplicate from string-------------------//
// let str = 'malayalam'
// let newChar = ''

// for (let i = 0; i < str.length; i++){
//     if (!newChar.includes(str[i])) {
//         newChar += str[i]
//     }
// }

// console.log(newChar);
//-------------------------------------------------------------------------//


//-------------------Vowels count-------------------//
// let str = 'AbAilmEdUlKaIO'
// let vowels = 'aeiouAEIOU'

// let count = 0

// for (let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])) count++
// }

// console.log(count);
//-------------------------------------------------------------------------//


//-------------------Anagram-------------------//
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) return false
//     let a = str1.split('').sort().join('')
//     let b = str2.split('').sort().join('')
//     return a === b
// }

// let str1 = 'lsten'
// let str2 = 'silent'
// console.log(isAnagram(str1, str2));
//-------------------------------------------------------------------------//


//-------------------Flatten array with recursion-------------------//
// function flattenArr(arr, i = 0) {
//     if (i >= arr.length) return arr
//     if (Array.isArray(arr[i])) {
//         arr.splice(i, 1, ...arr[i])
//     }
//     i++
//     return flattenArr(arr, i)
// }

// const arr = [1, 2, [3, 7, [9, 5, 0], [1, 4, 20]], [11, 34, 21]]
// console.log(flattenArr(arr))
//-------------------------------------------------------------------------//


//-------------------Remove duplicates from string-------------------//
// let str = 'aabccddcgfcrrtdvv'
// let obj = {}

// for(let char of str){
//   obj[char] = (obj[char] || 0) + 1
// }

// str = ''

// for(keys in obj) {
//     if(obj[keys] === 1) {
//         str += keys
//     }
// }

// console.log(str)
//-------------------------------------------------------------------------//


//-------------------Destructuring nested objects-------------------//
// const user = {
// 	name : 'John',
// 	age : 15,
// 	marks : {
// 		science : 46,
// 		english : 48,
// 		maths : 45
// 	}
// }

// const { name, age, marks: {science, english, maths} } = user
// console.log(maths);
//-------------------------------------------------------------------------//


//-------------------Replace star in place of vowels-------------------//
// let str = 'malayalam'
// let vowels = 'aeiou'
// let res = ''

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         res += '*'
//     } else {
//         res += str[i]
//     }
// }

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Remove duplicate even-------------------//
// function removedup(arr, i = 0, res = []){
//     if(i >= arr.length) return res
//     if(!res.includes(arr[i]) || arr[i] % 2 === 1){
//         res.push(arr[i])
//     }
//     i++
//     return removedup(arr, i, res)
// }

// let arr = [1, 4, 4, 1, 4, 2, 3, 2, 7, 9, 0];
// console.log(removedup(arr))
//-------------------------------------------------------------------------//


//-------------------OTP generate-------------------//
// function otpGenerator() {
//     console.log(Math.floor(100000 + Math.random() * 900000))
// }

// otpGenerator()
//-------------------------------------------------------------------------//


//-------------------Reverse sub array-------------------//
// const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

// const result = arr.map(subArray => {
//     let reverse   = [];
//     for (let i = subArray.length - 1; i >= 0; i--) {
//         reverse.push(subArray[i]);
//     }
//     return reverse;
// });

// console.log(result);
//-------------------------------------------------------------------------//


//-------------------Structured clone-------------------//
// let person = {
//     name: 'Vishnu',
//     age: 25,
//     details: {
//         age: 25,
//         city: 'Calicut',
//     }
// }

// let clone = structuredClone(person)
// clone.details.city = 'Kottayam'

// console.log('Original :', person.details.city)
// console.log('Cloned :', clone.details.city)
//-------------------------------------------------------------------------//


//-------------------Reverse each words in a string-------------------//
// const input = "Hello world from JavaScript";

// let res = input.split(' ').
//     map(word => word.split('').reverse().join('')).join(' ');

// console.log(res)
//-------------------------------------------------------------------------//


//-------------------Throw error if fractional number occur-------------------//
// function chechFractional(...args) {
//     for (let arg of args) {
//         if (typeof arg === 'number' && !Number.isInteger(arg)) {
//             throw new Error('one argument is fractional number')
//         }
//     }
//     console.log('all are integers')
// }

// try {
//     chechFractional(1, 2, 3, 6.5)
// } catch (error) {
//     console.log(error);
// }
//-------------------------------------------------------------------------//


//-------------------Print time without printing date-------------------//
// const date = new Date();
// const res = date.toLocaleTimeString();
// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Find avg age of people age less than 30-------------------//
// let users = [
//     { age: 28, name: "John Doe" },
//     { age: 34, name: "Jane Smith" },
//     { age: 29, name: "Alice Johnson" },
//     { age: 42, name: "Bob Brown" }
// ];

// let sum = 0;
// let count = 0

// for (let i = 0; i < users.length; i++) {
//     if (users[i].age < 30) {
//         sum += users[i].age;
//         count++
//     }
// };

// let avg = count > 0 ? sum / count : 0;
// console.log('Average of the age', avg);
//-------------------------------------------------------------------------//


//-------------------Fetch json data-------------------//
// const fetchData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//             throw new Error('Reponse status', response.status);
//         }
//         const json = await response.json();
//         console.log(json);
//     } catch (error) {
        
//     }
// };

// fetchData();
//-------------------------------------------------------------------------//


//-------------------Largest digit without split-------------------//
let num = 1234857;

let largest = 0;

while (num > 0) {
    let digit = num % 10
    if (digit > largest) {
        largest = digit
    }
    num = Math.floor(num / 10)
}

console.log(largest);
//-------------------------------------------------------------------------//


//-------------------Function called only once-------------------//
function one(fn) {
    let called = false;

    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args)
        } else {
            console.log('Function has already called once');
        }
    }
};

function greet(name) {
    console.log(`Hello ${name}`);
};

const greeted = one(greet);

greeted('Abin');
greeted('John');
//-------------------------------------------------------------------------//


//-------------------Remove duplicate even-------------------//
let arr = [1, 2, 1, 2, 5, 6, 9, 6, 4, 77];

let obj = {};

for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1
}

let res = arr.filter(val => !(obj[val] > 1 && obj[val] % 2 === 0));
console.log(res);
//-------------------------------------------------------------------------//


//-------------------Reverse a digit-------------------//
// let num = 12345;
// let reversed = 0;

// while (num != 0) {
//     const digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10)
// }

// console.log(reversed);
//-------------------------------------------------------------------------//


//-------------------Fibonacci-------------------//
function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2)
};

console.log(fibonacci(10));
//-------------------------------------------------------------------------//


//-------------------Longest sequence in a word-------------------//
// let str = 'abbbcccc';

// let largest = '', current = '';

// for (let i = 0; i <= str.length; i++) {
//     if (i === 0 || str[i] === str[i - 1]) {
//         current += str[i]
//     } else {
//         if (current.length > largest.length) {
//             largest = current
//         }
//         current = str[i]
//     }
// };

// console.log(largest);
//-------------------------------------------------------------------------//


//-------------------Second longest sequence in a word-------------------//
// let str = 'abbcccdddd';

// let largest = '', second = '', current = '';

// for (let i = 0; i <= str.length; i++) {
//     if (i === 0 || str[i] === str[i - 1]) {
//         current += str[i];
//     } else {
//         if (current.length > largest.length) {
//             second = largest;
//             largest = current;
//         } else if (current.length > second.length && current !== largest) {
//             second = current;
//         }
//         current = str[i];
//     }
// }

// console.log(second);
//-------------------------------------------------------------------------//


// //-------------------SECOND LARGEST WORD-------------------//
// let str = 'javascript is the best coding language';

// let largest = '', second = '', word = '';

// for (let i = 0; i <= str.length; i++) {
//     if (str[i] !== ' ' && i !== str.length) {
//         word += str[i]
//     } else {
//         if (word.length > largest.length) {
//             second = largest
//             largest = word
//         } else if (word.length > second.length) {
//             second = word
//         }
//         word = ''
//     }
// };

// console.log('Second Largest:', second);
//-------------------------------------------------------------------------//


//-------------------THIRD LARGEST WORD-------------------//
// let str = 'javascript is the best coding language';

// let largest = '', second = '', third = '', word = '';

// for (let i = 0; i <= str.length; i++) {
//     if (str[i] !== ' ' && i !== str.length) {
//         word += str[i]
//     } else {
//         if (word.length > largest.length) {
//             third = second
//             second = largest
//             largest = word
//         } else if (word.length > second.length) {
//             third = second
//             second = word
//         } else if (word.length > third.length) {
//             third = word
//         }
//         word = ''
//     }
// };

// console.log('Third Largest:', third);
//-------------------------------------------------------------------------//


//-------------------Custom Map-------------------//
// Array.prototype.Hey = function (callback) {
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this));
//     }
//     return result;
// };


// let arr = [1, 2, 3, 4];
// let res = arr.Hey(x => x * 2);

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------Callback hell, promise, async await-------------------//
//CALLBACK HELL
// console.log('start');
// setTimeout(() => {
//     console.log('step 1');

//     setTimeout(() => {
//         console.log('step 2');

//         setTimeout(() => {
//             console.log('step 3');

//             setTimeout(() => {
//                 console.log('step 4');

//                 setTimeout(() => {
//                     console.log('step 5');
//                 }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);

// function logger(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             resolve()
//         }, delay);
//     })
// };

//PROMISE WAY
// console.log('start')
// logger('step 1', 1000)
//     .then(() => logger('step 2', 1000))
//     .then(() => logger('step 3', 1000))
//     .then(() => logger('step 4', 1000))

//ASYNC AWAIT
// async function hey() {
//     console.log('start');
//     await logger('step 1', 1000)
//     await logger('step 2', 1000)
//     await logger('step 3', 1000)
//     await logger('step 4', 1000)
// };

// hey()
//-------------------------------------------------------------------------//


//-------------------Count of zeros without split('')-------------------//
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
//-------------------------------------------------------------------------//


//-------------------apple (a-pp-ppp-llll-eeeee)-------------------//
// let str = 'apple'
// let res = ''

// for(let i = 0; i < str.length; i++) {
//     res += str[i].repeat(i + 1)
    
//     if(i < str.length - 1) {
//         res += '-'
//     }
// }

// console.log(res)
//-------------------------------------------------------------------------//


//-------------------Largest even with reduce-------------------//
// let arr = [2, 3, 52, 23, 28, 87]

// let res = arr.reduce((acc, curr) => {
//     if (curr % 2 !== 0) {
//         return acc < curr ? curr : acc
//     }
//     return acc
// }, 0)

// console.log(res);
//-------------------------------------------------------------------------//


//-------------------0-------------------//
//-------------------------------------------------------------------------//


//-------------------0-------------------//
//-------------------------------------------------------------------------//


//-------------------0-------------------//
//-------------------------------------------------------------------------//