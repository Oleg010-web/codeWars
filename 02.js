function numberToString(num) {
  let numToString = num.toString()
  return numToString
  // Return a string of the number here!
}
//2
// Sum Numbers
function sum (numbers) {
  "use strict";
  if (numbers === null){
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
};
//3
function maps(x){
  const newArray = x.map(function (i){
    return i * 2 ;
  })
  return newArray;
 }
 //4
 function monkeyCount(n) {
  // your code here
    let newArray = [];
    for (let i = 1; i <= n; i++){
      newArray.push(i)
    }
    return newArray;
  }
  //5
  function fixTheMeerkat(arr) {
    //your code here 
     let newArray = [];
     for(let i = arr.length - 1; i >= 0 ; i--){
       newArray.push(arr[i]);
     }
     return newArray;
   }
   //6
   function grow(x){
    let intCounter;
    intCounter = x.reduce(function(accumulator, currentValue){
      return intCounter = accumulator * currentValue
    }, 1);
    return intCounter;
  }
  //6
  function powersOfTwo(n){
    let powersOfTwoArray = [];
    let countOfN;
    if(n < 1){
        for (let i = 0; i <= n; i++){
        powersOfTwoArray.push(Math.pow(2,n));
    }}else{ 
        for (let i = 0; i <= n; i++){
        countOfN = 2 ** i;
        powersOfTwoArray.push(countOfN)
        }
      }
      return powersOfTwoArray
    }
    //7
    function findMultiples(integer, limit) {
      //your code here
      let multiplesArray = [];
      for(let i = integer; i <= limit; i= i + integer){
        multiplesArray.push(i);
      }
      return multiplesArray;
    }
    // 8
    function countSheeps(sheep) {
      // TODO
      let intSheeps = 0;
      sheep.forEach(function (element) {
          if (element === null || element === false || element === undefined){
        return 0;
      } else{
        intSheeps +=1 ;
      }
      })
      return intSheeps; 
    }