'use strict'

let title = prompt("Как называется ваш проект?", "RepoFrontend");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let rollback = 4000.83;

let service1 = prompt("Какой дополнительный тип услуги нужен?", "услуга_1");
let servicePrice1 = +prompt("Сколько это будет стоить?", 5500);
let service2 = prompt("Какой дополнительный тип услуги нужен?", "услуга_2");
let servicePrice2 = +prompt("Сколько это будет стоить?", 5500);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - rollback);

console.log(title);
console.log(fullPrice);
console.log(adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей");
console.log("Стоимость расработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split(", "));
console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`)

switch (true) {
    case fullPrice >= 30_000:
        console.log("Даем скидку в 10%");
        break;
    case fullPrice >= 15_000 && fullPrice < 30_000:
        console.log("Даем скидку в 5%");
        break;
    case fullPrice >= 0 && fullPrice < 15_000:
        console.log("Скидка не предусмотрена");
        break;
    default:
        console.log("Что то пошло не так");
        break;
}