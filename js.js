let arr = [1, 32, 8, 7, 90, 97, 45, 44];

let res = arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        return acc < curr ? curr : acc;
    }
    return acc;
}, 0);

console.log(res);