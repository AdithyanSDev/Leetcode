/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
 const a = (nums1.concat(nums2)).sort((f,l)=>f-l);
const n = a.length;
return n % 2 == 0 ? (a[n / 2]  + a[(n - 2) / 2]) / 2 : (a[(n - 1) / 2]);

// if (n%2!== 0) {
//     median =a[n/2]+a[(n-2)/2]/2;
//     return median
// } else{
//     median = (a[(n-1)/2]);
//     return median
// }

    
};