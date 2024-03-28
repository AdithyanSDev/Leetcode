/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    var vowels = [ 'a', 'e', 'i', 'o','u','A','E','I','O','U']
    var indexes = []
    var a = []
    for(i =0;i < s.length;i++){
        if(vowels.includes(s[i])){
            a.push(s[i])
            indexes.push(i)
        }
    }

    a = a.sort()
    s=s.split('')
    for(i =0;i < indexes.length;i++){
        s[indexes[i]] = a[i]
    }
    return s.join('');
};