import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/project/": [{
        text: "项目介绍",
        prefix: "intro/",
        link: "/project/intro/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "项目规划",
        prefix: "plan/",
        link: "/project/plan/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "团队成员",
        prefix: "team/",
        link: "/project/team/README.md",
        // children: "",
        collapsible: true
    }], 
    "/train/": [{
        text: "EDA知识",
        prefix: "eda/",
        link: "/train/eda/README.md",
        children: [
            {
                text: "芯片与电路",
                prefix: "chip-circuit/",
                children: [
                    {
                        text: "芯片设计基础",
                        prefix: "Part_1-chip_basic/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "标准格式文件",
                        prefix: "Part_2-chip_files/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "芯片设计流程",
                        prefix: "Part_3-chip_flow/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "芯片设计概念",
                        prefix: "Part_4-chip_concepts/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "标准单元",
                        prefix: "Part_5-std_cell/",
                        children: "structure",
                        collapsible: true
                    }
                ],
                collapsible: true
            }, {
                text: "EDA问题与建模",
                prefix: "eda-model/",
                children: "structure",
                collapsible: true
            },{
                text: "算法与数据结构",
                prefix: "algorithm-data/",
                children: [            
                    {
                        text: "数据结构",
                        prefix: "Part_6-data_structure",
                        children: "structure",
                        collapsible: true
                    },
                    {
                        text: "算法设计",
                        prefix: "Part_7_algorithm",
                        children: "structure",
                        collapsible: true
                    }
                ],
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "水滴计划",
        prefix: "water_drop/",
        link: "/train/water_drop/README.md",
        children: [
            "application",
            {
                text: "C++学习",
                prefix: "C/",
                children: "structure",
                collapsible: true
            }, {
                text: "EDA学习",
                prefix: "eda/",
                children: "structure",
                collapsible: true
            }, {
                text: "AI学习(选)",
                prefix: "ai/",
                children: "structure",
                collapsible: true
            }, {
                text: "RUST学习(选)",
                prefix: "rust/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "iEDA实践",
        prefix: "practice/",
        link: "/train/practice/README.md",
        children: [
            {
                text: "系统工程类",
                prefix: "systems/",
                children: "structure",
                collapsible: true
            }, {
                text: "算法设计类",
                prefix: "algorithms/",
                children: "structure",
                collapsible: true
            }, {
                text: "AI模型类",
                prefix: "models/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "EDA课程",
        prefix: "course/",
        link: "/train/course/README.md",
        children: [
            {
                text: "数字电路设计",
                prefix: "digital_circuit/",
                children: "structure",
                collapsible: true
            }, {
                text: "光芯片设计",
                prefix: "photonic_IC/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "其他学习",
        link: "/train/others/README.md",
        children: [
            {
                text: "PA",
                link: "https://ysyx.oscc.cc/docs/ics-pa"
            }, {
                text: "一生一芯",
                link: "https://ysyx.oscc.cc"
            }
        ],
        collapsible: true
    }],
    "/tools/": [{
        text: "iEDA底座平台",
        prefix: "ieda-platform/",
        link: "/tools/ieda-platform/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "iEDA工具集",
        prefix: "ieda-tools/",
        link: "/tools/ieda-tools/README.md",
        children: "structure",
        collapsible: true
    }, {        
        text: "自动化设计脚本",
        prefix: "auto-scripts/",
        link: "/tools/auto-scripts/README.md",
        children: "structure",
        collapsible: true
    }],
    "/aieda/": [
        {
        text: "AiEDA Library",
        link: "/aieda/library/README.md",
        prefix: "library/",
        children: "structure",
        collapsible: true
    }, {
        text: "AiEDA Model",
        link: "/aieda/model/README.md",
        prefix: "model/",
        children: "structure",
        collapsible: true
    }, {
        text: "iPCL Large Model",
        link: "/aieda/ipcl/README.md",
        prefix: "ipcl/",
        children: "structure",
        collapsible: true
    },{
        text: "EDA Dataset",
        link: "/aieda/dataset/README.md",
        prefix: "dataset/",
        children: [
            {
                text: "Chip Data",
                prefix: "chip/",
                children: "structure",
                collapsible: true
            }, {
                text: "EDA Data",
                prefix: "tool/",
                children: "structure",
                collapsible: true
            },{
                text: "Vector Data",
                prefix: "problem/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }],
    "/research/": [{
        text: "学术论文",
        prefix: "papers/",
        link: "/research/papers/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "论文综述",
        prefix: "awesome/",
        link: "/research/awesome/AIEDA.md",
        children: "structure",
        collapsible: true
    },{
        text: "研究课题",
        prefix: "subjects/",
        link: "/research/subjects/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "开发任务",
        prefix: "tasks/",
        link: "/research/tasks/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "学术成果",
        prefix: "achieves/",
        link: "/research/achieves/README.md",
        children: "structure",
        collapsible: true
    }],
    "/activities/": [{
        text: "学术会议",
        prefix: "conferences/",
        link: "/activities/conferences/README.md",
        children: [
            {
                text: "会议通知",
                prefix: "notice/",
                children: "structure",
                collapsible: true
            }, {
                text: "会议议程",
                prefix: "agenda/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "技术交流",
        prefix: "communication/",
        link: "/activities/communication/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "学术竞赛",
        prefix: "contests/",
        link: "/activities/contests/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "流片计划",
        prefix: "tape-out/",
        link: "/activities/tape-out/README.md",
        children: "structure",
        collapsible: true
    }],
    "/publicity/": [{
        text: "新闻动态",
        prefix: "news/",
        link: "/publicity/news/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "业务合作",
        prefix: "collaborate/",
        link: "/publicity/collaborate/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "人才招聘",
        prefix: "recruit/",
        link: "/publicity/recruit/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "联系方式",
        link: "connection"
    }],
});
