/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length<3) return -1;
    const [x,y,z]=[nums[0],nums[1],nums[2]]
    const sort=[x,y,z].sort((a,b)=>a-b)
    console.log(sort)
    return sort[1]
};