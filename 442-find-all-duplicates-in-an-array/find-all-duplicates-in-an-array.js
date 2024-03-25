/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let duplicates = []
    nums.forEach((num) => {
        let index = Math.abs(num) - 1
        if(nums[index] < 0){
            duplicates.push(Math.abs(num))
        }else{
            nums[index] = -nums[index]
        }
    })

    return duplicates
};