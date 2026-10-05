let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat' ];

weekDays.forEach(function(day, index) {
    let todayDay = new Date().getDay();
    if (index === todayDay){
        console.log('%c' + day, 'font-weight: bold;' )
    } else if (index === 0 || index === 6){
        console.log('%c' + day, 'font-style: italic;');
    } else {
        console.log(day)
    }
});