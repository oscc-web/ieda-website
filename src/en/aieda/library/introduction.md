---
title: "Introduction"
order: 1
---


## Software Architecture

AiEDA follows a modular architecture built on top of the iEDA infrastructure:

```
AiEDA Architecture
├── AI Layer (aieda.ai)
│   ├── Net Wirelength Prediction (TabNet)
│   ├── Design Space Exploration (DSE)
│   └── ML Model Training & Inference
├── Analysis Layer (aieda.analysis)
│   ├── Design-level Analysis
│   ├── Net Analysis
│   ├── Path Analysis
│   └── Patch Analysis
├── EDA Integration Layer (aieda.eda)
│   ├── iEDA Tool Wrappers
│   ├── Flow Management
│   └── Data Extraction
├── Data Management Layer (aieda.data)
│   ├── Database Structures
│   ├── Vector Generation
│   └── Feature Engineering
├── Workspace Management (aieda.workspace)
├── Utilities (aieda.utility)
└── GUI Interface (aieda.gui)
```



## Core Modules

### 1. AI Module (`aieda.ai`)
- **Net Wirelength Prediction**: TabNet-based models for predicting wire lengths
- **Design Space Exploration (DSE)**: Automated parameter optimization
- **Model Training**: Support for various ML frameworks and algorithms

### 2. Analysis Module (`aieda.analysis`)
- **Design Analysis**: Cell type, core usage, pin distribution analysis
- **Net Analysis**: Wire distribution and metrics correlation
- **Path Analysis**: Delay and stage analysis
- **Patch Analysis**: Map analysis, wire density, and feature correlation

### 3. EDA Integration (`aieda.eda`)
- **iEDA Tool Integration**: Wrappers for 11+ EDA tools
  - Floorplanning (iFP)
  - Placement (iPL)
  - Routing (iRT)
  - Clock Tree Synthesis (iCTS)
  - Timing Optimization (iTO)
  - Static Timing Analysis (iSTA)
  - Power Analysis (iPA)
  - Design Rule Checking (iDRC)
  - And more...

### 4. Data Management (`aieda.data`)
- **Database Structures**: Comprehensive data models for EDA features
- **Vector Generation**: Automated feature extraction and vectorization
- **Parameters**: EDA tool parameter management

### 5. Flows (`aieda.flows`)
- **iEDA Flow Management**: Automated execution of EDA tool chains
- **Data Generation**: Automated dataset creation for ML training
- **Flow Configuration**: Flexible flow definition and execution

### 6. Workspace (`aieda.workspace`)
- **Project Management**: Workspace creation and management
- **File Organization**: Structured project directory management

### 7. Utilities (`aieda.utility`)
- **Logging**: Comprehensive logging system
- **JSON Parsing**: Configuration file management
- **Permission Management**: File and folder permission handling

### 8. GUI (`aieda.gui`)
- **Layout Visualization**: Graphical interface for design visualization

## Data Flow

The AiEDA data flow follows this pattern:

1. **Design Input** → Workspace creation with design files
2. **EDA Processing** → iEDA tools process the design through various stages
3. **Feature Extraction** → Data extraction and vectorization from EDA results
4. **AI Analysis** → ML models analyze extracted features
5. **Optimization** → AI-guided parameter optimization and design improvements
6. **Validation** → Results validation and iteration

<center><img src="/res/images/aieda/flow.png" alt="6" style="zoom:90%;"/></center>
<center>Data Flow</center>


```
Design Files → Workspace → iEDA Tools → Feature Extraction → AI Models → Optimization → Results
     ↑                                                                            ↓
     └─────────────────── Feedback Loop ──────────────────────────────────────────┘
```


## Key Features

- **AI-Native Design**: Built from ground up with AI/ML integration
- **Comprehensive EDA Integration**: Support for 11+ EDA tools via iEDA
- **Automated Workflows**: End-to-end automation from design to optimization
- **Extensible Architecture**: Modular design for easy extension and customization
- **Production Ready**: Proven with 4+ successful tape-outs
- **Open Source**: Fully open-source with active community support