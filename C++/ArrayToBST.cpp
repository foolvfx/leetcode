// LeetCode #108 - Easy
// 02-18-22
// 112ms - Faster Than 7.86%
// 342.7MB - Less Than 0.00% <- LMFAO
#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
    TreeNode* sortedArrayToBST(vector<int>& nums)
    {
        int x = nums.size();
        TreeNode* root = sortArray(nums, 0, x);
        return root;
    }

    TreeNode* sortArray(vector<int> arr, int start, int end)
    {
        if (start > end)
        {
            return NULL;
        }

        int mid = (start + end) / 2;
        if (mid < arr.size())
        {
            TreeNode* root = newNode(arr[mid]);

            root->left = sortArray(arr, start, mid - 1);

            root->right = sortArray(arr, mid + 1, end);

            return root;
        }
        else
        {
            return NULL;
        }
    }
    
    TreeNode* newNode(int data)
    {
        TreeNode* node = new TreeNode();
        node->val = data;
        return node;
    }
};