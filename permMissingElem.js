// no elements are neg 
// array is 1 to N+1 but consist of N different inters so no dups so one is missing 
// find missing 
// brute is sort it first 

function solution(a){
  if (a.length === 0){
    return 1;
  }

  let sorted = a.sort(function (a,b) {return a-b; });
  
  let check = 1;
  for (let i = 0; i < sorted.length; i++){
    if (sorted[i] === check) {
      check++;
    } else {
      break;
    }
  }
  return check;
}

console.log(solution([1,2,3,4,6,5,8]));
console.log(solution([]));
console.log(solution([1,2,3,4,6,5]));
console.log(solution([2]));
console.log(solution([9,10,8,7,6,1,2,3,4]))

function solution2(a){
  let n = a.length + 1;
  let targetSum = n * (n+1) / 2;
  let sum = a.reduce((a,b) => a+b, 0)

  return targetSum-sum;
}

//mathy solution. sum of [1...N] is N*(N+1)/2 
