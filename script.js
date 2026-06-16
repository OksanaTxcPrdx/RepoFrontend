'use strict'

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    service1: '',
    service2: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "RepoFrontend");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

        do {
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    // return price of two services
    getAllServicePrices: function () {
        let sum = 0;
        let servicePrice = 0;

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "услуга_1");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "услуга_2");
            }

            do {
                servicePrice = +prompt("Сколько это будет стоить?", 5500);
            } while (!isNumber(servicePrice));

            sum += servicePrice;
        }

        return sum;
    },

    // return full price (price of screen and addditional services)
    getFullPrice: function (mainWorkPrice, servicePrices) {
        return mainWorkPrice + servicePrices;
    },

    // return templated title
    getTitle: function (strTitle) {
        let newTitle, firstChar, restChars;

        newTitle = strTitle.trim();
        firstChar = newTitle[0].toUpperCase();
        restChars = newTitle.substring(1).toLowerCase();

        return firstChar + restChars;
    },

    // return total price considering the rollback
    getServicePercentPrices: function (totalPrice, rollbackPercent) {
        return Math.ceil(totalPrice - totalPrice * (rollbackPercent / 100));
    },

    // return massege with discount for customer
    getRollbackMessage: function (price) {
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
    },

    logger: function() {
        for (let key in appData) {
            console.log(key);
        }
    },

    start: function () {
        appData.asking();

        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.title = appData.getTitle(appData.title);

        appData.logger();
    },

    
}

appData.start();