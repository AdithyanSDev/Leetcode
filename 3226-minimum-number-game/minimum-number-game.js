/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const arr = []
    nums.sort((a, b) => a - b)
    while(nums.length >= 2){
        const twoNums = nums.splice(0, 2)
        arr.push(...twoNums.reverse())
    }
    return arr
};