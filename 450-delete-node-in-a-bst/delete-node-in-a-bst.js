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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function remove(root,key){
        if(!root) return null
        if(key<root.val){
            root.left=remove(root.left,key)
        }else if(key>root.val){
            root.right=remove(root.right,key)
        }else{
            if(!root.left&&!root.right) return null
            if(!root.left) return root.right
            if(!root.right) return root.left
            root.val=min(root.right)
            root.right=remove(root.right,root.val)
        }
        return root
    }
    return remove(root,key)
};
function min(root){
    if(!root.left) return root.val
    return min(root.left)
}