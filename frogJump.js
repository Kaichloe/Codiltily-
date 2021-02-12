// at X, want to >= y and moves at d rate
// give the least # of d moves to >= y 
// x <= y and all variables are pos

function solution(x,y,d){
  return Math.ceil((y-x)/d)
}