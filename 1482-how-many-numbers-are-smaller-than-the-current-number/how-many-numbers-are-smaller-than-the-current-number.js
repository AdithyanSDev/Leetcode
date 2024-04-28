/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = nums.slice().sort((a, b) => a - b);
    const countMap = {};
    let count = 0;
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (!(sortedNums[i] in countMap)) {
            countMap[sortedNums[i]] = count;
        }
        count++;
    }
    
    return nums.map((element) => countMap[element]);
};