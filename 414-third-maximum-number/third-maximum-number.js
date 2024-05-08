/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
let array1=[...new Set(nums)]
let array2=array1.sort((a,b)=>(b-a))
for(let i=0;i<array2.length;i++){
if(array2.length==2){
    return array2[0]
}
if(array2.length==1){
    return array2[0]
}
if(array2.length>=3){
    return array2[2]
}
}

   
};