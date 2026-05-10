let title = "RepoFrontend";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 234;
let rollback = 20;
let fullPrice = 23000;
let adaptive = true;

console.log(title);
console.log(fullPrice);
console.log(adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов" + screenPrice + "долларов");
console.log("Стоимость расработки сайта" + fullPrice + "долларов");

console.log(screens.toLowerCase().split(", "));

console.log(`Процент отката посреднику за работу ${fullPrice * (rollback / 100)}`)