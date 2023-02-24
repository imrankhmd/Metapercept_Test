/maximumNumber/

let array= [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let sum=0;

function maximumNumber(array){
  for(let i=0;i<array.length;i++){
  if(Array.isArray(array[i])){
    maximumNumber(array[i]);
  }else{
    if(array[i]>sum){
      sum=array[i];
    }
  }
  }
}
  maximumNumber(array);
  console.log(sum);
