// returns # of integers within a and b that is divisble by k
// a and b are 0 or greater and b is >= a
// k is 1 or greater
function solution(a,b,k){
  let count = 0

  for (let i = a; i <= b; i++){
    if (i % k === 0){
      count++;
    }
  }

  return count;
}

// O(b-a) time complexity 

function solition(a,b,k){
  return (parseInt(b/k) - parseInt(a/k)) + ((a % k === 0) ? 1 : 0);
}

// mathy solution to be 0(1), basically its finding the closest number to b thats divisible by k and closest number to a thats divisble by k. we do this by dividing them. then we subtract the different to get the range between the two closest numbers