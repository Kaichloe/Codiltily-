// array A consist of N integers, P Q is a pair of integers such that 0<=P<Q<N
// PQ is a slice/subarr of A, at least two elements
// integers in A can be neg
function solution(A) {
  let start = 0;

  let currentSum = A[0] + A[1];
  let minAvgSlice = currentSum / 2;
  for (let i=2; i<A.length; i++) {
      currentSum += A[i];
      let newAvg = currentSum / 3;
      if (newAvg < minAvgSlice) {
        minAvgSlice = newAvg;
        start = i-2;
      }

      currentSum -= A[i-2];
      newAvg = currentSum / 2;
      if (newAvg < minAvgSlice) {
        minAvgSlice = newAvg;
        start = i-1;
      }
  }

  return start;
}