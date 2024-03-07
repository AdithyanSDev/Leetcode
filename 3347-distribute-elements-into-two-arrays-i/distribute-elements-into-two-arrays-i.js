/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr = [nums[0]]
    let arr1 = [nums[1]]

    for(let i=2;i<nums.length;i++){
        if(arr[arr.length-1]>arr1[arr1.length-1]){
            arr.push(nums[i])
        }else{
            arr1.push(nums[i])
        }
    }

    return arr.concat(arr1)
};