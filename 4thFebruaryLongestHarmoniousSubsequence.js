// Longest Harmonious Subsequence
//
// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
//
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
//
//   A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without
// changing the order of the remaining elements.
//
//   Example
//   Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {

  let memory = {}, max=0;
  for(let i=0; i<nums.length; i++){
    memory[nums[i]] = (memory[nums[i]] || 0) +1;
  }

  for(let key in memory){
    if(memory[parseInt(key) + 1]){
      max = Math.max(max, memory[key] + memory[parseInt(key) + 1])
    }
  }
  return max;
};

console.log(`Longest Harmonious Subsequence `, findLHS([1,1,1,1]));