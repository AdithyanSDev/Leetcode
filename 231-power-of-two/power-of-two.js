/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n<=0){
        return false
    }
    let count = 1
    while (count < n){
        count*=2
    }

    return (count == n)

};