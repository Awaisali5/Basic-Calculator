
let buffer ='0';

let RunningTotal= 0;

let previousOperator=null;

let screen = document.querySelector(".screen");



// show the clicked buttons 

function init(){
    console.log("hey");

    document.querySelector(".calc-buttons").addEventListener("click", function(event){

        buttonClick(event.target.innerText);
    });
}



// handling the clicked one is number or symbols 

function buttonClick(value){
    if(isNaN(parseInt(value))){
        HandleSymbols(value);
    }
    else{
        handleNumbers(value);
    }
    display();
}



// handling the number if user Clicked the number 


function handleNumbers(value){
  if(buffer === '0'){
    buffer=value;
  }
  else{
    buffer +=value;

    //buffer = buffer+ number;
  }
//   console.log(buffer)
  
}






// handling the maths 

function HandleMaths(value){
if(buffer==='0'){

    // this will do nothing 
    return;
}

// intBuffer will convert the symbol into the in

const intBuffer =parseInt(buffer);
if(RunningTotal===0){
    RunningTotal=intBuffer;
}else{

    // here FlushOperation will do the basic math like - + etc 
    FlushOperation(intBuffer);
}

//  this will store the first value 
previousOperator=value;

buffer='0';


console.log(RunningTotal);




}


// to handle the maths operator symbols

function FlushOperation(intBuffer){
    if(previousOperator==='+'){
        RunningTotal += intBuffer;
    }else if(previousOperator=== '-'){
        RunningTotal -= intBuffer;
    }else if(previousOperator ==='×'){
        RunningTotal *= intBuffer;
    }else{
        RunningTotal /=intBuffer;
    }

}

// this is handling the Math symbols 

function HandleSymbols(value){
switch(value){
    case 'C':
        buffer='0';
        break;
    case '←':
        if(buffer.length ===1){
            buffer='0';
        }else{
            buffer= buffer.substring(0,buffer.length-1);
        }
        break;
    case '=':
        if(previousOperator===null){
            return;
        }
        FlushOperation(parseInt(buffer));
        buffer = "" +RunningTotal;

        RunningTotal=0;
        previousOperator=null;

        break;
    case '+':
    case '-':
    case '÷':
    case '×':
        HandleMaths(value);
        break;
    default:
        break;
}
}


function display(){
    screen.innerText=buffer;
}


init();