---
title: "C++ Course - Week1 "
order: 2
icon: file-lines
---
## DAY1: Preparations for the Internship

::: info Learning Notes
Before starting the study, it might be a good idea to spend half an hour browsing the reference materials for Week3 day15 to get a brief understanding of EDA. This will make the learning direction and overall goals clearer.
Here are some learning experiences for your reference:
   ```
      a. Record key concepts: Record the key concepts and principles of each topic during the learning process. This helps you build a knowledge framework.
      b. Reflect on the learning process: Think about the challenges and solutions encountered during the learning process, and how these experiences help you better understand the materials.
      c. Share practical examples: Provide actual code examples or application scenarios, which can help understand abstract concepts more intuitively.
      d. Discuss learning strategies: Share the strategies you use during the learning process, such as chunked learning, spaced repetition, etc.
      e. Encourage communication: Encourage others to share their learning experiences and create a mutually supportive learning atmosphere.
      f. Use clear language: Use concise and clear language when sharing to ensure that people with different backgrounds can understand.
      g. Utilize multiple media: You can share your learning experiences through various methods such as blogs, videos, presentations, or social media. Learning forms include but are not limited to summary notes of knowledge points, mind maps, flowcharts, etc.
   ```
:::

### 1. Specific Requirements

(1) **Programming Environment Setup**:

   - Install VS Code and related plugins (Clang, Google Test, CMake, DoxyGen, Remote-SSH);
     - **Remote-SSH**
      Learning requirement: Understand the SSH protocol and the concept of remote servers, and connect to the server via SSH.
      Function: Allows VS Code to connect to a remote server via SSH for code editing, running, and debugging.
   - Read the relevant PPTs to understand the tool functions;

(2) **Gitee Project Download**:

   - Download the following Gitee projects to the local and simply explore the organization and directory structure division:
     - [Waterdrop Learning Part](https://gitee.com/oscc-project/iTraining)
     - [iEDA Part](https://gitee.com/oscc-project/iEDA)


### 2. Learning Outcomes Presentation

- Submit the daily learning records;
- Organize the notes on the problems and solutions encountered during the programming environment setup;

### 3. Reference Links

(1) **Reference Materials for Programming Environment Setup**:

   - Materials: [Introduction to C++ Tools.pptx](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)
   - Materials: [Programming Environment.pptx](https://gitee.com/oscc-project/iTraining/tree/master/C++/ppt)

## DAY2: Plugin Learning

### 1. Specific Requirements

(1) **Learn Plugin Basics**:
   - Include the basic syntax of Clang, Google Test, CMake, DoxyGen, and the CMakeList.txt file
        - **Clang**
      Learning requirement: Understand the basics of the C/C++ language and be familiar with the use of the Clang compiler.
      Function: Provides syntax highlighting, intelligent perception, code navigation, refactoring tools, etc. for the C/C++ language.
     - **Google Test**
      Learning requirement: Be familiar with the concept of C++ unit testing and understand the use of the Google Test framework.
      Function: Helps developers write and run unit tests to ensure the quality and reliability of the code.
     - **CMake**
      Learning requirement: Understand the basic syntax and concept of the CMake build system.
      Function: Defines the build process of the project through the CMakeLists.txt file and supports cross-platform compilation and building.
     - **DoxyGen**
      Learning requirement: Understand the use of documentation generation tools and be familiar with the configuration options of DoxyGen.
      Function: Automatically extracts comments from the source code to generate documentation and supports multiple output formats.
   - Write sample code to familiarize yourself with the use of these plugins
   - Cmake project file configuration in VS code
      - **Learning Requirements**
         - Learn the basic syntax and working principle of CMake and know how to write the CMakeLists.txt file.
         - Be familiar with the basic use of VSCode, including the installation and management of extensions.
         - Learn how to configure and use the debugger in VSCode.
      - **Functions**
         - Project building
         - Configure Cmake build types and other compilation options
         - Implement code navigation and quick reference lookup
         - Code analysis to detect compilation issues early
         - Configure startup debugging

### 2. Learning Outcomes Form

- Output the learning notes of plugin usage, and record the problems encountered and the solutions.

### 3. Reference Materials

(1) **[VScode Cmake Project Configuration File Related Materials](https://gitee.com/oscc-project/iTraining/tree/master/C++/tools)**:

   - "Vscode Cmake Project Configuration File.md":
   Demonstrates how to write launch.json and task.json in VSCode through examples.
   - "Development Environment tools.pdf":
   Mainly describes the introduction and configuration of VSCode.
   - "Glog Usage.pptx":
   Describes the usage documentation of Glog, Glog download and startup, Glog hierarchical printing, Glog conditional printing, Glog debugging mode, Glog Check macro, and advanced features of Glog.
   - "Modern+CMake Documentation.pdf":
   Starting from the installation, using CMake to generate the project, and setting the command-line options of CMake, it describes the basic knowledge, basic concepts, and basic control syntax of CMake, and explains how to build the project, run other programs, and other operations.

(2) **Video Tutorials**:

   - ["iEDA - Waterdrop Plan: CMake Syntax and Engineering Practice"](https://www.bilibili.com/video/BV1xp4y1V7qu):
   Teacher Tao Simin introduces the installation of cmake, related command options, programming norms and syntax of the CMakeLists.txt file, and engineering practice, etc.

**Learning Notes**: For students who have no contact with programming, this part may be confusing and bewildering. Don't worry. Just have a simple understanding and leave an impression. After having a certain programming foundation, come back and review when encountering difficulties. There will be practical gains~


## DAY3 - DAY4: Tool Learning

### 1. Specific Requirements

(1) **Git Learning**:

   - Include fork project, create branch, git add, git commit, git push, git pull, submit Pull Request and other operations.
   **Learning Examples**:
      - **Fork Project**
         a. Visit the project page on GitHub/Gitee.
         b. Click the "Fork" button in the upper right corner to copy the project to your GitHub account.
      - **Create Branch**
         ```bash
         git clone <repository URL>  # Clone the repository to the local
         cd <repository name>         # Enter the repository directory
         git checkout -b <new branch name>  # Create and switch to the new branch
         ```
      - **Add Changes to the Staging Area**
         ```bash
         git add <file name>  # Add a single file to the staging area
         git add.          # Add all changes in the current directory to the staging area
         ```
      - **Commit Changes to the Local Repository**
         ```bash
         git commit -m "Commit message"  # Commit changes to the local repository
         ```
      - **Push Changes to the Remote Repository**
         ```bash
         git push origin <branch name>  # Push changes of the local branch to the remote repository
         ```
      - **Pull Changes from the Remote Repository**
         ``` bash
         git pull origin <remote branch name>  # Pull changes of the remote branch and merge them into the current branch
         ```
      - **Submit Pull Request**
         a. On GitHub, visit the project you forked.
         b. Click the "Pull Request" button.
         c. Select the source and target branches to be merged.
         d. Fill in the description information of the Pull Request and submit.
   - **Learning Effects to Achieve**
      - Understand the working principle of Git and the concept of distributed version control.
      - Be able to synchronize code between the local and remote repositories proficiently.
      - Master the basic branch management strategies, such as creating branches, merging branches, etc.
      - Be able to participate in the collaborative development of open source projects through Pull Request.
      - Learn to solve common merge conflicts.

(2) **Terminal Tool Installation and Use**:

   - Install and use MobaXterm / Xshell, and record the problems encountered during the installation

(3) **Linux Basics**:

   - Key learning contents include:
     - File transfer methods (cp/scp/rsync)
       How to cp or scp or rsync common lib packages from the /home/zhuangchunan directory to your own directory;
     - File permission settings (chmod)
       Distinguish clearly between 777 750 reading, writing, execution user user group other users;
     - Process monitoring (top/htop)
     - Disk space query (df -h)
     - File size viewing under the directory (du -sh)
     - File operations (kill process/ls/pwd/mkdir/tree)
     - Editor (vim/cat/tail/nohup)
     - Terminal multiplexing tool (tmux)

   Only a part of the commands are listed here. There are approximately hundreds of commonly used commands during development. Practice makes perfect. You need to consult materials and practice frequently.
(4) **Code Programming Specification Learning**
(5) **Software Design Thought Learning**

### 2. Learning Outcomes Presentation

- Submit the daily learning records;
- Organize the learning notes of Git, Linux, coding specifications, software design thoughts, etc.

### 3. Reference Materials:

(1) **MobaXterm Installation and Use**:

   - ["MobaXterm Quick Start and Advanced Usage Skills"](https://blog.csdn.net/qq_34435096/article/details/130729092)

Describes the background of using Mobaxterm, how to quickly get started, and six advanced usage methods: multi-tab sessions, SSH tunnels, session managers, macros and scripts, remote desktops and custom settings.

(2) **Linux Basic Command Learning**:

   - ["Linux Commonly Used Instructions"](https://blog.csdn.net/weixin_57023347/article/details/121194810)
   Mainly divided into basic operations of Linux use, file permission related instructions, system related instructions and network related commands.

(3) **Git Learning Reference Materials**:
   The document version describes the detailed tutorial of git usage. It can be combined with the practical video of git commands by Teacher Tao Simin (the last two videos) for learning:

   - ["Git Usage Detailed Tutorial"](https://blog.csdn.net/nanxun201314/article/details/127719569)
   - Video: ["iEDA - Waterdrop Plan: git Introduction and Command Practice"](https://www.bilibili.com/video/BV1Ch4y1C7wi)
   - Video: ["iEDA - Waterdrop Plan: git Introduction and Command Practice (2)"](https://www.bilibili.com/video/BV1v94y167kd)



(4) **Programming Specification Reference Materials**:

   Programming specifications are formulated to make the software code readable and ensure the software quality. Therefore, this document is developed. Ensure programming specifications to make your code more valuable for reference and use. Document learning can be used in combination with the video teaching of Teacher Tao Simin:

   - ["Programming Specification.docx"](https://gitee.com/oscc-project/iTraining/tree/master/C++/code-style)
   - Video: ["iEDA - Waterdrop Plan: Programming Specification Overview"](https://www.bilibili.com/video/BV1TN411h72Q)



(5) **Software Design Thought Reference Materials**:

   - Video: ["iEDA - Waterdrop Plan: How to Conduct Software Design"](https://www.bilibili.com/video/BV1GN411h7Qg)

   Teacher Tao Simin introduces how to conduct software design. Including: the essence of software, the software design process, the content that needs to be considered in software design, etc.

## DAY5 - DAY7: C++ Foundation Learning

**Learning Notes**: Next, we officially enter the C++ programming learning. Due to the different learning backgrounds, you can adjust the learning plan and method suitable for yourself according to your learning habits, specialties and basic situation. Programming is a practical skill, so writing as much code as possible is crucial. You can be guided by books or study through videos on websites such as Bilibili and MOOC. Try to solve practical problems or practice programming challenges on online platforms. The learning form of this part is not required.

### 1. Specific Requirements

- Learn the basic syntax of C++ and the basics of object-oriented programming. Choose your favorite learning materials (books/videos/tutorials). The following are for reference only. The goal is to master the basic syntax of C++ and the basics of object-oriented programming:

(1) **Learning Plan for Students with a Good Foundation**:

   - Study the specified chapters of C++ Primer Plus:
     - Chapters 7 to 13 (must-read)
     - Chapters 14 to 17 (recommended)
     - Chapter 18 (optional)
   - Select 2-3 chapter exercises for each chapter and complete them. Pay attention to the code specification and submit the code to the git repository, or skip this part of the learning directly.

(2) **Learning Plan for Students with a General Foundation**:

   - Study based on the "C++ Those Things" tutorial. Tutorial link: [C++ Those Things](https://light-city.github.io/).
   - Study the basic part, key practical exercises of the practical series, idioms, and take notes.

(3) **Learning Goals**:

   - **C++ Foundation**:
     - Programming basics: Constants and variables, number systems, operators, conditional control statements, loop control statements, arrays, strings;
     - Functions: Function concepts, string operation functions, custom functions, the use of recursion;
     - Pointers: Pointer variables, pointer word lengths, pointer assignment, function pointer parameters, pointer operation strings, const, bit logical operators, array pointers, pointer arrays, multi-dimensional array function parameters, shallow copy, deep copy;
     - Memory management: Variable scope and life cycle, memory partitions, heap allocation and deallocation, function call models, memory operation functions, macro definitions and batch processing;
     - Composite types: Structures, structure pointers, structure function parameters, declaration and use of composite types, structure nested pointers;
     - File operations: File classification, file opening and closing, file operation functions, file read and write buffers;
     - Simple data structures and algorithms: Basic concepts of linked lists, related operations of single linked lists, Big O notation, sequential storage of linear tables, linked storage of linear tables, sequential storage of queues, linked storage of queues, sequential storage of stacks, linked storage of stacks, binary trees, basic operations of binary trees, common sorting algorithms;
     - Interface encapsulation and design: The idea of encapsulation and design, the encapsulation design of functions, the design of decoupling, the three ways to define function pointers, callback functions, the idea of module implementation and business separation.

(4) **Pull Request Submission Steps**:

   - Gitee Repository Address: [C++ Codes](https://gitee.com/oscc-project/iTraining/tree/master/C++/codes)
   - Operating Steps:
     - Fork this repository;
     - Clone to the local;
     - Upload the content to iTraining/C++/codes/{year-month}/{learner's name};
     - Create a new Pull Request to the master branch;

### 2. Learning Outcomes Presentation

- Submit the daily learning records;
- Organize the C++ learning notes;
- Complete the exercises of C++ Primer Plus and submit PR;

### 3. Reference Materials

(1) **C++ Reference Materials**:

   - Book recommendations: C++ Primer Plus, Thinking in C++
   - ["C++ Those Things" Tutorial](https://light-city.github.io/)

(2) **Video Tutorials for Programming Assistant Tools**:

   - ["iEDA - Waterdrop Plan: Application of Copilot Plugin and ChatGPT Tools in Programming"](https://www.bilibili.com/video/BV1eh4y1C7Ys)
   Student Li Weiguo introduces: The application of Copilot plugin and ChatGPT tools in programming. Including: basic statement implementation, algorithm completion, new features, debugging and precautions, etc.

::: note
**Learning Notes**: The reasonable use of programming tools can greatly improve our programming efficiency, but don't rely too much on them. It can also be an interesting thing to explore and break through by yourself when encountering problems.
:::