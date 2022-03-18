// LeetCode #23 - Hard
// 03-08-22
// 157ms - Faster Than 56.96%
// 47.5MB - Less Than 50.79%
import { ListNode } from "./exports.js";

var mergeKLists = function(lists)
{
    let root = [];
    lists.forEach((x) => {
        let node = x;
        while (node)
        {
            root.push(node);
            node = node.next;
        }
    })
    root = root.sort((a,b) => b.val-a.val);
    root.reduce((prev, node) => {
        node.next = prev ? prev : null;
        return node;
    }, null)
    return root[0] == null ? null : root[root.length-1];
}