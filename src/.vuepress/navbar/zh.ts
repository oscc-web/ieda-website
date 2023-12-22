import { checkVersion } from "vuepress-shared";
import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "项目和团队",
        prefix: "/project/",
        children: [
            "intro",
            "plan",
            "team"
        ]
    }, {
        text: "知识和训练",
        prefix: "/train/",
        children: [{
            text: "EDA知识",
            prefix: "eda/",
            children: [
                "eda-base",
                "iEDA-design-doc",
                "subject-cross",
                "research-problem"
            ]
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
            ]
        }]
    }, {
        text: "平台和工具",
        prefix: "/tools/",
        children: [{
            text: "自动化设计脚本",
            prefix: "auto-scripts/",
            children: [
                "iflow",
                "ieda"
            ]
        }, {
            text: "iEDA工具集",
            prefix: "ieda-tools/",
            children: [
                "imap",
                "ifp",
                "ino",
                "ipdn",
                "ipl",
                "icts",
                "ito",
                "irt",
                "ista",
                "ipw",
                "idrc"
            ]
        }, {
            text: "iEDA基础平台",
            prefix: "ieda-platform/",
            children: [
                "intro",
                "api",
                "iEDA-design-doc",
                "iEDA-design-framework",
                "guide"
            ]
        }]
    }, {
        text: "智能和数据",
        prefix: "/aieda/",
        children: [{
            text: "iBM数据集",
            prefix: "ibm/",
            children: [
                "chip-data",
                "tool-data",
                "problem-data"
            ]
        }, {
            text: "AiEDA模型",
            prefix: "aieda-model/",
            children: [
                "aimp",
                "aimap",
                "aista"
            ]
        }, {
            text: "AiEDA框架",
            prefix: "aieda-framework/",
            children: [
                "intro",
                "api",
                "guide",
                "usage"
            ]
        }]
    }, {
        text: "学术和研发",
        prefix: "/research/",
        children: [{
            text: "研究课题",
            prefix: "subjects/",
            children: [
                "topics",
                "research_plan",
                "ranks"
            ]
        }, {
            text: "开发任务",
            prefix: "tasks/",
            children: [
                "collaborate",
                "contents",
                "standards"
            ]
        }, {
            text: "学术成果",
            prefix: "achieve/",
            children: [
                "papers",
                "patents",
                "softwares",
                "books",
                "awards"
            ]
        }]
    }, {
        text: "活动和交流",
        prefix: "/activities/",
        children: [{
            text: "学术会议",
            prefix: "conference/",
            children: [
                "CCF-DAC-23-EDA-session",
                "first-GBA-EDA-workshop-23",
                "second-OSEDA-workshop-23"
            ]
        }, {
            text: "学术竞赛",
            prefix: "contest/",
            children: [
                "openDACS-23-contest-t1",
                "openDACS-23-contest-t2",
                "openDACS-23-contest-t3",
                "EDA_elite_challenge-23-t2"
            ]
        }, {
            text: "流片计划",
            prefix: "tape-out/",
            children: [
                "iEDA-Chip-001",
                "iEDA-Chip-002",
                "iEDA-Chip-003",
                "iEDA-Chip-plan"
            ]
        }]
    }, {
        text: "宣传和合作",
        prefix: "/publicity/",
        children: [{
            text: "宣传",
            prefix: "publicity/",
            children: [
                "ICCAD_contest",
                "tapeout_success",
                "iMAP_release"
            ]
        }, {
            text: "合作",
            prefix: "collaborate/",
            children: [
                "collaborate"
            ]
        }, {
            text: "招聘",
            prefix: "recruit/",
            children: [
                "recruit",
                "internship"
            ]
        }, {
            text: "业务",
            prefix: "business/",
            children: [
                "business"
            ]
        }]
    }
]);
