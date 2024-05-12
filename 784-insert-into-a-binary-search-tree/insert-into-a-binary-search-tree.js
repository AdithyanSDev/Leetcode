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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    var newnode=new TreeNode(val)
    if(!root) return newnode
    var prev=null
    var current=root
    while(current){
      if(val<current.val){
        prev=current
        current=current.left
      }else{
        prev=current
        current=current.right
      }
    }
 if(val<prev.val) prev.left=newnode
 else prev.right=newnode

 return root 

};