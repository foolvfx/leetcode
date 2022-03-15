// LeetCode #225 - Easy
// 03-04-22
// 4ms - Faster Than 19.40%
// 6.8MB - Less Than 87.64%
#include <vector>
using namespace std;

class MyStack
{
private:
    vector<int> q;
public:
    MyStack()
    {

    }

    void push(int x)
    {
        q.push_back(x);
    }

    int pop()
    {
        int x = q[q.size()-1];
        q.erase(q.end()-1);
        return x;
    }

    int top()
    {
        return q[q.size()-1];
    }

    bool empty()
    {
        if (q.size() != 0)
            return false;
        return true;
    }
};