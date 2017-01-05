var playersTurn = false;
var computersTurn = false;
var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var playerSymbol = "X";
var computerSymbol = "O";
var roundCounter = 1;

//playerSymbol = "<span style='color:'>O</span>";
//computerSymbol = "<span style='color:>X</span>";

function showInstructions() {
    document.getElementById("howtoplay").style.visibility = "visible";
    document.getElementById("overlay").style.visibility = "visible";
    
}

function closeInstructions() {
    document.getElementById("howtoplay").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";
}


function chooseSymbol(symbol) {
    if (symbol === "X") {
        playerSymbol = "X";
        computerSymbol = "O";
        symbol = "<span style='color:#B31931; font-family: Schoolbell, cursive; font-size:30px;'>" + playerSymbol + "</span>";
    } else {
        playerSymbol = "O";
        computerSymbol = "X";
        symbol = "<span style='color:#0058B9; font-family: Schoolbell, cursive;font-size:30px;'>" + playerSymbol + "</span>"
    }
    document.getElementById("choose").innerHTML = "<h2>You are " + symbol + "</h2>";
    document.getElementById("status").innerHTML = "<h2>Game On!</h2> Game is in progress.";
    
    //alternate turns
    if (roundCounter%2 == 0) {
        playersTurn = false;
        computersTurn = true;
        setTimeout(function() {
            computerClick();
        }, 2000);
        document.getElementById("turn").innerHTML = "It's computer's turn.";
    } else {
        playersTurn = true;
        computersTurn = false;
        document.getElementById("turn").innerHTML = "It's your turn. Choose a square.";
    }
}

function resetChooseSymbol() {
    document.getElementById("choose").innerHTML = "<h2>Are you X or O?</h2><button id='X' onclick='chooseSymbol(this.id);'>X</button> <button id='O' onclick='chooseSymbol(this.id);'>O</button>"
}


function playerClick(id) {
    if ((playersTurn === false) || (used(id) === true)) {
        return false;
    } else {
        if (playerSymbol == "X") {
            document.getElementById(id).innerHTML = "<span style='color:#B31931'>" + playerSymbol + "</span>";
        } else {
            document.getElementById(id).innerHTML = "<span style='color:#0058B9'>" + playerSymbol + "</span>";
        }
        playersTurn = false;
        computersTurn = true;
        document.getElementById("turn").innerHTML = "It's computer's turn."
        
        //remove from array so it doesn't get used again
        var index = ids.indexOf(Number(id));
        ids.splice(index, 1);
        checkResult(playerSymbol);
        setTimeout(function() {
            computerClick();
        }, 2000);
    }  
}

function computerClick() {
    if ((computersTurn === false)) {
        return false;
    } else {
        id = ids[Math.floor(Math.random() * ids.length)];
        if (computerSymbol == "X") {
            document.getElementById(id).innerHTML = "<span style='color:#B31931'>" + computerSymbol + "</span>";
        } else {
            document.getElementById(id).innerHTML = "<span style='color:#0058B9'>" + computerSymbol + "</span>";
        }
        computersTurn = false;
        playersTurn = true;
        document.getElementById("turn").innerHTML = "It's your turn.";
    
        //remove from array so it doesn't get used again
        var index = ids.indexOf(Number(id));
        ids.splice(index, 1);
        checkResult(computerSymbol);
    }
    
}

function used(id) {
    if (document.getElementById(id).innerHTML !== "") {
        return true;
    } else return false;
}

function square(id) {
    return document.getElementById(id).innerHTML;
}

function checkResult(symbol) {
    var square1 = document.getElementById(1).textContent;
    var square2 = document.getElementById(2).textContent;
    var square3 = document.getElementById(3).textContent;
    var square4 = document.getElementById(4).textContent;
    var square5 = document.getElementById(5).textContent;
    var square6 = document.getElementById(6).textContent;
    var square7 = document.getElementById(7).textContent;
    var square8 = document.getElementById(8).textContent;
    var square9 = document.getElementById(9).textContent;
    
    //horizontal
    if (square1 === symbol && square2 === symbol && square3 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }
    } else
    if (square4 === symbol && square5 === symbol && square6 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }   
    } else
    if (square7 === symbol && square8 === symbol && square9 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }  
    } else
    
    //vertical
    if (square1 === symbol && square4 === symbol && square7 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }   
    } else
    if (square2 === symbol && square5 === symbol && square8 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }   
    } else
    if (square3 === symbol && square6 === symbol && square9 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }
    } else
    
    //diagonal
    if (square1 === symbol && square5 === symbol && square9 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }  
    } else
    if (square3 === symbol && square5 === symbol && square7 === symbol) {
        if (symbol === playerSymbol) {
            win();  
        } else {
            loss();
        }   
    } else 
    
    //draw - if the grid has been filled up and there are no win/loss scenarios
    if ((used(1) === true) && (used(2) === true) && (used(3) === true) && (used(4) === true) && (used(5) === true) && (used(6) === true) && (used(7) === true) && (used(8) === true) && (used(9) === true)) {
        draw();
    }
}

function win() {
    //end session
    playersTurn = false;
    computersTurn = false;
    document.getElementById("turn").innerHTML = "";
    document.getElementById("status").innerHTML = "<h2>Game Over!</h2> New game will start soon.";
    
    //display message
    document.getElementById("result").innerHTML = "You win!"; 
    reset();
    roundCounter++;
}

function loss() {
    //end session
    playersTurn = false;
    computersTurn = false;
    document.getElementById("turn").innerHTML = "";
    document.getElementById("status").innerHTML = "<h2>Game Over!</h2> New game will start soon.";
    
    //display message
    document.getElementById("result").innerHTML = "You lose."; 
    reset();
    roundCounter++;
}

function draw() {
    //end session
    playersTurn = false;
    computersTurn = false;
    document.getElementById("turn").innerHTML = "";
    document.getElementById("status").innerHTML = "<h2>Game Over!</h2> New game will start soon.</h2>";
    
    //display message
    document.getElementById("result").innerHTML = "It's a draw!"; 
    reset();
    roundCounter++;
}

function reset() {
    setTimeout(function() {
        squares = document.getElementsByClassName("square");
        for (var i in squares) {
            squares[i].innerHTML = "";
        }
        
        //return to initial values
        playersTurn = false;
        computersTurn = false;
        document.getElementById("turn").innerHTML = "Choose your symbol first.";
        document.getElementById("result").innerHTML = ""; 
        document.getElementById("status").innerHTML = ""; 
        ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        resetChooseSymbol();
    }, 4000);
}
