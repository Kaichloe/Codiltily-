// use of splice, pop, unshift, and slice can work 
function solution(A,K){
  while (K > 0){
    A.unshift(A.pop())
    K--;
  }
  return A;
}
//solution O1 space and ON time 

function solution2(A,K){
  let range = A.length;
  let numRotate = K % range;

  while (numRotate > 0){
    A.unshift(A.pop())
    numRotate--;
  }
  return A;
}

// same space complex but slightly faster b/c less rotations needed to be run