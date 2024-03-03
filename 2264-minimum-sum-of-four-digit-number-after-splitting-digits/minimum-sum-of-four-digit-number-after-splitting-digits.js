/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const a = num.toString().split('').sort()
    const x=parseInt(a[0]+a[2])
    const y=parseInt(a[1]+a[3])
    const result=x+y
    console.log(result)
    return result
};