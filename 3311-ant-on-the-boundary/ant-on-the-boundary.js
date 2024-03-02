/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count =0;
    let sum=0
    for(const n of nums){
        sum+=n
        if(sum===0){
            count++
        }
    }
    return count
};