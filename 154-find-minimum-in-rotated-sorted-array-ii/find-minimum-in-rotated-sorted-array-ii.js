/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let a = nums.sort((a,b)=>a-b)
    return a[0]
};