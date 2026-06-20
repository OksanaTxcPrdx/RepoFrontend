const curDate = {
    weekDays: ['Воскресенье', 
        'Понедельник', 
        'Вторник', 
        'Среда', 
        'Четверг', 
        'Пятница', 
        'Суббота'],

    months: ['января', 'февраля', 'марта',
        'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря',
    ],

    hours:['часов', 'час', 'часа' ],
    minutes: ['минут', 'минута', 'минуты'],
    seconds: ['секунд','секунда','секунды'],

    showDate: function() {
        console.log(curDate.getFormatADate());
        console.log(curDate.getFormatBDate());
        console.log('----------');
    },

    getFormatADate: function() {
       let now = new Date();

       let day = now.getDate();
       let month = now.getMonth();
       let year = now.getFullYear();
       let hours = now.getHours();
       let minutes = now.getMinutes();
       let seconds = now.getSeconds();
       let weekDay = now.getDay();

       return `Сегодня ${curDate.weekDays[weekDay]}, \
${day} ${curDate.months[month]} \
${year} года, \
${hours} ${curDate.hours[curDate.getWordPosition(hours)]} \
${minutes} ${curDate.minutes[curDate.getWordPosition(minutes)]} \
${seconds} ${curDate.seconds[curDate.getWordPosition(seconds)]}`;

    },

    getFormatBDate: function() {
        let now = new Date();
        let day = curDate.addZero(now.getDate());
        let month = curDate.addZero(now.getMonth() + 1);
        let year = curDate.addZero(now.getFullYear());
        let hours = curDate.addZero(now.getHours());
        let minutes = curDate.addZero(now.getMinutes());
        let seconds = curDate.addZero(now.getSeconds());

        return `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`

    },

    addZero: function(num) {
        if ( num < 10) {
            return '0' + num;
        }
        return `${num}`;
    },

    getWordPosition : function(num) {
        const stringFromNum = String(num);
        const lastChar = +stringFromNum[stringFromNum.length -1];

            if( num >= 11 && num <=14 || lastChar >=5 && lastChar <=9 || lastChar === 0) {
                return 0; }
            else if(lastChar === 1) {
                return 1;}
            else if (lastChar >= 2 && lastChar <=4){
                return 2;}
        },
}

//
let timerId = setInterval(() => {
    curDate.showDate();
}, 1000);

// let stopTimer = setTimeout(() => {
//     clearInterval(timerId);
// }, 10000);

