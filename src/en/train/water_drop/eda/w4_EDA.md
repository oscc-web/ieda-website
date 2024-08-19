---
title: "EDA Course - Week1"
order: 5
icon: file-lines
---
## DAY1: Introduction to EDA Basics

**Learning Notes**: Next, we are about to formally start learning EDA. Understand the EDA process, what are the purposes and reference indicators of each link. For the project introduction, you can first browse the [iEDA Bilibili video account](https://space.bilibili.com/1189298533). If you have any questions or ideas during the learning process, you can also contact and ask the teachers and students of the relevant projects of iEDA.

**To prevent forgetting after reading**, when reading books, it is recommended to sort out the main EDA process before reading and construct a mind map; then supplement the details during the reading process.

### 1. Specific Requirements

**Learning Content**

Study Chapter 1 and Chapter 2 of "Physical Design of Digital Integrated Circuits" and Chapter 1 of "Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence".
1. Understand the basic process of chip design, the front-end (requirement formulation, architecture design, functional design), and the back-end (logic synthesis, physical design, sign-off analysis, physical verification)
2. Understand the [VLSI process](/train/eda/chip-circuit/Part_1-chip_basic/1_2_VLSI_flow.md), tools, and sub-steps of physical design.
3. [Standard format files for chip design](/train/eda/chip-circuit/Part_2-chip_files/README.md), including Verilog, LEF/DEF, Liberty, SPEF, SDC, etc.

    
### 2. Learning Outcomes Presentation

Sort out the reading notes of the books and paste the note link into the daily record.

### 3. Reference Materials

- **Book recommendations**: "Physical Design of VLSI Circuits", "Physical Design of Digital Integrated Circuits".
- **[Image materials](https://gitee.com/oscc-project/iTraining/tree/master/EDA/ppt)**: "EDA Backend Data Flow Diagram_Guo Fan.png", "EDA Backend Flowchart_Wu Zhendong.png", "EDA Backend Process Mind Map_Wang Rui.png".

---

## DAY2: Introduction to Logic Synthesis

### 1. Specific Requirements

**Learning Content**

   1. Logic compilation, understand the process of compiling the hardware programming language Verilog to the internal logic diagram GTech
      - "Logic Synthesis in a Nutshell" (Chapter 1)
      - "Synthesis and Optimization of Digital Circuits" DT1, DT2
   2. Logic representation, understand the representation methods of logic including BDD, AIG, MIG, etc.
      - [Logic Completeness Set](https://en.wikipedia.org/wiki/Functional_completeness)
      - "Logic Synthesis in a Nutshell" (Chapter 2)
      - "Synthesis and Optimization of Digital Circuits" DT3, DT4
   3. Logic optimization, understand basic concepts and methods such as Boolean optimization, logical equivalence, complex logic decomposition, state machine optimization, etc.
      - "Logic Synthesis in a Nutshell" (Chapter 3)  
      - "Synthesis and Optimization of Digital Circuits" DT5, DT6
      - Paper DAG-Aware AIG Rewriting A Fresh Look at Combinational Logic Synthesis (Optional)
      - Paper Delay optimization using SOP balancing (Optional)
   4. Technology mapping, the process of mapping the logic diagram to the technology gate circuit, as well as concepts such as Cut and SuperGate in the technology mapping, area, timing and power optimization methods
      - "Electronic Design Automation for IC Implementation, Circuit Design", Chapter 2 Logic Synthesis, Chapter 3 Power Analysis and  Optimization from Circuit  to Register-Transfer Levels
      - "Logic Synthesis in a Nutshell" (Chapter 4)  
      - Paper Cut ranking and pruning: enabling a general and efficient FPGA mapping solution (Optional)
      - Paper Combinational and sequential mapping with priority cuts (Optional)

### 2. Learning Outcomes Presentation

   - Sort out the reading notes of the books and share the note link in the daily record.

### 3. Reference Materials

   - **Book recommendations**:
    1. "Automation of Integrated Circuit Design"
    2. "Electronic Design Automation for IC Implementation, Circuit Design"
    3. Logic Synthesis in a Nutshell, J. H. Jiang, S. Devadas
    4. Synthesis and Optimization of Digital Circuits, DeMicheli

   - **Video Links**:
     - [iEDA-Tutorial - Phase 4: Introduction to iEDA-iMAP Tool](https://www.bilibili.com/video/BV1TC4y1d7Jh)
     - [iEDA-Tutorial - Phase 4: iEDA-AiMAP Technology Mapping Algorithm](https://www.bilibili.com/video/BV1kj411479e)
     - [iEDA-Tutorial - Phase 4: iEDA-Parallel Logic Rewriting Algorithm](https://www.bilibili.com/video/BV1F94y187se)
     - [iEDA-Tutorial - Phase 4: Introduction to iEDA-iATPG Tool](https://www.bilibili.com/video/BV1cu4y147L7)

   - **Tools**:
      1. iMap: https://gitee.com/oscc-project/iMAP
      2. berkeley-abc: https://github.com/berkeley-abc/abc
      3. yosys: https://github.com/YosysHQ/yosys

---

## DAY3: Introduction to FloorPlan and Placement

### 1. Specific Requirements

**Learning Content**

  1. Basic knowledge of floorplan, including partitioning, IO planning, power network planning, macrocell placement, etc. Specifically, you can study
    - "Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence" Chapter 3
    - "Handbook of Algorithms For Physical Design Automation": Part III (Optional)
    - "Electronic Design Automation": Chaper 10
  2. Basic knowledge of placement, including the concept of hypergraph, wire length model, density model, optimization methods, etc. You can study the books
    - "Handbook of Algorithms For Physical Design Automation" Part Ⅳ
    - "Electronic Design Automation" Chaper 11
    - "Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence" Chapter 4 Global and Detailed Placement.
  3. Basics of optimization/combinatorial optimization, you can study the book "Combinatorial optimization. Theory and algorithms" (Optional)

### 2. Learning Outcomes Presentation
   - Sort out the reading notes of the books and share the note link in the daily record.

### 3. Reference Materials
   - **Book recommendations**: "Physical Design of VLSI Circuits", "Physical Design of Digital Integrated Circuits".
   - **Video Links**:
     - [iEDA-Tutorial - Phase 2: iEDA-iFP and iPDN Tool Architecture, Characteristics and Use](https://www.bilibili.com/video/BV1W14y1B7n)
     - [iEDA-Tutorial - Phase 2: iEDA-iPL Problem Introduction, Architecture, Use and Planning](https://www.bilibili.com/video/BV1GN411h7b3/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
     - [iEDA-Tutorial - Phase 2: iEDA-iPL Key Technologies](https://www.bilibili.com/video/BV1CX4y1j7eb)

---

## DAY4: Introduction to Clock Tree Synthesis

### 1. Specific Requirements
**Learning Content**

  1. Basics of clock tree synthesis, including the composition of the clock tree (clock source, clock buffer, clock inverter), clock tree topology (Tree, Mesh, etc.), common algorithms for clock tree synthesis (Zero Skew, Useful Skew, etc.)
   "Electronic Design Automation: Synthesis, Verification, and Test  " CHAPTER 13 Synthesis of clock and power/ground networks
    [BIU Lecture](https://www.eng.biu.ac.il/temanad/files/2017/02/Lecture-8-CTS.pdf)
    Modern CTS Summary Paper: Performance Analysis on Skew Optimized Clock Tree Synthesis
  2. Design principles of CTS, Ultimate Guide: [Clock Tree Synthesis](https://anysilicon.com/clock-tree-synthesis/)
  3. Commercial tools (Innovus) [Design Flow](https://vlsitalks.com/physical-design/cts/) (Optional)
  4. DME, "A computer aided design software module for clock tree synthesis in very large scale integration design" (Optional)
  5. Timing calculation (Optional)
    Linear Delay: Timing characterization of clock buffers for clock tree synthesis
    PERI: Closed-form expressions for extending step delay and slew metrics to ramp inputs for RC trees
    Bakoglu Metric: Circuits, interconnections, and packaging for VLSI


### 2. Learning Outcomes Presentation

   - Sort out the reading notes of the books and share the note link in the daily record.

### 3. Reference Materials

   - **Book recommendations**: Chapter 4 of "Physical Design of Digital Integrated Circuits" for Clock Tree Synthesis, Chapter 7 of "Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence" for Special Routing
   - **Video Links**: [iEDA-Tutorial - Phase 5: iEDA-iCTS Problems, Research Contents and Plans](https://www.bilibili.com/video/BV1rT4y1W7JF/?spm_id_from=333.999.0.0)

---

## DAY5: Introduction to Routing

### 1. Specific Requirements
**Learning Content**

  1. Learn the basic concepts of routing, including Routing Track (Column), Gcell, Steiner Tree, common DRC rules (Short, Space, Min Area), etc.
  2. Learn the basic process of routing, including Global Routing, Detail Routing (including Track Assignment, Pin Access, Rip-Up and Reroute, etc.)
  3. Learn the basic algorithms of routing, maze algorithm, pattern routing, AStar algorithm.
  
  You can study the following chapters:
  - Chapters 5 and 6 of "Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence"
  - Chapter 5 of "Physical Design of Digital Integrated Circuits", Appendix 7 Introduction to LEF Document, Appendix 9 Introduction to DEF Document

### 2. Learning Outcomes Presentation

   - Sort out the reading notes of the books and share the note link in the daily record.

### 3. Reference Materials

   - **Book recommendations**: "Physical Design of Digital Integrated Circuits", "Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence"
   - **Video Links**: [iEDA-Tutorial - Phase 5: iEDA-iRT Overall, GR Problem, Research Contents and Plans](https://www.bilibili.com/video/BV1C94y1g75d/?spm_id_from=333.999.0.0)
   - **Video Links**: [iEDA-Tutorial - Phase 5: iEDA-iRT Detailed Routing Problem, Research Contents and Plans](https://www.bilibili.com/video/BV1yG411q7EX/?spm_id_from=333.999.0.0)
   - **Video Links**: [iEDA-Tutorial - Phase 5: iEDA-iDRC Problem, Research Contents and Plans](https://www.bilibili.com/video/BV1s94y1g7nT/?spm_id_from=333.999.0.0)

---

## DAY6 - DAY7: Static Timing Analysis and Optimization

### 1. Specific Requirements
**Learning Content**

  1. Basic knowledge of digital circuits, including MOSFET, combinational logic circuits, sequential logic circuits. You can study Chapters 1-5 of the book "Digital Circuits and Logic Design".
  2. Verilog language learning, including Module, Port, Netlist. You can study Chapters 1-6 of the book "Verilog HDL Digital Design and Synthesis".
  3. Basic concepts of timing, including Delay, Transition Time (Slew), Skew, Clock Domain, Cell Library, Slack, Timing Arc, Timing Path. You can study Chapters 1-2 of the book "Static Timing Analysis for  Nanometer Designs".
  4. Delay calculation (Delay Calculation), including Cell Delay, SPEF, Interconnect Delay calculation methods. You can study Chapters 3-5 of the book "Static Timing Analysis for  Nanometer Designs". In addition, you can read supplementary books and papers on the calculation methods of model order reduction such as AWE and Arnodi (Optional).
  5. Timing constraints (SDC), including create_clock, set_input_delay, set_output_delay, set_max_fanout, set_max_transition, etc. You can study Chapter 7 of the book "Static Timing Analysis for  Nanometer Designs".
  6. Timing propagation and analysis (STA), including Setup/Hold, Multicycle Path, Recovery/Removal. You can study Chapter 8 of the book "Static Timing Analysis for  Nanometer Designs".
  7. Timing analysis and optimization methods (Gate Sizing, Buffering, etc.), you can study Chapter 8 of the book "Physical Design of VLSI Circuits: From Graph Partitioning to Timing Convergence": Have a preliminary understanding of timing convergence and timing optimization techniques


### 2. Learning Outcomes Presentation

   - Sort out the reading notes of the books and share the note link in the daily record.

### 3. Reference Materials

   - **Book recommendations**: "Physical Design of Digital Integrated Circuits", "MK_Static Timing Analysis For Nanometer Designs", "Static Timing Analysis and Modeling of Integrated Circuits", "Electronic Design Automation for IC Implementation, Circuit Design, and Process Technology" Chapter 10: Gate sizing survey
   - **Video Links**:
     - [iEDA-Tutorial - Phase 1: Overall Introduction to iSTA and iPW](https://www.bilibili.com/video/BV1sp4y137bc/?spm_id_from=333.788.recommend_more_video.1)
     - [iEDA-Tutorial - Phase 1: iSTA Tool Architecture, Characteristics, API and Use](https://www.bilibili.com/video/BV1a14y1B7uz)
     - [iEDA-Tutorial - Phase 1: iSTA Key Technology Research](https://www.bilibili.com/video/BV16X4y177xr)
     - [iEDA-Tutorial - Phase 2: iEDA-iTO Tool Architecture, Characteristics and Key Technologies](https://www.bilibili.com/video/BV1LX4y177oQ/?spm_id_from=333.999.0.0&vd_source=db6d06160a4c6ef1c3194042b1b9bbe2)
     - [2023 Open Source Chip Technology Ecology Forum: Digital Front-End Timing Evaluation Based on Yosys and iSTA](https://www.bilibili.com/video/BV1TF411k7kF)
  - **Supplementary Reading Materials**:
    1. Neil H. E. Weste, David Money Harris "CMOS VLSI Design A Circuits and Systems Perspective (4th Edition) "
    2. Yu Wenjian "Analysis and Synthesis of VLSI"
    3. Liu Feng "Static Timing Analysis and Modeling of Integrated Circuits"
    4. Eli Chiprout, Michel S. Nakhla  "Asymptotic Waveform Evaluation And Moment Matching for Interconnect Analysis "
    5. Sheldon Tan, Lei He "Advanced Model Order Reduction Techniques In VLSI Design"
    6. Paper "PRIMA: Passive Reduced-Order  Interconnect Macromodeling Algorithm"
    7. Paper "TICER Realizable Reduction of Extracted RC Circuits"
    8. Manual "prime time user guide"