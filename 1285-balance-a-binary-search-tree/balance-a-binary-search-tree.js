/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    var arr=[]
    inOrder(root,arr)
    return buildTree(arr)
};

function inOrder(root,arr){
    if(!root) return ;
    inOrder(root.left,arr)
    arr.push(root.val)
    inOrder(root.right,arr)
}
function buildTree(arr){
    if(arr.length===0) return null
    var mid=Math.floor(arr.length/2)
    var left=arr.slice(0,mid)
    var right=arr.slice(mid+1)
    let head=new TreeNode(arr[mid])
   head.left=buildTree(left)
   head.right=buildTree(right)
    return head
}