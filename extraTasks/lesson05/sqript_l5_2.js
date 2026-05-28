/*
2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
— Рядом с каждым числом написать оба делителя данного числа
    Например: “Делители этого числа: 1 и n”
*/


function isPrime(num) {
    if (num === 1) { return false; }
    if (num === 2) { return true; }
    else {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                return false
            }
        }
        return true;
    }
}

function printPrimeNums(start, finish, callback) {
    for (let i = start; i <= finish; i++) {
        if (callback(i)) {
            console.log(`Число ${i} простое\tДелители этого числа 1 и ${i}`);
        }
    }
}

result = printPrimeNums(1, 100, isPrime);


