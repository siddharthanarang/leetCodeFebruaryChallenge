// The K Weakest Rows in a Matrix
// Given a m * n matrix mat of ones (representing soldiers) and zeros (representing civilians), return the indexes of
// the k weakest rows in the matrix ordered from the weakest to the strongest.
//
//     A row i is weaker than row j, if the number of soldiers in row i is less than the number of soldiers in row j,
//   or they have the same number of soldiers but i is less than j. Soldiers are always stand in the frontier of a row,
//   that is, always ones may appear first and then zeros.

// Example
//
// Input: mat =
//   [[1,1,0,0,0],
//     [1,1,1,1,0],
//     [1,0,0,0,0],
//     [1,1,0,0,0],
//     [1,1,1,1,1]],
//   k = 3
// Output: [2,0,3]
// Explanation:
//   The number of soldiers for each row is:
//   row 0 -> 2
// row 1 -> 4
// row 2 -> 1
// row 3 -> 2
// row 4 -> 5
// Rows ordered from the weakest to the strongest are [2,0,3,1,4]

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {

  if(!mat || !mat.length){
    return [];
  }
  let noOfOnes, memory =[], i, j;
  for(i=0; i<mat.length; i++){
    noOfOnes = 0;
    for(j=0; j<mat[i].length; j++){
      if(mat[i][j] === 1){
        noOfOnes++;
      }
    }
    if(!memory[noOfOnes]){
      memory[noOfOnes] = [];
    }
    memory[noOfOnes].push(i);
  }
  let currentK =0, output =[];
  for(i=0; i<memory.length; i++){
    if(memory[i] && memory[i].length){
      for(j=0; j<memory[i].length; j++){
        if(currentK === k){
          return output;
        }
        output.push(memory[i][j]);
        currentK++;
      }

    }

  }
  return output;

 

};

console.log(`K Weakest Rows are `,kWeakestRows([[1,0,0,0],
  [1,1,1,1],
  [1,0,0,0],
  [1,0,0,0]],4));