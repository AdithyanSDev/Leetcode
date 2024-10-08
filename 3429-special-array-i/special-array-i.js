/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    
    let n=nums.length
    let temp;
    for(let i=0;i<nums.length;i++){
        temp=nums[i]%2
        if(i>0&&i<n){
            if(temp==nums[i-1]%2){
                return false
            }
        }
    }
return true
};