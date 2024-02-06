//1
function positiveSum(arr) {
  let sumOfPositiveInt = 0;
  arr.forEach((element) => {
    element > 0 ? sumOfPositiveInt += element : element
  })
  return sumOfPositiveInt
}
//2
function converter (mpg) {
  let intOfKilometrs = 1.609344;
  let intOfLitre = 4.54609188;
  let kpl = intOfLitre / intOfKilometrs ;
  return Math.round(( mpg / kpl)*100)/100
  };
 //code to convert miles per imperial gallon to kilometers per liter
//3
function solution(str){
  let strArr = str.split('');
  strArr.reverse();
  let newstrArr = strArr.join('')
  return newstrArr;
}
//4
function removeEveryOther(arr){
  let arrIndexCounter = [];
  arr.forEach((element, index) => {
      index % 2 ===0 ? arrIndexCounter.push(element) : element
    })
  return arrIndexCounter 
}
//5
const stringToNumber = function(str){
  return Number(str);
}
//6
function basicOp(operation, value1, value2){
  if (operation === "+"){
    return value1 + value2
  }else if (operation === "-"){
     return value1 - value2
  }else if (operation === "*"){
    return value1 * value2
  }else if (operation === "/"){
    return value1 / value2
  }else {
    return 0
  }
}
//7
function countBy(x, n) {
  let z = [];
   let multipleNum = x * n
   while (multipleNum >= x){
     z.push(multipleNum);
     multipleNum = multipleNum - x
   } 
  z.reverse();
  return z;
}
//8
function sumMix(x){
  let sumArraysNum= 0;
  x.forEach( (element) => {
    typeof element === "string" ? element = Number(element) : element
    sumArraysNum += element;
  })
  return sumArraysNum;
}
//9
function getSize(width, height, depth){
  let arr = [];
  let area = 2 * (width * depth + width * height + height * depth);
  let volume = width * height * depth;
  arr.push(area,volume)
  return arr;
}
//10
const isReallyNaN = (val) => {
  return val !== val ? true : false
};