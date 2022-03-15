// LeetCode #19 - Medium
// 03-07-22
// 97ms - Faster Than 39.19%
// 44MB - Less Than 7.36%
import { ListNode } from "../exports.js";

var removeNthFromEnd = function(head, n)
{
    const list = [];
    let node = head;
    while (node)
    {
        list.push(node);
        node = node.next;
    }
    let pos = list.length-n;
    if (pos !== 0)
    {
        list[pos-1].next = pos+1 == list.length ? null : list[pos+1];
        return head;
    }
    return head.next;
};