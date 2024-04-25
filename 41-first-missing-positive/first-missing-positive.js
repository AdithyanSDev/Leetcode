/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let missing=1
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i]==missing) missing++
    }
    return missing
};