// for this problem all binary verison starts with 1 
function solution(N){
  let binaryN = N.toString(2);
  let maxGap = 0;
  let currentGap = 0;

  for (let i = 1; i < binaryN.length; i++) {
    if (Number(binaryN[i]) === 0 ){
      currentGap++;
    } else if (Number(binaryN[i]) === 1){
      if(currentGap >= maxGap){
        maxGap = currentGap;
        currentGap = 0;
      } else{
        currentGap = 0;
      }
    }                                    
  }
  return maxGap
}


console.log(solution(9))
console.log(solution(1041))
console.log(solution(32)) 
// 5
console.log(solution(13))
// 1
console.log(solution(35))
// 1

