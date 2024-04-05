/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  let arr=[...heights].sort((a,b)=>a-b).reverse()
  let result=[]
   for(let i=0;i<arr.length;i++){
      result.push(names[heights.indexOf(arr[i])])
   }
   return result
};