let num = 12345;

let digit = 0

while (num > 0) {
    let curr = num % 10
    digit = digit * 10 + curr
    num = Math.floor(num / 10)
}

console.log(digit);