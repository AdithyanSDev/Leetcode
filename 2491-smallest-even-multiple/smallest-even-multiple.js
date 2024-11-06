/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let multiples=[]
    for(let i=1;i<9;i++){
        multiples.push(i*n)
    }
    multiples=multiples.sort((a,b)=>a-b)
    for(let i=0;i<multiples.length;i++){
        if(multiples[i]%2==0){
            return multiples[i]
        }
    }

};