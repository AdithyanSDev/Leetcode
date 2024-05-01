/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let a=arr.sort()
    for(let i=0;i<a.length;i++){
        for(j=0;j<a.length;j++){
            if(i!=j && a[j]*2===a[i]){
                return true
            }
        }
    }
    return false
};