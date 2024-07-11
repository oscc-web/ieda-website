---
title: "AI学习-Week3(选)"
order: 13
---

## DAY15-17：动手搭建深度学习神经网络

### 一、具体要求

1. **学习搭建卷积神经网络CNN的构成、卷积层、池化层、全连接层、softmax层**
   - **任务分解**：
     - 阅读《Deep Learning》相关章节，理解CNN的基本原理。
     - 使用TensorFlow或PyTorch实现一个简单的CNN模型。

2. **学习搭建循环神经网络RNN、长短时神经网络**
   - **任务分解**：
     - 阅读《Deep Learning》相关章节，理解RNN和LSTM的基本原理。
     - 使用TensorFlow或PyTorch实现一个简单的RNN和LSTM模型。

3. **学习搭建生成对抗网络GAN**
   - **任务分解**：
     - 阅读《Deep Learning》相关章节，理解GAN的基本原理。
     - 使用TensorFlow或PyTorch实现一个简单的GAN模型。

4. **学习搭建图神经网络GNN、图上卷积的定义**
   - **任务分解**：
     - 阅读[图神经网络](http://arxiv.org/pdf/1609.02907)论文，理解GNN的基本原理。
     - 使用TensorFlow或PyTorch实现一个简单的GNN模型。

5. **学习搭建Transformer，了解注意力机制、掩码张量、编码器解码器**
   - **任务分解**：
     - 观看[Transformer《Attention is all your need》](https://www.bilibili.com/video/BV16U4y1g7mk/?spm_id_from=333.999.0.0&vd_source=31642488dcc2db7a9779c05c640148c2)视频，理解Transformer的基本原理。
     - 使用TensorFlow或PyTorch实现一个简单的Transformer模型。

6. **学习搭建强化学习**
   - **任务分解**：
     - 阅读《Deep Reinforcement Learning Fundamentals、Research and Applications》相关章节，理解强化学习的基本原理。
     - 使用TensorFlow或PyTorch实现一个简单的强化学习模型。

### 二、学习成果展示

   **选择2-3个神经网络模型在公开数据集进行练习**

   - **任务分解**：
     - 选择合适的模型模型进行实践。
     - 在[Kaggle](https://www.kaggle.com/datasets)、[UC Irvine Machine Learning](https://archive.ics.uci.edu/)和[Google Dataset](https://datasetsearch.research.google.com/)上选择数据集。
     - 撰写实验报告，包括模型架构、训练过程、结果分析等。

### 三、参考资料

- **书籍推荐**：

   1. 深度学习《Deep Learning》 Yoshua Bengio & Ian GoodFellow
   2. 上海交大《动手学机器学习》
   3. [图神经网络](http://arxiv.org/pdf/1609.02907)
   4. [Transformer《Attention is all your need》](https://www.bilibili.com/video/BV16U4y1g7mk/?spm_id_from=333.999.0.0&vd_source=31642488dcc2db7a9779c05c640148c2)
   5. 强化学习《Deep Reinforcement Learning Fundamentals、Research and Applications》
   6. [Kaggle](https://www.kaggle.com)
   7. [Hugging face](https://huggingface.co/)
   8. [各种神经网络介绍](https://www.asimovinstitute.org/neural-network-zoo/)
   9. [学习TensorFlow搭建的神经网络](https://playground.tensorflow.org/)
   10. [微软机器学习入门](https://github.com/microsoft/AI-For-Beginners.git)
   11. Aurélien Géron 《Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems, 3rd Edition》


## DAY18-21：AI EDA实训
### 一、具体要求

1. **目标**：能够跑通训练流程，输出训练模型。
2.  **参考步骤**：
  - 收集和预处理数据。
  - 设计神经网络模型架构。
  - 配置训练参数和优化器。
  - 训练模型并进行评估。
  - 调整模型参数以优化性能。

### 二、实训题目
1. 基于在布局阶段产生的数据，搭建一个基于线长预测时延的网络。
   - 题目参考iEDA实践：[M1-布局线长预测时延](/train/practice/models/m1.md)
2. 利用时延计算训练数据集，搭建一个预测时序路径延时的网络。
   - 题目参考iEDA实践：[M2-时序矫正](/train/practice/models/m2.md)
3. 利用电容提取训练数据集，搭建一个计算3D电容的神经网络。
   - 题目参考iEDA实践：[M3-3D电容提取](/train/practice/models/m3.md)
   
### 三、学习成果展示

1. 输出训练模型，并撰写PPT介绍设计思路
2. AI EDA任务可以选一个

### 四、参考资料
1. [OSCC数据集仓库iBM](https://gitee.com/oscc-project/i-bm)
2. 相关论文 
 - 《PCT-Cap: Point Cloud Transformer for Accurate 3D Capacitance Extraction》 
 - 《Accurate_Timing_Path_Delay_Learning_Using_Feature_Enhancer_with_Effective_Capacitance》