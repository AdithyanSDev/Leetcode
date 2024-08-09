/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let result=''
    for(let char of s){
        if(char!='i'){
           result +=char
        }else{
            result=result.split('').reverse().join('')
        }
    }
    return result

};