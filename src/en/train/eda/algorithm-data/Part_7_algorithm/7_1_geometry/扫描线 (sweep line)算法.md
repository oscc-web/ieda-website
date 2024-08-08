---
title: "7.1.3 扫描线下"
order: 3
---

### 扫描线 (sweep line)算法

设置一条水平扫描线，从上向下依次扫过每个顶点。对于每个点，按照其类型进行操作。对于开始点，结束点和普通点，维护小多边形的边界信息。对于分裂点，连接内对角线并且分裂多边形。
 合并点也是同样如此，只不过是从下往上重新做一次。

需要的数据结构：由于我们需要查找和维护每个小多边形当前的边界，所以使用二分搜索树。

具体来说：对于第一次从上往下的扫描到的每个点，我们要做的是：

1. 开始点：说明一个新的小多边形开始了，将其左右边界加入树。
2. 结束点：说明一个小多边形结束了，找到结束点左右边界，从树中删除。
3. 分裂点：从树中找到这个点所在多边形的左右边界和点上方最近的一个点，连接内对角线，加入两个新多边形的信息，删除旧的大多边形。
4. 合并点：在这一次我们不连对角线(第二次从下到上的扫描才连)，仅仅需要合并两个小多边形的边界信息成大多边形，并且加入树。
5. 普通点：维护当前多边形的边界信息。

该算法较为复杂，信息量较多，可以结合下图扫描的过程手动模拟帮助理解。

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/sweep_line_1.jpg" alt="ASIC Flow" width="200" />
  <h4>图1 扫描线算法</h4>
</div>

### 时间复杂度

排序 ![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn)) ，扫描的过程中对每个点都需要查找和维护二叉平衡树，每次耗费 ![O(logn)](https://math.jianshu.com/math?formula=O(logn)) ， 一共 ![n](https://math.jianshu.com/math?formula=n) 个点。所以总复杂度 ![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn)) 。

##### 三角剖分单调多边形 (Triangulating Monotone Polygons)

由于单调多边形具有良好的性质，我们可以从贪心的想法出发，沿着多边形的左右边界逐步向下扫描，遇到一个顶点时进行操作。

### 单调栈

可以考虑什么情况下，当扫描到一个点时能剖分出一个三角形，什么时候不能。举个例子：



<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/geometry/sweep_line_2.jpg" alt="ASIC Flow" width="200" />
  <h4>图2 三角剖分多边形</h4>
</div>

情况1


 当扫描到点  时，与前面的点为异侧时，可以与前面的点依次相连进行三角剖分，直到将异侧点用完。

情况2


 当扫描到点  时，与前面两个点同侧，并且形成的内角  时，可以与前两个点  相连，剖分出一个三角形，并且剖分后点  失效，如果与前两个形成的内角依然  的话，继续剖分。



情况3


 当扫描到点  时，当  与前面两个点同侧，并且形成的内角  时，才不能剖分出一个三角形。



如果学过 ![Graham](https://math.jianshu.com/math?formula=Graham) 扫描法求凸包的话，一定会发现非常相似。于是我们使用一个单调栈保存前面的点的信息，单调栈内的元素满足：

1. 高度递增：因为我们从上往下扫描，所以栈顶元素一定是最低的。
2. 在同一侧：如果有异侧元素出现，那么可以不停地向上剖分，直到剩下的都是同侧为止。
3. 栈内连续的三个元素之间的内角 ![> \pi](https://math.jianshu.com/math?formula=%3E%20%5Cpi) （单调性）。

### 扫描线算法

与上一个扫描线算法类似，从上到下设置一条水平扫描线，一开始先将最高的点加入栈，然后开始向下扫描，每个点按照上面的分类进行操作。

由于这个算法较为简单，这里不详细描述每个步骤，只给出代码。

### 代码

以下代码仅供参考和帮助理解算法用，实际上许多 ![corner](https://math.jianshu.com/math?formula=corner) ![case](https://math.jianshu.com/math?formula=case) 如三点共线，或者是两个点纵坐标相同，都没考虑，所以几乎不存在鲁棒性。这个代码仅仅能够在给定单调多边形非常正常的情况下给出正确的对角线。

输入：![n](https://math.jianshu.com/math?formula=n) 个点，逆时针给出的多边形坐标： ![p_0:(x_0,y_0),p_1:(x_1,y_1),...... ,p_{n-1}:(x_{n-1}, y_{n-1})](https://math.jianshu.com/math?formula=p_0%3A(x_0%2Cy_0)%2Cp_1%3A(x_1%2Cy_1)%2C......%20%2Cp_%7Bn-1%7D%3A(x_%7Bn-1%7D%2C%20y_%7Bn-1%7D)) 。
 输出：若干条对角线连接的两个点的编号 ![a,b](https://math.jianshu.com/math?formula=a%2Cb)，表示点 ![p_a](https://math.jianshu.com/math?formula=p_a) 和 ![p_b](https://math.jianshu.com/math?formula=p_b) 相连。



```c
#include <bits/stdc++.h>
using namespace std;
typedef double db;
const db eps = 1e-6;
int sign(db k)
{
    if (k > eps)
        return 1;
    else if (k < -eps)
        return -1;
    return 0;
}
int cmp(db k1, db k2) { return sign(k1 - k2); }
struct point
{
    db x, y;
    point operator+(const point &k1) const { return (point){k1.x + x, k1.y + y}; }
    point operator-(const point &k1) const { return (point){x - k1.x, y - k1.y}; }
    point operator*(db k1) const { return (point){x * k1, y * k1}; }
    point operator/(db k1) const { return (point){x / k1, y / k1}; }
    int operator==(const point &k1) const { return cmp(x, k1.x) == 0 && cmp(y, k1.y) == 0; }
    bool operator<(const point k1) const
    {
        int a = cmp(y, k1.y);
        if (a == -1)
            return 0;
        else if (a == 1)
            return 1;
        else
            return cmp(x, k1.x) == 1;
    }
};
db cross(point k1, point k2) { return k1.x * k2.y - k1.y * k2.x; }
db dot(point k1, point k2) { return k1.x * k2.x + k1.y * k2.y; }

//--------------------------------------------------------

const int maxn = 1e5 + 10;

int side[maxn];

vector<pair<int, int>> TriangulateMonotonePolygon(vector<pair<point, int>> v)
{
    if (v.size() <= 3)
        return {};
    vector<pair<int, int>> ans;
    int n = v.size();
    auto vv = v;
    sort(vv.begin(), vv.end());
    for (int i = (vv[0].second + 1) % n; i < vv[n - 1].second; i = (i + 1) % n)
        side[i] = 0; //* left: 0  right: 1
    for (int i = (vv[n - 1].second + 1) % n; i < vv[0].second; i = (i + 1) % n)
        side[i] = 1;

    sort(v.begin(), v.end());

    stack<pair<point, int>> st;
    st.push(v[0]);
    st.push(v[1]);
    for (int i = 2, sd = side[v[i].second]; i < n - 1; i++)
    {
        if (side[v[i].second] == side[st.top().second]) //same side
        {
            if (st.size() < 2)
            {
                st.push(v[i]);
                continue;
            }
            while (st.size() >= 2)
            {
                auto top = st.top();
                st.pop();
                auto top2 = st.top();

                if (sd == 0 && sign(cross(top.first - top2.first, v[i].first - top.first)) == -1 ||
                    (sd == 1 && sign(cross(top.first - top2.first, v[i].first - top.first)) == 1))
                {
                    st.push(top);
                    break;
                }
                ans.emplace_back(v[i].second, top2.second);
            }
            st.push(v[i]);
        }
        else
        {
            auto top = st.top();
            while (st.size() > 1)
            {
                ans.emplace_back(v[i].second, st.top().second);
                st.pop();
            }
            st.pop();
            st.push(top);
            st.push(v[i]);
        }
    }
    int cnt = st.size(), now = st.size();
    while (!st.empty())
    {
        if (now == cnt || now == 1)
        {
            st.pop();
            continue;
        }
        ans.emplace_back(v[n - 1].second, st.top().second);
        st.pop();
    }
    return ans;
}

vector<pair<point, int>> input;

int main()
{
    int n;
    cin >> n;
    input.resize(n);
    for (int i = 0; i < n; i++)
        cin >> input[i].first.x >> input[i].first.y, input[i].second = i;
    auto ans = TriangulateMonotonePolygon(input);
    cout << "diagonal id:" << endl;
    for (auto x : ans)
        cout << x.first << " " << x.second << endl;
}
```

### 时间复杂度

排序 ![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn)) 。单调栈由于每个点只会入栈出栈一次，均摊 ![O(1)](https://math.jianshu.com/math?formula=O(1))，有 ![n](https://math.jianshu.com/math?formula=n) 个点，所以 ![O(n)](https://math.jianshu.com/math?formula=O(n)) 。  总复杂度 ![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn))。
 实际上，如果给定的单调多边形已经排好序，并且标好左右边界的标记，可以把排序的复杂度去掉，这一部分的总复杂度就变为 ![O(n)](https://math.jianshu.com/math?formula=O(n))。而这一步可以在单调多边形分解时做到。



