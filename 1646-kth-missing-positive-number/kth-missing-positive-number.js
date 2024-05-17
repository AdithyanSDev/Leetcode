/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
let count=0
for(i of arr){
    if(i<=k+count){
        count++
    }
}
return k+count
};