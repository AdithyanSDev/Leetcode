/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    
    let count = 0;
    let n = tickets.length;
    while(tickets[k]!=0){
        for(let i=0;i<n;i++){
            if(tickets[i]>0){
                count++;
                tickets[i]--;
            }
            if(tickets[k]==0){
                break;
            }
        }
        
    }
    return count;
};