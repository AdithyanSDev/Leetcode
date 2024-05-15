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
var increasingBST = function(root) {
   
    function inOrder(node, nodes) {
        if (!node) return;
        inOrder(node.left, nodes);
        nodes.push(node);
        inOrder(node.right, nodes);
    }

    let nodes = [];
    inOrder(root, nodes);  

    
    let dummy = new TreeNode(0);  
    let current = dummy;

    for (let node of nodes) {
        node.left = null;  
        current.right = node; 
        current = node; 
    }

    return dummy.right; 
};