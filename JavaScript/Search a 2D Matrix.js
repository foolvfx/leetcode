// LeetCode #74 - Medium
// 03-06-22
// 76ms - Faster Than 66.09%
// 42MB - Less Than 60.61%
var searchMatrix = function(matrix, target)
{
    const end = matrix[0].length;
    for (let i = matrix.length-1; i >= 0; i--)
    {
        if (matrix[i][0] <= target)
        {
            let st = Math.abs(target - matrix[i][0]);
            let en = Math.abs(target - matrix[i][end]);
            const r = st > en ? matrix[i].reverse() : matrix[i];
            for (const elem in r)
            {
                if (r[elem] == target) {return true};
            }
        }
    }
    return false;
};

const mat = [[1]];
const tar = 1;
console.log(searchMatrix(mat, tar));