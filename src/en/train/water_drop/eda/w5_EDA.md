---
title: "EDA Course - Week2"
order: 6
icon: file-lines
---

## DAY8 - DAY10: Overall Learning of EDA Process

### 1. Specific Requirements

(1) **Material Reading**:
   - "EDA Design Process - v1.0.pptx"
   - "Overview of Digital IC Back-End Design.pptx"
   - "Teaching Experience Sharing of Digital Integrated Circuit Design Automation Methods - v2.0(1).pptx"
   - "Back-End Design Process - Yishengyixin.pdf"

(2) **Learning Contents**
   - **Understand the back-end design process**: Understand the entire back-end design process from RTL to GDSII layout
   - **Technology library knowledge**: Understand the content and importance of the technology library, including Tech files, PDK, DRC rules, etc.
   - **Synthesis**: Learn the basic concepts, processes and tools of synthesis, as well as considerations for design for testability (DFT)
   - **Physical design**: Learn the basic concepts, processes and algorithms of physical design layout and routing
   - **Parameter extraction and timing analysis**: Learn the methods of parameter extraction and advanced knowledge of timing analysis
   - **Algorithm foundation**: Learn basic algorithms related to graph theory, combinatorial optimization problems, heuristic algorithms, etc.

### 2. [Material Links](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt):
   - "EDA Design Process - v1.0.pptx"
   - "Overview of Digital IC Back-End Design.pptx"
   - "Teaching Experience Sharing of Digital Integrated Circuit Design Automation Methods - v2.0(1).pptx"
   - "Back-End Design Process - Yishengyixin.pdf"


## DAY11 - DAY12: Summary of EDA Foundation Learning

### 1. Specific Requirements

**Describe the following must-knows in the form of questions and answers**:
   - **Placement**:
     - Briefly describe a placement algorithm you have learned, including: input, output, data structure design, main idea of the algorithm, time complexity, etc.;
   - **Routing**:
     - Briefly describe a routing algorithm you have learned, including: input, output, data structure design, main idea of the algorithm, time complexity, etc.;
   - **Static timing analysis**:
     - Briefly describe the definitions of cell library, interconnect parasitics, cell delay (NLDM table), wire network delay (Elmore calculation), crosstalk noise, timing check (Setup/Hold), timing path definition, and timing constraint commands;
   - **EDA performance**:
     - How to solve the performance problems in EDA software?
   - **EDA back-end**:
     - Briefly describe the process of developing EDA back-end software. What are the main tasks in each stage?
   - **EDA tools**:
     - What are the common EDA simulation tools and debug tools? What are their advantages and disadvantages?

### 2. Learning Outcomes Presentation
   - Organize the answers to the must-knows into a document and paste the document link in the daily record.

### 3. Reference Materials

- Video: ["iEDA-Tutorials"](https://space.bilibili.com/1189298533/channel/series)
- Book recommendations: Physical Design of Digital Integrated Circuits, Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence

## DAY13 - DAY14: iEDA Flow Process Practice

### 1. Specific Requirements

This part is divided into two directions, including system and algorithm. At the same time, this part is also the key focus of the Water-Drop Plan practice. Please pay attention to it:

(1) **Overall goal**
- Be familiar with the running results of the point tools in the iEDA back-end flow process, the main indicators and features concerned, understand and know how to modify the configuration in the configuration file of the iEDA point tools
  - Skillfully use the open-source iEDA and tools to run the back-end process of chip design;
  - Be familiar with the command scripts and parameters of open-source tools in each step: synthesis floorplanning (iFP), placement (iPL), clock tree synthesis (iCTS), routing (iRT), parameter extraction (iRCX), timing optimization (iTO), etc.;
  - Run the entire process from RTL -> Netlist -> FP_Def -> PL_Def -> CTS_Def -> RT_Def -> GDS. Interpret the key parameters and key steps in the log based on the log content, and describe the entire back-end design process.

(2) **Task requirements**
- For the system direction:
   - Skillfully run the entire iEDA process and understand the indicators included in each point tool process.
- For the algorithm direction:
   - Be able to run the entire iEDA process, master the specific configuration and parameters in the specific point tool of interest, and understand the mutual calling of tcl files of point tools.
- Specific tasks are as follows:
   - Task 1: Run the open-source tool back-end in iEDA, the design is gcd, and the process is sky130;
   - Task 2: Change the design, change gcd to uart, and the process is sky130;
   - Task 3: Change the process library, the design is gcd, and the process is nangate45;
   - Task 4: Refer to the log and report, and record the values of the features in Tasks 1, 2, and 3 (according to "Water-Drop Plan - iEDA demo learning" in [Reference Materials]);

(3) The design and foundary of the relevant tasks can be viewed in the internal network disk data of the Water-Drop Plan (Water-Drop Plan/EDA/Practice)
- PR submission requirements: Upload to the code repository: iTraining/EDA/codes/2023-07/your_name. Do not upload the specific content of the log and report. Just:
  - A readme.md file, listing: ① foundary + design + [server number] + absolute path ② The link of the Tencent document of "Water-Drop Plan - iEDA demo learning";
  - Screenshots of the content of the Tencent document of "Water-Drop Plan - iEDA demo learning". Multiple screenshots can be submitted according to different Flow processes;

### 2. Learning Outcomes Presentation

- Output the feature result file record. According to the reference document, one column is the result of one Flow. Tasks 1, 2, and 3 each have one column of result records, totaling 3 columns of results.

### 3. Reference Materials

(1) **Materials**:
   - iFlow: [User Manual](/tools/auto-scripts/iflow.md), [Code Repository](https://gitee.com/oscc-project/iFlow)
   - iEDA-Script: [User Manual](/tools/ieda-platform/guide.md)
   - "Reference for Features to be Focused on in Each Point Tool of iEDA" Water-Drop Plan - iEDA demo learning
   - [Open-Source Chip Design EDA Platform from Netlist to GDS of iEDA](https://gitee.com/oscc-project/iEDA/blob/master/README.md)

(2) **Video Links**:
   - [iEDA - Project Introduction: Overview of the Design and Use of iEDA Flow Scripts](https://www.bilibili.com/video/BV1xx4y1X7Wq)
   - [2023 Open Source Chip Technology Ecology Forum: Construction Practice of iEDA](https://www.bilibili.com/video/BV1mp4y1P7C7)
   - [2023 Open Source Chip Technology Ecology Forum: Introduction of iEDA Platform](https://www.bilibili.com/video/BV1T94y147pX)
   - [2023 Open Source Chip Technology Ecology Forum: Experience of iEDA Supporting a 28nm Tapeout](https://www.bilibili.com/video/BV1Th4y1S7Xj)

