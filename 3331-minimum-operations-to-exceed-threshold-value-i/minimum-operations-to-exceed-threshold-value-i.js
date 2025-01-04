/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    var output=nums.filter(num=>num<k)
    return output.length
};