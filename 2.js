/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry = 0) {
    if (!l1 && !l2 && !carry) return null;
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, Math.floor(sum / 10)));
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]))