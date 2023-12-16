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
        prefix: "aieda/-model/",
        children: "structure",
        collapsible: true
    }, {
        text: "AiEDA框架",
        prefix: "aieda/-framework/",
        children: "structure",
        collapsible: true
    }],
    "/research/": [{
        text: "研究课题",
        prefix: "subject/",
        children: "structure",
        collapsible: true
    }, {
        text: "开发任务",
        prefix: "tasks/",
        children: "structure",
        collapsible: true
    }, {
        text: "学术成果",
        prefix: "achieve/",
        children: "structure",
        collapsible: true
    }],
    "/activities/": "structure",
    "/job/": "structure"
});
