// LeetCode #88 - Easy
// 03-14-22
// 77ms - Faster Than 64.72%
// 41.9MB - Less Than 62.65%
var merge = function(nums1, m, nums2, n)
{
    nums1.splice(m,n,...nums2)
    nums1.sort((a,b) => a-b)
};


const n1 = [1,2,3,0,0,0];
const n2 = [2,5,6];
merge(n1, 3, n2, 3)
console.log(n1)