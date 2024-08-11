---
title: "iEDA Design Description"
order: 4
---

## 1. Introduction

For modern very large-scale digital integrated circuit (VLSI) design, electronic design automation (EDA) is a crucial tool. "To be continued"

### 1.1 Foundation of Chip Design

#### 1.1.1 Chip Design Hierarchy

From a hierarchical perspective, chip design can be generally divided into the following levels:

* System level: The design of the chip system architecture, with independent and complete functional IP modules

  ```
  Port* compute_optimal_route_for_packet (Packet_t *packet, Channel_t *channel){
      static Queue_t *packet_queue; packet_queue = add_packet(packet_queue, packet); ......
  }
  ```
* Register level: The functionality is implemented using registers to form RTL code

  <img src="https://images.gitee.com/uploads/images/2022/0525/180936_4c445e28_8273072.png" alt="6" style="zoom:25%;" />
* Gate level: Through the synthesis tool, the RTL code is transformed into a circuit, and then the circuit is mapped into a gate-level netlist formed by GTech or standard cell libraries;

  <img src="https://images.gitee.com/uploads/images/2022/0525/180919_5542498c_8273072.png" alt="6" style="zoom:25%;" />
* Transistor level: Each cell in the standard cell library has been pre-designed, and the key component is the transistor, which is also the most atomic level;

  <img src="https://images.gitee.com/uploads/images/2022/0525/181001_adc00885_8273072.png" alt="6" style="zoom:25%;" />
* Layout level: After the physicalization of the gate-level netlist, a layout GDS is formed, which is a blueprint for chip manufacturing;

  <img src="https://images.gitee.com/uploads/images/2022/0525/181304_6fe49636_8273072.png" alt="6" style="zoom:25%;" />
* Mask level: Chip manufacturers will design masks based on the layout layers to guide the lithography machine for exposure. Advanced processes may even require multiple exposures;

  <img src="https://images.gitee.com/uploads/images/2022/0525/181100_d80871ac_8273072.png" alt="6" style="zoom:25%;" />

#### 1.1.2 Design Automation Content

The entire chip design process can be generally summarized as the following abstract process:

* Specification formulation: According to product requirements, formulate corresponding specifications
* Architecture design: Based on the specification requirements, design the chip architecture, divide the system functional modules, define the BUS structure, system model, manufacturing packaging and board requirements, and output the design document;
* Function implementation and verification: Implement the corresponding RTL code for each functional module and conduct functional simulation verification. During this period, mainly rely on Debug tools and waveform simulation tools, and output RTL-level Verilog code. If necessary, each IP functional module needs to be integrated into the SOC and functionally verified. For verification, it can be completed with the help of FPGA or hardware emulation;
* Logic synthesis: Logically compile the RTL code to form a state machine or truth table, then conduct logical optimization design to form a GTech circuit, and then obtain the netlist through process library mapping, and conduct circuit-level simulation and formal verification, and output Netlist-level Verilog code. After synthesis, perform DFT and insert some test modules;
* Unit library design: The process library obtained from the Foundary will basically contain IO, Memory and some IPs, as well as PDK and unit libraries. However, the unit library can be further optimized and designed. First, design the unit model, conduct the unit circuit layout design, extract the parameters of the unit, and conduct physical verification;
* Physical design: For the netlist obtained through synthesis, steps such as Floorplan design, placement, clock tree synthesis, routing, and ECO are required, and finally, the GDS layout file is obtained. Of course, in order to achieve the expected PPA indicators and meet the design rules, physical design often requires multiple iterations. In addition, each step of physical design also needs to undergo formal verification to confirm the correctness of the function;
* Sign-off analysis: During the logic synthesis and physical design processes, parameters, timing, power consumption, IR drop, power and signal integrity, etc. of the circuit and layout need to be extracted and analyzed to ensure that the obtained circuit and layout meet the design specification constraints;
* Physical verification: After obtaining the GDS layout, in addition to sign-off analysis, physical structure verification is also required, mainly including: design rule check (DRC), electrical rule check (ERC), layout versus schematic (LVS), etc. Afterwards, a final simulation is also required to ensure the correctness of the entire layout function;
* Layout processing: After completing the physical verification, the chip design link is basically completed. Next, the layout needs to be handed over to the Foundary to open the mask (Mask). The GDS layout needs to be further optimized, perform OPC and RET, in order to enhance the resolution and reduce production deformation errors, and then be used to produce the Mask;
* Manufacturing, packaging and testing: Mainly completed by Foudary and packaging and testing factories, and return the wafers;
* PCB: After completing the above steps, a chip can basically be obtained, and it can be integrated into the required PCB for practical verification and use. The PCB-level board also involves issues such as layout and routing;

<img src="https://images.gitee.com/uploads/images/2022/0526/104146_98f059c1_8273072.png" alt="6" style="zoom:25%;" />

Figure 1.1.1 Main EDA tool steps

<img src="https://images.gitee.com/uploads/images/2022/0530/145123_9b414b6d_8273072.png" alt="6" style="zoom:30%;" />

Figure 1.1.2 Main EDA tool steps

Throughout the chip design process, the main EDA tools generated and their classifications and contents can be summarized into the following five major aspects:

* **Design synthesis**: The design links mainly include high-level synthesis, logic synthesis, physical design, packaging design, and PCB design
* **Simulation**: The simulation links mainly include: TCAD, transistor simulation, logic simulation, hardware simulation, field solver
* **Verification and testing**: The verification and testing links mainly include functional verification, formal verification, equivalence check, ATPG, BIST, physical verification
* **Analysis and inspection**: The analysis links mainly include cross-clock domain, parasitic extraction, (static) timing analysis, power consumption analysis, temperature analysis, voltage drop analysis, signal/power integrity analysis
* **Mask preparation**: The mask links mainly include layout decomposition, OPC, RET, and mask generation

<img src="https://images.gitee.com/uploads/images/2022/0525/175128_fb471b46_8273072.png" alt="6" style="zoom:35%;" />

Figure 1.1.3 Main EDA tool steps

The main research and development focus of the iEDA research group is on the chip logic synthesis, physical design, sign-off analysis and physical verification links, as shown in the green part of the following figure:

<img src="https://images.gitee.com/uploads/images/2022/0530/150057_1b7674b3_8273072.png" alt="6" style="zoom:30%;" />

Figure 1.1.4 Main EDA tool steps

### 1.2 Design Requirements and Goals

- Full design process: Support 110nm/55nm/28nm chip RTL to GDS, and conduct sign-off analysis and physical verification

  - WLM: Wire load model, evaluate the total wire length of the netlist after logic synthesis based on the fanout of the net, relying on the WLM information in.lib
  - HPWL: Half-perimeter wire length, approximate the wiring length of the net by using the half-perimeter of the bounding rectangle formed by the pins of the net
  - Clique, Star, Bound2Bound: Commonly used wire length approximation models in the secondary parsing method of placement
  - Steiner tree: Construct Steiner points for the net, and use the length of the Steiner tree as the wiring length of the net, mainly including HVTree/FLUTE
  - Driver to load: Calculate the L-shaped length from the driver of the net to the specified sink pin
  - Routing: Evaluate the total wire length in the global routing and detailed routing stages
- Open source and openness:

  - Placement: Evaluate the timing at the placement stage, and support obtaining the timing information of the specified pin at the same time, relying on iSTA
  - Routing: Evaluate the timing at the routing stage, relying on iSTA
- Software decoupling:

  - Cell density: Divide the core area into several bins and calculate the density of instances in each bin
  - Pin density: Divide the core area into several bins and calculate the number of pins in each bin
  - BBox density: Divide the core area into several bins and calculate the density of nets in each bin
  - GR congestion: Divide the die area into several tiles and calculate the overflow value of each tile, relying on iRT
- Complete documentation:
- Performance optimization:
- Intelligence:
- Community ecology: