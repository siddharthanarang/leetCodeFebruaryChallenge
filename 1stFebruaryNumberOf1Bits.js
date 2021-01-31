// Number of 1 Bits
// Write a function that takes an unsigned integer and returns the number of '1' bits it has
// (also known as the Hamming weight).
//
// Note:
//
//   Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given
// as a signed integer type. It should not affect your implementation, as the integer's internal binary representation
// is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3 above,
// the input represents the signed integer. -3.
// Follow up: If this function is called many times, how would you optimize it?

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  
  let number = n.toString(2), count = 0;
  for(let i=0; i<number.length; i++){
    if(number[i] === '1'){
      count++;
    }
  }
  return count;
};

console.log(`Hamming Weight is `,hammingWeight(128));