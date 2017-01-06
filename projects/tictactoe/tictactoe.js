var playersTurn = false,
    computersTurn = false,
    playerSymbol = "X",
    computerSymbol = "O",
    ids = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    roundCounter = 1,
    turnMsg = document.getElementById("turn"),
    statusMsg = document.getElementById("status"),
    resultMsg = document.getElementById("result");

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
    } else {
        playerSymbol = "O";
        computerSymbol = "X";
    }
    document.getElementById("choose").innerHTML = "<h2>You are " + "<span id=" + playerSymbol + ">" + playerSymbol + "</span></h2>";
    statusMsg.innerHTML = "<h2>Game On!</h2> Game is in progress.";
    whoIsGoingFirst();
}

function whoseTurnIsIt(participant) {
    if (participant === "player") {
        playersTurn = true;
        computersTurn = false;
        turnMsg.innerHTML = "It's your turn.";
    } else if (participant === "computer") {
        playersTurn = false;
        computersTurn = true;
        turnMsg.innerHTML = "It's computer's turn.";
    } 
}

function whoIsGoingFirst() {
    //alternate turns
    if (roundCounter%2 == 0) {
        whoseTurnIsIt("computer");
        setTimeout(function() {
            computerClick();
        }, 2000);
    } else {
        whoseTurnIsIt("player");
    }
}

function playerClick(id) {
    var index = ids.indexOf(Number(id));
    if ((playersTurn === false) || (index === -1)) {
        return false;
    } else {
        document.getElementById(id).innerHTML = "<span class=" + playerSymbol + ">" + playerSymbol + "</span>";
        ids.splice(index, 1);
        checkResult(playerSymbol);
    }  
}

function computerClick() {
    if ((computersTurn === false)) {
        return false;
    } else {
        id = ids[Math.floor(Math.random() * ids.length)];
        document.getElementById(id).innerHTML = "<span class=" + computerSymbol + ">" + computerSymbol + "</span>";
        //remove from array so it doesn't get used again
        var index = ids.indexOf(Number(id));
        ids.splice(index, 1);
        checkResult(computerSymbol);
    }
}

function square(id) {
    return document.getElementById(id).textContent;
}

function checkResult(symbol) {  
    function checkSquares(a, b, c) {
        if ((square(a) === symbol) && (square(b) === symbol) & (square(c) === symbol)) {
            return true;
        } else
            return false;
    }
    //winning scenarios
    if (checkSquares(1, 2, 3) || checkSquares(4, 5, 6) || checkSquares(7, 8, 9) || checkSquares(1, 4, 7) || checkSquares(2, 5, 8) || checkSquares(3, 6, 9) || checkSquares(1, 5, 9) || checkSquares(3, 5, 7)) {
        if (symbol === playerSymbol) {
            result('win');
        } else {
            result('loss');
        }
    } else if (ids.length === 0) {
        result('draw');
    } else {
        if (symbol === computerSymbol) {
            whoseTurnIsIt("player");
        } else {
            setTimeout(function() {
                computerClick();
                }, 2000);
            whoseTurnIsIt("computer");
        }
    }
}

function endSession() {
    playersTurn = false;
    computersTurn = false;
    turnMsg.innerHTML = "";
    statusMsg.innerHTML = "<h2>Game Over!</h2> New game will start soon.";
    reset();
    roundCounter++;
}

function result(outcome) {
    switch (outcome) {
        case 'win':
            resultMsg.innerHTML = "You win!"; 
            break;
        case 'loss':
            resultMsg.innerHTML = "You lose."; 
            break;
        case 'draw':
            resultMsg.innerHTML = "It's a draw!"; 
            break;
    }
    endSession();
}

function resetChooseSymbol() {
    document.getElementById("choose").innerHTML = "<h2>Are you X or O?</h2><button id='X' onclick='chooseSymbol(this.id);'>X</button> <button id='O' onclick='chooseSymbol(this.id);'>O</button>";
}

function reset() {
    setTimeout(function() {
        squares = document.getElementsByClassName("square");
        for (var i in squares) {
            squares[i].innerHTML = "";
        }
        //return to initial values
        turnMsg.innerHTML = "Choose your symbol first.";
        resultMsg.innerHTML = ""; 
        statusMsg.innerHTML = ""; 
        ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        resetChooseSymbol();
    }, 5000);
}
