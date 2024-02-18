/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
      const v=Object.keys(obj).length;
    if (v>0){
        return false;

    }
    else{
        return true
    }
    
};