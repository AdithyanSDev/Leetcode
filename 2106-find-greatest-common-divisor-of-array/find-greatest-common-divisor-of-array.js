/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
const min=Math.min(...nums)
const max=Math.max(...nums)
function gcd(a,b){
    while(b!==0){
        [a,b]=[b,a%b]
    }
    return a
}
return gcd(min,max)
};