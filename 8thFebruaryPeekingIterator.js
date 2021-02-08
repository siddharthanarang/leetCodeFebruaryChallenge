// Peeking Iterator
// Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that
// support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().
//
//   Example
//
// Assume that the iterator is initialized to the beginning of the list: [1,2,3].
//
//   Call next() gets you 1, the first element in the list.
//   Now you call peek() and it returns 2, the next element. Calling next() after that still return 2.
// You call next() the final time and it returns 3, the last element.
//   Calling hasNext() after that should return false.


/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  this.values = iterator || [];
  this.cache;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  if(this.cache){
    return this.cache;
  }
  else if(this.values.hasNext()){
    let element = this.values.next();
    this.cache = element;;
    return element;
  }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  if(this.cache){
    let element = this.cache;
    this.cache = undefined;
    return element;
  }
  else{
    return this.values.next();
  }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  if(this.cache){
    return true;
  }
  else{
    return this.values.hasNext();

  }
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
  

