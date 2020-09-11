"use strict";
//functions

//days control func
const viewDateDefault = (objDate, viewResult) => {
    let result = [
        objDate.getDate(), objDate.getMonth() + 1, objDate.getFullYear()
    ];
    result = result.join('.');
    viewResult.innerHTML = result;
};
const setActiveDayDefault = (objDate, daysArr) => {
    !daysArr[objDate.getDay() - 1] ? daysArr[daysArr.length - 1].classList.add('day-btn--active') :
    daysArr[objDate.getDay() - 1].classList.add('day-btn--active');
};
const viewDate = (dayArr, objDate, day, viewResult) => {
    dayArr = Array.from(dayArr);
    let activeDay = dayArr.findIndex((el, index) => {
        return el.classList.contains('day-btn--active') && index;
    });
    if (activeDay === -1) activeDay = dayArr.indexOf(dayArr[0]);
    const newDay = dayArr.indexOf(day);
    let newDate = objDate.getDate();
    newDay < activeDay ? newDate -= activeDay - newDay :
    newDate += newDay - activeDay;
    let result = [
        newDate, objDate.getMonth() + 1, objDate.getFullYear()
    ];
    result = result.join('.');
    newDate < 10 ? viewResult.innerHTML = '0' + result : viewResult.innerHTML = result;
    return objDate.setDate(newDate);
};
const setActiveDay = (dayArr, day) => {
    dayArr.forEach(el => {
        el.classList.contains('day-btn--active') && el.classList.remove('day-btn--active');
    });
    day.classList.add('day-btn--active');
};

//time control func
const setActiveTimeDefault = (objDate, timeArr) => {
    if (objDate.getHours() < 8) timeArr[0].classList.add('time-btn--active');
    else if (objDate.getHours() === 8 && objDate.getMinutes() < 20) timeArr[0].classList.add('time-btn--active');
    else if (objDate.getHours() === 8 && objDate.getMinutes() >= 20) timeArr[1].classList.add('time-btn--active');
    else if (objDate.getHours() === 9 && objDate.getMinutes() < 40) timeArr[2].classList.add('time-btn--active');
    else if ((objDate.getHours() === 9 && objDate.getMinutes() >= 40) || (objDate.getHours() === 10 && objDate.getMinutes() < 20)) timeArr[3].classList.add('time-btn--active');
    else if (objDate.getHours() === 10 && objDate.getMinutes() >= 20) timeArr[4].classList.add('time-btn--active');
    else if (objDate.getHours() === 11 && objDate.getMinutes() < 40) timeArr[5].classList.add('time-btn--active');
    else if ((objDate.getHours() === 11 && objDate.getMinutes() >= 40) || (objDate.getHours() === 12 && objDate.getMinutes() < 20)) timeArr[6].classList.add('time-btn--active');
    else if (objDate.getHours() === 12 && objDate.getMinutes() >= 20) timeArr[7].classList.add('time-btn--active');
    else if (objDate.getHours() === 13 && objDate.getMinutes() < 40) timeArr[8].classList.add('time-btn--active');
    else if ((objDate.getHours() === 13 && objDate.getMinutes() >= 40) || (objDate.getHours() === 14 && objDate.getMinutes() < 20)) timeArr[9].classList.add('time-btn--active');
    else if (objDate.getHours() === 14 && objDate.getMinutes() >= 20) timeArr[10].classList.add('time-btn--active');
    else if (objDate.getHours() === 15 && objDate.getMinutes() < 40) timeArr[11].classList.add('time-btn--active');
    else if (objDate.getHours() === 15 && objDate.getMinutes() >= 40) timeArr[12].classList.add('time-btn--active');
    else if (objDate.getHours() > 15) timeArr[12].classList.add('time-btn--active');
};
const setActiveTime = (timeArr, timeItem) => {
    timeArr.forEach(el => {
        el.classList.contains('time-btn--active') && el.classList.remove('time-btn--active');
    });
    timeItem.classList.add('time-btn--active');
};
const viewTimeDefault = timeArr => {
    timeArr = Array.from(timeArr);
    let activeTime = timeArr.findIndex((el, index) => {
        return el.classList.contains('time-btn--active') && index;
    });
    if (activeTime === -1) activeTime = 0;
    if (activeTime === 0) {
        timeArr.forEach((el, index) => {
            (index > activeTime + 3) && el.classList.add('hide');
        });
    } 
    else if (activeTime >= timeArr.length - 4) {
        timeArr.forEach((el, index) => {
            (index < timeArr.length - 4) && el.classList.add('hide');
        });
    } else {
        timeArr.forEach((el, index) => {
            (index < activeTime || index > activeTime + 3) && el.classList.add('hide');
        });
    }
};
const nextPageTime = time => {
    time = Array.from(time);
    let page = time.findIndex(el => !el.classList.contains('hide')) + 1;
    if(page - 1 >= time.length - 3) page = time.length - 3;
    if (page === time.length - 3) return;
    let showTimeIndex = [];
    time.forEach((el, index) => {
        !el.classList.contains('hide') && showTimeIndex.push(index);
    });
    time[showTimeIndex[showTimeIndex.length - 1] + 1].classList.remove('hide');
    time[showTimeIndex[0]].classList.add('hide');
};
const prevPageTime = time => {
    time = Array.from(time);
    let page = time.findIndex(el => !el.classList.contains('hide')) + 1;
    if(page - 1 >= time.length - 3) page = time.length - 3;
    if (page - 1 === 0) return;
    let showTimeIndex = [];
    time.forEach((el, index) => {
        !el.classList.contains('hide') && showTimeIndex.push(index);
    });
    time[showTimeIndex[0] - 1].classList.remove('hide');
    time[showTimeIndex[showTimeIndex.length - 1]].classList.add('hide');
};

window.addEventListener('DOMContentLoaded', () => {
    //variables
    const spanDate = document.querySelector('#date'),
          days = document.querySelectorAll('.day-btn'),
          time = document.querySelectorAll('.time-btn'),
          timeControl = document.querySelectorAll('.time-control');

    let date = new Date();

    //days control
    viewDateDefault(date, spanDate);
    setActiveDayDefault(date, days);
    days.forEach(el => {
        el.addEventListener('click', () => {
            viewDate(days, date, el, spanDate);
            setActiveDay(days, el);
        });
    });

    //time control
    setActiveTimeDefault(date, time);
    time.forEach(el => {
        el.addEventListener('click', () => setActiveTime(time, el));
    });
    viewTimeDefault(time);
    timeControl.forEach(el => {
        el.addEventListener('click', () => {
            el.innerHTML === '&gt;' ? nextPageTime(time) : prevPageTime(time);
        });
    });
});