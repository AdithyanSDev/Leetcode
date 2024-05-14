/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  
    const mid=Math.floor(nums.length/2)
    const head=new TreeNode(nums[mid])
     if(nums.length===0) return null
     const left=nums.slice(0,mid)
     const right=nums.slice(mid+1)
    head.left=sortedArrayToBST(left)
    head.right=sortedArrayToBST(right)
    return head
   
};