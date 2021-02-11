// array has odd # of elements 
// there exist pairs of elements with same value except for one( the odd one out)
// [9,3,9,3,9,7,9]

function solution(A){
  let hash = {};

  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]] === undefined){
      hash[A[i]] = 1;
    } else if (hash[A[i]] != undefined){
      hash[A[i]]++;
    }
  }
  
  const pairs = Object.entries(hash);

  for (const [value,count] of pairs) {
    if (count % 2 != 0){
      return Number(value);
    }
  }
} 

//Slow 

function solution2(A){
  let hash = {};

  for (let i = 0; i < A.length; i++) {
    if (hash[A[i]] === undefined){
      hash[A[i]] = 1;
      // console.log(hash)
    } else if (hash[A[i]] != undefined){
      hash[A[i]]++;
    }
  }

  for (let j = 0; j < A.length; j++) {
    if (hash[A[j]] % 2 != 0){
      // console.log(hash[A[j]] % 2 != 0);
      return A[j];
    }
  }
}

// faster 

function solution3(A) {
  let result = 0;

  for (let element of A) {
    result ^= element
  } 
  return result
}

//best time and space 

console.log(solution2([1]));
