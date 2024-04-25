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
var sortList = function(head) {
    if (!head || !head.next) return head;

    function findMiddle(head) {
        var fast = head;
        var slow = head;
        var prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
      
        if (prev) {
            prev.next = null;
        }
        return slow;
    }

    function merge(left, right) {
        var dummy = new ListNode(-1);
        var current = dummy;

        while (left && right) {
            if (left.val <= right.val) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }

        if (left) {
            current.next = left;
        }
        if (right) {
            current.next = right;
        }

        return dummy.next;
    }

    var mid = findMiddle(head);
    var sortedLeft = sortList(head);
    var sortedRight = sortList(mid);

    return merge(sortedLeft, sortedRight);
};
