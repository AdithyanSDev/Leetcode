/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n<=0){
        return false
    }
    let count = 1
    while (count < n){
        count*=4
    }

    return (count == n)

};