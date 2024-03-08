/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let frq = new Map();
    let max = 0;
    for (let num of nums) {
        frq.set(num, (frq.get(num) || 0) + 1);
        max = Math.max(max, frq.get(num));
    }

    let count = 0;
    for (let [key, value] of frq) {
        if (value === max) {
            count += value;
        }
    }

    return count;
};



