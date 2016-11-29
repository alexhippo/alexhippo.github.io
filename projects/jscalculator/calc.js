//To-Do: variables for display and result
//blank display


function reset() {
    document.getElementById("display").value = "0";
    document.getElementById("result").value = "0";
}

function input(id) {
    //no multiple 0s
    if ((document.getElementById("display").value == 0) && (document.getElementById(id).className !== "number"))    {
        return false;
    } else if ((document.getElementById("display").value == 0) && (document.getElementById(id).className == "number")) { //don't apply operators if initial value is 0
        document.getElementById("display").value = document.getElementById(id).value;
    } else {
        //if last character is an operator - replace it
        if ((/(-$)|(\+$)|(\/$)|(\*$)/gm.test(document.getElementById("display").value)) && (id === "multiply" || id === "divide" || id === "plus" || id === "minus" )){
            document.getElementById("display").value = document.getElementById("display").value.replace(/(-$)|(\+$)|(\/$)|(\*$)/gm, document.getElementById(id).value);
        } else {
            if ((id === "decimal") && (document.getElementById("display").value.split('.').length === 2)) { //if there is already a decimal point, do not put another decimal point
                return false;
            } else {
                document.getElementById("display").value += document.getElementById(id).value; 
            }
        } 
    }
}


function what(id, className) { //debugging purposes only
    console.log(id, document.getElementById(id).className);
}



function execute() {
    calculation = eval(document.getElementById("display").value);
    document.getElementById("result").value = calculation;
}
