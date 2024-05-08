/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => b - a);
    const n = nums.length;
    const x = nums[0] * nums[1] * nums[2];
    const y = nums[n - 1] * nums[n - 2] * nums[0];
    return Math.max(x, y);
};