var colours = ["green", "red", "yellow", "blue"],
    series = [],
    playersTurn = false,
    checkpoint = 0,
    greenSound = document.getElementById("greenSound"),
    redSound = document.getElementById("blueSound"),
    yellowSound = document.getElementById("yellowSound"),
    blueSound = document.getElementById("blueSound");

function start() {
    if (playersTurn === true) {
        //disabling button if play is in progress
        return false;
    } else {
        chooseSeriesColour(); //if wrong, DO NOT choose a colour
        presentSeries(); 
    }
}

function reset() {
    series.length = 0;
    start();
}

function playerPressColour(id) {
    if (playersTurn === false) {
        return false;
    } else {
        lightColour(id);
        check(id);
    }
}

//check 
function check(id) {
    //check if the colour that the player pressed is the same as the one in series AND same position
    if (id === series[checkpoint]) {
        //correct state
        if (checkpoint < series.length-1) {
            //move checkpoint forward if we haven't reached the last colour in the series
            checkpoint++;
        } else {
            //if end of the series, reset values
            checkpoint = 0;
            playersTurn = false;
            setTimeout(start, 2000);
        }
    } else {
        //wrong state - non-strict mode
        playersTurn = false;
        checkpoint = 0;
        setTimeout(presentSeries, 2000);
    }
}

function chooseSeriesColour(){
    //randomise
    id = colours[Math.floor(Math.random() * colours.length)];
    series.push(id);
}


function presentSeries() {
    //light colours in series one at a time
    playersTurn = false;
    for (var i in series) {
        (function(i){
            setTimeout(function(){
                lightColour(series[i]);
                if (Number(i) === (series.length-1)) {
                    setTimeout(function() {
                        playersTurn = true;
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


