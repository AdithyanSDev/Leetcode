/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
var result=[]
let dup=-1
nums.sort((a,b)=>(a-b))
for(let i=0;i<nums.length;i++){
    if(nums[i]==nums[i+1]){
        dup=nums[i]
        result.push(dup)
        nums.splice(i,1)
    }
}
nums.push(dup)
for(let i=0;i<nums.length;i++){
    if(i+1!=nums[i]){
        result.push(i+1)
        break
    }
}
return result

};