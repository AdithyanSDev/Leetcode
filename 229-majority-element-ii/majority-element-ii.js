/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    let map = {}

    let target = nums.length / 3;

    let output = []

    for(let i = 0 ; i<nums.length; i++){
       if(map[nums[i]]){
        map[nums[i]] += 1;
      }else{
        map[nums[i]] = 1;
      }
    }

    for(let elem in map){
       if(map[elem] > target){
           output.push(elem)
       }
    }

    return output;
    
};