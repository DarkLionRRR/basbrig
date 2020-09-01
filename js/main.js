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
          timeControls = document.querySelectorAll('.time-control');
    viewDays();
    window.addEventListener('resize', viewDays);

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

    let page = 0;
    document.querySelector('.next-time').addEventListener('click', () => {
        if (page === time.length - 4) return;  
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
});