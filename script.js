'use strict'

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.getTitle(appData.title);

        appData.logger();
    },

    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "RepoFrontend");
        
        for (let i = 0; i < 2; i++) {
            let name = prompt("Какие типы экранов нужно разработать?", "Простые");
            let price = 0;

            do {
                price = +prompt("Сколько будет стоить данная работа?", 20000);
            } while (!isNumber(price));

            appData.screens.push({id: i, name: name, price: price})
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt("Какой дополнительный тип услуги нужен?", "услуга_1");
            let servicePrice = 0; 

            do {
                servicePrice = +prompt("Сколько это будет стоить?", 1000);
            } while (!isNumber(servicePrice));

            appData.services[name] = +servicePrice;

        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services){
            appData.allServicePrices += appData.services[key]
        }
    },
    // return full price (price of screen and addditional services)
    getFullPrice: function (mainWorkPrice, servicePrices) {
        appData.fullPrice = mainWorkPrice + servicePrices;
    },

    // return templated title
    getTitle: function (strTitle) {
        let newTitle, firstChar, restChars;

        newTitle = strTitle.trim();
        firstChar = newTitle[0].toUpperCase();
        restChars = newTitle.substring(1).toLowerCase();

        appData.title = firstChar + restChars;
    },

    // return total price considering the rollback
    getServicePercentPrices: function (totalPrice, rollbackPercent) {
        appData.servicePercentPrice = Math.ceil(totalPrice - totalPrice * (rollbackPercent / 100));
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

    logger: function () {
        // for (let key in appData) {
        //     console.log(key);
        // }

        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        
    },

}

appData.start();