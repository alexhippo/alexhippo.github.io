window.onload = function () {

}


//Pre-load audio
var breakTime = new Audio('../pomodoro/timeforabreak.mp3'),
    workTime = new Audio('../pomodoro/timeforpomodoro.mp3'),

//Break down the times into minutes and seconds
    minutesDisplay = document.getElementById("minutes"),
    secondsDisplay = document.getElementById("seconds");

function resetTimer() {
    minutesDisplay.innerHTML = "25";
    secondsDisplay.innerHTML = "00";
    clearInterval(pomoInterval);
}

function pauseTimer() {
    clearInterval(pomoInterval); 
}

function increment() {
    minutesDisplay.innerHTML = Number(minutesDisplay.innerHTML) + 1; //To-Do: add 0 formatting
}

function decrement() {
    minutesDisplay.innerHTML = Number(minutesDisplay.innerHTML) - 1; //To-Do: add 0 formatting
}

function pomodoro(type) {  
    //Generate times - startTime and endTime
        startTime = new Date(), 
        endTime = new Date();
    //Create endTime - add 25 minutes
        if (type === 'b') {
            intervalMin = 5;
            intervalSec = 0;
        } else {
            intervalMin = Number(minutesDisplay.innerHTML);
            intervalSec = Number(secondsDisplay.innerHTML);
        }
        endTime.setMinutes(endTime.getMinutes() + intervalMin);
        endTime.setSeconds(endTime.getSeconds() + intervalSec);

    //Find the difference between the times - pomoTimeSeconds & pomoTimeMinutes
    var diffInMs = endTime - startTime,
        diffInSecs = Math.round(diffInMs/1000),
        amountOfHours = Math.floor( diffInSecs / 3600 ),
        amountOfSeconds = diffInSecs - (amountOfHours * 3600),
        amountOfMinutes = Math.floor( amountOfSeconds / 60 ),
        amountOfSeconds = amountOfSeconds - ( amountOfMinutes * 60 );

    //Update minutes on page
    if (amountOfMinutes > 0) {
        if (amountOfMinutes < 10) {
            minutesDisplay.innerHTML = "0" + amountOfMinutes;
        } else {
            minutesDisplay.innerHTML = amountOfMinutes;
        }
    } else {
        minutesDisplay.innerHTML = "00";
    }

    //Update seconds on page
    if (amountOfSeconds > 0) {
        if (amountOfSeconds < 10) {
            secondsDisplay.innerHTML = "0" + amountOfSeconds;
        } else {
            secondsDisplay.innerHTML = amountOfSeconds;
        }
    } else {
        secondsDisplay.innerHTML = "00";
    }    

    //Countdown the time and display
    function pomoCountDown() {
        var dateNow = new Date();

        if (endTime > dateNow) {
            //use current values
            var minutes = parseInt(minutesDisplay.innerHTML),
                seconds = parseInt(secondsDisplay.innerHTML);

            //update minutes
            if (seconds === 0) {
                if (minutes > 0) {
                    --minutes;
                    if (minutes < 10) {
                        minutesDisplay.innerHTML = "0" + minutes;
                        secondsDisplay.innerHTML = "59";
                    } else {
                        minutesDisplay.innerHTML = minutes;
                        secondsDisplay.innerHTML = "59";
                    }
                } else {
                    return secondsDisplay.innerHTML = "59";
                }
            } else {
                seconds--;
                if (seconds < 10) {
                    secondsDisplay.innerHTML = "0" + seconds;
                } else {
                    secondsDisplay.innerHTML = seconds;
                }
            }
        } else {
            secondsDisplay.innerHTML = "00";
            minutesDisplay.innerHTML = "00";
            clearInterval(pomoInterval);
            if (type === 'p') {
                timeForABreak();
            } else {
                timeForWork();
            }
        } 
    }

    function timeForABreak() {
        breakTime.play();
        alert("Pomodoro Timer: Time for a break!");
        document.getElementById("startBreak").style.visibility = 'visible';
    }
    
    function timeForWork() {
        workTime.play();
        alert("Pomodoro Timer: Time to work!");
        document.getElementById("startBreak").style.visibility = 'hidden';
    }
    
    pomoInterval = setInterval(pomoCountDown, 1000);
}