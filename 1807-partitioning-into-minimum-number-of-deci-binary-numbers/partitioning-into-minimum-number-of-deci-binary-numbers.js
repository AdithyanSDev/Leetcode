/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    n=n.split('')
    let result=Math.max(...n)
    return Number(result)
};