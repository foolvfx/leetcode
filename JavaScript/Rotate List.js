// LeetCode #61 - Medium
// 03-13-22
// 114ms - Faster Than 30.76%
// 43.7MB - Less Than 81.69%
import { ListNode } from "../exports.js";

class LinkedList
{
    constructor(head)
    {
        let node = head;
        this.nodes = [];
        while (node)
        {
            this.nodes.push(node)
            node = node.next;
        }
    }

    get size()
    {
        return this.nodes.length;
    }

    rotate()
    {
        let node = this.nodes.pop();
        this.nodes.unshift(node);
        this.nodes[this.size-1].next = null;
        this.nodes[0].next = this.nodes[1];
    }
}

var rotateRight = function(head, k)
{
    if (head === null) return null;
    let LL = new LinkedList(head);
    let times = k % LL.size;
    for (let i = 0; i < times; i++) {
        LL.rotate();
    }
    return LL.nodes[0];
}

let x = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, )))));

rotateRight(x, 2);