var colours = ["green", "red", "yellow", "blue"],
    series = [],
    playersTurn = false,
    checkpoint = 0,
    timeToChoose = 0,
    greenSound = document.getElementById("greenSound"),
    redSound = document.getElementById("blueSound"),
    yellowSound = document.getElementById("yellowSound"),
    blueSound = document.getElementById("blueSound"),
    wrongSound = document.getElementById("wrongSound"),
    victorySound = document.getElementById("victorySound");

function start() {
    if (playersTurn === true) {
        //disabling button if play is in progress
        return false;
    } else {
        chooseSeriesColour(); 
        presentSeries(); 
        document.getElementById("reset").style.visibility = 'visible';
        document.getElementById("start").style.visibility = 'hidden';
    }
}

function reset() {
    series.length = 0;
    chooseSeriesColour();
    checkpoint = 0;
    setTimeout(presentSeries, 1000); 
}

function playerPressColour(id) {
    if (playersTurn === false) {
        return false;
    } else {
        lightColour(id);
        check(id);
    }
    
}

function check(id) {
    //check if the colour that the player pressed is the same as the one in series AND same position
    if (id === series[checkpoint]) {
        //correct state
        if (checkpoint < series.length-1) {
            //move checkpoint forward if we haven't reached the last colour in the series
            checkpoint++;
        } else {
            //if end of the series, reset values
            //if 20 steps - victory
            if (series.length === 20) {
                victory();
            } else {
                checkpoint = 0;
                playersTurn = false;
                setTimeout(start, 2000);
            }
        }
    } else {
        if (document.getElementById("strict").checked) {
            checkpoint = 0;
            wrongSound.play();
            setTimeout(reset, 2000);
        } else {
            checkpoint = 0;
            wrongSound.play();
            setTimeout(presentSeries, 2000);
        }
    }
}

function victory() {
    victorySound.play();
    playersTurn = false;
    checkpoint = 0;
    setTimeout(function (){
        victorySound.pause();
        victorySound.currentTime = 0;  
        series.length = 0;
        document.getElementById("count").textContent = 0;
        document.getElementById("start").style.visibility = "visible";
        document.getElementById("reset").style.visibility = "hidden";
    }, 8000);
}

function chooseSeriesColour(){
    //randomise
    id = colours[Math.floor(Math.random() * colours.length)];
    series.push(id);
    document.getElementById("count").textContent = series.length;
}

function setPlayersTurn(){
    playersTurn = true;
}

function presentSeries() {
    //light colours in series one at a time
    console.log(series);
    playersTurn = false;
    for (var i in series) {
        (function(i){
            setTimeout(function(){
                lightColour(series[i]);
                if (Number(i) === (series.length-1)) {
                    setTimeout(function() {
                        setPlayersTurn();    
                    }, 2000);    
                }
            }, 2000 * i);
        }(i));
    }
}


function lightColour(id) {
    //apply light class
    document.getElementById(id).className += " light";
    
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
      document.getElementById(id).className = "square";
        }, 1000);
}

    
