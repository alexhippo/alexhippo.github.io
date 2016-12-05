//Generate times - startTime and endTime
var startTime = new Date(), 
    endTime = new Date(), 
//Break down the times into minutes and seconds
    minutesDisplay = document.getElementById("minutes"),
    secondsDisplay = document.getElementById("seconds");

//Create endTime - add 25 minutes
    endTime.setMinutes(endTime.getMinutes() + 25);

//Find the difference between the times - pomoTimeSeconds & pomoTimeMinutes
var diffInMs = endTime - startTime,
    diffInSecs = Math.round(diffInMs/1000),
    amountOfHours = Math.floor( diffInSecs / 3600 ),
    amountOfSeconds = diffInSecs - (amountOfHours * 3600),
    amountOfMinutes = Math.floor( amountOfSeconds / 60 ),
    amountOfSeconds = amountOfSeconds - ( amountOfMinutes * 60 );

//Update minutes on page
if (amountOfMinutes > 0) {
    minutesDisplay.innerHTML = amountOfMinutes;
} else {
    minutesDisplay.innerHTML = "00";
}

//Update seconds on page
if (amountOfSeconds > 0) {
    secondsDisplay.innerHTML = amountOfSeconds;
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
        timeForABreak();
    } 
}


function timeForABreak() {
    console.log("time for a break!");
}

window.onload = function() {
    // Begin the pomodoro!
    pomoInterval = setInterval(pomoCountDown, 1000);
}
