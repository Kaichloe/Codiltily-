// 3,1,2,4,3
// brute force first
function solution(a){
  if (a.length === 2){
    return Math.abs(a[1]-a[0])
  }
  let minDiff = undefined;
  let numOfSlice = a.length - 1; // b/c parts must have at least one number so max amount slices/checks is length - 1
  let slice = 1;

  while (numOfSlice >= slice){
    debugger
    let first = a.slice(0,slice);
    let second = a.slice(slice);
    let firstSum = sum(first); // line 15 and 16 making it slower as reduce is 0n and while is On
    let secondSum = sum(second);
    let absDiff = Math.abs(firstSum-secondSum);
    
    if(minDiff === undefined){
      minDiff = absDiff;
    } else if (minDiff > absDiff){
      minDiff = absDiff;
    }

    slice++;
  }
  return minDiff;
}

function sum(array){
  let sum = array.reduce((a,b) => a+b,0)
  return sum;
}

console.log(solution([1,1,3]));
console.log(solution([3,1,2,4]));
// TOO SLOW 

function solution2(a){
  let head = a[0];
  let tail = sum(a.slice(1));
  let minDiff = Math.abs(head-tail);

  for (let i = 1; i < a.length -1; i++) {
    head += a[i];
    tail -= a[i];
    let currDiff = Math.abs(head-tail);
    if (currDiff < minDiff){
      minDiff = currDiff;
    }
  }
  return minDiff;
}

//best solution, only need the sum once each

