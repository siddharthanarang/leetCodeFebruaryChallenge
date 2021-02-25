// Shortest Unsorted Continuous Subarray
//
// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in
// ascending order, then the whole array will be sorted in ascending order.
//
//   Return the shortest such subarray and output its length.
//
//   Example
//
// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

  if(!nums || !nums.length){
    return 0;
  }
  let originalArray = JSON.parse(JSON.stringify(nums));
  nums.sort((a,b) => {
    return a-b;
  });
  console.log('originalArray is ',originalArray);
  console.log('nums is ',nums);
  let start, end;
  for(let i=0; i<nums.length; i++){
    if(originalArray[i] != nums[i]){
      if(start === undefined){
        start =i;
      }
      end = i;
    }
  }

  console.log('start is ',start);
  console.log('end is ',end);
  if(start != undefined && end != undefined){
    return end - start +1;
  }
  else{
    return 0;
  }


};

console.log('Unsorted subarray count is ',findUnsortedSubarray([2,1]));
