/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let str = ""
    for(let i=0 ; i<arr.length ; i++){
        let n=0
        for(let j=0 ; j<arr.length ; j++){
            if(i !== j && arr[i] === arr[j]) n++
        }
        if(n === 0){
            str = arr[i]
            k--
        }
        if(k===0) return str
    }
    if(k !== 0) return ""
};