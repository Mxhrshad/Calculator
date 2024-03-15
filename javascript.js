let operator = '';
let previousResult = '';
let result = '';

document.addEventListener("DOMContentLoaded", function(){

    let clear = document.querySelector("#clear");
    let negative = document.querySelector("#negative");
    let del = document.querySelector("#del");
    let equal = document.querySelector("#equal");
    let point = document.querySelector("#point");


    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previous = document.querySelector(".previous");
    let current = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        current.textContent = result;
    }));

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        previous.textContent = previousResult + " " + operator;
        current.textContent = result;
    }));

    clear.addEventListener("click", function(){
        previousResult = '';
        result = '';
        operator = '';
        current.textContent = result;
        previous.textContent = previousResult;
    });

    negative.addEventListener("click", function(){
        result = Number(result);
        negativeResult = -result;
        result = negativeResult;
        current.textContent = result;
    });

    del.addEventListener("click", function(){
        result = result.slice(0, -1);
        current.textContent = result;
    });

    point.addEventListener("click", function(){
        if(!result.includes(".")){
            result = result + ".";
            current.textContent = result;
        }
    });

    equal.addEventListener("click", function(){
        previousResult = Number(previousResult);
        result = Number(result);
    
        if(operator == "+"){
            result = result + previousResult;
            previousResult = '';
            if(result.length <= 7){
                current.textContent = result;
            }
            else{
                result = result.toString()
                current.textContent = result.slice(0,5) + "...";
                result = Number(result);
            }
        }
        else if(operator == "-"){
            result =  previousResult - result;
            previousResult = '';
            if(result.length <= 7){
                current.textContent = result;
            }
            else{
                result = result.toString()
                current.textContent = result.slice(0,5) + "...";
                result = Number(result);
            }
            current.textContent = result;
        }
        else if(operator == "/"){
            result = previousResult / result;
            previousResult = '';
            if(result.length <= 7){
                current.textContent = result;
            }
            else{
                result = result.toString()
                current.textContent = result.slice(0,5) + "...";
                result = Number(result);
            }
            current.textContent = result;
        }
        else if(operator == "*"){
            result = result * previousResult;
            previousResult = '';
            if(result.length <= 7){
                current.textContent = result;
            }
            else{
                result = result.toString()
                current.textContent = result.slice(0,5) + "...";
                result = Number(result);
            }
            current.textContent = result;
        }
    });


});

function handleNumber(num){
    if(result.length <= 7){
        result += num;
    }
};


function handleOperator(op){
    operator = op;
    previousResult = result;
    result = '';
}