/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
   let res = nums[0];
   let arr = nums.slice(1);
   arr.sort((a,b)=>a-b);
   res += arr[0] +arr[1];
   return res;
};