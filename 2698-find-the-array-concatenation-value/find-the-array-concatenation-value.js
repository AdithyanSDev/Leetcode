/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    var sum =0;
    while (nums.length >0) {
        var str;
        if (nums.length >1) {
        str = nums.shift()+'' + nums.pop();
        }else if (nums.length === 1) {
            str = nums.pop();
        }
        sum +=Number(str);
    }
    return sum
};