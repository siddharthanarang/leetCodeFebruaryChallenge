// Broken Calculator
//
//
// On a broken calculator that has a number showing on its display, we can perform two operations:
//
//   Double: Multiply the number on the display by 2, or;
// Decrement: Subtract 1 from the number on the display.
//   Initially, the calculator is displaying the number X.
//
//   Return the minimum number of operations needed to display the number Y.
//
//   Example
//
// Input: X = 3, Y = 10
// Output: 3
// Explanation:  Use double, decrement and double {3 -> 6 -> 5 -> 10}.


/**
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
var brokenCalc = function(X, Y) {
  
  let count =0;
  while(X != Y){
    if(Y <= X){
      count += X-Y;
      break;
    }
    else{
      if(Y%2 === 0){
        Y=Y/2;
      }
      else{
        Y=Y + 1;
      } 
      count++;
    }
  }
  return count;
};

console.log(`Broken Calc `, brokenCalc(1024,1));