// LeetCode #83 - Easy
// 03-16-22
// 165ms - Faster Than 5.33%
// 45.1MB - Less Than 0.00%
const head = cLL(300)

var deleteDuplicates = function(head)
{
    const splice = (node) => { x = node.next, node.next = x.next, delete x }
    let n = head;
    while (n) {
        if (n.val === n.next?.val) splice(n)
        else n = n.next
    }
    return head
}

function cLL(length) {
    let k = 1
    let root = new ListNode(1)
    let n = root
    for (let i = 0; i < length; i++) {
        let nxt = new ListNode(k)
        n.next = nxt
        n = n.next
        if (randBool()) k++
    }
    return root
}

function randBool() { return Math.floor(Math.random() * 2) }

function pLL(head)
{
    let n = head;
    let str = "";
    while (n) {
        str += `${n.val} -> `
        n = n.next
    }
    console.log(str)
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}