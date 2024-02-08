/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + indexDifference; j < n; j++) {
            if (Math.abs(j - i) >= indexDifference && Math.abs(nums[j] - nums[i]) >= valueDifference) {
                return [i, j];
            }
        }
    }
    
    return [-1, -1]; 
};
