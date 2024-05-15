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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
if(!root) return -1
let min1=root.val
let min2=Infinity
const stack=[root]
while(stack.length){
    let node=stack.pop()
    if(node.val>min1&&node.val<min2) min2=node.val
    if(node.left) stack.push(node.left)
    if(node.right) stack.push(node.right)

}
if(min2===Infinity){
    return -1
}else{
    return min2
}
};