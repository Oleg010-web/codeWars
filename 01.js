//1
function add(a,b){
  return a + b;
}

function divide(a,b){
  return a / b;
}

function multiply(a,b){
  return a * b;
}

function mod(a,b){
  return a % b;
}
 
function exponent(a,b){
  return a ** b;
}
  
function subt(a,b){
  return a - b;
}

//2
function sumArray(array) { 
  if (array === null || array.length <= 2){
    return  0 ;
  }
  let bigInt = array[0];
  let smallInt = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    if(array[i] > bigInt){
      bigInt = array[i];
    }
    if(array[i] < smallInt){
      smallInt = array[i];
    }
    sum = sum + array[i];
    }
   sum = sum - bigInt - smallInt
   return sum ;
  
  }