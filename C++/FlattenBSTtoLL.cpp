// LeetCode #114 - Medium
// 03-02-22
// 0ms - Faster Than 100.00%
// 13.2MB - Less Than 0.00%
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
    void preOrderTraversal(TreeNode* root, vector<TreeNode*>& nodelist)
    {
        if (root != NULL)
        {
            nodelist.push_back(root);
            preOrderTraversal(root->left, nodelist);
            preOrderTraversal(root->right, nodelist);
        }
    }
    
    void flatten(TreeNode* root)
    {
        if (root == NULL)
            return;
        vector<TreeNode*> nodes;
        preOrderTraversal(root, nodes);

        for (int i = 0; i < nodes.size()-1; i++)
        {
            nodes[i]->right = nodes[i+1];
            nodes[i]->left = nullptr;
        }
    }
};