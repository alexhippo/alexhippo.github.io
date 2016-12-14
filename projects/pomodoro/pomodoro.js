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
    document.getElementById("status").innerHTML = "Time to work!";
    document.getElementById("plus").style.visibility = "visible";
    document.getElementById("minus").style.visibility = "visible";
    
    //Enable start buttons when timer is reset
    document.getElementById("startPomo").disabled = false;
    document.getElementById("setBreak").disabled = false;
    document.getElementById("setPomo").disabled = false;
    clearInterval(pomoInterval);
}

function pauseTimer() {
    clearInterval(pomoInterval); 
    document.getElementById("status").innerHTML = "Paused";
    document.getElementById("startPomo").disabled = false;

}

function increment() {
    newMinutes = (Number(minutesDisplay.innerHTML)) + 1;
    if (newMinutes < 10) {
        minutesDisplay.innerHTML = "0" + newMinutes;
    } else {
        if (newMinutes > 59) {
            return false;
        } else {
            minutesDisplay.innerHTML = newMinutes;
        }
    }
}

function decrement() {
    newMinutes = (Number(minutesDisplay.innerHTML)) - 1;
    if (newMinutes < 10) {
        if (newMinutes <= 0) {
            return false;
        } else {
        minutesDisplay.innerHTML = "0" + newMinutes;
        }
    } else {    
            minutesDisplay.innerHTML = newMinutes;
        }
    }

function setBreak() {
    minutesDisplay.innerHTML = "05";
    secondsDisplay.innerHTML = "00";
    document.getElementById("status").innerHTML = "Break time!";
}

function setPomodoro() {
    minutesDisplay.innerHTML = "25";
    secondsDisplay.innerHTML = "00";
    document.getElementById("status").innerHTML = "Let's get to work!";
}


function pomodoro(type) {  
    //Generate times - startTime and endTime
        startTime = new Date(), 
        endTime = new Date();
    //Create endTime - add 25 minutes or take in the current time
        if (type === 'b') {
            intervalMin = Number(minutesDisplay.innerHTML);
            intervalSec = Number(secondsDisplay.innerHTML);
        } else {
            intervalMin = Number(minutesDisplay.innerHTML);
            intervalSec = Number(secondsDisplay.innerHTML);
        }
        endTime.setMinutes(endTime.getMinutes() + intervalMin);
        endTime.setSeconds(endTime.getSeconds() + intervalSec);
    
    //Hide arrows while pomodoro is in progress
    document.getElementById("plus").style.visibility = "hidden";
    document.getElementById("minus").style.visibility = "hidden";
    
    //Disable buttons while pomodoro is in progress
    document.getElementById("startPomo").disabled = true;
    document.getElementById("setBreak").disabled = true;
    document.getElementById("setPomo").disabled = true;

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
        alert("Pomodoro Timer: Great work! Time for a break.");
        document.getElementById("status").innerHTML = "Time for a break.";
        minutesDisplay.innerHTML = "05";
        secondsDisplay.innerHTML = "00";
        //Enable buttons when pomodoro is finished
        document.getElementById("startPomo").disabled = false;
        document.getElementById("setBreak").disabled = false;
        document.getElementById("setPomo").disabled = false;
        document.getElementById("plus").style.visibility = "visible";
        document.getElementById("minus").style.visibility = "visible";
    }
    
    function timeForWork() {
        workTime.play();
        alert("Pomodoro Timer: Time to work!");
        document.getElementById("status").innerHTML = "Time to work!";
        document.getElementById("plus").style.visibility = "visible";
        document.getElementById("minus").style.visibility = "visible";
        document.getElementById("startPomo").disabled = false;
        document.getElementById("setBreak").disabled = false;
        document.getElementById("setPomo").disabled = false;
    }
    
    pomoInterval = setInterval(pomoCountDown, 1000);
}