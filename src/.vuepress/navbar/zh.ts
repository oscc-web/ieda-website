import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "项目和团队",
        prefix: "/project/",
        children: [
            "intro/",
            "plan/",
            "team/"
        ]
    }, {
        text: "知识和训练",
        prefix: "/train/",
        children: [
            "eda/",
            "water_drop/",
            "practice/",
            "others/"
            
        ]
    }, {
        text: "平台和工具",
        prefix: "/tools/",
        children: [
            "auto-scripts/",
            "ieda-tools/",
            "ieda-platform/"
        ]
    }, {
        text: "智能和数据",
        prefix: "/aieda/",
        children: [
            "ibm/",
            "aieda-model/",
            "aieda-framework/"
        ]
    }, {
        text: "学术和研发",
        prefix: "/research/",
        children: [
            "subjects/",
            "tasks/",
            "achieves/"
        ]
    }, {
        text: "活动和交流",
        prefix: "/activities/",
        children: [
            "conferences/",
            "contests/",
            "tape-out/"
        ]
    }, {
        text: "宣传和合作",
        prefix: "/publicity/",
        children: [
            "publicity/",
            "collaborate/",
            "recruit/",
            "business/",
            "connection"
        ]
    }
]);
