---
title: "6.7 划分树"
order: 7
---

# 划分树

划分树是一种基于线段树的数据结构，也利用了分治的思想，却比线段树高效很多，这是为什么？因为划分树又多了一个性质：在划分时不是随意划分，也不是排序后直接划分（因为这样会破坏原有结构），而是排序后仍保持原来的相对顺序再分到左右子树。

具体实现方法：

整个过程分为建树和查询两个阶段：

<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/PartitionTree_1.webp" alt="ASIC Flow" width="200" />
  <h4>图1 划分树</h4>
</div>

1）**建树**：首先定义一个数组tree[30] [1000]第一个维度表示层数，第二个维度表示这一层第i个数的值，用来表示这棵划分树，然后定义sorted[1000]数组，用来存储排序好的原序列，然后记录每一层前i个数有多少进入了下一层的左子树，存在toleft[30] [1000]数组中，在建树中没用，但记录下来对查找时有用，用分治的思想分配左子树和右子树，将不大于中间值mid的数分配到左子树中去，大于中间值的分配到右子树中去，但有时为了左右尽可能个数相等，要把等于中间值的数两边都分配，于是定义same来存储多少等于中间值的数进入左子树，分配完毕后再递归分配左子树和右子树。身为递归，怎么也要有个出口吧，递归到叶子节点时就返回，即if（l==r） return；

2）**查询**：按照之前存储下的进入下一层左子树个数的数组toleft，可以计算出区间内第k大的数在当前节点的左子树还是右子树，并计算出下一层相应子树的左右边界，然后递归相应子树，同上，递归出口也是到达叶子节点时返回。详见注释……

废话不多说，代码呈上：

```c++
#include<iostream> 
#include<algorithm>
using namespace std;
int tree[30][1000], sorted[1000], toleft[30][1000], n, m, ans;//tree和toleft的两个维度分别存储深度和序列，sorted存储的是排序好的序列
void buildtree(int l, int r, int dep)//构建划分树
{
	if (l == r) return;//遇见叶子节点就返回
	int mid = (l + r) / 2;//二分
	int same = mid - l + 1;//same最终保存的是和中间值相同元素的个数，以便确定分到哪一区间
	for (int i = l; i <= r; i++) 
		if (tree[dep][i] < sorted[mid]) 
			same--; int lpos = l; 
	int rpos = mid + 1;//左指针和右指针，并非常用的指针，是用来保存现在各区间内元素个数
	for (int i = l; i <= r; i++)
	{
		if (tree[dep][i] < sorted[mid])//小于中间值
			tree[dep + 1][lpos++] = tree[dep][i];//分配到左子区间
		else if (tree[dep][i] == sorted[mid] && same > 0)//等于中间值且相同个数大于0
		{
			same--;
			tree[dep + 1][lpos++] = tree[dep][i];//分配到右子区间
		}
		else tree[dep + 1][rpos++] = tree[dep][i];//剩下的分配到右子区间
		toleft[dep][i] = toleft[dep][l - 1] + lpos - l;//toleft数组记录这一层前i个数有多少个进入下一层的左子区间，查询时有用
	}
	buildtree(l, mid, dep + 1);//构建左子区间（左子树）
	buildtree(mid + 1, r, dep + 1);//构建右子区间（右子树）
} 
int search(int L, int R, int l, int r, int dep, int k)//查询第k大的数
{
	if (l == r) return tree[dep][l];//查询到符合要求的叶子节点，返回相应的值
	int mid = (L + R) / 2;//L,R为大区间（主要是每个左子树，右子树的边界）
	int cnt = toleft[dep][r] - toleft[dep][l - 1];//求出[l,r]区间内有多少数进入下一层左子区间
	if (cnt >= k)//第k大的数对应节点在左子树
	{
		int newl = L + toleft[dep][l - 1] - toleft[dep][L - 1];//求出下一层第k大的数所在区间边界
		int newr = newl + cnt - 1; return search(L, mid, newl, newr, dep + 1, k);
	}
	else//在右子树
	{
		int newr = r + toleft[dep][R] - toleft[dep][r];//求出下一层第k大的数所在区间边界
		int newl = newr - (r - l - cnt); return search(mid + 1, R, newl, newr, dep + 1, k - cnt);
	}
}
int main()
{
	cin >> n >> m; 
	
	for (int i = 1; i <= n; i++)
	{
		cin >> tree[0][i];
		sorted[i] = tree[0][i];
	}
	sort(sorted + 1, sorted + n + 1);//为sorted数组排序
	buildtree(1, n, 0);//建树
	int a, b, c; for (int i = 1; i <= m; i++)
	{
		cin >> a >> b >> c;//输入询问
		cout << search(1, n, a, b, 0, c) << endl;//查询第k大的数
	} 
	return 0;
}


```

