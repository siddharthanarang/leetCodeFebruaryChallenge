// Search a 2D Matrix II
//
// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:
//
//   Integers in each row are sorted in ascending from left to right.
//   Integers in each column are sorted in ascending from top to bottom.
//
//   Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  
  let start, end, mid;
  for(let i=0; i<matrix.length; i++){
    if(target < matrix[i][0] || target > matrix[i][matrix[i].length -1]){
      continue;
    }
    // Binary Search
    start = 0, end = matrix[i].length-1;
    while(start <= end){
      mid = Math.ceil((start + end)/2);
      if(target === matrix[i][mid]){
        return true;
      }
      else if(target < matrix[i][mid]){
        end = mid -1;
      }
      else{
        start = mid +1;
      }
    }
  }
  
  return false;
};

console.log(`Search Number in matrix `, searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],500));