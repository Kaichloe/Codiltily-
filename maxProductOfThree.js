// non empty array
// find the max 
function solution(a){
  let reverseSort = a.sort((a,b)=> b - a);
  let first =reverseSort[0] * reverseSort[1] * reverseSort[2];
  let second = reverseSort[0] * reverseSort[a.length - 1] * reverseSort[a.length - 2];

  return Math.max(first,second)
}

// O(N*logN) time and ON space, could clean up code a bit 