---
title: "C++ Course - Week2"
order: 3
icon: file-lines
---
## DAY8 - DAY9: Advanced C++ Learning

### 1. Specific Requirements

- Learn the basic syntax of C++ and the foundation of object-oriented programming. Choose your favorite learning materials (books/videos/tutorials). The following are for reference only. The goal is to master the basic syntax of C++ and the foundation of object-oriented programming:

(1) **Learning Plan for Students with a Good Foundation**:

   - Study the specified chapters of C++ Primer Plus:
     - Chapters 7 to 13 (must-read)
     - Chapters 14 to 17 (recommended)
     - Chapter 18 (optional)
   - Select 2-3 chapter exercises for each chapter and complete them. Pay attention to the code specification and submit the code to the git repository, or skip this part of the learning directly.

(2) **Learning Plan for Students with a General Foundation**:

   - Study based on the "C++ Those Things" tutorial. Tutorial link: [C++ Those Things](https://light-city.github.io/).
   - Study the advanced part, key practical exercises of the practical series, idioms, and the singleton pattern in the design pattern, and take notes.

(3) **Learning Goals**:

   - **Advanced C++**:
     - C++ extensions to C: Namespaces, const, volatile, references and pointers;
     - Classes: Classes and objects, default parameters of classes, encapsulation and access control permissions of classes, simple programming of classes, constructors of classes, destructors of classes, Explicit, copy constructors and assignment functions of classes, move constructors and text assignment functions, deep copy and shallow copy issues, construction and destruction of multiple objects, function overloading in C++;
     - Allocation and deallocation of objects: Dynamic allocation and deallocation of memory for classes and objects, use of static member variables and functions, processing mechanism of member methods by the C++ compiler, this, friend functions, friend classes;
     - Operator overloading: Concept of operator overloading, common operator overloading, custom smart pointer class, implementing a custom String class;
     - Class inheritance, derivation and polymorphism: Access control in inheritance, construction and destruction in inheritance, multiple inheritance, virtual inheritance, use of polymorphism, distinguishing between function overloading and overriding, virtual function table pointer, list initialization, virtual functions, use of abstract classes, virtual destructors and pure virtual destructors;
     - Function templates, class templates: Basic syntax of function templates, calling rules of function template overloading, compilation process of templates by the compiler, concept and basic syntax of class templates, class templates in inheritance, friend functions in class templates, friend function templates;
     - Exceptions, IO streams: C++ type conversion, exception throwing and catching, cin, cout, use of C++ file IO classes.

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


## DAY10 - DAY11: Data Structure Learning

### 1. Specific Requirements

- Briefly study the contents of graph theory and search in the data structure book;
- Study the related libraries of STL and Boost.

  - For STL, focus on the following contents. For details, you can refer to Chapters 9-10 of the second part of "C++ Primer", Chapter 16 of "C++ Primer Plus", Appendix F and Appendix G
    - a. Container libraries including vector, queue, stack, list, set, map, unordered_set, unordered_map
    - b. Algorithm libraries including sorting, searching, copying, modifying, deleting, and replacing
    - c. Iterators including input iterators, output iterators, forward iterators, bidirectional iterators, random access iterators
    - d. Common function Functors, such as std::less, std::greater
  - [STL Official Documentation](https://www.cppreference.com/Cpp_STL_ReferenceManual.pdf)
  - [C++ STL Tutorial](https://www.runoob.com/cplusplus/cpp-stl-tutorial.html)

 - For Boost, focus on the Graph library, which provides various graph algorithms and data structures, such as graph traversal, shortest paths, and maximum flows. The Geometry library provides various geometric algorithms and data structures, such as line segment intersection, polygon area, and point-to-line distance.
   - [Boost Graph](https://www.boost.org/doc/libs/1_75_0/libs/graph/doc/index.html)
   - [Boost Geometry](https://www.boost.org/doc/libs/1_85_0/libs/geometry/)

### 2. Learning Outcomes Presentation

- Submit the daily learning records;
- Organize the relevant learning notes of graph theory and data structure learning;
- Complete the relevant exercise questions in C++ Primer or C++ Primer Plus.

### 3. References

**Data Structure Reference Materials**:

   - Book recommendations: Data Structures - dsacpp, Wangdao Data Structures Review Book for Postgraduate Entrance Examination

**Learning Notes**: Data structure is a fundamental learning, which may be boring. However, a weak foundation will lead to instability. So, it should be taken seriously.


## DAY12 - DAY14: C++ Modern Feature Learning

### 1. Specific Requirements

(1) **Modern C++ Learning and Note Organization**:

   - Focus on mastering the new features of C++ Modern such as auto, smart pointers, move construction, lambda, etc.;
   - The two reference books have Chinese and English versions respectively. Choose one to read.

(2) **Organize a Q&A Session**:

   - Organize a Q&A session by Teacher Tao Simin and the teaching assistant. The meeting time is selected to be one evening of these days.

### 2. Learning Outcomes Presentation

- Submit the daily learning records;
- Organize the demo code and running results of the new features and the Readme into a Markdown document (no need to upload the code, just organize the code into the document).

### 3. Reference Materials

(1) **Book Recommendations**:

   - "Effective Modern C++"
   "Effective Modern C++" is a book written by Scott Meyers about modern C++ programming techniques and best practices. This book mainly explores how to effectively utilize the new features of C++11, C++14, and C++17, and how to avoid common traps and errors. Through specific examples and detailed explanations, readers can deeply understand the best practices of modern C++ and improve code quality and efficiency.
(2) **Video Tutorials**:

   - ["iEDA - Waterdrop Plan: Introduction to C++20"](https://www.bilibili.com/video/BV1Em4y1x7oe)
   Teacher Tao Simin introduces the introduction to C++20. Including: the main changes and new features of C++20, introduced in combination with grammar and examples.

(3) **More Video Learning**:

   - ["iEDA - Waterdrop Plan: Common Knowledge Points of C++"](https://www.bilibili.com/video/BV19F411y7sq)
   Teacher Tao Simin introduces the common knowledge points of C++. Including: changes in C++ versions, constructors, inheritance, type auto deduction, constexpr, operator overloading, smart pointers, lambda functions, variable parameter templates, Fold expressions, thread management, synchronous and asynchronous tasks, semaphore mechanisms, etc.