---
title: "7.3.1 傅立叶变换"
order: 1
---

# FFT快速傅里叶

多项式乘法
 给定一个![n](https://math.jianshu.com/math?formula=n)次多项式![A(x)](https://math.jianshu.com/math?formula=A(x))和![m](https://math.jianshu.com/math?formula=m)次多项式![B(n)](https://math.jianshu.com/math?formula=B(n))，求出![F(x)](https://math.jianshu.com/math?formula=F(x))与![G(x)](https://math.jianshu.com/math?formula=G(x))的卷积。

## 输入格式

第一行两个整数![n,mn,m](https://math.jianshu.com/math?formula=n%2Cmn%2Cm)。
 接下来一行![n+1](https://math.jianshu.com/math?formula=n%2B1)个数字，从低到高表示![F(x)](https://math.jianshu.com/math?formula=F(x))的系数。
 接下来一行![m+1](https://math.jianshu.com/math?formula=m%2B1)个数字，从低到高表示![G(x)](https://math.jianshu.com/math?formula=G(x))的系数。

## 输出格式

一行![n+m+1](https://math.jianshu.com/math?formula=n%2Bm%2B1)个数字，从低到高表示![F(x) \cdot G(x)](https://math.jianshu.com/math?formula=F(x)%20%5Ccdot%20G(x))的系数。

## 输入输出样例

### 输入样例

> 1 2
>  1 2
>  1 2 1

### 输出样例

> 1 4 5 2

# 问题分析

假设两个多项式![A(x)=a_0+a_1x+a_2x^2+\cdots +a_{n-1}x_{n-1}](https://math.jianshu.com/math?formula=A(x)%3Da_0%2Ba_1x%2Ba_2x%5E2%2B%5Ccdots%20%2Ba_%7Bn-1%7Dx_%7Bn-1%7D)和![B(x)=b_0+b_1x+b_2x^2+\cdots +b_{n-1}x^{n-1}](https://math.jianshu.com/math?formula=B(x)%3Db_0%2Bb_1x%2Bb_2x%5E2%2B%5Ccdots%20%2Bb_%7Bn-1%7Dx%5E%7Bn-1%7D)，两个多项式可以写作：
 ![\begin{equation} A(x)=\sum_{i=0}^{n-1}a_ix^i\\ B(x)=\sum_{i=0}^{n-1}a_ix^i \end{equation}](https://math.jianshu.com/math?formula=%5Cbegin%7Bequation%7D%20A(x)%3D%5Csum_%7Bi%3D0%7D%5E%7Bn-1%7Da_ix%5Ei%5C%5C%20B(x)%3D%5Csum_%7Bi%3D0%7D%5E%7Bn-1%7Da_ix%5Ei%20%5Cend%7Bequation%7D)
 传统方法是利用两个多项式的系数进行卷积运算，得到一个![2n-2](https://math.jianshu.com/math?formula=2n-2)次多项式![C(x)](https://math.jianshu.com/math?formula=C(x))：
 ![\begin{equation} C(x)=\sum_{i=0}^{2n-2}c_ix_i \end{equation}](https://math.jianshu.com/math?formula=%5Cbegin%7Bequation%7D%20C(x)%3D%5Csum_%7Bi%3D0%7D%5E%7B2n-2%7Dc_ix_i%20%5Cend%7Bequation%7D)
 这种卷积运算的时间复杂度为![O(n^2)](https://math.jianshu.com/math?formula=O(n%5E2))，显然在数据范围较大的情况下难以承受，而利用**快速傅里叶变换**可将时间复杂度降为![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn))。

# FFT介绍

> 快速傅里叶变换 (fast Fourier transform),即利用计算机计算离散傅里叶变换（DFT)的高效、快速计算方法的统称，简称FFT。快速傅里叶变换是1965年由J.W.库利和T.W.图基提出的。采用这种算法能使计算机计算离散傅里叶变换所需要的乘法次数大为减少，特别是被变换的抽样点数N越多，FFT算法计算量的节省就越显著。
>  FFT（Fast Fourier Transformation） 是离散傅氏变换（DFT）的快速算法。即为快速傅氏变换。它是根据离散傅氏变换的奇、偶、虚、实等特性，对离散傅立叶变换的算法进行改进获得的。
>  ——百度百科

要解决的问题是多项式的乘法，而一个多项式的表示方法并不唯一，传统意义上多项式的表示利用的是系数表示法，即对于一个多项式![A(x)=a_0+a_1x+a_2x^2+\cdots +a_{n-1}x_{n-1}](https://math.jianshu.com/math?formula=A(x)%3Da_0%2Ba_1x%2Ba_2x%5E2%2B%5Ccdots%20%2Ba_%7Bn-1%7Dx_%7Bn-1%7D)可由一个系数向量![(a_0,a_1,a_2,\cdots,a_{n-1})](https://math.jianshu.com/math?formula=(a_0%2Ca_1%2Ca_2%2C%5Ccdots%2Ca_%7Bn-1%7D))唯一表示。

而除了系数表示法之外，多项式也可以利用点值表示，对于多项式![A(x)](https://math.jianshu.com/math?formula=A(x))，选定![n](https://math.jianshu.com/math?formula=n)个![x](https://math.jianshu.com/math?formula=x)值![(x_0,x_1,x_2,\cdots,x_{n-1})](https://math.jianshu.com/math?formula=(x_0%2Cx_1%2Cx_2%2C%5Ccdots%2Cx_%7Bn-1%7D))带入多项式进行计算，得到![n](https://math.jianshu.com/math?formula=n)个点值)这![n](https://math.jianshu.com/math?formula=n)个点值也可唯一表示多项式![A(x)](https://math.jianshu.com/math?formula=A(x))。

因此当我们利用同一个向量![x](https://math.jianshu.com/math?formula=x)得到了两个两个多项式的点值表示法后，用对应点值相乘，得到![(A(x_0)B(x_0),A(x_1)B(x_1),A(x_2)B(x_2),\cdots,A(x_{n-1})B(x_{n-1}))](https://math.jianshu.com/math?formula=(A(x_0)B(x_0)%2CA(x_1)B(x_1)%2CA(x_2)B(x_2)%2C%5Ccdots%2CA(x_%7Bn-1%7D)B(x_%7Bn-1%7D)))即为两个多项式的乘积多项式的点值表示，这个过程的时间复杂度为![O(n)](https://math.jianshu.com/math?formula=O(n))。

需要注意的一点是，当两个多项式次数为![n,m](https://math.jianshu.com/math?formula=n%2Cm)时，他们的乘积多项式次数为![n+m](https://math.jianshu.com/math?formula=n%2Bm)，因此利用点值表示计算时，计算两个多项式的点值表示时应选用![n+m+1](https://math.jianshu.com/math?formula=n%2Bm%2B1)个变量，才能使得到的结果唯一表示乘积多项式![C(x)](https://math.jianshu.com/math?formula=C(x))。

然而对于一个多项式![A(x)](https://math.jianshu.com/math?formula=A(x))来说，代入任意选定的变量![(x_0,x_1,x_2,\cdots,x_{n-1})](https://math.jianshu.com/math?formula=(x_0%2Cx_1%2Cx_2%2C%5Ccdots%2Cx_%7Bn-1%7D))计算他的点值表示法时间复杂度依然是![O(n^2)](https://math.jianshu.com/math?formula=O(n%5E2))，并没有起到优化的效果，而快速傅里叶变换解决了这个问题，使得系数表示法转化为点值表示法的时间复杂度降低为![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn))。

### 快速傅里叶变换FFT

FFT在计算多项式的系数表示法变换为点值表示法时，选定**复平面**上单位圆上的**单位复根**![\omega_n^k](https://math.jianshu.com/math?formula=%5Comega_n%5Ek)作为变量计算多项式的点值，在这里单位根![\omega_n^k](https://math.jianshu.com/math?formula=%5Comega_n%5Ek)满足以下的一些性质（如果有不理解的可以自行查阅复数的一些相关知识)：

![img](https://i.bmp.ovh/imgs/2022/03/7b2426394ca6e376.png) 以上的这些性质都可以由**Euler公式**得到，推导过程并非FFT重点这里就省略了。

对于一个多项式![A(x)=a_0+a_1x+a_2x^2+\cdots +a_{n-1}x_{n-1}](https://math.jianshu.com/math?formula=A(x)%3Da_0%2Ba_1x%2Ba_2x%5E2%2B%5Ccdots%20%2Ba_%7Bn-1%7Dx_%7Bn-1%7D)，我们可以对其进行划分，将偶数次项与奇数次项分开，在这里假设![n-1](https://math.jianshu.com/math?formula=n-1)为奇数，得到：
 ![A(x)=(a_0+a_2x^2+\cdots +a_{n-2}x^{n-2})+x(a_1+a_3x^2+\cdots +a_{n-1}x^{n-2})](https://math.jianshu.com/math?formula=A(x)%3D(a_0%2Ba_2x%5E2%2B%5Ccdots%20%2Ba_%7Bn-2%7Dx%5E%7Bn-2%7D)%2Bx(a_1%2Ba_3x%5E2%2B%5Ccdots%20%2Ba_%7Bn-1%7Dx%5E%7Bn-2%7D))
 我们分别定义两个多项式![A_1(x),A_2(x)](https://math.jianshu.com/math?formula=A_1(x)%2CA_2(x))：
 ![\begin{aligned} &A_1(x)=a_0+a_2x^1+\cdots +a_{n-2}x^{\frac{n}{2}-1}\\ &A_2(x)=a_1+a_3x^2+\cdots +a_{n-1}x^{\frac{n}{2}-1}\\ \end{aligned}](https://math.jianshu.com/math?formula=%5Cbegin%7Baligned%7D%20%26A_1(x)%3Da_0%2Ba_2x%5E1%2B%5Ccdots%20%2Ba_%7Bn-2%7Dx%5E%7B%5Cfrac%7Bn%7D%7B2%7D-1%7D%5C%5C%20%26A_2(x)%3Da_1%2Ba_3x%5E2%2B%5Ccdots%20%2Ba_%7Bn-1%7Dx%5E%7B%5Cfrac%7Bn%7D%7B2%7D-1%7D%5C%5C%20%5Cend%7Baligned%7D)
 那么原多项式![A(x)](https://math.jianshu.com/math?formula=A(x))就可以表示为：
 ![A(x)=A_1(x^2)+xA_2(x^2)](https://math.jianshu.com/math?formula=A(x)%3DA_1(x%5E2)%2BxA_2(x%5E2))
 将![\omega_n^k](https://math.jianshu.com/math?formula=%5Comega_n%5Ek)代入上式：
 ![\begin{aligned} A(\omega_n^k)&=A_1(\omega_n^{2k})+\omega_n^kA_2(\omega_n^{2k})\\ &=A_1(\omega_{\frac{n}{2}}^k)+\omega_n^kA_2(\omega_{\frac{n}{2}}^k) \end{aligned}](https://math.jianshu.com/math?formula=%5Cbegin%7Baligned%7D%20A(%5Comega_n%5Ek)%26%3DA_1(%5Comega_n%5E%7B2k%7D)%2B%5Comega_n%5EkA_2(%5Comega_n%5E%7B2k%7D)%5C%5C%20%26%3DA_1(%5Comega_%7B%5Cfrac%7Bn%7D%7B2%7D%7D%5Ek)%2B%5Comega_n%5EkA_2(%5Comega_%7B%5Cfrac%7Bn%7D%7B2%7D%7D%5Ek)%20%5Cend%7Baligned%7D)
 将![\omega_n^{k+\frac{n}{2}}](https://math.jianshu.com/math?formula=%5Comega_n%5E%7Bk%2B%5Cfrac%7Bn%7D%7B2%7D%7D)代入上式：
 ![\begin{aligned} A(\omega_n^{k+\frac{n}{2}})&=A_1(\omega_{n}^{2k+n})+\omega_n^{k+\frac{n}{2}}A_2(\omega_n^{2k+n})\\ &=A_1(\omega_n^n\times \omega_n^{2k})-\omega_n^kA_2(\omega_n^n\times \omega_n^{2k})\\ &=A_1(\omega_n^{2k})-\omega_n^kA_2(\omega_n^{2k})\\ &=A_1(\omega_{\frac{n}{2}}^k)-\omega_n^kA_2(\omega_{\frac{n}{2}}^k) \end{aligned}](https://math.jianshu.com/math?formula=%5Cbegin%7Baligned%7D%20A(%5Comega_n%5E%7Bk%2B%5Cfrac%7Bn%7D%7B2%7D%7D)%26%3DA_1(%5Comega_%7Bn%7D%5E%7B2k%2Bn%7D)%2B%5Comega_n%5E%7Bk%2B%5Cfrac%7Bn%7D%7B2%7D%7DA_2(%5Comega_n%5E%7B2k%2Bn%7D)%5C%5C%20%26%3DA_1(%5Comega_n%5En%5Ctimes%20%5Comega_n%5E%7B2k%7D)-%5Comega_n%5EkA_2(%5Comega_n%5En%5Ctimes%20%5Comega_n%5E%7B2k%7D)%5C%5C%20%26%3DA_1(%5Comega_n%5E%7B2k%7D)-%5Comega_n%5EkA_2(%5Comega_n%5E%7B2k%7D)%5C%5C%20%26%3DA_1(%5Comega_%7B%5Cfrac%7Bn%7D%7B2%7D%7D%5Ek)-%5Comega_n%5EkA_2(%5Comega_%7B%5Cfrac%7Bn%7D%7B2%7D%7D%5Ek)%20%5Cend%7Baligned%7D)
 由此可以发现，![A(\omega_n^k)](https://math.jianshu.com/math?formula=A(%5Comega_n%5Ek))和![A(\omega_n^{k+\frac{n}{2}} )](https://math.jianshu.com/math?formula=A(%5Comega_n%5E%7Bk%2B%5Cfrac%7Bn%7D%7B2%7D%7D%20))在计算的过程中只有一个符号不同，因此在进行枚举计算![A(\omega_n^k)](https://math.jianshu.com/math?formula=A(%5Comega_n%5Ek))时即可直接得到![A(\omega_n^{k+\frac{n}{2}} )](https://math.jianshu.com/math?formula=A(%5Comega_n%5E%7Bk%2B%5Cfrac%7Bn%7D%7B2%7D%7D%20))的值，利用这种方法进行分治，便可以将复杂度降至![O(nlogn)](https://math.jianshu.com/math?formula=O(nlogn))。

### 逆傅里叶变换IFFT

利用上述的方法得到了乘积多项式的点值表示法，那么现在需要解决的问题时如何将点值表示法再转换回系数表示法。

假设得到多项式的FFT点值表示为![(y_0,y_1,y_2,\cdots ,y_{n-1})](https://math.jianshu.com/math?formula=(y_0%2Cy_1%2Cy_2%2C%5Ccdots%20%2Cy_%7Bn-1%7D))，其系数表示为![(a_0,a_1,a_2,\cdots ,a_{n-1})](https://math.jianshu.com/math?formula=(a_0%2Ca_1%2Ca_2%2C%5Ccdots%20%2Ca_%7Bn-1%7D))，根据FFT原理，![y_k](https://math.jianshu.com/math?formula=y_k)可如下表示：
 ![y_k=\sum_{i=0}^{n-1}a_i(\omega_n^k)^i](https://math.jianshu.com/math?formula=y_k%3D%5Csum_%7Bi%3D0%7D%5E%7Bn-1%7Da_i(%5Comega_n%5Ek)%5Ei)
 取![\omega_n^k](https://math.jianshu.com/math?formula=%5Comega_n%5Ek)的**共轭复数**![\omega_n^{-k}](https://math.jianshu.com/math?formula=%5Comega_n%5E%7B-k%7D)，如下定义向量![(c_0,c_1,c_2,\cdots ,c_{n-1})](https://math.jianshu.com/math?formula=(c_0%2Cc_1%2Cc_2%2C%5Ccdots%20%2Cc_%7Bn-1%7D))：
 ![c_k=\sum_{i=0}^{n-1}y_i(\omega_n^{-k})^i](https://math.jianshu.com/math?formula=c_k%3D%5Csum_%7Bi%3D0%7D%5E%7Bn-1%7Dy_i(%5Comega_n%5E%7B-k%7D)%5Ei)
 那么由定义可以推导出如下的公式：
![img](https://i.bmp.ovh/imgs/2022/03/7ca4f3f32a39ab07.png)
 对于复平面上的单位根![\omega_n^k](https://math.jianshu.com/math?formula=%5Comega_n%5Ek)，有如下的性质：
 ![\begin{aligned} \sum_{i=0}^{n-1}(\omega_n^{j-k})^i&=0\quad(j\neq k)\\ \sum_{i=0}^{n-1}(\omega_n^{j-k})^i& =\omega_n^ 0=1 \quad (j= k ) \end{aligned}](https://math.jianshu.com/math?formula=%5Cbegin%7Baligned%7D%20%5Csum_%7Bi%3D0%7D%5E%7Bn-1%7D(%5Comega_n%5E%7Bj-k%7D)%5Ei%26%3D0%5Cquad(j%5Cneq%20k)%5C%5C%20%5Csum_%7Bi%3D0%7D%5E%7Bn-1%7D(%5Comega_n%5E%7Bj-k%7D)%5Ei%26%20%3D%5Comega_n%5E%200%3D1%20%5Cquad%20(j%3D%20k%20)%20%5Cend%7Baligned%7D)
 因此可以得到：
 ![\begin{aligned} &c_k=na_k\\ &a_k=\frac{c_k}{n} \end{aligned}](https://math.jianshu.com/math?formula=%5Cbegin%7Baligned%7D%20%26c_k%3Dna_k%5C%5C%20%26a_k%3D%5Cfrac%7Bc_k%7D%7Bn%7D%20%5Cend%7Baligned%7D)
 因此，利用FFT得到了多项式的点值表示后只需要将变量换为原本选定的单位根的共轭复数再进行一次FFT就能得到多项式的系数表示。

这里需要说明一个问题，我们以上的讨论都是建立在**![n](https://math.jianshu.com/math?formula=n)为![2](https://math.jianshu.com/math?formula=2)的幂次**的条件下的，那么当![n](https://math.jianshu.com/math?formula=n)不是![2](https://math.jianshu.com/math?formula=2)的幂次时需要**将![n](https://math.jianshu.com/math?formula=n)扩大为大于![n](https://math.jianshu.com/math?formula=n)的最小的![2](https://math.jianshu.com/math?formula=2)的幂次**，在进行逆傅里叶变换时，通过上述的推导可以发现，当我们计算的![c_k](https://math.jianshu.com/math?formula=c_k)中![k](https://math.jianshu.com/math?formula=k)的值大于原本的![n](https://math.jianshu.com/math?formula=n)时，就不存在![j=k](https://math.jianshu.com/math?formula=j%3Dk)的情况了，因此求得的![a_k](https://math.jianshu.com/math?formula=a_k)为![0](https://math.jianshu.com/math?formula=0)，表示该多项式的![k](https://math.jianshu.com/math?formula=k)次项系数为![0](https://math.jianshu.com/math?formula=0)。



## 但是问题到这里并没有结束

当有的毒瘤数据范围非常大的时候，用递归进行计算时，大量的递归会造成栈溢出，那么是否有不用递归的做法？

## FFT的迭代实现

对于这样一个序列![(a_0,a_1,a_2,a_3,a_4,a_5,a_6,a_7)](https://math.jianshu.com/math?formula=(a_0%2Ca_1%2Ca_2%2Ca_3%2Ca_4%2Ca_5%2Ca_6%2Ca_7))，我们观察对其进行二分的过程：

![img](https:////upload-images.jianshu.io/upload_images/6362855-997fa72bf2761a12.png?imageMogr2/auto-orient/strip|imageView2/2/w/520/format/webp)


 我们发现了一个神奇的性质，在对这个序列进行二分以后的序列的二进制可以由原序列的二进制进行翻转得到，那么我们可以利用这个性质，用一个![O(n)](https://math.jianshu.com/math?formula=O(n))的方法可以直接得到最终的序列，从而省去了递归的过程，用最终的序列反向递推实现即可。



### Rader算法

**Rader算法**即为实现上述操作的一种算法，对于![N](https://math.jianshu.com/math?formula=N)个数，我们把递增自然数![(0,1,2,3,\cdots)](https://math.jianshu.com/math?formula=(0%2C1%2C2%2C3%2C%5Ccdots))称为顺序数列；对顺序数列中的每一个数，将其二进制倒序后转化为十进制，称为倒序数列。
 对于一个顺序数列，第![i](https://math.jianshu.com/math?formula=i)个数的二进制可以视为将第![i/2](https://math.jianshu.com/math?formula=i%2F2)（这里是整除）个数的二进制左移一位，再根据![i](https://math.jianshu.com/math?formula=i)的奇偶性对其末尾加![1](https://math.jianshu.com/math?formula=1)或者不加![1](https://math.jianshu.com/math?formula=1)。
 那么要得到它的倒序数列，只需要将这个操作反向进行即可，即第![i](https://math.jianshu.com/math?formula=i)个数的二进制可以视为将第![i/2](https://math.jianshu.com/math?formula=i%2F2)个数的二进制右移一位，再根据![i](https://math.jianshu.com/math?formula=i)的奇偶性对其最高加![1](https://math.jianshu.com/math?formula=1)或者不加![1](https://math.jianshu.com/math?formula=1)，这里最高位即为第![\log_{2}n](https://math.jianshu.com/math?formula=%5Clog_%7B2%7Dn)位。

### 迭代进行FFT（蝴蝶变换）

利用Rader算法求得了递推序列，那么如何通过迭代得到最终的答案？
 这其实跟迭代实现01背包的做法思路差不多，对于求![A(x)](https://math.jianshu.com/math?formula=A(x))在![n](https://math.jianshu.com/math?formula=n)次单位根的各幂次的点值时，![m=n/2](https://math.jianshu.com/math?formula=m%3Dn%2F2)次单位根的各幂次在![A_1](https://math.jianshu.com/math?formula=A_1)或![A_2](https://math.jianshu.com/math?formula=A_2)处的点值已经被计算并且储存在了![A](https://math.jianshu.com/math?formula=A)数组中，那么在下一层的迭代过程中直接使用![A](https://math.jianshu.com/math?formula=A)数组存储的答案继续进行迭代计算即可。

## 迭代优化FFT代码实现



```cpp
#include <iostream>
#include <cstring>
#include <algorithm>
#include <cmath>

using namespace std;

const int N = 300010;
const double PI = acos(-1);

int n, m;
struct Complex
{
    double x, y;
    Complex operator+ (const Complex& t) const
    {
        return {x + t.x, y + t.y};
    }
    Complex operator- (const Complex& t) const
    {
        return {x - t.x, y - t.y};
    }
    Complex operator* (const Complex& t) const
    {
        return {x * t.x - y * t.y, x * t.y + y * t.x};
    }
}a[N], b[N];
int rev[N], bit, tot;

void fft(Complex a[], int inv)
{
    for (int i = 0; i < tot; i ++ )
        if (i < rev[i])
            swap(a[i], a[rev[i]]);
    for (int mid = 1; mid < tot; mid <<= 1)
    {
        auto w1 = Complex({cos(PI / mid), inv * sin(PI / mid)});
        for (int i = 0; i < tot; i += mid * 2)
        {
            auto wk = Complex({1, 0});
            for (int j = 0; j < mid; j ++, wk = wk * w1)
            {
                auto x = a[i + j], y = wk * a[i + j + mid];
                a[i + j] = x + y, a[i + j + mid] = x - y;
            }
        }
    }
}

int main()
{
    scanf("%d%d", &n, &m);
    for (int i = 0; i <= n; i ++ ) scanf("%lf", &a[i].x);
    for (int i = 0; i <= m; i ++ ) scanf("%lf", &b[i].x);
    while ((1 << bit) < n + m + 1) bit ++;
    tot = 1 << bit;
    for (int i = 0; i < tot; i ++ )
        rev[i] = (rev[i >> 1] >> 1) | ((i & 1) << (bit - 1));
    fft(a, 1), fft(b, 1);
    for (int i = 0; i < tot; i ++ ) a[i] = a[i] * b[i];
    fft(a, -1);
    for (int i = 0; i <= n + m; i ++ )
        printf("%d ", (int)(a[i].x / tot + 0.5));

    return 0;
}


```



