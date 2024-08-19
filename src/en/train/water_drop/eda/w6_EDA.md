---
title: "EDA Course - Week3"
order: 7
icon: file-lines
---

---
title: "EDA Learning - Week3"
order: 7
icon: file-lines
---


## DAY15 - DAY20: iEDA Engineering Code Practice

### 1. Specific Requirements

(1) **For the System Direction**:

- **Overall Goal**: Focus on data flow changes, services provided by the platform, API interfaces of each point tool of iEDA, and logical interactions, etc.
- **Tasks and Requirements**:
  - Task 1: Code Reading and Understanding: Concentrate on code reading and improve the architecture diagram and description in "Draw the architecture diagram of the iEDA project and describe it in words" on the 16th day.
  - Task 2: Follow the module division of the iEDA platform to complete the following functions:
    - Use iEDA to read the gcd design file. According to the EDA back-end design process, run the iEDA point tool processes in sequence. Refer to the output results of the existing point tools and summarize the changes of relevant parameters of each process. Design the corresponding Json data structure to show the parameter changes of each process.
- **Learning Courses**:
  - Refer to iEDA Practice: [System Engineering Practice: S1 - Data Flow Processing and Analysis](/train/practice/systems/s1.md)

(2) **For the Algorithm Direction**:

- **Overall Goal**: Conduct in-depth learning of a certain point tool of the iEDA project, including the iFP and iPL point tools for implementing floorplanning and placement, the iRT point tool for implementing routing, the iSTA point tool for implementing static timing analysis, etc. Be familiar with the data flow changes of the point tool, master the architecture implementation and algorithm implementation of the point tool, and understand the specific methods and interfaces in the point tool.
- **Tasks and Requirements**:
  - Task 1: Code Reading and Understanding: Concentrate on code reading and improve the architecture diagram and description in "Draw the architecture diagram of the iEDA project and describe it in words" on the 16th day.
  - Task 2: Code Design:
    - In this practical assignment, implement the layout legalization module and implement the Tetris algorithm for legalization.

      - **Algorithm Optimization Goal**: The sum of the vertical movement distance of all cells and the future horizontal movement distance is minimized.
    - **The main steps of the Abacus algorithm are as follows** (dynamic programming algorithm, which will move the legalized cells):

      - Cell dispersion to rows: Sort each cell according to the abscissa of the cell. Each time a cell is processed, the cell is first moved to the nearest row;
      - Intra-row legalization: Calculate the cost of the cell in this row, as well as the cost of moving to the upper and lower parts of this row, to ensure that the total movement of the cell is minimal and there is no overlap;
      - Cell placement: Place the cell in the row with the minimum cost, and update the cluster and coordinates simultaneously.
    - **The main steps of the Tetris algorithm are as follows** (greedy algorithm, which will not move the legalized cells):

      - Candidate space selection: Arrange all cells in the order of abscissa and select the leftmost blank area in each row;
      - Cell placement: For each cell, select the nearest one in the candidate space and place it. Update the occupied cell information and place one by one until all cells are placed.
- **Learning Courses**:
  - Refer to iEDA Practice: [Algorithm Design Practice: A1 - Implementation of Layout Legalization Algorithm](/train/practice/algorithms/a1.md)
  - Refer to iEDA Practice: [Algorithm Design Practice: A3 - Incremental Timing Optimization Algorithm](/train/practice/algorithms/a2.md)

(3) **References**:

- [Abacus Algorithm: P. Spindler, U. Schlichtmann, and F. M. Johannes. Abacus: fast legalization of standard cell Circuits with minimal movement. In Proceedings of ACM International Symposium on Physical Design, pp. 47–53, 2008.](http://localhost:8091/train/water_drop/water-drop-eda.html#_1-%E5%AD%A6%E4%B9%A0%E5%86%85%E5%AE%B9%E6%A6%82%E8%BF%B0)

  - **Algorithm Optimization Goal**: The sum of the vertical movement distance of all cells and the future horizontal movement distance is minimized.
  - **The main steps of the Abacus algorithm are as follows** (dynamic programming algorithm, which will move the legalized cells):

    - Cell dispersion to rows: Sort each cell according to the abscissa of the cell. Each time a cell is processed, the cell is first moved to the nearest row;
    - Intra-row legalization: Calculate the cost of the cell in this row, as well as the cost of moving to the upper and lower parts of this row, to ensure that the total movement of the cell is minimal and there is no overlap;
    - Cell placement: Place the cell in the row with the minimum cost, and update the cluster and coordinates simultaneously.
- [Tetris Algorithm: Method and system for high speed detailed placement of cells within an integrated circuit design; Dwight Hill; US09273809; 2002.04.09.](http://localhost:8091/train/water_drop/water-drop-eda.html#_1-%E5%AD%A6%E4%B9%A0%E5%86%85%E5%AE%B9%E6%A6%82%E8%BF%B0)

  - **The main steps of the Tetris algorithm are as follows** (greedy algorithm, which will not move the legalized cells):

    - Candidate space selection: Arrange all cells in the order of abscissa and select the leftmost blank area in each row;
    - Cell placement: For each cell, select the nearest one in the candidate space and place it. Update the occupied cell information and place one by one until all cells are placed.


### 2. Learning Outcomes Presentation

- Implement the code design in accordance with the coding specification and achieve the corresponding functions as required. Submit a PR to the code repository.
- Output the improved iEDA architecture diagram and its textual description.


### 3. Reference Materials

(1) **Materials**:

- [iEDA User Manual](/tools/ieda-platform/guide.md)
- [Open-Source Chip Design EDA Platform from Netlist to GDS of iEDA](https://gitee.com/oscc-project/iEDA/blob/master/README.md)
- "Paper of Abacus.pdf", "Patent of Tetris.pdf" [Link](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt)
"Paper of Abacus.pdf" introduces a new method called "Abacus" for legalizing the layout of standard cell circuits with minimal movement. By sorting cells by position and legalizing them one by one, this method uses dynamic programming when moving cells to reduce the overall movement.
"Patent of Tetris.pdf" introduces a method and system for high-speed detailed placement of cells within an integrated circuit design. By sorting and placing cells, it improves the placement efficiency and achieves a higher-performance integrated circuit design.

(2) **Videos**:

- [iEDA - Project Introduction: EDA Platform, Artificial Intelligence and Talent Training](https://www.bilibili.com/video/BV1Bu4y1B7KJ)

(3) **More detailed course introduction documents**: iEDA supports course practice
Learning Note: This part of the learning is very close to the project. If you encounter major problems, you can consult Brother Chen Shijian from the layout group.


## DAY21 - DAY22: Learning and Summary

### 1. Specific Requirements

(1) Complete the learning content:

- Set up two days of buffer time. During this period, students can complete the unfinished content due to reasons and supplement the unfinished tasks. For all the PRs in the above tasks, after being checked and approved by the teaching assistant, you can apply for the defense.
- If all tasks have been completed, students can carefully organize and review the learned content.

(2) Output the defense PPT as required, requirements:
   - **Personal Introduction**: Summarize in one or two sentences. Teachers and teaching assistants have already known about each student in the previous Q&A sessions/weekly meetings.
   - **C++ Internship Summary** 5min:
     - Describe the relevant content of C++ and C++ Modern that has been mastered, and show it in the form of a list outline, similar to listing the technology stack in a job resume. (1min)
     - Describe the A* algorithm major assignment, similar to giving an academic report. You can refer to the reports of the algorithms of the students in the second phase of the iEDA Tutorial. The PPT should at least include: data structure design, input and output description, main algorithm idea, summary of experimental results, and the new features of C++ Modern used. (4min)
   - **EDA Internship Summary** 8min:
     - PPT presentation, show some of the learned content / note organization presentation / learning situation of iEDA-related assignments. (3min)
     - Open the iEDA engineering code through VSCode on the spot, and explain the understanding of the EDA back-end process in combination with the code of the assignment. (5min)
   - **Interested Content** 2min:
     - The content of the EDA module that you are interested in, free play. You can start from the algorithm process / paper / your own reasons / points of interest, etc. (2min)

- **Teachers and teaching assistants ask questions and summarize the deficiencies**.

(3) Note:
   - After listening to the C++ internship summary, the main responsible teachers and teaching assistants in the team will comment on each person's C++ learning situation during the presentation, or comment after all the presentations are completed.
   - Each person has about 15 minutes for presentation and 10-12 minutes for questions.


### 2. Learning Outcomes Presentation

Output the Water-Drop defense PPT.


### 3. Reference Materials

- **Materials**: [Water-Drop Plan - Defense PPT Template.pptx](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
  - **Videos**:
  The following are the defense videos of the previous students for learning:
    - [iEDA - Water-Drop Plan: Learning Outcomes Defense Summary and Presentation Exchange (Wang Rui)](https://www.bilibili.com/video/BV1y34y1T7GV)
    - [iEDA - Water-Drop Plan: Learning Outcomes Defense Summary and Presentation Exchange (Guo Fan)](https://www.bilibili.com/video/BV18w411D7mj)
    - [iEDA - Water-Drop Plan: Learning Outcomes Defense Summary and Presentation Exchange (Wu Zhendong)](https://www.bilibili.com/video/BV1Mu4y1y7JL)


## DAY23: Water-Drop Defense

- Please make an appointment for a time period for the defense in advance. Select the time period:
  1. 10:00 - 11:30
  2. 14:30 - 16:30
  3. 19:30 - 21:30