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
        case 0:
            days[date.getDay()-1].classList.add('day--active');
            break;
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
    }
    
    //set Time
    let timetable = [];
    time.forEach(el => {
        let timeInner = el.innerHTML;
        timeInner = timeInner.split(':');
        let timeItem = {
            startHour: Number(timeInner[0]),
            endHour: Number(timeInner[0]) + 1,
            startMinute: Number(timeInner[1]) - 15,
            endMinute: Number(timeInner[0]) + 25
        }
        timetable.push(timeItem);
    });
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
            if (date.getHours() <= Number(el.hour) + 1) time[0].classList.add('time--active');
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
});