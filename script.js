'use strict'

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

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    isString: function (str) {
        return   str.trim() !== '' && !appData.isNumber(str);
    },

    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.getTitle(appData.title);

        appData.logger();
    },

    asking: function () {

        do {
            appData.title = prompt("Как называется ваш проект?", "RepoFrontend");
        } while (!appData.isString(appData.title));
        
        
        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;

            do {
                 name = prompt("Какие типы экранов нужно разработать?", "Простые");
            } while (!appData.isString(name))
           
            
            do {
                price = prompt("Сколько будет стоить данная работа?", 10000);
            } while (!appData.isNumber(price));

            appData.screens.push({id: i, name: name, price: price})
        }

        for (let i = 0; i < 2; i++) {
            let name = '';
            let servicePrice = 0; 

            do {
                name = prompt("Какой дополнительный тип услуги нужен?", "услуга_1");
            } while (!appData.isString(name));

            do {
                servicePrice = prompt("Сколько это будет стоить?", 1000);
            } while (!appData.isNumber(servicePrice));

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