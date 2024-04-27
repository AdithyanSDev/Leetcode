/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    arr=[]
    for(let i=0;i<words.length;i++){
        if(words[i].split('').includes(x)) arr.push(i)
    }
    return arr
};