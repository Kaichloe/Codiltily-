// position 0 = start and position x+1 == goal
// array A consist of N inter, A[K] === position where one leaf falls at time K in secs
// value === position of leaf and index === time 
// earliest time frog can get to goal aka when all leafs there to form path
// x amount of positions to be filled to have a clear path 
// if cannot cross river then return -1
// 1,3,1,4,2,3,5,4


function solution(X,A){
  let filled = {};
  let count = 0;
  let minTime = -1;

  for (let i = 0; i < A.length; i++) {
    if (!filled[A[i]]){
      filled[A[i]] = true;
      count++;
    }
    if (count === X){
      minTime = i;
      break;
    }
  }
  return minTime;
}

// ON time ON space,  We know there are only X number of positions in leaves can fall on, used hash to check position of fallen leaves, dont care about dups, but when we see position for first time we increment. we stop iterating if we have seen X number of unique leaf positions and return the index aka the time of last filled position OR we have reached end of array meaning the given array does not contain a viable path so return default -1