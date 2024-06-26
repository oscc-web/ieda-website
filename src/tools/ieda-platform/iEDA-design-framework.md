---
title: "iEDA软件框架"
order: 5
---

- [iEDA代码仓库结构](https://docs.qq.com/mind/DQWNQeElqTWN6bVZU?mode=mind)


##  iEDA设计结构

### iEDA框架

- 强调基础设施的构建，支持更广泛的设计需求和EDA研发，支持从 RTL 到 GDSII 的全流程设计；
- 提升EDA工具各个阶段的质量和性能，实现工具执行过程的数据分析可视化；
- 构建 AI驱动EDA 平台，方便第三方训练解决EDA任务的AI模型，并将AI 模型引入到EDA平台中；
- 支持更多芯片设计，构建数据库系统，并产生足够多的带有标签的数据；
- 加入EDA 平台对云原生的支持，提供算力，支持更多用户设计芯片和研发EDA技术。

<center><img src="/res/images/project/intro-1.png" alt="6" style="zoom:40%;"/></center>

### iEDA架构

- iEDA主要围绕开源EDA工具、智能化的芯片设计方法、开源EDA系统平台、开源EDA基准测试集等内容开展研究，打造四维一体的AI+EDA技术生态体系（问题、数据、平台、算力），发展开源开放的芯片设计解决方案，提升芯片设计效率，改善芯片设计质量，数量级降低芯片设计门槛，吸引和促进芯片领域的创新创业，培养芯片专业人才，推动芯片产业多样化发展。
- iEDA架构主要包括分析，应用程序，数据库，评估，界面，操作，平台，求解器，实用程序和第三方，可以访问我们的 gitee 和 github 开源链接以查看详细信息：https://gitee.com/oscc-project/iEDA

<center><img src="/res/images/project/intro-2.png" alt="6" style="zoom:70%;"/></center>

### iEDA基础底座

* 目标：基础底座—数据模型—关键算法—EDA功能，四层抽象。
* 内容：文件系统、解析器、数据库、辅助库、评估器、优化器、管理器、GUI界面等用户交互模块。

<center><img src="/res/images/project/intro-3.png" alt="6" style="zoom:50%;"/></center>


<center><img src="/res/images/project/intro-4.png" alt="6" style="zoom:60%;"/></center>

### iEDA平台演进

- EDA作为芯片设计的工具，被誉为半导体产业“皇冠上的明珠”。随着人工智能的不断发展，传统EDA工具的发展难以跟上日益增长的芯片设计规模和市场需求。业界一直在探索更加有效的方案,来提升芯片设计的效率,降低设计门槛。在EDA工具中采用人工智能技术，成为了如今EDA技术创新的关键。
- 在传统EDA设计工具中，芯片架构探索、设计、验证、布局布线等工作的人力占比巨大。为大幅削减人力物力、缩减设计周期，EDA设计工具逐渐朝着智能化趋势发展。利用深度学习、强化学习等人工智能手段和方法，吸收过去的设计经验和数据，形成智能化EDA设计的全新方法论。智能化EDA设计能够有效减少人力投入、缩短设计周期、提高芯片设计及生产的性能和精度。如今，芯片动辄数以亿计的晶体管数量和复杂程度都预示着，系统复杂度将拉开芯片设计产业的新时代。而人工智能将会在其中扮演重要角色，以机器学习为代表的人工智能技术手段，将改变芯片设计和验证的方式。
- 平台主要研究方向：
  - AI+EDA，探索使用AI方法实现智能化芯片设计；
  - 构建EDA数据集，辅助EDA技术研究和AI模型训练；
  - 构建开源EDA平台，打通开源的芯片设计流程；
  - 使用开源EDA工具，构建开源开放的芯片设计解决方案。

<center><img src="/res/images/project/intro-5.png" alt="6" style="zoom:100%;"/></center>

