/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    
    let set1 = {}
    let set2 = {}

    for(let i=0; i<words1.length; i++){
        set1[words1[i]] = set1[words1[i]]+1 || 1
    }
    for(let i=0; i<words2.length; i++){
        set2[words2[i]] = set2[words2[i]]+1 || 1
    }

    
    let result = 0
    for(let [key, value] of Object.entries(set1)){
        if(value == 1){
            let exist = set2[key]
            if(exist && exist==1){
                result++
            }
        }
    }

    return result

};