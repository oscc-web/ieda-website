---
title: "8.3 Layout Problems and Modeling"
order: 3
---
## **Introduction to the Basics of VLSI Global Placement**

VLSI stands for Very Large Scale Integration. The process of completing a VLSI design is highly complex and involves the transformation of various data formats. The process of transforming the logical netlist into a manufacturable geometric layout is called physical design. The physical design process can be divided into floorplanning, placement, clock tree synthesis, routing, etc. Among them, placement is particularly crucial as it determines the positions of circuit cells and subsequently affects the subsequent stages.

The goal of VLSI automatic placement is to determine the positions of all circuit cells within the chip layout to minimize certain indicators such as total wire length while satisfying design constraints such as no overlap between cells. Since placement is an NP-hard problem, it is often impossible to solve it in one step. Therefore, it is often decomposed into three stages for solution: global placement, legalization, and detailed placement. In the global placement stage, the non-overlap of cells is regarded as a soft constraint. The approximate positions of the circuit cells are determined based on minimizing the wire length and other objectives, and the placement result allows cell overlap. Legalization eliminates cell overlap while maintaining the results of the global placement as much as possible and aligns the upper and lower boundaries of the cells to rows and the left boundaries to the grid edges. Detailed placement further fine-tunes the results of legalization, such as locally swapping cell positions, to seek better indicator results. Since legalization and detailed placement rely on the solution of global placement, global placement is of utmost importance and is also the most critical and time-consuming link in the placement process.

This article focuses on some indicators concerned in global placement, summarizes its evaluation models and optimization methods, and finally introduces more representative open-source tools and compiles some learning materials.

### **Evaluation Models**
The indicators concerned in the global placement stage mainly include wire length, density, congestion, timing, etc. Among them, wire length and density are the most fundamental and important. Global placement that optimizes the wire length and satisfies the density constraint is called wirelength-driven global placement. This section mainly introduces the evaluation models of wire length and density.

#### **Wirelength**
The positions of circuit cells are mainly determined based on the connection relationships between cells. The connection relationship is a logical concept in the placement stage and becomes a physical concept in the subsequent routing stage due to the actual routing. In physical design, the "netlist" is used to describe all the connection relationships between circuit cells, and a "net" is used to describe a group of connection relationships, that is, the netlist contains many nets.

Given the connection relationships between circuit cells, the current main method to measure the placement quality is by using the wire length (wirelength). One intuition is that several circuit cells with connection relationships should be placed together to reduce the wiring length and the required wiring resources, thereby shortening the signal propagation time and improving the chip performance. Since a netlist has multiple nets, the placement result can be comprehensively measured by the total wire length. The total wire length is the most commonly used and important optimization objective in global placement. The wire length of each net is calculated and summed up to obtain the total wire length. Therefore, the key is to calculate the wire length of each net.

However, the connection relationship in the placement stage is only a logical concept, and there is no actual routing between cells yet. Therefore, the length of the net needs to be estimated. The most accurate wire length model in the placement stage is RSMT (Rectilinear Steiner Minimal Tree), and the value of RSMT is equal to the sum of the lengths of the line segments constructed by inserting Steiner points. However, constructing RSMT is an NP-hard problem and is therefore not commonly used in placement iteration optimization. The most commonly used wire length evaluation model is Half-Perimeter Wirelength (HPWL), and its mathematical representation is as follows:
$$  HPWL(x,y) =  \max x  - \min x + \max y - \min y$$
where $x,y$ represent the $x$ and $y$ coordinate values of the cell pins in the net, respectively.

HPWL is simple to calculate, but it cannot accurately estimate the wire length of multi-pin nets with 4 pins or more. According to statistics, although the number of 2-pin and 3-pin nets generally accounts for more than 70%, their contribution to the total wire length may not exceed 50%. Therefore, efficient and accurate estimation of the wire length of multi-pin nets is still a problem worthy of study. A representative work is FLUTE[1], which can quickly and accurately estimate RSMT for nets within 9 pins through the constructed lookup table.

#### **Density**

Cell density is a major constraint in the placement algorithm. On the one hand, in the global placement stage, the relationship between wire length reduction and density increase is balanced to consider routability. The more compact the cell placement, the shorter the wire length. However, it may cause cells to be overly crowded, reducing the routing space between cell pins and thereby damaging routability. Cell placement should not be too loose either, as this will increase the wire length, consume more routing resources, and further damage routability. On the other hand, distributing cells in the global placement stage and reducing cell overlap can also alleviate the optimization pressure in the subsequent legalization and detailed placement stages, further improving the overall execution efficiency of the placement algorithm.

In global placement, the layout area is usually divided into several rectangular grids of the same size, and the density constraint is considered by limiting the maximum cell density in each grid. For the cell density of each grid, its mathematical representation is as follows:
$$ D_{b}(x,y) = \sum_{v\in V} P_x(b,v)P_y(b,v) $$
where $b$ represents each grid, $v$ represents any circuit cell, and $P_x$ and $P_y$ represent the horizontal and vertical overlap lengths of cell $v$ and grid $v$, respectively. For limiting the maximum allowable area for cell placement within each grid, its mathematical representation is as follows:
$$ D_{b}(x,y) \leq \rho_t A_b $$
where $\rho_t$ represents the grid density threshold (the value is not greater than 1), and $A_b$ represents the area of each grid.

To calculate the cell density $D_b(x,y)$ of the grid, the key is to mathematically represent the overlap relationship between the grid and the cell. Reference [2] describes the overlap function between two modules. Assuming the left and right boundaries of the two modules are $[L1,R1]$ and $[L2,R2]$ respectively, the horizontal overlap value between the modules can be expressed as
$$f([L1,R1],[L2,R2]) =  |\min (R1,R2) - \max (L1,L2) |^{+} $$
where,
$$
[z]^{+}= \begin{cases}z & \text { if } z>0 \\ 0 & \text { if } z \leq 0\end{cases}
$$
Similarly, the vertical overlap value between the modules can be expressed. Assuming the two modules are denoted as $i,j$, the center coordinates of the modules are denoted as $(x,y)$, and the widths and heights of the modules are denoted as $(w,h)$, then the overlap area between the two modules can finally be expressed as
$$
\begin{aligned}
\operatorname{Overlap}_{i j}\left(x_i, y_i, x_j, y_j\right) & =f\left(\left[x_i-\frac{\omega_i}{2}, x_i+\frac{\omega_i}{2}\right],\left[x_j-\frac{\omega_j}{2}, x_j+\frac{\omega_j}{2}\right]\right) \\
& f\left(\left[y_i-\frac{h_i}{2}, y_i+\frac{b_i}{2}\right],\left[y_j-\frac{h_j}{2}, y_j+\frac{h_j}{2}\right]\right)
\end{aligned}
$$

### **Optimization Methods**
Reference [2] introduces three classic algorithms for global placement: partition-based methods, simulated annealing algorithms, and analytical methods. Reference [3] systematically sorts out the common optimization models and algorithms for solving global placement using analytical methods. This section will briefly introduce the current state-of-the-art (SOTA) solutions in academia, namely nonlinear optimization methods in analytical methods, the basic elements of which include wire length smoothing, density smoothing, and gradient optimization.

#### **Wire Length Smoothing**

Generally speaking, the optimization goal of global placement is to minimize the total wire length. The commonly selected evaluation model for a single net is the HPWL model. However, HPWL is not differentiable. To apply the gradient solution of nonlinear optimization, an approximate smoothing of the HPWL model is required. Commonly selected wire length smoothing models are Weighted-Average (WA)[4] and Log-Sum-Ex (LSE)[5], and their mathematical representations are as follows:
$$
	W_{WA}(\mathbf{{e}})=\left(\frac{\sum_{i \in e} x_{i} \exp \left(x_{i} / \gamma\right)}{\sum_{i \in e} \exp \left(x_{i} / \gamma\right)}-\frac{\sum_{i \in e} x_{i} \exp \left(-x_{i} / \gamma\right)}{\sum_{i \in e} \exp \left(-x_{i} / \gamma\right)}\right)
$$
$$
	W_{LSE}(\mathbf{{e}})=\gamma\left(\ln \sum_{i \in e} \exp \left(\frac{x_{i}}{\gamma}\right)+\ln \sum_{i \in e} \exp \left(\frac{-x_{i}}{\gamma}\right)\right)
$$
where $\gamma$ is the smoothing coefficient used to control the accuracy of the wire length model. The larger $\gamma$ is, the smoother the wire length model but the less it approximates HPWL. Assuming a net has 2 pins with coordinates $(0,0)$ and $(x,0)$, here is the visualization of the wire length smoothing model in the horizontal direction (the same for the vertical direction).

<center><img src="/res/images/train/eda/wirelength.png" style="zoom:50%;" /></center>
<center>Figure 1 Wire Length Model</center>


#### **Density Smoothing**
The functions $P_x(b,v)$ and $P_y(b,v)$ for calculating the overlap length between circuit cells and grids in global placement are also not differentiable. To apply the gradient solution of nonlinear optimization, an approximate smoothing is also required. The classic density smoothing models are Bell-shape[6] and Sigmoid[7]. The smooth approximation of $P_x(b,v)$ using Bell-shape is expressed as follows (the same for $P_x(b,v)$):
$$
p_x(b, v)= \begin{cases}1-a d_x^2, & 0 \leq d_x \leq \frac{w_v}{2}+w_b \\ b\left(d_x-\frac{w_v}{2}-2 w_b\right)^2, & \frac{w_v}{2}+w_b \leq d_x \leq \frac{w_v}{2}+2 w_b \\ 0, & \frac{w_v}{2}+2 w_b \leq d_x\end{cases}
$$
where $d_x$ is the horizontal distance between the center point of the circuit cell and the grid, and $a$ and $b$ are expressed as follows:
$$
\begin{aligned}
a & =\frac{4}{\left(w_v+2 w_b\right)\left(w_v+4 w_b\right)} \\
b & =\frac{2}{w_b\left(w_v+4 w_b\right)}
\end{aligned}
$$
Assuming the grid width is $2$ and the circuit cell width is $1$, visualize the original horizontal overlap function $P_x(b,v)$ and the functions after applying Bell-shape and Sigmoid smoothing. It can be seen that compared to the Bell-shape function, Sigmoid smoothing can provide a more accurate approximation.

<center><img src="/res/images/train/eda/density.png" style="zoom:50%;" /></center>
<center>Figure 2 Density Model</center>


#### **Gradient Optimization**

The smoothed wire length model and density model are then integrated into an unconstrained nonlinear optimization function through the Lagrange penalty method or relaxation, which can be expressed as follows:
$$
	\min \quad {W}(\mathbf{x}, \mathbf{y})+\lambda \sum_{b}\left({D}_{b}(\mathbf{x}, \mathbf{y})-M_{b}\right)^{2}
$$
where ${W}(\mathbf{x}, \mathbf{y})$ is the smoothed total wire length, $D_{b}(\mathbf{x}, \mathbf{y})$ is the smoothed grid density, $M_{b} = \rho_t A_b$ refers to the maximum allowable area for circuit cell placement within each grid. Subsequently, the placement result can be solved by applying the gradient optimization algorithm to this function.

Commonly used gradient optimization algorithms are Conjugate Gradient (CG) and Nesterov algorithms. The CG algorithm is time-consuming when performing line search, its step size is not precise enough, and the search direction is prone to losing conjugacy during the iteration process, which leads to poor performance of the CG algorithm. ePlace[8] was the first to use the Nesterov algorithm combined with the Lipschitz constant prediction method, achieving better placement quality and shorter solution time than the CG algorithm. Currently, the mainstream gradient optimization method for global placement is to adopt the method of ePlace.

### **Related Tools/Materials**

- **DREAMPlace**
DREAMPlace[9] is the current SOTA solution for placement tools in academia. Its characteristic is that the solution process of the nonlinear optimization method is analogized to the training problem of deep learning, and thus can be developed using deep learning toolkits to achieve flexibility and efficiency. This tool can run on both CPU and GPU, and the GPU acceleration solution can achieve efficient and fast placement. DREAMPlace has currently been iterated to version 4.0 and supports global placement schemes with various characteristics such as wirelength-driven (1.0), routability-driven (2.2.0), and timing-driven (4.0).

Code Repository: https://github.com/limbo018/DREAMPlace.git

- **iEDA-iPL**
iPL is a placement tool on the iEDA[10] open-source platform. As part of iEDA, iPL reads data from the iEDA database into the data access layer, supports common industrial standard files such as.v,.DEF,.LEF,.lib, etc., and supports main operations including initial placement, global placement, after global placement, legalization, detailed placement, buffer insertion, filler insertion, and checker. It encapsulates common utility classes such as logs, reports, and utilities, as well as mathematical operation libraries and performance libraries, providing users with APIs in TCL, Python, and C++.

Based on the uniformly designed digital backend full-process framework of iEDA, iPL has standardized code implementation, is user-friendly, and is convenient for implementing various functional expansions based on the iEDA platform, and is very promising. Currently, iPL also supports global placement methods with various characteristics such as wirelength-driven, routability-driven, and timing-driven.

Code Repository: https://gitee.com/oscc-project/iEDA.git

Video Introduction:
- [2024 EDA Talent Training Program: Latest Introduction to Placement](https://www.bilibili.com/video/BV1Yx4y147oP/?share_source=copy_web&vd_source=6815ab875317a5897f502233fc7d69c1)
- [iEDA-Tutorial - Issue Introduction, Architecture, Use and Planning of iEDA-iPL in the Second Phase](https://www.bilibili.com/video/BV1GN411h7b3/?share_source=copy_web&vd_source=6815ab875317a5897f502233fc7d69c1)

Reference Reading:
- [Introduction to the Basics of VLSI Global Placement](https://zhuanlan.zhihu.com/p/712633359)
- [Designing VLSI EDA (7): How the Placement Algorithm Achieves the "Miniature Boat in a Nucleus" of the Chip](https://zhuanlan.zhihu.com/p/578525808)



### References
[1] Chu, Chris. "FLUTE: Fast lookup table based wirelength estimation technique." In IEEE/ACM International Conference on Computer Aided Design, 2004. ICCAD-2004., pp. 696-701. IEEE, 2004.

[2] Wang, Laung-Terng, Yao-Wen Chang, and Kwang-Ting Tim Cheng, eds. Electronic design automation: synthesis, verification, and test. Morgan Kaufmann, 2009.

[3] Huang Zhipeng, Li Xingquan, Zhu Wenxing. "Optimization Models and Algorithms for VLSI Layout." Journal of Operations Research 25, no. 3 (2021): 15-36.

[4] Hsu, Meng-Kai, Yao-Wen Chang, and Valeriy Balabanov. "TSV-aware analytical placement for 3D IC designs." In Proceedings of the 48th Design Automation Conference, pp. 664-669. 2011.

[5] Naylor, William C., Ross Donelly, and Lu Sha. "Non-linear optimization system and method for wire length and delay optimization for an automatic electric circuit placer." U.S. Patent 6,301,693, issued October 9, 2001.

[6] Kahng, Andrew B., and Qinke Wang. "Implementation and extensibility of an analytic placer." In Proceedings of the 2004 international symposium on Physical design, pp. 18-25. 2004.

[7] Chou, Sheng, Meng-Kai Hsu, and Yao-Wen Chang. "Structure-aware placement for datapath-intensive circuit designs." In Proceedings of the 49th Annual Design Automation Conference, pp. 762-767. 2012.

[8] Lu, Jingwei, Pengwen Chen, Chin-Chih Chang, Lu Sha, Dennis Jen-Hsin Huang, Chin-Chi Teng, and Chung-Kuan Cheng. "ePlace: Electrostatics-based placement using fast fourier transform and Nesterov's method." ACM Transactions on Design Automation of Electronic Systems (TODAES) 20, no. 2 (2015): 1-34.

[9] Lin, Yibo, Shounak Dhar, Wuxi Li, Haoxing Ren, Brucek Khailany, and David Z. Pan. "Dreamplace: Deep learning toolkit-enabled gpu acceleration for modern vlsi placement." In Proceedings of the 56th Annual Design Automation Conference 2019, pp. 1-6. 2019.

[10] Li Xingquan, Tao Simin, Huang Zengrong, et al. iEDA: An open-source infrastructure of EDA. in Proc. of ASPDAC, 2024.
