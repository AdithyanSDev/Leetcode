/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while (n !== 1 && n !== 4) {
        let sum = 0;
        let numStr = n.toString();
        for (let i = 0; i < numStr.length; i++) {
            sum += parseInt(numStr[i]) ** 2;
        }
        n = sum;
    }
    return n === 1; 
};
