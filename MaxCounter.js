function solution(N,A){
  let counter = new Array(N).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (1<= A[i] && A[i]<= N){
      counter[A[i]-1]+=1;
    } else if (A[i] === N + 1){
      let currentMax = Math.max(...counter);
      counter.fill(currentMax);
    }
  }
  return counter;
}

//ON space, best case speed is 0N but worse case would be 0N^2 (if all are max counter operations)

function solution2(N,A){
  let maxNum = 0;
  let counterArr = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (1<= A[i] && A[i]<= N){
      counterArr[A[i]-1]+=1;
      if (counterArr[A[i]-1] > maxNum){
        maxNum = counterArr[A[i]-1];
      }
    } else if (A[i] === N + 1){
      counterArr.fill(maxNum);
    }
  }
  return counterArr;
}

// only slightly better 

function solution3(N,A){
  let lastMax = 0;
  let max = 0;
  let counterArr = new Array(N).fill(0);
  
  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) {
      lastMax = max;
    } else {
      let currentMax = Math.max(lastMax, counterArr[A[i] - 1])
      counterArr[A[i] - 1] = currentMax + 1;
      max = Math.max(counterArr[A[i] - 1], max);
    }
  }

  for (let j = 0; j < N; j++) {
    if (counterArr[j] < lastMax){
      counterArr[j] = lastMax;
    }
  }

  return counterArr;
}

//best case is 0N worse is 0(N+M), need to keep track of two variables max and lastmax as there are cases where we increment on only one counter not all




