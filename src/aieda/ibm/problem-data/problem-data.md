---
title: "3D capacitance dataset"
order: 1
---

# PC-Cap 3D Dataset #

This project serves as the submodule of [PC-Cap](https://gitee.com/oscc-project/pct-cap).

The dataset generation is briefly shown in <a href="#fig_d3_dataset">Fig. 1</a>.

<div>
  <center>
  <a id="fig_d3_dataset">
    <img src="/home/lixingquan/OSCC/ieda-website/src/.vuepress/public/res/images/aieda/d3_dataset.png" width="800">
  </a>
  <br>
  Fig. 1: Brief Introduction to Data Generation
  </center>
</div>

## Download ##
You can download [3D capacitance dataset](https://www.jianguoyun.com/p/De81uBYQvsDYDBi7gsoFIAA).
## Dataset Description ##

### Directory Descriptions ###

The complete directory structure is as follows:

```txt
.
├── dataset
│   ├── pc
│   ├── pc_annotation_coupling_test_clean.csv
│   ├── pc_annotation_coupling_test.csv
│   ├── pc_annotation_coupling_train_clean.csv
│   ├── pc_annotation_coupling_train.csv
│   ├── pc_annotation.csv
│   ├── pc_annotation_total_test_clean.csv
│   ├── pc_annotation_total_test.csv
│   ├── pc_annotation_total_train_clean.csv
│   └── pc_annotation_total_train.csv
├── imgs
│   └── d3_dataset.png
├── LICENSE
└── README.md
```

The directory **./dataset/pc** contains all information of the point cloud.

### File descriptions ###
- **pc_annotation.csv** - records some information from the original **3D Capacitance Sample** of the point cloud  
  |column name | description |
  | --- | --- |
  | point_cloud_path | point cloud file path |
  | conductor_num | the number of conductors that the original sample contains |
  | point_num | the size of point cloud |
  | electrode1_point_num | points generated based on the master conductor |
  | electrode2_point_num | points generated based on the target environment conductor |
  | cap_type | total or coupling capacitance |
  | cap | reference capacitance value, the label |
  | v1_x | the absolute coordinate-low-x of the original sample in the layout |
  | v1_y | the absolute coordinate-low-y of the original sample in the layout |
  | v1_z | the absolute coordinate-low-z of the original sample in the layout |
  | dx | the size of the original sample along direction-x |
  | dy | the size of the original sample along direction-y |
  | dz | the size of the original sample along direction-z |
  | timestamp | timestamp of the point cloud file generation |
  | solver_time | the calculation time that the solver takes to get the capacitance result |

- **pc_annotation_xxx.csv** - part of records from pc_annotation.csv     
The details of dataset partition and data cleaning are available at [PC-Cap repository](https://gitee.com/oscc-project/pct-cap)  
  |sub-dataset used in our research | descriptions |
  | --- | --- |
  | pc_annotation_coupling_train_clean.csv | the training set for coupling capacitance task |
  | pc_annotation_coupling_test_clean.csv | the testing set for coupling capacitance task |
  | pc_annotation_total_train_clean.csv | the training set for total capacitance task |
  | pc_annotation_total_test_clean.csv | the testing set for total capacitance task |

- **w500l2_1_C_0_0.txt** - example of a point cloud file
  - file name format
    - w500l2:  
      The 3D sampling window is height-adaptive and can accommodate 2 layers above and 2 layers below.  
      5 metal layers in maximum: Routing-Via-Routing-Via-Routing or Via-Routing-Via-Routing-Via.  
      The 3D sampling window project to XOY-plane with an area sized $500 nm \times 500nm$. 
    - 1:  
      the sample id when generation
    - C_0_0:  
      the position in the sample capacitance matrix
  
  - content format: point cloud file format that [CloudCompare](https://www.cloudcompare.org/) can read directly.
    | symbol | descriptions |
    | --- | --- |
    | $x$ | coordinate-x |
    | $y$ | coordinate-y |
    | $z$ | coordinate-z |
    | $n_x$ | component-x of normal vector |
    | $n_y$ | component-y of normal vector |
    | $n_z$ | component-z of normal vector |
    | $\varepsilon_r$ | the dielectric channel, relative permittivity |
    | class | a point belongs to a class that relates to its generation |
    | $\Phi$ | the selecting channel |
  - line 1 : 432.715, 171.114, 0.5879, 1, 0, 0, 4.06, 1, 0  
    A point with coordinates **(432.715, 171.114, 0.5879)** in layout.  
    This point is generated on the surface of a region whose local normal vector is **(1, 0, 0)**.  
    This local region is full of dielectric with a relative permittivity of **4.06**, except the region inner the conductor.  
    The id of this region equals **1**.  
    The selecting channel value of this point is **0**, such as non-target environment conductors. The details of the setting are related to the **Gauss Law-based Point Cloud feature**.

## Updates ##


## Citation ##


## Contact ##
Please feel free to send any questions or comments to ieda.oscc@gmail.com.