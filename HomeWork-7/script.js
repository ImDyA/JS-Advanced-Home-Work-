const timerStart = document.getElementById("start");
const timerPause = document.getElementById("pause");
let timerNumber = document.getElementById("number");
const timerTest = document.getElementById("timer");




timerStart.addEventListener('click', function() {

    // let timeMinut = parseInt(timerNumber.value) * 60;
    let timeMinut = parseInt(timerNumber.value);

    let timer = setInterval(function () {
        seconds = timeMinut%60;
        minuts = timeMinut/60%60;
        hour = timeMinut/60/60%60;
        if (timeMinut <= 0) {
            clearInterval(timer);
            alert("Время закончилось");
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
            timerTest.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000);
    timerPause.addEventListener("click", function() {
        clearInterval(timer);
        timerNumber.value = minuts*60;
    });
});