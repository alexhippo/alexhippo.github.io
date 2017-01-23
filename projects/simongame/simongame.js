//disable double click to prevent multiple timers and series
document.getElementsByTagName("div").ondblclick = function() { 
    return false; 
}


var colours = ["green", "red", "yellow", "blue"],
    series = [],
    playersTurn = false,
    checkpoint = 0,
    timeToChoose = 0,
    n = 0,
    gameInProgress = false;
    greenSound = document.getElementById("greenSound"),
    redSound = document.getElementById("blueSound"),
    yellowSound = document.getElementById("yellowSound"),
    blueSound = document.getElementById("blueSound"),
    wrongSound = document.getElementById("wrongSound"),
    victorySound = document.getElementById("victorySound"),
    correctSound = document.getElementById("correctSound");

function showInstructions() {
    document.getElementById("howtoplay").style.visibility = "visible";
    document.getElementById("overlay").style.visibility = "visible";
}

function closeInstructions() {
    document.getElementById("howtoplay").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
}


function start() {
    if ((playersTurn === true) || (gameInProgress === true)) {
        //disabling button if play is in progress
        return false;
    } else {
        chooseAndPresentSeries();
        gameInProgress = true;
    }
    buttonPress("start");
}

function chooseAndPresentSeries() {
    chooseSeriesColour(); 
    presentSeries(); 
}

function buttonPress(id) {
    document.getElementById(id).className = "titlesquare";
    
    setTimeout(function() {
      document.getElementById(id).className = "dark titlesquare";
        }, 500);
}

function timeLimit() {
    timeToChoose = setInterval(function(){
        n++;
        if (n === 3) {
            check("wrong");
            clearInterval(timeToChoose);
            n = 0;
        }
    }, 1000)
}


function reset() {
    if (series.length == 0) {
        return false;
    } else {
        series.length = 0;
        chooseSeriesColour();
        checkpoint = 0;
        setTimeout(presentSeries, 500); 
        clearInterval(timeToChoose);
        n = 0;
        buttonPress("reset");
    }
    
}

function playerPressColour(id) {
    if ((playersTurn === false) || (n === 3)) {
        return false;
    } else {
        console.log("I pressed this colour");
        clearInterval(timeToChoose);
        check(id);   
        n = 0;
        lightColour(id);
    }
}

//To-Do: Do not allow for 2nd check

function check(id) {
    if (playersTurn === false) {
        return false;
    } else {
        if (id === series[checkpoint]) {
        //correct state
            if (checkpoint < series.length-1) {
                //move checkpoint forward if we haven't reached the last colour in the series
                checkpoint++;
                playersTurn = true;
                setTimeout(timeLimit, 200);
            } else {
                if (series.length === 20) { //TO-DO: Change to 20
                    victory();
                } else {
                    checkpoint = 0;
                    playersTurn = false;
                    setTimeout(chooseAndPresentSeries, 2000);
                    setTimeout(function() {
                        correctSound.play();
                    }, 500);
                }
            }
        } else {
        if (document.getElementById("strict").checked) {
            setTimeout(reset, 1500);
            clearInterval(timeToChoose);
            n = 0;
            playersTurn = false;
            checkpoint = 0;
            wrongSound.play();
        } else {
            setTimeout(presentSeries, 1500);
            clearInterval(timeToChoose);
            n = 0;
            playersTurn = false;
            checkpoint = 0;
            wrongSound.play();
            }
        }
        
        
    } 
        
}

function victory() {
    victorySound.play();
    gameInProgress = false;
    playersTurn = false;
    checkpoint = 0;
    setTimeout(winningSeries, 500);
    setTimeout(function (){
        victorySound.pause();
        victorySound.currentTime = 0;  
        series.length = 0;
        document.getElementById("count").textContent = 0;
    }, 8000);
}

function chooseSeriesColour(){
    //randomise
    id = colours[Math.floor(Math.random() * colours.length)];
    series.push(id);
    document.getElementById("count").textContent = series.length;
}

function winningSeries() {
    for (var i in series) {
        (function(i){
            setTimeout(function(){
                document.getElementById(series[i]).className = "square";
                setTimeout(function() {
                document.getElementById(series[i]).className = "dark square";
                }, 200);
            }, 300 * i);
        }(i));
    }  
}

function setPlayersTurn(){
    playersTurn = true;
}

function presentSeries() {
    //light colours in series one at a time
    var seriesTime = 2000;
    
    if (series.length >= 15) {
        seriesTime = 600;
    } else if (series.length >= 10) {
        seriesTime = 700;
    } else if (series.length >= 5) {
        seriesTime = 1000;
    } 
    
    console.log(series); //TO-DO: remove this before final release
    playersTurn = false;
    for (var i in series) {
        (function(i){
            setTimeout(function(){
                lightColour(series[i]);
                if (Number(i) === (series.length-1)) {
                    setTimeout(function() {
                        playersTurn = true;
                        timeLimit();
                    }, 1000);    
                }
            }, seriesTime * i);
        }(i));
    }
}


function lightColour(id) {
    //apply light class
    document.getElementById(id).className = "square";
    
    switch(id) {
        case "green":
            greenSound.play();
            break;
        case "red":
            redSound.play();
            break;
        case "yellow":
            yellowSound.play();
            break;
        case "blue":
            blueSound.play();
            break;
    }
    
    setTimeout(function() {
       darkColour(id); 
    }, 300);
}

function darkColour(id) {
      document.getElementById(id).className = "dark square";
}
