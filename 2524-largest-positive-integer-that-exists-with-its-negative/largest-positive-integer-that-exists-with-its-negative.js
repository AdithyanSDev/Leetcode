/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
nums=nums.sort((a,b)=>b-a)
for(let i=0;i<nums.length;i++){
    for(let j=0;j<nums.length;j++){
        if(nums[i]== -nums[j]){
            return nums[i]
        }
    }
}
return -1
};