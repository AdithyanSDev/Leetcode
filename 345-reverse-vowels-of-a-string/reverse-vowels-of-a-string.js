/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
    let strArray = s.split('');
    let i = 0, j = strArray.length - 1;

    while (i < j) {
        if (vowels.includes(strArray[i]) && vowels.includes(strArray[j])) {

            let temp = strArray[i];
            strArray[i] = strArray[j];
            strArray[j] = temp;
            i++;
            j--;
        } else if (!vowels.includes(strArray[i])) {
            i++;
        } else if (!vowels.includes(strArray[j])) {
            j--;
        }
    }

    return strArray.join('');
};
