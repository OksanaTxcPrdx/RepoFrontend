'use strict'
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
