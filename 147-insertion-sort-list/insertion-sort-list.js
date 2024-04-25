/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    if(!head) return head
    var node=new ListNode()
  while(head){
  var temp=head.next
  var current=node
  while(current.next && current.next.val <= head.val){
    current=current.next
  }
  head.next=current.next
  current.next=head
  head=temp

  }
  return node.next
};