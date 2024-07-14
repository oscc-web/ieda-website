求树上最长链（或者说树的直径、树上距离最远的两点距离，树中所有最短路径距离的最大值）

> 1.树形DP（可以有效处理负边权）
> 2.两次dfs或bfs（无法处理负边权）

------

### 1.没有上司的舞会

![img](https://tva3.sinaimg.cn/large/007xAwfLly8h2t5z5icz0j312g0i3q4w.jpg)

树中不相邻两点最大值



```cpp
#include<bits/stdc++.h>
using namespace std;
const int MAX=6010;
int ne[MAX],e[MAX],idx,h[MAX];
int f[MAX][2],w[MAX];
bool sta[MAX];
void add(int a,int b)
{
    e[idx]=b,ne[idx]=h[a],h[a]=idx++;
}
void dfs(int u)
{
    f[u][1]=w[u];
    for(int i=h[u];~i;i=ne[i])
    {
        int j=e[i];
        dfs(j);
        f[u][0]+=max(f[j][0],f[j][1]);
        f[u][1]+=f[j][0];
    }
}
int main()
{
    int n;
    cin>>n;
    for(int i=1;i<=n;i++)cin>>w[i];
    memset(h,-1,sizeof(h));
    for(int i=0;i<n-1;i++)
    {
        int a,b;
        scanf("%d%d",&a,&b);
        add(b,a);
        sta[a]=true;
    }
    int root=1;
    while(sta[root])
        root++;
    dfs(root);
    cout<<max(f[root][0],f[root][1])<<endl;
}
```

### 树上子链

![img](https://tva1.sinaimg.cn/large/007xAwfLly8h2t61kduaxj31960f076d.jpg)

带负权的树的最长直径



```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const int MAX=2e5+10;
const int INF=0x3f3f3f3f;
int ne[MAX],e[MAX],h[MAX],idx;
int n;
ll w[MAX],dp[MAX];
ll ans=-INF;
void add(int a,int b)
{
    e[idx]=b,ne[idx]=h[a],h[a]=idx++;
}
void dfs(int u,int pre)
{
    dp[u]=w[u];
    ans=max(ans,dp[u]);
    for(int i=h[u];~i;i=ne[i])
    {
        int j=e[i];
        if(j==pre)//已经访问过
            continue;
        dfs(j,u);
        ans=max(ans,dp[j]+dp[u]);//选出最长叶子链
        dp[u]=max(dp[u],dp[j]+w[u]);//最长叶子链可以继续上传更新答案
    }
}
int main()
{
    int n;
    cin>>n;
    for(int i=1;i<=n;i++) cin>>w[i];
    memset(h,-1,sizeof h);
    for(int i=0;i<n-1;i++)
    {
        int a,b;
        cin>>a>>b;
        add(a,b);
        add(b,a);
    }
    dfs(1,-1);
    cout<<ans<<endl;
}
```



