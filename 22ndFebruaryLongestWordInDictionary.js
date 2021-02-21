// Longest Word in Dictionary through Deleting
// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by
// deleting some characters of the given string. If there are more than one possible results, return the longest word
// with the smallest lexicographical order. If there is no possible result, return the empty string.
//
//   Example
//
// Input:
//   s = "abpcplea", d = ["ale","apple","monkey","plea"]
//
// Output:
//   "apple"
//

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {

  let output =  '';

  for(let i=0; i<d.length; i++){
    let j=0, k=0;
    while(j<d[i].length && k<s.length){
      if(d[i][j] === s[k]){
        j++;
      }
      k++;
    }

    if(j === d[i].length){
      if((d[i].length === output.length && d[i] < output) || (d[i].length > output.length)){
        output =d[i];
      }
    }
  }
  return output
};

console.log(`Find Longest Word `,findLongestWord("abpcplea",["ale","apple","monkey","plea"]
));
