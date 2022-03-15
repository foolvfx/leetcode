// LeetCode #24 - Medium
// 03-12-22
// 64ms - Faster Than 85.36%
// 42.4MB - Less Than 33.60%
import { ListNode } from "../exports.js";

var swapPairs = function(head) {
    if (head == null) return null;
    if (head.next == null) return head;
    let node = head.next;
    head.next = swapPairs(node.next);
    node.next = head;
    return node;
}


function print(head) {
    let node = head;
    let str = "";
    while (node) {
        str += `${node.val} -> `;
        node = node.next;
    }
    console.log(str);
}

function arrToLL(arr) {
    arr.reverse();
    let prev = null;
    let head;
    for (let val of arr) {
        head = new ListNode(val, prev);
        prev = head;
    }
    return head;
}

let x = arrToLL([1,2,3,4,5]);

print(x);
print(swapPairs(x));