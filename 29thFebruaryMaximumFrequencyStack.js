// Maximum Frequency Stack
//
// Implement FreqStack, a class which simulates the operation of a stack-like data structure.
//
//   FreqStack has two functions:
//
//   push(int x), which pushes an integer x onto the stack.
// pop(), which removes and returns the most frequent element in the stack.
//   If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.
// Example
// Input:
//   ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
//     [[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
// Output: [null,null,null,null,null,null,null,5,7,5,4]
// Explanation:
//   After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:
//
// pop() -> returns 5, as 5 is the most frequent.
//   The stack becomes [5,7,5,7,4].
//
// pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
//   The stack becomes [5,7,5,4].
//
// pop() -> returns 5.
// The stack becomes [5,7,4].
//
// pop() -> returns 4.
// The stack becomes [5,7].



var FreqStack = function() {
};
FreqStack.prototype.frequency = {};
FreqStack.prototype.frequencyStack = {};
FreqStack.prototype.maxFrequency = 0;
/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
  let currentFrequency = (this.frequency[x] || 0) + 1;
  this.frequency[x] = currentFrequency;
  if(!this.frequencyStack[currentFrequency]){
    this.frequencyStack[currentFrequency] = [];
  }
  this.frequencyStack[currentFrequency].push(x);
  this.maxFrequency = Math.max(this.maxFrequency, currentFrequency);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  let returnElement = this.frequencyStack[this.maxFrequency].pop();
  this.frequency[returnElement] -= 1;
  if(this.frequencyStack[this.maxFrequency].length === 0){
    this.maxFrequency--;
  }
  return returnElement;
};


  // Your FreqStack object will be instantiated and called as such:
var obj = new FreqStack();
obj.push(5);
obj.push(1);
obj.push(2);
obj.push(5);
obj.push(5);
obj.push(5);
obj.push(1);
obj.push(6);
obj.push(1);
obj.push(5);
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());
console.log(`Pop element Element from Freq stack `, obj.pop());

 