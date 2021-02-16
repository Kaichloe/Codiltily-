// brute first 
function solution(S,P,Q){
  let impactHash = { "A":1, "C":2, "G":3, "T":4};
  let result = [];
  let min = undefined;

  for (let i = 0; i < P.length; i++) {
    let firstIndex = P[i] ;
    let secondIndex = Q[i] + 1;
    let subString = S.substring(firstIndex,secondIndex);
    
    for (let j = 0; j < subString.length; j++) {
      let key = subString[j];
      let value = impactHash[key];

      if (min === undefined || min > value){
        min = value;
      } 
    }
    result.push(min);
    min = undefined;
  }
  return result;
}

// console.log(solution('CAGCCTA', [2, 5, 0], [4, 5, 6]))


function solution (S, P, Q) {
	var dna = '';
	var ans = [];

	for (var i=0; i < P.length; i++) {
		dna = S.slice(P[i], Q[i] + 1);

		if (dna.indexOf('A') !== -1) {
			ans.push(1)
		} else if (dna.indexOf('C') !== -1) {
			ans.push(2)
		} else if (dna.indexOf('G') !== -1) {
			ans.push(3)
		} else {
			ans.push(4)
		}
	}

	return ans;
}

//better slightly for worse cases, cuts down on iterations 