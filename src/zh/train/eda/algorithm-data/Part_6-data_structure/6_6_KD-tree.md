---
title: "6.6 KD树"
order: 6
---

## 一、关于多维查询

##### 1. 一维查询

- 假设表格T储存了学生的考试成绩，如何查询分数49分以上的学生?

- 如果使用遍历的方式，时间复杂度为了![O(n)](https://math.jianshu.com/math?formula=O(n))。

- 为了提高效率，可以使用平衡二叉树的方式。

<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/KDTree_1.webp" alt="ASIC Flow" width="200" />
  <h4>图1 平衡二叉树</h4>
</div>

##### 2. 二维查询

- 假设表格T储存了学生的语文和数学考试成绩，如果查询语文成绩介于30～93，数学成绩介于30～90的学生？

<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/KDTree_2.webp" alt="ASIC Flow" width="200" />
  <h4>图2 表格</h4>
</div>

- 如果继续使用平衡二叉树的方式，则需要首先分别获得语文成绩和数学成绩的集合，再算出两个集合的交际，时间复杂度为![O(m*n)](https://math.jianshu.com/math?formula=O(m*n))。

- 为了提高效率，可以按照以下方法，将时间复杂度保持在![O\log(n)](https://math.jianshu.com/math?formula=O%5Clog(n))水平：

> **1)** 根据语文成绩将所有人的成绩分成两半，其中一半的语文成绩<=c1，另一半的语文成绩>c1，分别得到集合S1,S2;
>  **2)** 针对S1，根据数学成绩分为两半，其中一半的数学成绩<=m1,另一半的数学成绩>m1，分别得到S3,S4;
>  **3)** 针对S2，根据数学成绩分为两半，其中一半的数学成绩<=m2,另一半的数学成绩>m2，分别得到S5,S6；
>  **4)** 根据语文成绩分别对S3,S4，S5,S6继续执行类似划分得到更小的集合，然后再在更小的集合上根据数学成绩继续
>
<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/KDTree_3.webp" alt="ASIC Flow" width="200" />
  <h4>图3 划分</h4>
</div>

- 通过以上操作，就生成了一颗kd树:

<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/KDTree_4.webp" alt="ASIC Flow" width="200" />
  <h4>图4 生成KD树</h4>
</div>

## 二、关于KD树

##### 1. 关于KD树

- KD树(K-dimensional tree，k维树)，是一种高位索引树形数据结构。

- KD树的每个节点都是k维点的二叉树。

- 所有非叶节点都可以看成用一个超平面把空间分区成两个 半空间。

- 节点左子树代表在超平面左边的点，右子树代表右边的点。

<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/KDTree_5.webp" alt="ASIC Flow" width="200" />
  <h4>图5 KD树</h4>
</div>

##### 2. 超平面的选择方法

- 每个节点都与k维中垂直于超平面的那一维有关。

- 因此，如果选择按照x轴划分，所有x值小于指定值的结点都会出现在左子树，大于的都会出现在右子树。

- 这样，超平面可以用x值来圈定，其法线为x轴的单位向量。

<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/KDTree_6.webp" alt="ASIC Flow" width="200" />
  <h4>图6 超平面</h4>
</div>
## 三、KD树的算法

##### 1. 构造

- 循环依序取数据点的各维度来作为切分维度;

| 维度选择         | 描述                                                         |
| :--------------- | :----------------------------------------------------------- |
| 切分维度选择优化 | - 构建开始前，对比数据点在各维度的分布情况，数据点在某一维度坐标值的方差越大分布越分散，方差越小分布越集中。 - 从方差大的维度开始切分可以取得很好的切分效果及平衡性。 |
| 中值选择优化(a)  | - 算法开始前，对原始数据点在所有维度进行一次排序，存储下来。 - 在后续的中值选择中，无须每次都对其子集进行排序，提升了性能。 |
| 中值选择优化(b)  | - 从原始数据点中随机选择固定数目的点，然后对其进行排序。 - 每次从这些样本点中取中值，来作为分割超平面。 - 该方式在实践中被证明可以取得很好性能及很好的平衡性。 |

- 取数据点在该维度的中值作为切分超平面;
- 将中值左侧的数据点挂在其左子树，将中值右侧的数据点挂在其右子树;
- 递归处理其子树，直至所有数据点挂载完毕。



```cpp
template<class T>
void KDTree<T>::BuildKDTree(vector<vector<T>> points, Node<T>* root)
{
    int indexpart = 0, max = 0;
    vector<T> temp;
    for (st i = 0; i < _k; i++)
    {
        temp.clear();
        for each (auto var in points)
        {
            temp.push_back(var[i]);
        }

        double ave = accumulate(temp.begin(), temp.end(), 0.0) / _point_num; // 平均值
        double accum = 0.0;


        for each (auto var in temp)
        {
            accum += (var - ave) * (var - ave); //todo:方差
        }

        if (accum > max)
        {
            max = int(accum);
            indexpart = int(i);
        }
    }

    //此时indexpart为要进行的分裂维数
    temp.clear();
    for each (auto var in points)
    {
        temp.push_back(var[indexpart]);
    }

    //找到中值;
    sort(temp.begin(), temp.end());
    double median = temp[(temp.size()) >> 1];

    //将点分为左右两部分 
    vector<vector<T>> leftpoints, rightpoints;
    for each(auto var in points)
    {
        if (var[indexpart] < median)
        {
            leftpoints.push_back(var);
        }

        if (var[indexpart] == median)
        {
            root->m_split = indexpart + 1;
            root->m_point = var;
        }

        if (var[indexpart] > median)
        {
            rightpoints.push_back(var);
        }
    }

    //递归
    if (leftpoints.size() == 0 && rightpoints.size() == 0)
    {
        root->is_leaf = true;
    }
    if (leftpoints.size() != 0)
    {
        root->lc = new Node<T>();
        root->lc->parent = root;
        BuildKDTree(leftpoints, root->lc);
    }
    if (rightpoints.size() != 0)
    {
        root->rc = new Node<T>();
        root->rc->parent = root;
        BuildKDTree(rightpoints, root->rc);
    }
}
```

##### 2. 范围查询

- 对于任一矩形查询区域R，查询过程从根节点出发，按如下方式递归：

> **1)** 在任意节点v处，若子树v仅含单个节点，则意味着矩阵区域v中仅覆盖单个输入点，此时可直接判断该点是否落在R内。
>  **2)** 否则，则假定矩形区域v中包含多个输入点,这时分为三种情况：
>
> - **a)** 若矩形区域v完全包含于R内，则其中所有的输入点均落在R内，只需要遍历子树v,即可报告这部分输入点。
> - **b)**若二者相交，则有必要分别输入到v的左、右子树中，继续递归查询。
> - **c)**若二者彼此分离，则子集v中的点不可能落在R内，递归分支终止。



```cpp
template<class T>
void KDTree<T>::SearchRecu(vector<T> from, vector<T> to, const Node<T>* temp, vector <vector<T>>& nodes)const
{
    if (temp == nullptr)return; // 如果是空树
    
    int partindex = temp->m_split - 1; // 当前维度
    int value = temp->m_point[partindex];
    if (from[partindex] <= value && to[partindex] >= value) //点在范围内
    {
        bool in_region = true;
        for (st i = 0; i < _k; i++)
        {
            if (from[i] > temp->m_point[i] || to[i] < temp->m_point[i])
            {
                in_region = false;
            }
        }
        if (in_region)
        {
            nodes.push_back(temp->m_point);
        }
        SearchRecu(from, to, temp->lc, nodes);
        SearchRecu(from, to, temp->rc, nodes);
    }
    else if (value > to[partindex])
    {
        SearchRecu(from, to, temp->lc, nodes);
    }
    else if (value < from[partindex])
    {
        SearchRecu(from, to, temp->rc, nodes);
    }
}
```

## 三. 实现KD树

##### 1. 节点结构



```cpp
template <class T>
struct Node
{
    bool is_leaf;
    vector<T> m_point; //k维的点
    int m_split; //被分开的维度
    Node* parent;
    Node* lc;
    Node* rc;
};
```

##### 2. 树结构



```cpp
template<class T>
class KDTree
{
public:
    KDTree(int k,vector<vector<T>> allpoints); //构造函数
    ~KDTree() {};   //析构函数
    void Insert(vector<T> newpoint); //插入结点
    vector<vector<T>> SearchByRegion(vector<T> from, vector<T> to)const; // 查找区域
    vector<T> SearchNearestNode(vector<T> goalpoint); //查找离目标最近的结点
private:
    void BuildKDTree(vector<vector<T>> points, Node<T>* root); //创造树
    void SearchNearestByTree(vector<T> goalpoint, T& curdis, const Node<T>* treeroot, vector<T>& nearestpoint); //寻找与目标点最近的点
    void SearchRecu(vector<T> from, vector<T> to, const Node<T>* temp, vector < vector<T>>& nodes)const; //查找区域内的点
    T CalDistance(vector<T> point1, vector<double> point2); //计算距离
private:
    Node<T>* _root; //根节点
    int _k; //维度
    int _point_num; //点的数量
    vector<vector<T>> points; //点的集合
};
```

##### 3. 方法实现



```cpp
template<class T>
//构造函数
KDTree<T>::KDTree(int k, vector<vector<T>> allpoints) :_k(k)
{
    _root = new Node<T>();
    _root->is_leaf = false;
    _root->lc = nullptr;
    _root->rc = nullptr;

    _point_num = int(allpoints.size());
    points = allpoints;
    BuildKDTree(allpoints, _root);
}

template<class T>
//创造树
void KDTree<T>::BuildKDTree(vector<vector<T>> points, Node<T>* root)
{
    int indexpart = 0, max = 0;
    vector<T> temp;
    for (st i = 0; i < _k; i++)
    {
        temp.clear();
        for each (auto var in points)
        {
            temp.push_back(var[i]);
        }

        double ave = accumulate(temp.begin(), temp.end(), 0.0) / _point_num; // 平均值
        double accum = 0.0;


        for each (auto var in temp)
        {
            accum += (var - ave) * (var - ave); //todo:方差
        }

        if (accum > max)
        {
            max = int(accum);
            indexpart = int(i);
        }
    }

    //此时indexpart为要进行的分裂维数
    temp.clear();
    for each (auto var in points)
    {
        temp.push_back(var[indexpart]);
    }

    //找到中值;
    sort(temp.begin(), temp.end());
    double median = temp[(temp.size()) >> 1];

    //将点分为左右两部分 
    vector<vector<T>> leftpoints, rightpoints;
    for each(auto var in points)
    {
        if (var[indexpart] < median)
        {
            leftpoints.push_back(var);
        }

        if (var[indexpart] == median)
        {
            root->m_split = indexpart + 1;
            root->m_point = var;
        }

        if (var[indexpart] > median)
        {
            rightpoints.push_back(var);
        }
    }

    //递归
    if (leftpoints.size() == 0 && rightpoints.size() == 0)
    {
        root->is_leaf = true;
    }
    if (leftpoints.size() != 0)
    {
        root->lc = new Node<T>();
        root->lc->parent = root;
        BuildKDTree(leftpoints, root->lc);
    }
    if (rightpoints.size() != 0)
    {
        root->rc = new Node<T>();
        root->rc->parent = root;
        BuildKDTree(rightpoints, root->rc);
    }
}

template<class T>
//寻找与目标点最近的点
void KDTree<T>::SearchNearestByTree(vector<T> goalpoint, T& curdis, const Node<T>* treeroot, vector<T>& nearestpoint)
{
    if (treeroot == nullptr)return; // 如果是空树
    double newdis = CalDistance(goalpoint, treeroot->m_point); // 计算距离
    if (newdis < curdis)
    {
        curdis = newdis;
        nearestpoint = treeroot->m_point;
    }
    SearchNearestByTree(goalpoint, curdis, treeroot->lc, nearestpoint);
    SearchNearestByTree(goalpoint, curdis, treeroot->rc, nearestpoint);
}

template<class T>
//查找区域内的点
void KDTree<T>::SearchRecu(vector<T> from, vector<T> to, const Node<T>* temp, vector <vector<T>>& nodes)const
{
    if (temp == nullptr)return; // 如果是空树
    
    int partindex = temp->m_split - 1; // 当前维度
    int value = temp->m_point[partindex];
    if (from[partindex] <= value && to[partindex] >= value) //点在范围内
    {
        bool in_region = true;
        for (st i = 0; i < _k; i++)
        {
            if (from[i] > temp->m_point[i] || to[i] < temp->m_point[i])
            {
                in_region = false;
            }
        }
        if (in_region)
        {
            nodes.push_back(temp->m_point);
        }
        SearchRecu(from, to, temp->lc, nodes);
        SearchRecu(from, to, temp->rc, nodes);
    }
    else if (value > to[partindex])
    {
        SearchRecu(from, to, temp->lc, nodes);
    }
    else if (value < from[partindex])
    {
        SearchRecu(from, to, temp->rc, nodes);
    }
}

template<class T>
//计算距离
T KDTree<T>::CalDistance(vector<T> point1, vector<double> point2)
{
    if (point1.size() != point2.size())
    {
        cerr << "两个点维度不同";
        exit(1);
    }
    double distance = 0.0;
    for (st i = 0; i < point1.size(); i++)
    {
        distance += pow((point1[i] - point2[i]), 2);
    }
    return sqrt(distance);
}

template<class T>
//插入结点
void KDTree<T>::Insert(vector<T> newpoint)
{
    if (newpoint.size() != _k)
    {
        cerr << "插入点维数与KD树不匹配" << endl;
    }

    Node<T>* temp = _root;
    if (temp == nullptr) //若为空树
    {
        temp = new Node<T>();
        temp->is_leaf = true;
        temp->m_split = 1;
        temp->m_point = newpoint;
        return;
    }

    if (temp->is_leaf) //若树只有一个节点，插入准备
    {
        temp->is_leaf = false;
        int max = 0, partindex = 0;
        for (st i = 0; i < _k; i++)
        {
            double delta = abs(newpoint[i] - temp->m_point[i]);
            if (delta > max)
            {
                max = delta;
                temp->m_split = i + 1;
            }
        }
    }
    while (true)
    {
        int partindex = temp->m_split - 1;
        Node<T>* nextnode;
        if (newpoint[partindex] > temp->m_point[partindex])
        {
            if (temp->rc == nullptr) //右子树插入点
            {
                temp->rc = new Node<T>();
                temp->rc->parent = temp;
                temp->rc->is_leaf = true;
                temp->rc->m_split = 1;
                temp->rc->m_point = newpoint;
                break;
            }
            else nextnode = temp->rc;
        }
        else
        {
            if (temp->lc == nullptr) //左子树插入
            {
                temp->lc = new Node<T>();
                temp->lc->parent = temp;
                temp->lc->is_leaf = true;
                temp->lc->m_split = 1;
                temp->lc->m_point = newpoint;
                break;
            }
            else nextnode = temp->lc;
        }

        if (nextnode->is_leaf) //如果是叶结点，插入准备
        {
            nextnode->is_leaf = false;
            int max = 0; partindex = 0;
            for (st i = 0; i < _k; i++)
            {
                double delta = abs(newpoint[i] - nextnode->m_point[i]);
                if (delta > max)
                {
                    max = delta;
                    nextnode->m_split = i + 1;
                }
            }
        }
        temp = nextnode; // 下一步
    }
}

template<class T>
// 查找区域
vector<vector<T>> KDTree<T>::SearchByRegion(vector<T> from, vector<T> to)const
{
    vector<vector<T>> result;
    if (from.size() != _k || to.size() != _k)
    {
        cerr << "搜索区域维数与KD树不匹配" << endl;
        exit(1);
    }
    for (st i = 0; i < _k; i++)
    {
        if (from[i] > to[i])
        {
            cerr << "区域起始点坐标大于区域终点" << endl;
            exit(1);
        }
    }
    SearchRecu(from, to, _root, result);
    return result;
}

template<class T>
// 查找离目标最近的结点 
vector<T> KDTree<T>::SearchNearestNode(vector<T> goalpoint)
{
    vector<T> nearest_point;
    Node* temp = _root;
    while (!temp->is_leaf) //找到最靠近的叶结点
    {
        int partindex = temp->m_split - 1;
        if (temp->lc != nullptr && goalpoint[partindex] < temp->m_point[partindex])
        {
            temp = temp->lc;
        }
        else if (temp->rc)
        {
            temp = temp->rc;
        }
    }
    nearest_point = temp->m_point;
    double curdis = CalDistance(goalpoint, nearest_point);

    bool is_left = false;
    while (temp != _root) //回溯
    {
        is_left = (temp == temp->parent->lc); //判断是否是左节点
        temp = temp->parent; // 指针上移
        if (CalDistance(goalpoint, temp->m_point) < curdis)
        {
            nearest_point = temp->m_point;
            curdis = CalDistance(goalpoint, nearest_point);
        }
        int partindex = temp->m_split - 1;

        // 判断另一边子树有没有更近的点
        if (curdis > abs(temp->m_point[partindex] - goalpoint[partindex]))
        {
            if (is_left)
            {
                SearchNearestByTree(goalpoint, curdis, temp->rc, nearest_point);
            }
            else {
                SearchNearestByTree(goalpoint, curdis, temp->lc, nearest_point);
            }
        }
    }
    return nearest_point;
}
```



