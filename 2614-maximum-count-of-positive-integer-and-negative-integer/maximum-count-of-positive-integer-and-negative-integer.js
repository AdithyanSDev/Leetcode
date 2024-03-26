/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
   let pos=nums.filter((e)=>{return e>0})
   let neg=nums.filter((e)=>{return e<0})
   return Math.max(pos.length,neg.length)
};