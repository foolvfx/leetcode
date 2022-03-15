// LeetCode #141 - Easy
// 03-08-22
// 114ms - Faster Than 36.89%
// 44.5MB - Less Than 77.31%
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function(head) {
    if (head == null) {return false};
    while (head.val!==null && head.next!==null) {
        head.val = null;
        head = head.next;
    }
    return head.val == null ? true : false;
};



let root = new ListNode(1);
let n1 = new ListNode(2);
let n2 = new ListNode(0);
let n3 = new ListNode(-4);

root.next = n1;
n1.next = n2;
n2.next = n3;
n3.next = n1;

console.log(hasCycle(root));