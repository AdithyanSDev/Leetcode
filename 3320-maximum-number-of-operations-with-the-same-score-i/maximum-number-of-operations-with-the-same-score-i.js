/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    if(nums.length<2)
        return 0;
        let c=0;
        for(var i=0;i<nums.length-1;i+=2){
            if(nums[i]+nums[i+1]==nums[0]+nums[1])
            c++;
            else
            return c;
        }
        return c;
};