function solution(A){
  let unique = {};

  for (let i = 0; i < A.length; i++) {
    let key = A[i]

    if(!unique[key]){
      unique[key] = 1;
    }
  }
  return Object.values(unique).length;
}

// ON time and ON space 