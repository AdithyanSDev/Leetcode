/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var start =0
    var end=letters.length-1
    var ans=letters[0]
while(start<=end){
    var mid=Math.floor((start+end)/2)
    if(letters[mid]<=target){
        start=mid+1
    }else{
        ans = letters[mid]
        end=mid-1
    }
}
return ans
};
