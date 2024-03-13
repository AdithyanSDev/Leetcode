/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const a = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const r = a.split("").reverse().join("");
    return a===r;
};