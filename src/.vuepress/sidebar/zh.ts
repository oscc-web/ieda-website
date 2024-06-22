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
        children: "structure",
        collapsible: true
    }], 
    "/train/": [{
        text: "EDA知识",
        prefix: "eda/",
        link: "/train/eda/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "水滴计划",
        prefix: "water_drop/",
        link: "/train/water_drop/README.md",
        children:"structure",
        collapsible: true
    }, {
        text: "iEDA实践",
        prefix: "practice/",
        link: "/train/practice/README.md",
        children: "structure",
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
        text: "自动化设计脚本",
        prefix: "auto-scripts/",
        link: "/tools/auto-scripts/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "iEDA工具集",
        prefix: "ieda-tools/",
        link: "/tools/ieda-tools/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "iEDA基础平台",
        prefix: "ieda-platform/",
        link: "/tools/ieda-platform/README.md",
        children: "structure",
        collapsible: true
    }],
    "/aieda/": [{
        text: "iBM数据集",
        link: "/aieda/ibm/README.md",
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
        link: "/aieda/aieda-model/README.md",
        prefix: "aieda-model/",
        children: "structure",
        collapsible: true
    }, {
        text: "AiEDA框架",
        link: "/aieda/aieda-framework/README.md",
        prefix: "aieda-framework/",
        children: "structure",
        collapsible: true
    }],
    "/research/": [{
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
        children: "structure",
        collapsible: true
    }, {
        text: "学术竞赛",
        prefix: "contests/",
        link: "/activities/contests/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "技术交流",
        prefix: "communication/",
        link: "/activities/communication/README.md",
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
