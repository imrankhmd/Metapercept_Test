/class number/

function firstClass(n){
  while(n>=10)
    n/=10;
  return Math.floor(n);
}
function seconClass(n){
  return Math.floor(n==10);
}
function thirdClass(n){
  return Math.floor(n*10);
}
let n=123456;
console.log(firstClass(n));
console.log(secondClass(n));
console.log(thirsClass(n));
