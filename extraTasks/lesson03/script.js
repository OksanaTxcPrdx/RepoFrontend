'use strict'
// Задание 1 

//Переменная lang может принимать 2 значения: 'ru' 'en'.

const lang = 'ru';

const ruWeekDays = "пн, вт, ср, чт, пт, сб, вс";
const enWeekDays = "Mon, Tue, Wed, Thu, Fri, Sat, Sun"

if (lang === 'ru') {
    console.log(ruWeekDays);
} else if (lang === 'en') {
    console.log(enWeekDays);
} else {
    console.log("There is no names for this option");
}

switch (lang) {
    case 'ru':
        console.log(ruWeekDays);
        break;
    case 'en':
        console.log(enWeekDays);
        break;
    default:
        console.log("There is no names for this option");
        break;
}

let mapWeekDays = new Map();
mapWeekDays.set('ru', ruWeekDays);
mapWeekDays.set('en', enWeekDays);

console.log(mapWeekDays.get(lang));

// Задание 2 

// У нас есть переменная namePerson. 
// Если значение этой переменной “Артем” то вывести в консоль “директор”,
//  если значение “Александр” то вывести в консоль “преподаватель”,
//  с любым другим значением вывести в консоль “студент”

let namePerson = "Александр";

namePerson === "Артем" ? console.log("директор") :
    namePerson === "Александр" ? console.log("преподаватель") :
        console.log("студент");