// array A consist N integers, consec eles = consec cars
// only 1s and 0s, east and west respectively 
// return # of pairs of passing cars, return -1 if more than 1mill 
function solution(A){
  let zeroCount = 0;
  let numPassCars = 0;
  
  for (let i = 0; i < A.length; i++) {
    if(A[i] === 0){
      zeroCount++;
    } else {
      numPassCars += zeroCount;
    }
  }

  if (numPassCars > 1000000000){
    return -1;
  } else {
    return numPassCars;
  }
}