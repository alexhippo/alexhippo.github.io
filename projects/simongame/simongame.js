colours = ["green", "red", "yellow", "blue"];
series = [];

function start() {
    chooseColour();
    presentSeries();
}

function reset() {
    series.length = 0;
    start();
}

function chooseColour(){
    //randomise
    id = colours[Math.floor(Math.random() * colours.length)];
    series.push(id);
}


function presentSeries() {
    //light colours in series one at a time
    console.log(series);
    for (var i in series) {
        (function(i){
            setTimeout(function(){
                lightColour(series[i]);
            }, 2000 * i);
    }(i));
    }
}

function lightColour(id) {
    //apply light class
    document.getElementById(id).className += " light";
    setTimeout(function() {
      document.getElementById(id).className = "square";
        }, 1000);
}


