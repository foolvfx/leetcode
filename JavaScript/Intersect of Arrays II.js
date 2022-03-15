// LeetCode #350 - Easy
// 03-15-22
// 114ms - Faster Than 26.82%
// 44.2MB - Less Than 31.56%
var intersect = function(nums1, nums2)
{
    let x = new Map();
    for (let num of nums1)
    {
        if (!x.has(num)) {
            x.set(num, { quan: 0 })
        }
        x.get(num).quan+=1
    }
    const common = []
    for (let num of nums2) {
        if (x.has(num) && (x.get(num).quan-=1) >= 0) common.push(num)
    }
    return common
}

const n1 = [1,2,3,4,4,5,6,10]
const n2 = [4,4,53]
let resp = intersect(n1,n2)
console.log(resp)