---
title: "6.8 线段树"
order: 8
---- 

# 基本概念
   
   线段树(segment tree)也是一种二叉搜索树，线段树的每一个节点都是一个区间![[L,\ R]](https://math.jianshu.com/math?formula=%5BL%2C%5C%20R%5D)，叶子节点则是一个单点区间，也即![L == R](https://math.jianshu.com/math?formula=L%20%3D%3D%20R)。对于一个非叶子节点，其左子节点的区间为![[L,\ (L+R)/2]](https://math.jianshu.com/math?formula=%5BL%2C%5C%20(L%2BR)%2F2%5D)，右子节点的区间为![[(L+R)/2+1,\ R]](https://math.jianshu.com/math?formula=%5B(L%2BR)%2F2%2B1%2C%5C%20R%5D)。需要注意的是，**线段树的区间是其数组元素下标的区间，区间大小与数组中元素的大小无关**。
   
   根据上述定义，线段树任一非根，非叶子节点的区间长度都是其父节点的区间长度的一半，所以，线段树是一个平衡二叉树。他的叶子节点的数目为N，即整个区间的长度。
   
   线段树的用途很广，主要用于进行更新和查询操作，这里的更新或者查询一般至少有一个指的是区间的更新或者查询。
   
<div style="text-align:center;">
  <img src="/res/images/eda_datastructure/SegmentTree_1.webp" alt="ASIC Flow" width="200" />
  <h4>图1 线段树</h4>
</div>

   一棵普普通通的线段树
   
   ## 线段树的节点定义
   
   
   
   ```cpp
   struct Node
   {
        int l, r, mx;
    }tr[MAXN * 4]; //习惯上将线段树的大小开到原始数组的4倍
    /*
    l : 区间左端点
    r : 区间右端点
    mx : 以l, r为下标区间中元素的最大值
    实际上，线段树数组足够的空间==原始数组n可向上取到的最近的2的某个次方的两倍
    */
   ```
   
   对于一个线段树数组来说，某一节点(编号为d)的左孩子存储在2 * d， 右孩子存储在2 * d + 1
   
   - 在c/c++中，将一个数乘以2的x次方可以写成：2 << x，故上面的 " MAXN * 4 " 可以写成MAXN << 2，实际上，对于 "<<" 和 ">>" 运算符，其实际含义是将左操作数的二进制数向左或向右移动指定的位数（比如A == 15，在二进制中A的值为：0000 1111，A << 2为：0011 1100），表现在十进制中就是将操作数乘或除2^x。
   
   ## 建树
   
   
   
   ```cpp
    void build(int d, int l, int r)
    {
        tr[d].l = l, tr[d].r = r;
        if(l == r)
        {
            tr[d].mx = arr[l];
            return;
       }
        int mid = (l + r) / 2, lc = d * 2, rc = d * 2 + 1;
        build(lc, l, mid);
        build(rc, mid + 1, r);
        tr[d].mx = max(tr[lc].mx, tr[rc].mx);
    }
   ```
   
   一般会将更新节点信息的操作称为Push或PushUp，在上述建树例子中更新节点信息的操作是：tr[d].mx = max(tr[lc].mx, tr[rc].mx); 一般会将这一句抽离出来写成一个独立的函数：
   
   
   
   ```cpp
   void Push(int d)
   {
      td[d].mx = max(tr[d << 1].mx, tr[d << 1 | 1].mx);
    }
   ```
   
   ## 查询
   
   
   
   ```cpp
   int query(int d, int l, int r)
   { //查询一个区间内的最大值
        if(tr[d].l == l && tr[d].r == r)return tr[d].mx;
        int mid = (tr[d].l + tr[d].r) / 2, lc = d * 2, rc = d * 2 + 1;
        if(r <= mid)return query(lc, l, mid);
        else if(l > mid)return query(rc, mid, r);
        else return max(query(lc, l, mid), query(rc, mid + 1, r));
    }
   ```
   
   线段树查询操作的时间复杂度可以达到O(logn)，有如下定理：
   
   **Thm**：当n >= 3时，一个![[1,n]](https://math.jianshu.com/math?formula=%5B1%2Cn%5D)的线段树可以将![[1,n]](https://math.jianshu.com/math?formula=%5B1%2Cn%5D)的任意子区间![[L,\ R]](https://math.jianshu.com/math?formula=%5BL%2C%5C%20R%5D)分解为不超过![2log_2(n-1)](https://math.jianshu.com/math?formula=2log_2(n-1))个子区间。
   
   ## 更新及「慵懒更新」
   
   
   
   ```cpp
   void modify(int d, int pos, int v)
   { //将位置为pos的元素更改为v
        if(tr[d].l == tr[d].r && tr[d].mx == pos){
            tr[d].mx = v;
            return;
       }
        int mid = (tr[d].l + tr[d].r) / 2, lc = d * 2, rc = d * 2 + 1;
        if(pos <= mid)modify(lc, pos, v);
        else modify(rc, pos, v);
        tr[d].mx = max(tr[lc].mx, tr[rc].mx);
    }
   ```
   
   对于线段树的更新还有一种「慵懒更新」方式，具体做法是，如果更新的区间与当前节点的区间完全重叠，那么就可以只对这个节点更新，并对这个节点做标记，对这个节点的子节点就无需再更新。若后续操作中存在关于这个区间，或其子区间的查询，那么**一定会经过这个区间**，当再次经过这个区间的时候就更新起子区间的标记，然后置这个区间的标记为"false"即可。
   
   ## 慵懒更新
   
   
   
   ```cpp
   void update(int L, int R, int val, int d){
        if(Tr[d].l == L && Tr[d].r == R){ //区间完全覆盖
            Tr[d].lazy = val;
            return;
       }
        int mid = Tr[d].l + Tr[d].r >> 1;
        if(Tr[d].lazy != 0){ //如果这个区间被标记了就更新其子节点
            Tr[d << 1].lazy = Tr[d << 1 | 1].lazy = Tr[d].lazy;
            Tr[d].lazy = 0;
       }
        if( mid < L )update(L, R, val, d << 1 | 1); //更新右子树
        else if( R <= mid )update(L, R, val, d << 1); //更新左子树
        else update(L, mid, val, d << 1), update(mid + 1, R, val, d << 1 | 1);
    }
   ```
   
   
