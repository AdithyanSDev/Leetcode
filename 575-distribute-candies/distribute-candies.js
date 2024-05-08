/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let set=new Set(candyType)
    let uniqueCandies=[...set]
    if(uniqueCandies.length<candyType.length/2){
        return uniqueCandies.length
    }
    return candyType.length/2
};