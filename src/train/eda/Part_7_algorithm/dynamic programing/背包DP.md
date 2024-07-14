# 背包问题

背包问题是指在给定条件下 如何获得最高价值的问题

## 01背包问题

给定一个重量限制，和几种不同物品的价值和重量，每种物品只有一个，寻找能拿到的最大价值是多少

01背包问题根本指的是，同种物品有且最高只有一个，在给定限制下，如何获得最大收益

枚举：找出所有组合

### 动态规划

问题的关键在于我们是否要选择当前物品，选取了当前物品是否是最大的价值

做一个n^2的算法

内层循环表示寻找合适的大小

外层循环表示第几件物品

每次内层循环，我们第一个要找的是我们是否能放下当前物品。

放下当前物品后，是否比放上一件物品的价值高，选取高者。

之后继续查找剩余空间能否放下之前的物品，如果能那么和上一轮的结果比取高者。

由于每一轮都是取最高者，所以我们没有必要讨论上一轮之前的其它物品，题目中只要求了最后价值。

内层循环每次都是找到当前价值加上之前的最高价值，之前的和当前物品无关所以自然不会重复选取。



```c
#include<iostream>  
using namespace std;
const int maxn = 1000;
int dp[20][20];
int value[20],weight[20];

int main(){
    int n,limitw;
    cin>>n>>limitw; //物品个数，背包大小
    for (int i=1;i<=n;i++){
        cin>>value[i]>>weight[i];
    }
    cout<<"0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20\n"; //更好的观察算法
    for(int i=1;i<=n;i++){
        for(int j=0;j<=limitw;j++){
            /*算法的唯一要点*/
            if(j>=weight[i]){
                dp[i][j]=max(dp[i-1][j-weight[i]]+value[i],dp[i-1][j]);
            }else{
                dp[i][j]=dp[i-1][j];    //如果放不下，继承上一轮的结果
            }
            cout<<dp[i][j]<<" ";    //更好的观察算法
        }
        cout<<"\n"; //更好的观察算法
    }
    cout<<dp[n][limitw];
    return 0;
}
```

### 优化空间复杂度

我们发现其实我们只比对了当前一轮和上一轮的结果，之前的空间用过一次之后就没用了

我们只要倒着寻找，就可以不破坏上一轮低重量的价值，从而找到最大值

空间复杂度由n^2➡n



```c
#include<iostream>
using namespace std;
const int maxn = 1000;
int dp[20];
int value[20],weight[20];

int main(){
    int n,limitw;
    cin>>n>>limitw;
    for (int i=1;i<=n;i++){
        cin>>value[i]>>weight[i];
    }
    cout<<"0 1 2 3 4 5 6 7 8 9 10\n";   //更好的观察算法
    for(int i=1;i<=n;i++){
        for(int j=limitw;j>=weight[i];j--){
            dp[j]=max(dp[j-weight[i]]+value[i],dp[j]);
            cout<<dp[j]<<" ";   //更好的观察算法
        }
        cout<<"\n"; //更好的观察算法
    }

    cout<<dp[limitw];
    return 0;
}
```

## 02多重背包问题

有N种物品，第i种物品的体积是Ci，价值是Wi，每种物品的数量都是有限的，为Ni。现有容量为V的背包，放入若干物品，在总体积不超过V的条件下，使总价值尽可能大。

在不需要记录物品种类的情况下，01背包就是每种物品数量为1的多重背包问题，所以可以依旧可以采用01背包的算法，把物品拆分成一件一件的。



```c
#include<iostream>
using namespace std;
int dp[21][1010];       //物品上限，背包大小
int w[10],c[21],n[21];  //价值,体积,数量
int main(){
    int N,V;
    cin>>N>>V;
    for(int i=1;i<=N;i++){
        cin>>w[i]>>c[i]>>n[i];
    }
    for(int i=1;i<=N;i++){  //第几件物品
        for(int j=0;j<=V;j++){  //背包大小
            for(int k=0;k<=n[i];k++){   //这里其实把物品当做一个一个往里面放
                if(j>=c[i]*k){
                    dp[i][j]=max(dp[i-1][j-c[i]*k]+w[i]*k,dp[i][j]);
                }
            }
        }
    }
    cout<<dp[N][V]<<endl;
    return 0;
}
```

依旧可以优化空间复杂度，和01背包同理



```c
#include<iostream>
using namespace std;
int dp[1010];       //背包大小
int w[10],c[21],n[21];  //价值,体积,数量
int main(){
    int N,V;
    cin>>N>>V;
    for(int i=1;i<=N;i++){
        cin>>w[i]>>c[i]>>n[i];
    }
    for(int i=1;i<=N;i++){  //第几件物品
        for(int j=V;j>=0;j--){  //背包大小，优化空间复杂度一定要反着放
            for(int k=0;k<=n[i];k++){   //这里其实把物品当做一个一个往里面放
                if(j>=c[i]*k){
                    dp[j]=max(dp[j-c[i]*k]+w[i]*k,dp[j]);
                }
            }
        }
    }
    cout<<dp[V]<<endl;
    return 0;
}
```

测试用例



```undefined
5 10
2 1 2
3 5 3
2 5 1
3 4 2
4 3 8
应得结果：14
```

## 03完全背包问题

在多重背包问题上把每种物品的数量取消限制



```undefined
5 10
2 1
3 5
2 5
3 4
4 3
应得结果：20
```

解决思路：转换成多重背包问题

其实可以直接使用多重背包来解决，只不过时间复杂度接近o(n v v)，因为虽然物品数量没有上限，但其实物品数量的上限就是背包的上限，只需要处理数量*体积<剩余空间。

观察后发现，之前的多重背包问题中，第三重循环仅仅是为了限制数量

和01背包的不同之处在于，01背包每一轮记录的都是同一件物品的结果，而完全背包记录的是一种物品存放多次，具体体现在dp的更新上，01背包我们在放下当前物品时之后从上一轮拿出之前的记录在存放之前的物品，然而完全背包是每一轮把当前品种放慢，之后每次都取当前能得到的最大值，我个人觉得是有一种贪心的思想在里面。



```c
#include<iostream>
using namespace std;
int dp[21][1010];       //物品上限，背包大小
int w[10],c[21];  //价值,体积
int main(){
    int N,V;
    cin>>N>>V;
    for(int i=1;i<=N;i++){
        cin>>w[i]>>c[i];
    }
    for(int i=1;i<=N;i++){  //第几件物品
        for(int j=0;j<=V;j++){  //背包大小
            if(j>=c[i]){
                dp[i][j]=max(dp[i][j-c[i]]+w[i],dp[i-1][j]);
            }else{
                dp[i][j]=dp[i-1][j];
            }

        }
    }
    cout<<dp[N][V]<<endl;
    return 0;
}
```

同样可以优化空间复杂度

完全背包问题优化后的算法内层循环不同之前，因为之前循环倒序是怕破坏上一轮的记录，然而完全背包问题是用不到上一轮记录的



```c
#include<stdio.h>
#include<algorithm>
#include<iostream>
using namespace std;
int dp[1010];       //背包大小
int w[10],c[21];  //价值,体积
int main(){
    int N,V;
    cin>>N>>V;
    for(int i=1;i<=N;i++){
        cin>>w[i]>>c[i];
    }
    for(int i=1;i<=N;i++){  //第几件物品
        for(int j=1;j<=V;j++){  //背包大小
            dp[j]=max(dp[j-c[i]]+w[i],dp[j]);
        }
    }
    cout<<dp[V]<<endl;
    return 0;
}
```



