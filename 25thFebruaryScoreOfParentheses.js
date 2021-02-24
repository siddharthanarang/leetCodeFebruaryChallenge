// Score of Parentheses
//
// Given a balanced parentheses string S, compute the score of the string based on the following rule:
//
//   () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.

// Example
// Input: "(()(()))"
// Output: 6

/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  let stack = [], count;
  
  for(let i=0; i<S.length; i++){
    if(S[i] === '('){
      stack.push('(');
    }
    else{
      if(stack[stack.length-1] === '('){
        stack.pop();
        stack.push(1);
      }
      else if(typeof stack[stack.length-1] === 'number' && stack[stack.length-2] === '('){
        count = stack.pop();
        stack.pop();
        stack.push(2 * count);
      }
      while(stack.length && typeof stack[stack.length -1] === 'number' && typeof stack[stack.length -2] === 'number'){
        stack.push(stack.pop() + stack.pop());
      }
    }
  }
  return stack.pop();
};

console.log(`Score of balanced Parentheses `,scoreOfParentheses('()'));