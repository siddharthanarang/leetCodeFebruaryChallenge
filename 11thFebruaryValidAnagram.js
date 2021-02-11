// Valid Anagram
// Given two strings s and t , write a function to determine if t is an anagram of s.
//
//   Example
//
// Input: s = "anagram", t = "nagaram"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  if(!s && !t){
    return true;
  }
  if((!s || !t) || s.length != t.length){
    return false;
  }
  let i, memory = {};
  for(i=0; i<s.length; i++){
    memory[s[i]] = (memory[s[i]] || 0) + 1;
  }
  for(i=0; i<t.length; i++){
    if(!memory[t[i]]){
      return false;
    }
    memory[t[i]] = memory[t[i]]  - 1;
  }
  return true;
};

console.log(`Are 2 string Anagram of each other `,isAnagram('a',null));