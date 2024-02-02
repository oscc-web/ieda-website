import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/project/": "structure",
    "/train/": [{
        text: "EDA知识",
        prefix: "eda/",
        children: "structure",
        collapsible: true
    }, {
        text: "实践训练",
        prefix: "practice/",
        children: [
            "water-drop-eda",
            "water-drop-cpp",
            "ieda",
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
        children: "structure",
        collapsible: true
    }, {
        text: "iEDA工具集",
        prefix: "ieda-tools/",
        children: "structure",
        collapsible: true
    }, {
        text: "iEDA基础平台",
        prefix: "ieda-platform/",
        children: "structure",
        collapsible: true
    }],
    "/aieda/": [{
        text: "iBM数据集",
        prefix: "ibm/",
        children: "structure",
        collapsible: true
    }, {
        text: "AiEDA模型",
        prefix: "aieda-model/",
        children: "structure",
        collapsible: true
    }, {
        text: "AiEDA框架",
        prefix: "aieda-framework/",
        children: "structure",
        collapsible: true
    }],
    "/research/": [{
        text: "研究课题",
        prefix: "subjects/",
        children: "structure",
        collapsible: true
    }, {
        text: "开发任务",
        prefix: "tasks/",
        children: "structure",
        collapsible: true
    }, {
        text: "学术成果",
        prefix: "achieves/",
        children: "structure",
        collapsible: true
    }],
    "/activities/": [{
        text: "学术会议",
        prefix: "conferences/",
        children: "structure",
        collapsible: true
    }, {
        text: "学术竞赛",
        prefix: "contests/",
        children: "structure",
        collapsible: true
    }, {
        text: "流片计划",
        prefix: "tape-out/",
        children: "structure",
        collapsible: true
    }],
    "/publicity/": [{
        text: "宣传",
        prefix: "publicity/",
        children: "structure",
        collapsible: true
    }, {
        text: "合作",
        prefix: "collaborate/",
        children: "structure",
        collapsible: true
    }, {
        text: "招聘",
        prefix: "recruit/",
        children: "structure",
        collapsible: true
    },{
        text: "业务",
        prefix: "business/",
        children: "structure",
        collapsible: true
    }, {
        text: "联系方式",
        link: "connection"
    }],
});
