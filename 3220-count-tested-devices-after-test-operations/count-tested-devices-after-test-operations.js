/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let count =0;
    for(let i=0; i< batteryPercentages.length; i++){
        if(batteryPercentages[i]> 0){
            count++;
            for(let j=i+1; j<batteryPercentages.length; j++){
                if(batteryPercentages[j]>0){
                    batteryPercentages[j] =  batteryPercentages[j]-1
                }
            }
        }
    }
    return count

};