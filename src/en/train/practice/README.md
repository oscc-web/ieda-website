---
title: "iEDA Practice"
index: false
icon: book
---
(Based on the open-source EDA platform - iEDA, multiple practical training tasks are set, allowing students to have a deeper understanding of EDA tools and algorithms)

## **1. Practice Objectives**

In order to provide a teaching practice platform for EDA courses or training, and taking into account students' abilities and practical applications, this course intends to decompose EDA-related practical tasks into multiple subtasks. This can balance the difficulty and achievability of the practical course, allowing students to gradually improve their skills and complete tasks within the course instead of facing a highly difficult overall project at the beginning. For example, students can be familiarized with basic algorithms and data flows first, and then the use of EDA tools and design methods can be gradually introduced.

The EDA physical design process mainly includes floorplanning, placement, routing, clock tree synthesis, timing and power analysis, etc. The reasonable logical interaction design between each process can improve the reliability and stability of the system and better meet the needs of users. Therefore, we need to pay special attention to the information flow and interaction methods between each module to ensure the normal operation of the system. Based on the iEDA platform, this project focuses on the data flow changes, provided interface services, and logical interactions between the EDA back-end processes. Students can understand the basic process of EDA back-end interaction through this project. At the same time, taking the placement problem as an example, the placement problem is one of the core issues in EDA physical design. Through placement legalization, the specific positions of integrated circuit cells in the chip can be adjusted, and the results of the global placement can be optimized on the basis of no overlap between cells.

At the same time, to help students understand the background and objectives of the practical tasks, this course provides some actual practical content analysis to allow students to understand the relevant applications of EDA, enabling students to gradually master EDA skills and apply them in actual situations. At the same time, providing evaluation rankings and other content can also increase the interest of the course and improve students' interest and participation in the EDA course.

## **2. Course Plan**

The project is generally divided into three parts: engineering practice, algorithm practice, and model practice. The main research contents are as follows:

**(1) For engineering practice**: Follow the module division of the iEDA platform, read the design files, and execute the EDA physical design process in sequence. Refer to the statistical reports output by the point tools implemented in the existing platform, and it is necessary to design the corresponding Json data structure to show the changes of the relevant parameters of each physical design process.

**(2) For algorithm practice**: In the placement process, it can be divided into three stages: global placement, legalization, and detailed placement. Global placement places the units in appropriate positions, ignoring unit overlap. Legalization places the units on rows and eliminates the overlap between units. Detailed placement locally adjusts the units to make the design goal more optimized. Based on the interface design and logical interaction in the existing legalization Abacus method of the iEDA platform, implement another legalization method - Tetris on the platform.

**(3) For model practice**: The courses of the model type mainly focus on establishing and using models to describe and solve problems. Course practices usually cover statistics, machine learning, deep learning, etc. Students will learn how to build AI EDA models using data and algorithms, extract useful information from the data, and perform tasks such as prediction and classification.

# **3. Expected Learning Outcomes**

Through the practice of engineering, algorithm, and model parts, students can learn how to use EDA process tools, techniques, and methods based on the iEDA platform for data flow processing, storage, and application. At the same time, through designing basic data structures and algorithm processes, optimizing algorithms, and other contents, they can discuss, analyze, and solve the problems existing in the EDA physical design layout legalization process, which is of great help in exercising the basic practical ability of the EDA profession and C++ coding ability. 