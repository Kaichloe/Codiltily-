
// return smallest pos # not occurred in array A
// -1,1
function solution(A){
  let result = 1;
  let unique = {};

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && !unique[A[i]]){
      unique[A[i]] = true;
    }
  }
  let uniqueArray = Object.keys(unique);

  for (let j = 0; j < uniqueArray.length; j++) {
    if (Number(uniqueArray[j]) === result){
      result += 1;
    } else if (Number(uniqueArray[j]) > result){
      return result;
    }
  }

  return result;
}

function solution2(A){
  let result = 1;

  let sortedArr = A.sort(function(a,b) {
    return a - b;
  });

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === result){
      result++;
    } else if (sortedArr[i] > result){
      return result;
    }
  }

  return result
}

// first one is better for what there are a lot of dups and a lot of sorting needed as putting them in a hash would solve the both. first part of line 9 and line 18 is not necessary but helps. The former elminates the need to relook at neg #s and the latter cuts down on iteratings by not needing to go thru all before returning 