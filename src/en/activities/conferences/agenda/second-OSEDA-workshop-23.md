---
title: "Agenda of the 2nd OSEDA Symposium in 2023"
order: 5
---

The Open Source EDA Forum is dedicated to researching and developing EDA technologies, promoting the use of open source EDA and other open source chip development tools in the RISC-V community, facilitating communication between domestic and foreign open source EDA developers and RISC-V chip designers, and promoting the growth and development of the open source EDA technology community. It aims to provide a platform for communication and interaction for domestic and foreign open source EDA developers and users, attract more developers to join the open source EDA community, and contribute code to open source projects.

**Forum Time and Location**:

Forum Time: 09:00 - 12:00, August 24, 2023

Forum Location: Pearl Hall, 3rd Floor, Shangri-La Hotel, Haidian District, Beijing

Tencent Meeting: 455 - 601 - 023

Bilibili Live Address: [https://live.bilibili.com/30593897](https://live.bilibili.com/30593897)

**Forum Contacts**:

Li Xingquan 13515004501 Email: [lixq01@pcl.ac.cn](mailto:lixq01@pcl.ac.cn)

Ye Xinyu 19805180398 Email: [yxyu613@163.com](mailto:yxyu613@163.com)

**Forum Agenda**:
<!-- 
<img src="/res/images/activities/conference/second-OSEDA/fig1.png" alt="6" style="zoom:70%;" /> -->

| Report Time | Report Title                                                                 | Report Guest                              | Host                                  |
| ----------- | ----------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------- |
| Morning Agenda |                                                                               |                                          |                                       |
| 9:00 - 9:05  | Opening Introduction                                                          | Li Xingquan, Beijing Open Source Chip Institute / Peng Cheng Laboratory | Li Xingquan, Beijing Open Source Chip Institute / Peng Cheng Laboratory |
| 9:05 - 9:25  | Machine Learning Assisted SPICE Circuit Simulation Solution Technology         | Jin Zhou, China University of Petroleum    |                                       |
| 9:25 - 9:45  | Graph Neural Network Enabled High-Level Synthesis Power Modeling and Design Optimization | Lin Zhe, Sun Yat-sen University           |                                       |
| 9:45 - 10:05 | Machine Learning Based Microarchitecture Power Modeling and Design Space Exploration | Zhai Jianwang, Beijing University of Posts and Telecommunications  |                                       |
| 10:05 - 10:25 | Preliminary Exploration of Chip Design and Verification Based on AIGC              | Lai Xiaozheng, South China University of Technology |                                       |
| 10:25 - 10:45 | Tea Break                                                                     |                                          |                                       |
| 10:45 - 11:00 | AI Framework for EDA and IC Design                                             | Huang Zhipeng, Peng Cheng Laboratory      | Li Xingquan, Beijing Open Source Chip Institute / Peng Cheng Laboratory |
| 11:00 - 11:15 | Practice of AI-Assisted Chip Automatic Generation                               | Chang Kaiyan, Li Cangyuan, Institute of Computing Technology, Chinese Academy of Sciences |                                       |
| 11:15 - 11:30 | CircuitNet: An Open-Source Dataset for Machine Learning Tasks in Chip Design  | Jiang Xun, Chai Zhuomin, Peking University |                                       |
| 11:30 - 11:45 | Implementation and Latest Progress of High-Performance Multithreaded ZVC Hardware Compiler Based on MLIR | Xu Buyun, Zhaosong Technology (Wuhan) Co., Ltd. |                                       |
| 11:45 - 12:00 | A modified Newton-based                                                       |                                          |                                       |

**Report and Guest Introduction**:

**Report 1: Machine Learning Assisted SPICE Circuit Simulation Solution Technology**

**Report Abstract**

One of the key challenges in the integrated circuit design process is the repeated execution of computationally expensive SPICE circuit simulations when it comes to highly complex chip testing or verification. The pseudo-transient analysis method has been proven to be one of the most promising SPICE simulation solution methods. However, the computational efficiency of this method is greatly limited by the inserted pseudo-device parameters and the simulation time step control. This report will introduce a Bayesian optimization and deep reinforcement learning accelerated pseudo-transient analysis method, which can significantly accelerate the simulation and improve the convergence performance without introducing additional errors. This method is equipped with advanced machine learning techniques, such as deep learning, Gaussian process, Bayesian optimization, non-stationary monotonic transformation, variational inference through reparameterization, deep reinforcement learning, common sample pool, and priority sampling. In addition, this report will also introduce a random forest based circuit matrix sparse LU decomposition acceleration technology, which can effectively accelerate the circuit matrix solution speed through the optimization of the density-aware adaptive matrix multiplication algorithm.

**Speaker Profile**

Jin Zhou, an associate professor at China University of Petroleum (Beijing), was selected into the Beijing Association for Science and Technology Youth Talent Support Project and the school's young top talent. He received his bachelor's degree from the Department of Computer Science and Technology, Nanjing University in 2010, and his master's and doctoral degrees from Waseda University, Japan in 2012 and 2015, respectively. He was a postdoctoral fellow and GCOE researcher at the Research Center of Waseda University. His research direction is integrated circuit design automation (EDA), especially focusing on AI and hardware accelerated VLSI circuit simulation and verification technology, and the software and hardware co-design for in-memory computing. He has published more than 40 academic papers in important international conferences and journals such as DAC, SC, PPoPP, TCAD, TODAES, TCAS-II, ASP-DAC, etc. He was nominated for the best paper at SC'23, received the honorary paper at ISEDA'23, and the IEEJ Kyushu Branch Director Award of the Institute of Electrical Engineers of Japan. His research results have been applied in domestic EDA commercial simulation software and significantly accelerated the verification of actual circuits in the industry.

**Report 2: Graph Neural Network Enabled High-Level Synthesis Power Modeling and Design Optimization**

**Report Abstract**

In recent years, semiconductor manufacturing technology has approached the physical limit, and Moore's Law has gradually failed. The dark silicon effect problem has become prominent. These challenges have made the performance improvement of chips tend to moderate. To continuously improve the quality of results (QoR) of hardware accelerators, new technical means need to be studied. This report focuses on FPGA accelerator design and presents the following contents: 1. Using a customized heterogeneous graph neural network (GNN) to achieve power modeling for high-level synthesis (HLS), and effectively reducing the time overhead required for accelerator energy efficiency prediction through early, fast, and accurate power prediction; 2. Large-scale multi-objective design space exploration based on HLS, and significantly improving the accelerator development efficiency of HLS design methods by automatically searching for Pareto optimal solutions through algorithms.

**Speaker Profile**

Lin Zhe, an assistant professor in the School of Integrated Circuits, Sun Yat-sen University, and a recipient of the Shenzhen Overseas High-level Talent (Category C) title. Lin Zhe obtained his Ph.D. from the Hong Kong University of Science and Technology and served as an assistant researcher (2020.03 - 2022.12) and an associate researcher (2023.01 - 2023.03) at Peng Cheng Laboratory successively. His main research directions include electronic design automation (EDA), reconfigurable computing, heterogeneous computing, and software and hardware co-design. In recent years, he has accumulated more than 10 high-level academic papers and was nominated for the best paper awards at international conferences DATE and FCCM as the first author. He participated in many scientific research projects in the field of integrated circuit design and automation, including national-level scientific research projects of Peng Cheng Laboratory, projects funded by the University Grants Committee of Hong Kong, and industry-university cooperation projects of the Hong Kong University of Science and Technology.

**Report 3: Machine Learning Based Microarchitecture Power Modeling and Design Space Exploration**

**Report Abstract**

With the development of integrated circuits to the post-Moore era, the dividends brought by the evolution of semiconductor processes have become increasingly limited. Modern processor architectures are complex and the design space is huge, and power consumption and other issues have become increasingly prominent. How to construct an accurate and robust power consumption model at a lower cost and conduct automatic exploration and optimization in the huge design space has become a core issue of concern in the industry. This report starts with the microarchitecture design methods and tools of the processor, uses machine learning technology to solve the problems of microarchitecture power modeling and design space exploration, and proposes a series of accurate and efficient modeling and exploration methods, and evaluates them on the RISC-V processor.

**Speaker Profile**

Zhai Jianwang, a specially-appointed associate researcher at Beijing University of Posts and Telecommunications, has participated in key projects of the National Natural Science Foundation of China, key research and development plans and other projects. His main research direction is electronic design automation (EDA), including microarchitecture power modeling, design space exploration, and back-end physical design. He has published many papers in conferences and journals such as TCAD, TCAS-II, ICCAD, ASP-DAC. He won the best paper award at ICCAD 2021 and was nominated for the best paper award at ASP-DAC 2023.

**Report 4: Preliminary Exploration of Chip Design and Verification Based on AIGC**

**Report Abstract**

The advent of the AIGC era has led to the gradual introduction of LLM-assisted design functions in the process of chip design and verification. Users guide the LLM to complete the hardware description through prompts (prompt), and at the same time, a DSA intermediate layer is required to describe the ISA architecture. The overall efficiency of the chip from design to verification is improved through the "design - verification" iteration.

**Speaker Profile**

Lai Xiaozheng, an associate professor at the School of Computer Science and Engineering, South China University of Technology, a member of CCF, and a course cooperation lecturer for Huawei's "Intelligent Base". The author of the open source graphical EDA project Digiblock. Research direction: (1) Chip agile design, open source EDA toolchain; (2) Computer architecture research based on RISC-V architecture; (3) Embedded systems, Internet of Things and RFID technology; He presided over 1 major project of the National 863 Program, 1 National Natural Science Foundation project, 3 Guangdong Provincial Science and Technology Planning Projects, 1 Guangdong Provincial Natural Science Foundation project, and 2 industry-university-research chip design and verification projects. In 2020, he guided students to win the second prize in the finals of the National College Students' Integrated Circuit Innovation and Entrepreneurship Competition.

**Report 5: AI Framework for EDA and IC Design**

**Report Abstract**

With the development of Moore's Law, integrated circuits (IC) and electronic design automation (EDA) designs face more challenges. In addition, artificial intelligence technology (AI) has shown great application potential in various industries. In the direction of IC and EDA, many excellent works have also shown the possibility of AI + EDA. AI can efficiently process and analyze design data, provide predictions and optimization suggestions, thereby improving design efficiency and quality. However, at present, the interaction between AI models and EDA tools is still in the initial stage. In order to give full play to the effectiveness of AI in EDA, it is very necessary to design an AI + EDA basic framework, which is helpful to quickly explore effective methods of AI-assisted chip design and feed back to the tools, and at the same time allow more people to participate in the technological breakthrough of AI + EDA.

**Speaker Profile**

Huang Zhipeng is currently a postdoctoral fellow at Peng Cheng Laboratory. His main research direction is very-large-scale integrated circuit physical design. He has published papers in major conferences and journals in the EDA field such as DAC, ICCAD, and TCAD, and won the first place in ICCAD@CAD Contest in 2018 and 2022.

**Report 6: Practice of AI-Assisted Chip Automatic Generation**

**Report Abstract**

Large language models like ChatGPT have shown unprecedented intelligence and also shown their ability to assist hardware engineers in natural language interaction. To evaluate the potential of large language models to assist the hardware design process, this study attempts to present an automated design environment that uses large language models to generate hardware logic designs from natural language specifications. To achieve a more accessible and efficient chip development process, we propose a scalable four-stage design based on large language models without the need for retraining or fine-tuning. First, prompts are generated for the large language model, which then generates the initial Verilog program. Second, the output manager corrects and optimizes these programs and then collects them into the final design space. Finally, the output manager will search this space and select the best design that meets the target metrics. Our experiments reveal whether large language models can generate correct and complete hardware logic designs for certain design specifications. The results show that this method improves programmability and controllability compared to previous works and individual large language models, and shows a wider design optimization space.

**Speaker Profile**

Chang Kaiyan, graduated from the University of Electronic Science and Technology of China with a bachelor's degree and is currently pursuing a doctoral degree at the Institute of Computing Technology, Chinese Academy of Sciences, under the supervision of Associate Researcher Wang Ying and Researcher Li Huawei. His main research fields are AI-assisted computer automatic design, compilers, and programming languages.

**Report 7: CircuitNet: An Open-Source Dataset for Machine Learning Tasks in Chip Design**

**Report Abstract**

AI for EDA is a booming direction to apply AI techniques in chip design, including cross-stage modeling, design space search, design optimization, and so on. However, the lack of large public datasets in practice limits the scope of related researches and raises a high bar for new researchers. Therefore, in this talk, we propose an open-source dataset, CircuitNet, for MLCAD applications. CircuitNet contains over 20K samples from various open-source CPU, GPU, and AI accelerator designs with commercial 28nm & 14nm PDKs. The dataset supports various tasks like timing, power, congestion, and IR-drop prediction. We also extract various features to support both image-based learning (e.g., ANN and CNN) and graph learning (e.g., GNN). We believe this dataset can open up new opportunities for machine learning in CAD research and beyond.

**Speaker Profile**

Xun Jiang (Jiang Xun) is currently pursuing a Ph.D. degree in Integrated Circuit Engineering at Peking University, Beijing, China. His current research interests include physical design and AI for EDA. He is one of the main contributors to the open-source dataset, CircuitNet.

**Report 8: Implementation and Latest Progress of High-Performance Multithreaded ZVC Hardware Compiler Based on MLIR**

**Report Abstract**

CIRCT (Circuit Intermediate Representation Compiler Toolchain) is an open source project based on MLIR under LLVM. It aims to extend the classic and mature development methodology of the software world - MLIR/LLVM Project to the field of hardware design tools, providing a reusable, scalable, and efficient compiler infrastructure for EDA tools for designing hardware (including but not limited to computer chips). Zhaosong has developed the ZVC compiler (ZhaoSong Verilog Compiler) on the CIRCT framework - a high-performance hardware compiler that supports multithreading. Focusing on the simulation design based on Cycle Based, it attempts to complete the entire process from translating the Core IR (core intermediate representation) of CIRCT to LLVM IR (LLVM intermediate representation). The focus of this report will be on the core design idea surrounding ZVC, the compilation process design on the CIRCT framework, and introduce how to build a hardware compiler using the CIRCT framework through algorithms and examples. By analyzing the No-more-inline design principle, it describes the design details of generating various corresponding logics around the preservation and transfer requirements of the circuit state; the multithreading part will explain and analyze the MLIR algorithm of LLVM IR used for node splitting on the graph; during this period, some of the latest upstream progress and subsequent exciting plans will be interspersed, sharing some new progress of Zhaosong in promoting CIRCT to support the compilation of SystemVerilog and the integration with Slang.

**Speaker Profile**

Xu Buyun graduated from Taiyuan University of Technology with a major in Information Security in 2021 and joined Zhaosong Technology (Wuhan) Co., Ltd. in 2022. Currently, he holds the position of the head of the hardware compiler group and is engaged in the development of hardware compiler-related work related to hardware code compilation, simulation, and debugging, communicating and coordinating with the upstream of CIRCT to complete the development and open source of various functions of ZVC.

**Report 9: A modified Newton-based matrix splitting iteration method for mixed-size cell circuit legalization**

**Report Abstract**

The mixed-size cell circuit legalization problem can be transformed into the generalized absolute value equations (GAVE). In this work, by simultaneously splitting both coefficient matrices in the differential and non-differential parts of the GAVE, a modified Newton-based matrix splitting (MNMS) iteration method is proposed. The MNMS iteration method not only covers the well-known generalized Newton iteration method as well as the recent proposed modified Newton-based iteration method and the Newton-based matrix splitting iteration method for solving the GAVE, but also results in a series of relaxation versions that are very flexible in real applications. Convergence properties of the MNMS iteration method are studied in detail when the coefficient matrices are general matrices, positive definite matrices and H+-matrices. Finally, three numerical examples are presented to show the feasibility and effectiveness of the proposed MNMS iteration method.

**Speaker Profile**

Chencan Zhou, graduated from Dalian Maritime University with a master's degree. She is currently a teacher at the School of Transportation and Civil Engineering of Nantong University. She is also a doctoral student majoring in Information and Communication Engineering at Nantong University. Her research area is EDA technology for integrated circuits. She has published 5 EDA-related research papers, including 3 SCI and 1 EI. 