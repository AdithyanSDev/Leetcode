/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var start = 0;
    var end = num;
    if (num === 0 || num === 1) return true;
    while (start <= end) {
        var middle = Math.floor((start + end) / 2);
        var root = middle * middle;
        if (root === num) {
            return true; 
        } else if (root < num) {
            start = middle + 1; 
        } else {
            end = middle - 1; 
        }
    }
    return false; 
};



   

