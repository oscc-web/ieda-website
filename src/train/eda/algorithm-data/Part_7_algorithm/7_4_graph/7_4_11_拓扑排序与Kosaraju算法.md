---
title: "7.4.11 强连通分量和Kosaraju算法"
order: 11
---

### 1.强连通的定义

回想一下我们在无向图的时候，当时我们就利用深度优先搜索解决了一幅无向图的连通问题。根据深搜能够到达所有连通的顶点，我们很容易解决这个问题。但是，问题变成有向图，就没有那么简单了！下面分别是无向图和有向图的两个例子：

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_27.png" alt="ASIC Flow" width="200" />
  <h4>图1 强连通</h4>
</div>

无向图的各连通分量

> 定义。如果两个顶点`v`和`w`是互相可达的，则称它们为强连通的。也就是说，既存在一条从`v`到`w`的有向路径，也存在一条从`w`到`v`的有向路径。如果一幅有向图中的任意两个顶点都是强
>  连通的，则称这幅有向图也是强连通的。

以下是另一些强连通的例子：

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_28.png" alt="ASIC Flow" width="200" />
  <h4>图2 强连通例子</h4>
</div>

强连通的有向图

### 2.强连通分量

在有向图中，强连通性其实是顶点之间的一种等价关系，因为它有以下性质

- 自反性：任意顶点 v 和自己都是强连通的
- 对称性：如果 v 和 w 是强连通的，那么 w 和 v 也是强连通的
- 传递性：如果 v 和 w 是强连通的且 w 和 x 也是强连通的，那
   么 v 和 x 也是强连通的

因为等价，所以和无向图一样，我们可以将一幅图分为若干个强连通分量，每一个强连通分量中的所有顶点都是强连通的。这样的话，**任意给定两个顶点判断它们之间的强连通关系，我们就直接判断它们是否在同一个强连通分量中就可以了！**

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_29.png" alt="ASIC Flow" width="200" />
  <h4>图3 强连通分量</h4>
</div>

有向图的强连通分量

接下来，我们需要设计一种算法来实现我们的目标————**将一幅图分为若干个强连通分量**。我们先来总结一下我们的目标：

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_30.png" alt="ASIC Flow" width="200" />
  <h4>图4 强连通分量例子</h4>
</div>

------

### 3.Kosaraju算法

Kosaraju算法就是一种经典的解决强连通性问题的算法，它实现很简单，但是不好理解**why**，希望你打起精神，我希望我能够把它讲明白（也只是希望，我会尽量，如果不清楚的话，强烈建议结合**算法4**一起食用）

------

回忆一下我们之前在无向图的部分如何解决连通性问题的，**一次dfs能够恰好遍历一个连通分量**，所以我们可以通过`dfs`来计数，获取每个顶点的`id[]`;所以，我们在解决有向图的强连通性问题时，也希望能够利用**一次dfs能够恰好遍历一个连通分量**的性质；不过，在有向图中，它失效了，来看一下图：

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_31.png" alt="ASIC Flow" width="200" />
  <h4>图5 连通分量</h4>
</div>


在图中，`dfs遍历`会存在两种情况：

第一种情况：如果`dfs`的起点时`顶点A`，那么一次`dfs遍历`会遍历整个区域一和区域二，但是区域一与区域二并不是强连通的，这就是有向图给我们带来的困难！

第二种情况：**如果`dfs`的起点是`顶点D`，则第一次`dfs`会遍历区域二，第二次`dfs`会遍历区域一**，这不就是我们想要的吗？

所以，第二个情况给了我们一个努力的方向！也就是**如果我们人为地，将所有的可能的情况都变成第二种情况，事情不就解决了！**

有了方向，那么接下来，我们来看一幅真实的有向图案例，如图所示，这是一幅有向图，它的各个强连通分量在图中用灰色标记；我们的操作是将每个强连通分量看成一个**顶点（比较大而已）**，那么会产生什么后果呢？**我们的原始的有向图就会变成一个有向无环图！**

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_32.png" alt="ASIC Flow" width="200" />
  <h4>图6 有向无环图</h4>
</div>



ps:想一想为什么不能存在环呢？因为前提我们把所有的强连通分量看成了一个个顶点，如果`顶点A`和`顶点B`之间存在环，那`A`和`B`就会构成一个更大的强连通分量！它们本应属于一个顶点！

在得到一幅有向无环图（DAG）之后，事情没有那么复杂了。现在，我们再回想一下我们的目的————**在图一中，我们希望区域二先进行`dfs`，也就是箭头指向的区域先进行`dfs`**。在将一个个区域抽象成点后，问题归结于**在一幅有向无环图中，我们要找到一种顺序，这种顺序的规则是箭头指向的顶点排在前**！

到这儿，我们稍微好好想想，我们的任务就是找到一种进行`dfs`的顺序，这种顺序，是不是和我们在前面讲到的**某种排序**十分相似呢？我想你已经不难想到了，就是**拓扑排序**！但是**和拓扑排序是完全相反的。**

我们把箭头理解为优先级，对于顶点A指向顶点B，则A的优先级高于B。那么对于拓扑排序，**优先级高者在前**；对于我们的任务，**优先级低者在前**（我们想要的结果就是dfs不会从优先级低的地方跑到优先级高的地方）

我们想要的结果如图所示：

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_33.png" alt="ASIC Flow" width="200" />
  <h4>图7 有向无环图</h4>
</div>


如果我们从`顶点1`开始进行`dfs`，依次向右，那么永远不会发生我们不希望的情况！因为箭头是单向的！

我想，到这儿，你应该差不多理解我的意思了。我们还有最后一个小问题————**如何获取拓扑排序的反序？**

其实解决方法很简单：对于一个有向图`G`,我们先取反（reverse方法），将图`G`的所有边的顺序颠倒，然后获取取反后的图的**逆后序排序（我们不能称为拓扑排序，因为真实情况是有环的）**；最后，我们利用刚才获得的顶点顺序对原图`G`进行`dfs`即可，这时它的原理与上一篇文章无向图的完全一致！

最后，总结一下Kosaraju算法的实现步骤：

- 1.在给定的一幅有向图 G 中，使用 DepthFirstOrder 来计算它的反向图 GR 的逆后序排列。
- 2.在 G 中进行标准的深度优先搜索，但是要按照刚才计算得到的顺序而非标准的顺序来访问
   所有未被标记的顶点。

具体的实现代码只在无向图的实现`CC类`中增加了两行代码（改变dfs的顺序）

最后，附上一幅具体的操作过程：

<div style="text-align:center;">
  <img src="/res/images/eda_algorithm/graph/graph_34.png" alt="ASIC Flow" width="200" />
  <h4>图8 操作过程</h4>
</div>



```c++
#include<iostream>
#include<cstdio>
#include<vector>
#include<cstring>
 
using namespace std;
 
const int max_v=100;
 
int V;
vector<int>g[max_v];
vector<int>rg[max_v];
vector<int>vs;
bool used[max_v];
int cmp[max_v];
 
void add_edge(int from,int to)
{
    g[from].push_back(to);
    rg[to].push_back(from);
}
 
void dfs(int v)
{
    used[v]=true;
    for(int i=0;i<g[v].size();i++){
        if(!used[g[v][i]]){
            dfs(g[v][i]);
        }
    }
    vs.push_back(v);
}
 
void rdfs(int v,int k)
{
    used[v]=true;
    cmp[v]=k;
    for(int i=0;i<rg[v].size();i++){
        if(!used[rg[v][i]]){
            rdfs(rg[v][i],k);
        }
    }
}
 
int scc()
{
    memset(used,0,sizeof(used));
    vs.clear();
    for(int v=0;v<V;v++){
        if(!used[v]){
            dfs(v);
        }
    }
    memset(used,0,sizeof(used));
    int k=0;
    for(int i=vs.size()-1;i>=0;i--){
        if(!used[vs[i]]){
            rdfs(vs[i],k++);
        }
    }
    return k;
}
 
int main()
{
    scanf("%d",&V);
    int m;
    scanf("%d",&m);
    int u,v;
    for(int i=0;i<m;i++){
        scanf("%d%d",&u,&v);
        add_edge(u,v);
    }
    int ans=scc();
    printf("%d\n",ans);
    return 0;
}

```

