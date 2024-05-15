/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let sum = 0;
    let frequency = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (frequency[num] === undefined) {
            frequency[num] = 1;
            sum += num;
        } else {
            if (frequency[num] === 1) {
                sum -= num;
            }
            frequency[num]++;
        }
    }

    return sum;
};
