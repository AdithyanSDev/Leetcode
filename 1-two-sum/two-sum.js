/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (j < nums.length) {
      const result = nums[i] + nums[j];
      if (result === target) {
        return [i, j];
      }
      j++;
    }
  }
  return null; 
};
