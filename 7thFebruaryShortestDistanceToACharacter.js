// Shortest Distance to a Character
//
// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length
// and answer[i] is the shortest distance from s[i] to the character c in s.
//
//   Example
//
// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
//

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {

  let memory = [],i;
  for(i=0; i<s.length; i++){
    if(c === s[i]){
      memory.push(i);
    }
  }
  let memoryCounter = 0, output = [];
  for(i=0; i<s.length; i++){
    if(i < memory[0]){
      output.push(Math.abs(memory[memoryCounter] - i));
    }
    else if(i === memory[memoryCounter]){
      output.push(Math.abs(memory[memoryCounter] - i));
      memoryCounter++;
    }
    else if(memoryCounter > memory.length-1){
      output.push(Math.abs(memory[memoryCounter-1] - i));
    }
    else if(i <= memory[memoryCounter - 1] + Math.floor( (memory[memoryCounter] - memory[memoryCounter - 1]) /2 )){
      output.push(Math.abs(memory[memoryCounter - 1] - i));
    }
    else{
      output.push(Math.abs(memory[memoryCounter] - i));
    }
  }
  return output;
};

console.log(`Shortest To Char `,shortestToChar('loveleetcodeabcdbbdbd', 'e'));
