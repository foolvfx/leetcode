// LeetCode #25 - Hard
// 03-18-22
// 122ms Faster Than 40.92%
// 45.5MB Less Than 29.32%
import { ListNode, printList, makeList } from './exports.js';

var reverseKGroup = function(head, k)
{
    const group = []
    let ret = head
    for (let i = 0; i < k; i++)
    {
        if (head === null) return ret
        group.push(head)
        head = head.next
    }
    group.reverse()
    let nxt = reverseKGroup(group[0].next, k)
    for (let i = 0; i < k-1; i++)
    {
        group[i].next = group[i+1]
    }
    group[k-1].next = nxt
    return group[0]
}

const list = makeList([1,2,3,4,5,6,7,8])
printList(reverseKGroup(list, 3))