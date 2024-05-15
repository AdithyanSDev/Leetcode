/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count=0
  let arr=num.toString().split('')
 for(let i=0;i<arr.length;i++){
    let digit=parseInt(arr[i],10)
    if(digit!==0&&num%digit===0){
        count++
    }
   }
 
 return count
};

