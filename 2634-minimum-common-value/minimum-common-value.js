/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const duplicates = [];

    set1.forEach(num => {
        if (set2.has(num)) {
            duplicates.push(num);
        }
    });

    if (duplicates.length > 0) {
        return Math.min(...duplicates);
    } else {
        return -1; 
    }
};

