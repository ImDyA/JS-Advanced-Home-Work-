const timerStart = document.getElementById("start");
const timerPause = document.getElementById("pause");
let timerNumber = document.getElementById("number");
const timerTest = document.getElementById("timer");


// timerStart.addEventListener('click', function() {

//     // let timeMinut = parseInt(timerNumber.value) * 60;
//     // let timeMinut = parseInt(timerNumber.value);

//     let timer = setInterval(function () {
//         let seconds = timeMinut%60;
//         let minuts = timeMinut/60%60;
//         let hour = timeMinut/60/60%60;
//         if (timeMinut <= 0) {
//             clearInterval(timer);
//             alert("Время закончилось");
//         } else {
//             let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//             timerTest.innerHTML = strTimer;
//         }
//         --timeMinut;
//     }, 1000);
//     timerPause.addEventListener("click", function() {
//         clearInterval(timer);
//         timerNumber.value = minuts*60;
//     });
// });

// const test = new Promise(resolve => {
//     timerStart.addEventListener('click', function() {
//         let timeMinut = parseInt(timerNumber.value);
//         let timer = setInterval(function () {
//             let seconds = timeMinut%60;
//             let minuts = timeMinut/60%60;
//             let hour = timeMinut/60/60%60;
//             if (timeMinut <= 0) {
//                 clearInterval(timer);
//                 alert("Время закончилось");
//             } else {
//                 let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//                 timerTest.innerHTML = strTimer;
//             }
//             --timeMinut;
//         }, 1000);
//     });
//     timerPause.addEventListener("click", function() {
//         clearInterval(timer);
//         timerNumber.value = minuts*60;
//     });
// });
// test.then(() => {
//     resolve(alert("Время закончилось"));
// });

// let timer;
// let minuts;
// const test1 = () => {
//     timerStart.addEventListener('click', function() {
//         let timeMinut = parseInt(timerNumber.value);
//         timer = setInterval(function () {
//             let seconds = timeMinut%60;
//             minuts = timeMinut/60%60;
//             let hour = timeMinut/60/60%60;
//             if (timeMinut <= 0) {
//                 clearInterval(timer);
//                  alert("Время закончилось");
//             } else {
//                 let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//                 timerTest.innerHTML = strTimer;
//             }
//             --timeMinut;
//         }, 1000);
//     });
// }
// const test2 = () => {
//     timerPause.addEventListener("click", function() {
//         clearInterval(timer);
//         timerNumber.value = minuts*60;
//     });
// }
// test1();
// test2();

const superTest = () => {
    let timer;
    let minuts;
    return new Promise(resolve => {
        timerStart.addEventListener('click', function() {
            let timeMinut = parseInt(timerNumber.value);
            timer = setInterval(function () {
                let seconds = timeMinut%60;
                minuts = timeMinut/60%60;
                let hour = timeMinut/60/60%60;
                if (timeMinut <= 0) {
                    clearInterval(timer);
                    resolve("Время закончилось");
                } else {
                    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
                    timerTest.innerHTML = strTimer;
                }
                --timeMinut;
            }, 1000);
        });
        timerPause.addEventListener("click", function() {
            clearInterval(timer);
            timerNumber.value = minuts*60;
        });
    });
};
superTest().then(alert);