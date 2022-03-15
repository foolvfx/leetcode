// LeetCode #4 - Hard
// 03-06-22
// 143ms - Faster Than 67.31%
// 48.4MB - Less Than 28.65%
var findMedianSortedArrays = function(nums1, nums2)
{
    const merged = nums1.concat(nums2);
    const len = merged.length;
    merged.sort((a, b) => {return a - b});
    let median = 0.000;
    if (len%2)
    {
        median = merged[(len-1)/2];
    }
    else
    {
        median = merged[len/2] + merged[len/2-1];
        median /= parseFloat(2);
    }

    return median;
};

const na1 = [1,2,5,6,7,8,9,10];
const na2 = [3,4];

let solution = findMedianSortedArrays(na1, na2);