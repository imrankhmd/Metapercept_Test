/longestword/

function getLongestWord(str){
  let sum=str.split(' ');
  let max=0;
  let min='';

  for(i=0;i<sum.length;i++){
    if(sum[i].length>max){
      max=sum[i].length;
      min=sum[i];
    }
  }
  console.log(max);
  console.log(min);
}
getLongestWord('“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributionqqqqqqqqqqqqqqqqqqq of letters, as opposed to using Content here, content here, making it look like readable English');