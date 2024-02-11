/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const track = new Map();
    for(let i = 0; i < nums1.length; i++){
        track.set(nums1[i], 1);
    }
    
    for(let i = 0; i < nums2.length; i++){
        if(track.has(nums2[i]) && track.get(nums2[i])){
            track.set(nums2[i], -1);
        } else{
            track.set(nums2[i], 0);
        }
    }

    const ans = [[], []]
    for(const [key, val] of track){
        if(val === 1) ans[0].push(key);
        else if(val === 0) ans[1].push(key);
    }
    return ans;
};