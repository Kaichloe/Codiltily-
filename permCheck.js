function solution(A){
  let sortedA = A.sort(function(a,b) {
    return a - b
  })
  
  let check = 1;

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] === check){
      check++;
    } else {
      return 0
    }
  }
  return 1;
}

// best is 0N but worse is O(N*logN)

function solution2(a){
  let seen = {}

  for (let i = 0; i < a.length; i++) {
    if (!seen[a[i]]){
      seen[a[i]] = true;
    }
  }

  for (let j = 1; j <= a.length; j++) {
    if (!seen[j]){
      return 0;
    }
  }
  return 1;
}