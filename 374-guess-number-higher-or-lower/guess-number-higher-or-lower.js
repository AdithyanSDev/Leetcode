/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var start=1
    var end=n
    while(start<=end){
        var mid=Math.floor((start+end)/2)
        var pick=guess(mid)
        if(pick==0) return mid
        else if(pick==-1) end=mid-1
        else if(pick==1) start=mid+1
    }
    return start
};