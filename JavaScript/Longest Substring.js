// LeetCode #3 - Medium
// 03-06-22
// 104ms - Faster Than 82.97%
// 46.9MB - Less Than 60.54%
var lengthOfLongestSubstring = function(s) {
    let longest = "";
    let temp = "";
    let i = 0;
    let slicedamount = 0;

    while (i < s.length)
    {
        let x = temp.indexOf(s[i]);
        if (x < 0)
        {
            temp += s[i];
            if (temp.length > longest.length)
            {
                longest = temp;
            }
            i++;
        }
        else
        {
            temp = temp.slice(x+1, temp.length);
            slicedamount += x+1;
            temp += s[i];
            i = slicedamount + temp.length;
        }
    }
    console.log(`longest: ${longest}`);
    return longest.length;
};

console.log(lengthOfLongestSubstring("hello my name is niko"));