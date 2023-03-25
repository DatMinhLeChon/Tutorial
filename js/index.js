const numbers = document.querySelectorAll('.numbers');
const result = documnet.querySelector('.result');
const signs = document.querySelectorAll('.sign')
const equals = document.querySelector('.equals')

let firstValue = "";
let isFirstValue =false;
let secondValue ="";
let isSecondValue = false;
let sign ="";
let resultValue =0;

equals.addEventListener('click', (e)=> {
    clickResult();
    result.addEventListener('keyup', function(){
        // Gán giá trị vào div
        document.getElementById('result').innerHTML = result;
    });

})
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',(e)=> {
        let atr = e.target.getAttribute('value');
        if(isFirstValue == false) {
            isFirstValue = true;
            firstValue = atr;   
        }
        // update the input number data before sign
        else if(isSecondValue == false){
            isSecondValue = true;
            secondValue = firstValue*10 + atr;
        }
    }
    )
}

for (let i =0; i <signs.length; i++){
    signs[i].addEventListener("click", (e)=>{
        let str = e.target.getAttribute('value');
        sign = str;
    })
}

void clickResult(){
    if(sign == "+"){
        resultValue = resultValue + secondValue; 
    }
    else if(sign == "-"){
        resultValue = resultValue - secondValue;
    }
    else if(sign == "*"){
        resultValue = resultValue*secondValue;
    }
    else if(sign =="/"){
        resultValue = resultValue/secondValue;
    }
}

void clickAC(){}

