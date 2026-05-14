'use strict'

let rollback = 27;
let title = prompt("Как называется ваш проект?", "RepoFrontend");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?", "услуга_1");
let servicePrice1 = +prompt("Сколько это будет стоить?", 5500);
let service2 = prompt("Какой дополнительный тип услуги нужен?", "услуга_2");
let servicePrice2 = +prompt("Сколько это будет стоить?", 5500);

let allServicePrices, fullPrice, servicePercentPrice;

// return price of two services
const getAllServicePrices = function (priceServ1, priceServ2) {
    return priceServ1 + priceServ2;
}

// return full price (price of screen and addditional services)
function getFullPrice(mainWorkPrice, servicePrices) {
    return mainWorkPrice + servicePrices;
}

// return templated title
const getTitle = function (strTitle) {
    let newTitle, firstChar, restChars;

    newTitle = strTitle.trim();
    firstChar = newTitle[0].toUpperCase();
    restChars = newTitle.substring(1).toLowerCase();

    return firstChar + restChars;
}

// return total price considering the rollback
const getServicePercentPrices = function (totalPrice, rollbackPercent) {
    return Math.ceil(totalPrice - totalPrice * (rollbackPercent / 100));
}

const showTypeOf = function (vrbl) {
    console.log(vrbl, typeof vrbl);
}

// return massege with discount for customer
const getRollbackMessage = function (price) {
    switch (true) {
        case price >= 30_000:
            return "Даем скидку в 10%";
            break;
        case price >= 15_000 && fullPrice < 30_000:
            return "Даем скидку в 5%";
            break;
        case price >= 0 && fullPrice < 15_000:
            return "Скидка не предусмотрена";
            break;
        default:
            return "Что то пошло не так";
            break;
    }
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);