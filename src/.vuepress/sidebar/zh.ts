import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/zh/project/": [{
        text: "项目介绍",
        prefix: "intro/",
        link: "/zh/project/intro/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "项目规划",
        prefix: "plan/",
        link: "/zh/project/plan/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "团队成员",
        prefix: "team/",
        link: "/zh/project/team/README.md",
        // children: "",
        collapsible: true
    }], 
    "/zh/train/": [{
        text: "EDA知识",
        prefix: "eda/",
        link: "/zh/train/eda/README.md",
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
        link: "/zh/train/water_drop/README.md",
        children: [
            "application",
            "water_drop_plan_overview",
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
        link: "/zh/train/practice/README.md",
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
        text: "其他学习",
        link: "/zh/train/others/README.md",
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
    "/zh/tools/": [{
        text: "iEDA底座平台",
        prefix: "ieda-platform/",
        link: "/zh/tools/ieda-platform/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "iEDA工具集",
        prefix: "ieda-tools/",
        link: "/zh/tools/ieda-tools/README.md",
        children: "structure",
        collapsible: true
    }, {        
        text: "自动化设计脚本",
        prefix: "auto-scripts/",
        link: "/zh/tools/auto-scripts/README.md",
        children: "structure",
        collapsible: true
    }],
    "/zh/aieda/": [{
        text: "iBM数据集",
        link: "/zh/aieda/ibm/README.md",
        prefix: "ibm/",
        children: [
            {
                text: "问题数据",
                prefix: "problem/",
                children: "structure",
                collapsible: true
            }, {
                text: "芯片数据",
                prefix: "chip/",
                children: "structure",
                collapsible: true
            }, {
                text: "工具数据",
                prefix: "tool/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "AiEDA模型",
        link: "/zh/aieda/aieda-model/README.md",
        prefix: "aieda-model/",
        children: "structure",
        collapsible: true
    }, {
        text: "AiEDA框架",
        link: "/zh/aieda/aieda-framework/README.md",
        prefix: "aieda-framework/",
        children: "structure",
        collapsible: true
    }],
    "/zh/research/": [{
        text: "研究课题",
        prefix: "subjects/",
        link: "/zh/research/subjects/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "开发任务",
        prefix: "tasks/",
        link: "/zh/research/tasks/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "学术成果",
        prefix: "achieves/",
        link: "/zh/research/achieves/README.md",
        children: "structure",
        collapsible: true
    }],
    "/zh/activities/": [{
        text: "学术会议",
        prefix: "conferences/",
        link: "/zh/activities/conferences/README.md",
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
        text: "学术竞赛",
        prefix: "contests/",
        link: "/zh/activities/contests/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "技术交流",
        prefix: "communication/",
        link: "/zh/activities/communication/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "流片计划",
        prefix: "tape-out/",
        link: "/zh/activities/tape-out/README.md",
        children: "structure",
        collapsible: true
    }],
    "/zh/publicity/": [{
        text: "新闻动态",
        prefix: "news/",
        link: "/zh/publicity/news/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "业务合作",
        prefix: "collaborate/",
        link: "/zh/publicity/collaborate/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "人才招聘",
        prefix: "recruit/",
        link: "/zh/publicity/recruit/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "联系方式",
        link: "connection"
    }],
});
