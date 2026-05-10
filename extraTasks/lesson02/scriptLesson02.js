const num = 266219;


let numArr = num.toString().split("");
let product = numArr.reduce((acc, value) => acc * Number(value), 1);
console.log(product);


let pow3 = product ** 3;
console.log(pow3);


console.log(String(pow3).substring(0, 2));