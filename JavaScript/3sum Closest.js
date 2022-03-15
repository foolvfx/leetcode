// LeetCode #16 - Medium
// 03-07-22
// 911ms - Faster Than 7.64%
// 50.8MB - Less Than 0.00% <- LOL
var threeSumClosest = function(nums, target) // need to re-do this one LMAO
{
    let diff = (a, b) => Math.abs(a-b);
    let dict = new Object();
    let sol = new Object();
    
    for (let i in nums)
    {
        for (let k in nums)
        {
            if (i != k)
            {
                let sum = nums[i]+nums[k];
                if (!dict.sum)
                {
                    dict[sum] = [i, k];
                }
            }
        }
    }
    
    const best = [];
    for (let i in nums)
    {
        for (let k in dict)
        {
            if (dict[k][0] !== i && dict[k][1] !== i)
            {
                let sum = parseInt(k)+nums[i];
                let abso = diff(sum, target);
                if (abso == 0) {return sum};
                if (best[0] === undefined || abso < best[0])
                {
                    best[0] = abso;
                    best[1] = sum;
                }
            }
        }
    }
    return best[1];
};

const input = [-1,2,1,-4];
console.log(threeSumClosest(input, 1));