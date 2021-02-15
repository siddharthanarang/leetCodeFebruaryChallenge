// Letter Case Permutation
//
// Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.
//
//   Return a list of all possible strings we could create. You can return the output in any order.
//
//   Example
//
// Input: S = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  
  if(!S || !S.length){
    return [];
  }
  let output = [], currentCharacterCode, changedString;
  let helperFunction = (currentString, currentIndex =0) =>{
    if(currentIndex >= currentString.length){
      output.push(currentString);
      return;
    }
    currentCharacterCode = currentString.charCodeAt(currentIndex);
    
    // 0-9 ascii value
    if(currentCharacterCode >= 48 && currentCharacterCode <= 57){
      helperFunction(currentString, currentIndex+1);
    }
    // a-z
    else if(currentCharacterCode >= 97 && currentCharacterCode <= 122){
      changedString = currentString.slice(0, currentIndex) + currentString.slice(currentIndex, currentIndex+1) .toUpperCase()
        + currentString.slice(currentIndex+1);
      helperFunction(changedString, currentIndex+1);
      
      helperFunction(currentString, currentIndex+1);
    }
    // A-Z
    else if(currentCharacterCode >= 65 && currentCharacterCode <= 90){
      changedString = currentString.slice(0, currentIndex) + currentString.slice(currentIndex, currentIndex+1) .toLowerCase()
        + currentString.slice(currentIndex+1);
      helperFunction(changedString, currentIndex+1);

      helperFunction(currentString, currentIndex+1);
    }
  };
  helperFunction(S);

  return output;

};

console.log(`Letter Case Permutation are `,letterCasePermutation('abcdefghijkl'));