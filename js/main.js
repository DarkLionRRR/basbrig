"use strict";
window.addEventListener('DOMContentLoaded', () => {
    //view days table func
    const viewDays = () => {
        let winWidth = Math.max(
            document.body.scrollWidth, document.documentElement.scrollWidth,
            document.body.offsetWidth, document.documentElement.offsetWidth,
            document.body.clientWidth, document.documentElement.clientWidth
          );
        
        if (winWidth < 414) {
            let counter = 0;
            time[0].style.borderLeft = '';
            timeControls.forEach(el => el.style.display = '');
            time.forEach(el => {
                if (!el.classList.contains('time--hidden') && counter > 3) {
                    el.classList.add('time--hidden');
                }
                counter++;
            });
            maxPage = time.length - 4;
        }
        else if (winWidth < 470) {
            let counter = 0;
            time[0].style.borderLeft = '';
            timeControls.forEach(el => el.style.display = '');
            time.forEach(el => {
                if (el.classList.contains('time--hidden') && counter != 1) {
                    el.classList.remove('time--hidden');
                    counter++;
                }
            });
            counter = 0;
            time.forEach(el => {
                if (!el.classList.contains('time--hidden') && counter > 4) {
                    el.classList.add('time--hidden');
                }
                counter++;
            });
            maxPage = time.length - 5;
        }
        else if (winWidth < 510) {
            let counter = 0;
            time[0].style.borderLeft = '';
            timeControls.forEach(el => el.style.display = '');
            time.forEach(el => {
                if (el.classList.contains('time--hidden') && counter != 2) {
                    el.classList.remove('time--hidden');
                    counter++;
                }
            });
            counter = 0;
            time.forEach(el => {
                if (!el.classList.contains('time--hidden') && counter > 5) {
                    el.classList.add('time--hidden');
                }
                counter++;
            });
            maxPage = time.length - 6;
        }
        else if (winWidth < 610) {
            let counter = 0;
            time[0].style.borderLeft = '';
            timeControls.forEach(el => el.style.display = '');
            time.forEach(el => {
                if (el.classList.contains('time--hidden') && counter != 3) {
                    el.classList.remove('time--hidden');
                    counter++;
                }
            });
            counter = 0;
            time.forEach(el => {
                if (!el.classList.contains('time--hidden') && counter > 6) {
                    el.classList.add('time--hidden');
                }
                counter++;
            });
            maxPage = time.length - 7;
        }
        else if (winWidth < 680) {
            let counter = 0;
            time[0].style.borderLeft = '';
            timeControls.forEach(el => el.style.display = '');
            time.forEach(el => {
                if (el.classList.contains('time--hidden') && counter != 4) {
                    el.classList.remove('time--hidden');
                    counter++;
                }
            });
            counter = 0;
            time.forEach(el => {
                if (!el.classList.contains('time--hidden') && counter > 7) {
                    el.classList.add('time--hidden');
                }
                counter++;
            });
            maxPage = time.length - 8;
        }
        else if (winWidth < 768) {
            let counter = 0;
            time[0].style.borderLeft = '';
            timeControls.forEach(el => el.style.display = '');
            time.forEach(el => {
                if (el.classList.contains('time--hidden') && counter != 5) {
                    el.classList.remove('time--hidden');
                    counter++;
                }
            });
            counter = 0;
            time.forEach(el => {
                if (!el.classList.contains('time--hidden') && counter > 8) {
                    el.classList.add('time--hidden');
                }
                counter++;
            });
            maxPage = time.length - 9;
        }
        else if (winWidth < 992) {
            let counter = 0;
            time[0].style.borderLeft = '';
            timeControls.forEach(el => el.style.display = '');
            time.forEach(el => {
                if (el.classList.contains('time--hidden') && counter != 7) {
                    el.classList.remove('time--hidden');
                    counter++;
                }
            });
            counter = 0;
            time.forEach(el => {
                if (!el.classList.contains('time--hidden') && counter > 10) {
                    el.classList.add('time--hidden');
                }
                counter++;
            });
            maxPage = time.length - 11;
        }
        else {
            time.forEach(el => {
                if (el.classList.contains('time--hidden')) el.classList.remove('time--hidden');
            });
            timeControls.forEach(el => el.style.display = 'none');
            time[0].style.borderLeft = '2px solid #000';
        }
    };

    //variables
    const days = document.querySelectorAll('.day'),
          time = document.querySelectorAll('.time'),
          timeControls = document.querySelectorAll('.time-control'),
          phoneBtn = document.querySelectorAll('.phone-btn'),
          transferForm = document.querySelector('#transferForm');
    let maxPage,
        date = new Date();

    //set Day
    switch (date.getDay()) {
        case 1:
            days[date.getDay()-1].classList.add('day--active');
            break;
        case 2:
            days[date.getDay()-1].classList.add('day--active');
            break;
        case 3:
            days[date.getDay()-1].classList.add('day--active');
            break;
        case 4:
            days[date.getDay()-1].classList.add('day--active');
            break;
        case 5:
            days[date.getDay()-1].classList.add('day--active');
            break;
        case 6:
            days[date.getDay()-1].classList.add('day--active');
            break;
        default:
            days[days.length - 1].classList.add('day--active');
            break;
    }

    //set Time
    if (date.getHours() < 8) time[0].classList.add('time--active');
    else if (date.getHours() === 8 && date.getMinutes() < 20) time[0].classList.add('time--active');
    else if (date.getHours() === 8 && date.getMinutes() >= 20) time[1].classList.add('time--active');
    else if (date.getHours() === 9 && date.getMinutes() < 40) time[2].classList.add('time--active');
    else if ((date.getHours() === 9 && date.getMinutes() >= 40) || (date.getHours() === 10 && date.getMinutes() < 20)) time[3].classList.add('time--active');
    else if (date.getHours() === 10 && date.getMinutes() >= 20) time[4].classList.add('time--active');
    else if (date.getHours() === 11 && date.getMinutes() < 40) time[5].classList.add('time--active');
    else if ((date.getHours() === 11 && date.getMinutes() >= 40) || (date.getHours() === 12 && date.getMinutes() < 20)) time[6].classList.add('time--active');
    else if (date.getHours() === 12 && date.getMinutes() >= 20) time[7].classList.add('time--active');
    else if (date.getHours() === 13 && date.getMinutes() < 40) time[8].classList.add('time--active');
    else if ((date.getHours() === 13 && date.getMinutes() >= 40) || (date.getHours() === 14 && date.getMinutes() < 20)) time[9].classList.add('time--active');
    else if (date.getHours() === 14 && date.getMinutes() >= 20) time[10].classList.add('time--active');
    else if (date.getHours() === 15 && date.getMinutes() < 40) time[11].classList.add('time--active');
    else if (date.getHours() === 15 && date.getMinutes() >= 40) time[12].classList.add('time--active');
    else if (date.getHours() > 15) time[12].classList.add('time--active');
    //let timetable = [];
    /*time.forEach(el => {
        let timeInner = el.innerHTML;
        timeInner = timeInner.split(':');
        let timeItem = {
            hour: timeInner[0],
            minute: timeInner[1]
        };
        timetable.push(timeItem);
    });
    timetable.forEach(el => {
        if (timetable.indexOf(el) === 0) {
            if (4 <= Number(el.hour) + 1) time[0].classList.add('time--active');
        }
        else {
            if (date.getHours() >= Number(el.hour) && date.getMinutes() >= Number(el.minute) - 15) time[timetable.indexOf(el)].classList.add('time--active');
        }
    });*/

    //viewDays
    viewDays();
    window.addEventListener('resize', viewDays);

    //days control
    days.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector('.day--active').classList.remove('day--active');
            el.classList.add('day--active');
        });
    });
    time.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector('.time--active').classList.remove('time--active');
            el.classList.add('time--active');
        });
    });

    //time-page control
    let page = 0;
    document.querySelector('.next-time').addEventListener('click', () => {
        if (page === maxPage) return;  
        let showTime = [],
            hiddenTime = [];
        time.forEach(el => {
            if (!el.classList.contains('time--hidden')) showTime.push(el);
            else hiddenTime.push(el);
        });
        showTime[0].classList.add('time--hidden');
        hiddenTime[page].classList.remove('time--hidden');
        page++;
    });
    document.querySelector('.prev-time').addEventListener('click', () => {
        if (page === 0) return;  
        let showTime = [],
            hiddenTime = [];
        time.forEach(el => {
            if (!el.classList.contains('time--hidden')) showTime.push(el);
            else hiddenTime.push(el);
        });
        hiddenTime[page-1].classList.remove('time--hidden');
        showTime[showTime.length-1].classList.add('time--hidden');
        page--;
    });

    //parents modal window
    phoneBtn.forEach(el => {
        el.addEventListener('click', () => {
            $('#parentModal').modal('show');
            $('#parentModal').css({
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center'
            });
        });
    });

    //transfer group
    transferForm.addEventListener('submit', e => {
        e.preventDefault();
    })

    //sort
    const children = document.querySelectorAll('.kids'),
          childName = document.querySelectorAll('.kids-name');
    let childArr = [];
    childName.forEach(el => {
        let childNameItem = el.innerHTML.split(' ');
        let child = {
            lastname: childNameItem[0],
            firstname: childNameItem[1],
            secondname: childNameItem[2]
        };
        childArr.push(child);
    });
    childArr.sort((a, b) => {
        if (a.lastname > b.lastname) return 1;
        if (a.lastname < b.lastname) return -1;
        return 0; 
    });
    for (let i = 0; i < childName.length; i++) {
        childName[i].innerHTML = `${childArr[i].lastname}  ${childArr[i].firstname}  ${childArr[i].secondname}`;
    }
});