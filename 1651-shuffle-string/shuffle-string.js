/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr=new Array(indices.length)
    s=s.split("")
    for(let i=0;i<s.length;i++){
        arr[indices[i]]=s[i]
    }
    return arr.join("")
};