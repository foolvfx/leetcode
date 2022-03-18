export { ListNode, printList, makeList };

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function printList(head) {
    let s = ""
    while (head) {
        s+=`${head.val}->`
        head=head.next
    }
    console.log(s)
}

function makeList(nums) {
    let head = new ListNode(nums[0])
    let node = head
    for (let i = 1; i < nums.length; i++) {
        node.next = new ListNode(nums[i])
        node = node.next
    }
    return head
}