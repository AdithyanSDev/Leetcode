/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let nums1 = [];
    let nums2 = [];
    
    for (let num of nums) {
        if (!nums1.includes(num)) {
            nums1.push(num);
        } else if (!nums2.includes(num)) {
            nums2.push(num);
        } else {
            return false;
        }
    }
    return true
};
