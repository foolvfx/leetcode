// LeetCode #206 - Easy
// 03-18-22
// 115ms Faster Than 18.75%
// 43.9MB Less Than 72.97%
import { ListNode } from './exports.js';

var reverseList = function(head)
{
    let prev = null
    while (head)
    {
        let node = head.next
        head.next = prev
        prev = head
        head = node
    }
    return prev
}