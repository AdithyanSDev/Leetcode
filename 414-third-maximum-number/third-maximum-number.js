/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
   let a=new Set(nums)
   let b=Array.from(a).sort((a,b)=>b-a)
    if(b.length>=3){
        return b[2]
    }else{
        return b[0]
    }
};