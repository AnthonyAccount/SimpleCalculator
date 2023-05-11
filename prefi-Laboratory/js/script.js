var result = 0;
var operator="";

function clearScreen() {
    document.getElementById("INPUT").value = "";
    }

function sum(value){
    var input = parseFloat(document.getElementById("INPUT").value);
    result = input;
    operator = value;
    document.getElementById("INPUT").value = "";
}
function minus(value){
    var input = parseFloat(document.getElementById("INPUT").value);
    result = input;
    operator = value;
    document.getElementById("INPUT").value = "";
}
function multiply(value){
    var input = parseFloat(document.getElementById("INPUT").value);
    result = input;
    operator = value;
    document.getElementById("INPUT").value = "";
}
function divide(value){
    var input = parseFloat(document.getElementById("INPUT").value);
    result = input;
    operator = value;
    document.getElementById("INPUT").value = "";
}
function equals(){
    var input = parseFloat(document.getElementById("INPUT").value);
                if (operator == "+") {
                    result += input;
                } else if (operator == "-") {
                    result -= input;
                } else if (operator == "*") {
                    result *= input;
                } else if (operator == "/") {
                    result /= input;
                } else {
                }
                document.getElementById("result").innerHTML = result;
                result = 0;
             operator = "";

            }

     

        
