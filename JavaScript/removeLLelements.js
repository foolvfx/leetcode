// LeetCode #203 - Easy
// 03-18-22
// 107ms Faster Than 57.03%
// 46.5MB Less Than 69.59%
import { ListNode } from './exports.js';

var removeElements = function(head, val)
{
    head = findNextValid(head, val)
    let node = head
    while (node?.next) {
        node.next = findNextValid(node.next, val)
        node = node.next
    }
    return head
}

function findNextValid(node, val)
{
    while (node?.val === val)
    {
        node = node.next
        if (node == null) return null
    }
    return node
}

function printLL(head)
{
    while (head)
    {
        console.log(head.val)
        head = head.next
    }
}

// const LL = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
const LL = new ListNode(7)
printLL(removeElements(LL, 7))