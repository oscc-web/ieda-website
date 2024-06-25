---
title: "AI学习-Week3(选)"
order: 13
---

## DAY15-17：动手搭建深度学习神经网络

### 一、具体要求

1. 学习搭建卷积神经网络CNN的构成、卷积层、池化层、全连接层、softmax层
2. 学习搭建循环神经网络RNN、长短时神经网络
3. 学习搭建生成对抗网络GAN
4. 学习搭建图神经网络GNN、图上卷积的定义
5. 学习搭建Transformer，了解注意力机制、掩码张量、编码器解码器
6. 学习搭建强化学习

### 二、学习成果展示

1. 选择2-3个神经网络模型在公开数据集进行练习
[openml](https://www.openml.org)
[kaggle](https://www.kaggle.com/datasets)
[UC Irvine Machine Learning](https://archive.ics.uci.edu/)
[Google Dataset](https://datasetsearch.research.google.com/)

### 三、参考资料

1. 深度学习《Deep Learning》 Yoshua Bengio & Ian GoodFellow
2. 上海交大《动手学机器学习》
3. [图神经网络](http://arxiv.org/pdf/1609.02907)
4. [Transformer《Attention is all your need》](https://www.bilibili.com/video/BV16U4y1g7mk/?spm_id_from=333.999.0.0&vd_source=31642488dcc2db7a9779c05c640148c2)
5. 强化学习《Deep Reinforcement Learning Fundamentals、Research and Applications》
6. [Kaggle](https://www.kaggle.com)
7. [Hugging face](https://huggingface.co/)
8. [各种神经网络介绍](https://www.asimovinstitute.org/neural-network-zoo/)
9. [学习TensorFlow搭建的神经网络](https://playground.tensorflow.org/)

## DAY18-21：AI EDA实训
### 一、具体要求

### 二、实训题目
1. 基于在布局阶段产生的数据，搭建一个基于线长预测时延的网络。
   - 题目参考iEDA实践：[M1-布局线长预测时延](/train/practice/models/m1.md)
2. 利用时延计算训练数据集，搭建一个预测时序路径延时的网络。
   - 题目参考iEDA实践：[M1-时序矫正](/train/practice/models/m2.md)
3. 利用电容提取训练数据集，搭建一个计算3D电容的神经网络。
   - 题目参考iEDA实践：[M3-布局线长预测时延](/train/practice/models/m3.md)
   
### 三、学习成果展示

1. 输出训练模型，并撰写PPT介绍设计思路
2. 两个AI EDA任务可以二选一

### 四、参考资料
1. [OSCC数据集仓库iBM](https://gitee.com/oscc-project/i-bm)
2. 相关论文 
 - 《PCT-Cap: Point Cloud Transformer for Accurate 3D Capacitance Extraction》 
 - 《Accurate_Timing_Path_Delay_Learning_Using_Feature_Enhancer_with_Effective_Capacitance》