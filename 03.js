//1
function countPositivesSumNegatives(input) {
  if(input === null || input.length === 0){
    return [];
  }
  let sumOfNeganiveInt = 0;
  let NeganiveInt;
  let maxPositiveCounter = 0;
  let newArrayOfInt = [];
  input.forEach(function (element){
    if (element > 0){
      maxPositiveCounter++;
    }else if (element < 0){
      NeganiveInt = element
      sumOfNeganiveInt += NeganiveInt
    }
  })
  newArrayOfInt.push(maxPositiveCounter,sumOfNeganiveInt)
  return newArrayOfInt;
}
//2
function arrayPlusArray(arr1, arr2) {
  let sumOfArrayEl = 0;
  for (let i = 0; i < arr1.length; i++){
    sumOfArrayEl = sumOfArrayEl + (arr1[i] + arr2[i]);
  }
  return sumOfArrayEl;
}
//3
String.prototype.isUpperCase = function() {
  let args = this.valueOf();
  let argsString = this.valueOf().toUpperCase();
  if (args === argsString){
    return true
  }else {
    return false
  }
}
//4
var summation = function (num) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}
//5
function well(x){
  let counterOfIdeas = 0;
  x.forEach((element)=>{
     element === "good"? counterOfIdeas++ : counterOfIdeas += 0
  })
   return  counterOfIdeas > 2 ? 'I smell a series!' : counterOfIdeas > 0 ? 'Publish!' : 'Fail!'; 
}
//6
function repeatStr (n, s) {
  let sumOfS = s;
  for(let i = 1; i < n; i++){
    sumOfS += s
  }
  return sumOfS;
}//7
function divisibleBy(numbers, divisor){
  let newArray = [];
  numbers.forEach((elements)=>{
    if(elements % divisor === 0){
      newArray.push(elements)
    }
  })
  return newArray;
}
//8
function makeNegative(num) {
  let newNum = num * 2;
  let argNum = num ;
  num >= 0 ? argNum = argNum - newNum : num
  return argNum;
}
//9
function getAverage(marks){
  let averageNum = 0;
  let sumArraysNum = 0;
  let counterOfMarks= 0;
  for(let i = 0; i < marks.length; i++){
    sumArraysNum +=marks[i];
    counterOfMarks = 1 + i;
  }
  averageNum = Math.round(sumArraysNum / counterOfMarks);
  return averageNum ;
}
//10
function getAverage(marks){
  let averageNum = 0;
  let sumArraysNum = 0;
  let counterOfMarks= marks.length;
  for(let i = 0; i < marks.length; i++){
    sumArraysNum += marks[i];
  }
  averageNum = Math.floor(sumArraysNum / counterOfMarks);
  return averageNum ;
}