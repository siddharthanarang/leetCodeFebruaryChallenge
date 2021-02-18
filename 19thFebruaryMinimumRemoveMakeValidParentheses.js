// Minimum Remove to Make Valid Parentheses
//
// Given a string s of '(' , ')' and lowercase English characters.
//
//   Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
//
//   Formally, a parentheses string is valid if and only if:
//
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
//
//
//   Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.


  /**
   * @param {string} s
   * @return {string}
   */
  var minRemoveToMakeValid = function(s) {
    
    if(!s || !s.length){
      return s;
    }
    let stack =[], i;
    for(i=0; i<s.length; i++){
      if(s[i] ==='('){
        stack.push(i);
      }
      else if(s[i] ===')'){
        if(stack.length){
          stack.pop();
        }
        else{
          s = s.slice(0,i) + s.slice(i+1);
          i--;
        }
      }
    }
    for(i=0; i<stack.length; i++){
      s = s.slice(0,stack[i]-i) + s.slice(stack[i]+1-i);
    }
    return s;
};

console.log(`Min Remove To Make Valid string `, minRemoveToMakeValid('lee(t)code('));