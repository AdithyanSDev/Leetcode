/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    while(num>=10){
    num =String(num).split("")
    console.log(num)
    num=num.reduce((a,b)=>a+ +b,0)
    }
  return num

};