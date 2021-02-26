// Validate Stack Sequences
//
// Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result
// of a sequence of push and pop operations on an initially empty stack.
//
//   Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
//   push(1), push(2), push(3), push(4), pop() -> 4,
//   push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
//

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {

  if((!pushed || !popped) || (pushed.length != popped.length)){
    return false;
  }
  let stack =[], i=0, j=0;
  while(i < pushed.length || j < popped.length){
    if(stack[stack.length-1] === popped[j]){
      stack.pop();
      j++;
    }
    else{
      if(i >= pushed.length){
        return false;
      }
      stack.push(pushed[i]);
      i++;
    }
  }
  return true;
};

console.log(`Valid Stack Sequence is `,validateStackSequences([1,2,3,4,5],[4,5,3,2,1]));
