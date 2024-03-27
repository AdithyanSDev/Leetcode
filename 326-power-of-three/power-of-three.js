/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

    if (n<=0){
        return false
    }
    let count = 1
    while (count < n){
        count*=3
    }

    return (count == n)

    
};