---
title: "C++ Course - Week3"
order: 4
icon: file-lines
---
## DAY15: Lecture Sharing

### 1. Specific Requirements

(1) **Lecture Sharing**:

- 14:30 - 15:30 Teacher Tao Simin shares the keynote speech. Meanwhile, everyone can share some improvement suggestions for the Water-Drop Plan, the parts interested in C++ programming, the mastery level of C++ concurrent programming/containers, etc.;
- 15:30 - 16:30 Teacher Huang Zengrong shares the keynote speech. Meanwhile, everyone can consult some existing problems they have with the iEDA project, the directions they are interested in, their understanding and views on open-source EDA, etc.;
- If there is no schedule for the speech, please watch the online video of the reference materials by yourself.

(2) **Practical Learning**

- Download and review the Gitee repository of the iEDA project to understand its code structure, etc.

### 2. Learning Outcomes Presentation

- Submit the daily learning records;

### 3. Reference Materials

- Papers:

  - [Best Paper of ISEDA 2023](https://arxiv.org/pdf/2308.01857)
  - [iEDA: ASPDAC-24](https://ieeexplore.ieee.org/abstract/document/10473983)
  - [iPD: ASPDAC-24](https://ieeexplore.ieee.org/abstract/document/10473932)
- Repositories:

  - [iEDA Project Repository Gitee](https://gitee.com/oscc-project/iEDA)
  - [iEDA Project Repository GitHub](https://github.com/OSCC-Project/iEDA)
- Video Links:

  - [Introduction to iEDA - Water-Drop Plan](https://www.bilibili.com/video/BV1TM4y1H7WT)
    Teacher Huang Zengrong introduces iEDA: An introduction to the open-source chip design EDA platform from netlist to layout. Including: overview of the architecture design of the iEDA project, interpretation of the project package directory, compilation and interpretation of the core code/configuration script files, introduction of the module design and business logic interaction of the iEDA project by examples from the software engineering thought, etc.
  - [Introduction to the iEDA Project](https://www.bilibili.com/video/BV1yF411Q7D8)
    Teacher Li Xingquan introduces the iEDA project, an introduction to the open-source EDA project. Including: the goals, tasks, time planning and expected results of the open-source EDA project, the composition of the open-source EDA toolchain, introduction and existing problems of the existing open-source EDA tools, the architecture of iEDA, the system platform, the idea of the open-source community, etc.
  - [2023 Open Source Chip Technology Ecology Forum](https://www.bilibili.com/video/BV1Th4y1S7Xj)
    Teacher Huang Zengrong introduces the experience of iEDA supporting a 28nm tapeout. Including: introduction of floorplanning iFP/iPDN, netlist optimization iNO, placement iPL, clock tree synthesis iCTS, routing iRT, design rule checking iDRC, introduction of the goals, process scripts, report analysis of each point tool, etc.

## DAY16: First Experience with iEDA

### 1. Specific Requirements

(1) Read the EDA project code to understand its engineering architecture, interfaces, configuration files, simple interaction logic, etc.;
(2) Try to draw the iEDA you have learned and understood, and sort it out in the form of learning notes, mind maps, flowcharts, etc.

### 2. Learning Outcomes Presentation

- Make the architecture diagram of the iEDA project and describe it with text;
- Summarize the main contents of each directory of the iEDA project;
- Submit PR for the above two contents to the designated repository iTraining/EDA;
- Submit the daily learning records;

### 3. Reference Materials

- [iEDA User Manual](https://gitee.com/oscc-project/iEDA/blob/master/docs/user_guide/iEDA_user_guide.md)
  Describes the iEDA system deployment diagram, the preparation of the environment before use, the tool process and the GUI operation manual.
- [Introduction to the iEDA Open Source Chip Design Platform](https://gitee.com/oscc-project/iEDA/blob/master/README.md)
  It is mainly divided into two parts: iEDA and iEDA user guidance, and describes the source of the iEDA name, the main structure, tools and other contents.

## DAY17 - DAY21: C++ Major Assignment

Given the following map, black indicates obstacles that cannot be passed through. It is required to implement an obstacle avoidance algorithm to find the optimal path from the red starting point to the green ending point.

<!--![](/res/images/train/water_drop/image.png) -->

<center> <img src="/res/images/train/water_drop/image.png" alt="6" style="zoom:55%;" /></center> 
<center> Two-Dimensional Grid Path Search</center>

Requirements:
(1) Model the map in the figure, abstract it into a class, and encapsulate the data;
(2) Consider the implementation of the path-finding algorithm, disassemble the problem, and also require the abstract interface class for the algorithm implementation;
(3) Use the given C++ project template, write CMakeLists.txt according to the [template](https://github.com/filipdutescu/modern-cpp-template.git), Google Test unit tests, and use DoxyGen annotations.

### 1. Specific Requirements

(1) **Implement the A* Algorithm**:

- Model the map, abstract it into a class and encapsulate the data;
- Implement the path-finding algorithm, disassemble the problem, and the algorithm implementation requires an abstract interface class;
- Use the given C++ project template, write CMakeLists.txt according to [template](https://github.com/filipdutescu/modern-cpp-template.git), Google Test unit tests, and use DoxyGen annotations;
- **Extension Requirements**
  - Implement the A* path-finding algorithm with weighted obstacle nodes;
  - Use a visual UI interface to display the map and the path-finding results;

(2) **Output the PPT of the C++ Internship Summary**:

- Describe the content of C++ and C++ Modern that has been mastered, show it in the form of a list outline, similar to listing the technology stack; (1 min)
- Describe the A* algorithm major assignment, similar to giving an academic report. You can refer to the reports of the algorithms of the students in the second phase of the iEDA Tutorial. The PPT should at least include: data structure design, input and output description, main algorithm idea, summary of experimental results, and the new features of C++ Modern used; (4 min)

### 2. Learning Outcomes Presentation

- Submit the daily learning records;
- The experimental report should at least include the textual description of data structure design, input description, output description, and the main algorithm idea, test cases and the running results of the cases (such as designing path examples between two points, dead-end situations, and the corresponding optimal path cost consumption in different path situations); Submit the code and the experimental report (as readme.md) together in a Pull Request;
- Prepare and submit the PPT of the training summary.

### 3. Reference Materials

- [Question.docx](https://gitee.com/oscc-project/iTraining/tree/master/C++/CPP-Program-Assignment/Assignment_3)
- [Water-Drop Plan - Defense PPT Template.pptx](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
- Reference video for implementing the A* path-finding algorithm with weighted obstacle nodes: [A* Algorithm Experiment - Weighted Version](https://www.bilibili.com/video/BV1544y1w7PR)
- [A* Idea Sharing](https://gitee.com/oscc-project/iTraining/blob/master/C++/ppt/AStar%E9%A1%B9%E7%9B%AE%E6%80%9D%E8%B7%AF%E5%88%86%E4%BA%AB_%E6%9B%BE%E6%99%BA%E5%9C%A3.pptx)

::: note
**Learning Notes**: At this point, the systematic learning of C++ comes to an end. If students who have completed it in advance with spare capacity, it might be beneficial to simply consider how to achieve the shortest path in three points.
:::
