// LeetCode #2 - Medium
// 03-06-22
// 125ms - Faster Than 75.21%
// 48.5MB - Less Than 11.16%
import { ListNode } from "../exports.js";

var addTwoNumbers = function(l1, l2)
{
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i <= 1; i++)
    {
        let node = i ? l1 : l2;
        while (node)
        {
            i ? c1++ : c2++;
            node = node.next;
        }
    }

    let sm;
    c1 < c2 ? sm = 1 : sm = 0;
    let diff = sm ? c2 - c1 : c1 - c2;

    let node = sm ? l1 : l2;
    while (node.next)
    {
        node = node.next;
    }
    for (let i = 0; i < diff; i++)
    {
        node.next = new ListNode(0);
        node = node.next;
    }

    node = l1;
    let node2 = l2;
    let result = new ListNode;
    let n = result;
    let carry = 0;
    while (node)
    {
        let k = node.val + node2.val + carry;
        carry = k > 9 ? 1 : 0;
        k = k%10;
        
        n.next = new ListNode(k);

        n = n.next;
        node = node.next;
        node2 = node2.next;

        if (!node && carry) {n.next = new ListNode(1)};
    }
    return result.next;
}