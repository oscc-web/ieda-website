import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
    {
        text: "Project",
        prefix: "/en/project/",
        children: [
            "intro/",
            "plan/",
            "team/"
        ]
    }, {
        text: "Training",
        prefix: "/en/train/",
        children: [
            "eda/",
            "water_drop/",
            "practice/",
            "others/"
            
        ]
    }, {
        text: "Toolchain",
        prefix: "/en/tools/",
        children: [
            "ieda-platform/",
            "ieda-tools/",
            "auto-scripts/"
        ]
    }, {
        text: "Intelligence",
        prefix: "/en/aieda/",
        children: [
            "aieda-library/",
            "aieda-model/",
            "ipcl/",
            "dataset/"
        ]
    }, {
        text: "Research",
        prefix: "/en/research/",
        children: [
            "papers/",
            "awesome/",
            "subjects/",
            "tasks/",
            "achieves/"
        ]
    }, {
        text: "Activities",
        prefix: "/en/activities/",
        children: [
            "conferences/",
            "communication/",
            "contests/",
            "tape-out/"
        ]
    }, {
        text: "Publicity",
        prefix: "/en/publicity/",
        children: [
            "news/",
            "collaborate/",
            "recruit/",
            "connection"
        ]
    }
]);
