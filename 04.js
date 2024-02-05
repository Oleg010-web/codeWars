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