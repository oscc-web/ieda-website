import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    {
        text: "项目和团队",
        prefix: "/zh/project/",
        children: [
            "intro/",
            "plan/",
            "team/"
        ]
    }, {
        text: "知识和训练",
        prefix: "/zh/train/",
        children: [
            "eda/",
            "water_drop/",
            "practice/",
            "others/"
            
        ]
    }, {
        text: "平台和工具",
        prefix: "/zh/tools/",
        children: [
            "ieda-platform/",
            "ieda-tools/",
            "auto-scripts/"
        ]
    }, {
        text: "智能和数据",
        prefix: "/zh/aieda/",
        children: [
            "ibm/",
            "aieda-model/",
            "aieda-framework/"
        ]
    }, {
        text: "学术和研发",
        prefix: "/zh/research/",
        children: [
            "subjects/",
            "tasks/",
            "achieves/"
        ]
    }, {
        text: "活动和交流",
        prefix: "/zh/activities/",
        children: [
            "conferences/",
            "communication/",
            "contests/",
            "tape-out/"
        ]
    }, {
        text: "宣传和合作",
        prefix: "/zh/publicity/",
        children: [
            "news/",
            "collaborate/",
            "recruit/",
            "connection"
        ]
    }
]);
