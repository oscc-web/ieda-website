---
title: "Delay calibration dataset"
order: 2
---

# Delay calibration dataset #

## Download ##

[Delay calibration dataset](https://gitee.com/i-eda/i-bm/tree/master/Delay_Calibration_Dataset/demo)



**Dataset Description**
1. Generate timing reports using the internal open-source static timing analysis tool, iSTA;
2. Generate corresponding timing reports using commercial static timing analysis tool, Prime Time;
3. Extract feature data for each timing path from the iSTA report, including features related to the delay of impact units and interconnect delays;
4. Determine the delay value from the PT report corresponding to each path, considering it as the Ground Truth;
5. Save the feature data extracted from iSTA and the corresponding label value from PT for each path into a .txt file.


**File descriptions**
- Each timing path's features and labels in the document start with "features" and end with the start of the next path's "features";
- Each timing path contains 15 features extracted from the iSTA report and 4 labels extracted from the PT report;
- Each row of data in the file represents a feature for each pin in the timing path. For example, the first row contains the names of each pin in the path;
- Below is an explanation of each feature:


| Feature | Description |
|-------|-------|
| pin name | pin name |
| cell name | instance name + pin name |
| fanout | fanout of the interconnect |
| rise_fall | rise/fall |
| is_net | flag indicating whether it is a net |
| capacitance | load capacitance |
| slew | slew |
| incr_elmore | Elmore method increase delay |
| incr_d2m | D2M method increase delay |
| incr_ecm | ECM method increase delay |
| incr_d2mc | MD2M method increase delay |
| at_elmore | Elmore method arrival time delay |
| at_d2m | D2M method arrival time delay |
| at_ecm | ECM method arrival time delay |
| at_d2mc | MD2M method arrival time delay |
| cap_pt | load capacitance from PT report |
| slew_pt | slew from PT report |
| incr_pt | increase delay from PT report |
| at_pt | arrival time delay from PT report |

The features and labels described above can be used for feature engineering and determining which features are most effective.



## Updates ##


## Citation ##


## Contact ##
Please feel free to send any questions or comments to ieda.oscc@gmail.com.



