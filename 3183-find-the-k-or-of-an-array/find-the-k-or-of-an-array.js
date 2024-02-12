/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
    let result = 0;
    
    for (let i = 0; i < 32; i++) {
        let count = 0;
        for (let num of nums) {
            if (((num >> i) & 1) == 1) {
                count++;
            }
        }
        
        if (count >= k) {
            result |= (1 << i);
        }
    }
    
    return result;
}