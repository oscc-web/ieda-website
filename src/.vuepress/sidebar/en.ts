import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
    "/en/project/": [{
        text: "Introduction",
        prefix: "intro/",
        link: "/en/project/intro/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "Our Plan",
        prefix: "plan/",
        link: "/en/project/plan/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "Team Member",
        prefix: "team/",
        link: "/en/project/team/README.md",
        // children: "",
        collapsible: true
    }], 
    "/en/train/": [{
        text: "EDA Basic",
        prefix: "eda/",
        link: "/en/train/eda/README.md",
        children: [
            {
                text: "Chips and Circuits",
                prefix: "chip-circuit/",
                children: [
                    {
                        text: "Chip Design Basics",
                        prefix: "Part_1-chip_basic/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "Standard File Formats",
                        prefix: "Part_2-chip_files/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "Chip Design Process",
                        prefix: "Part_3-chip_flow/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "Chip Design Concepts",
                        prefix: "Part_4-chip_concepts/",
                        children: "structure",
                        collapsible: true
                    }, {
                        text: "Standard Cells",
                        prefix: "Part_5-std_cell/",
                        children: "structure",
                        collapsible: true
                    }
                ],
                collapsible: true
            }, {
                text: "EDA Problems and Model",
                prefix: "eda-model/",
                children: "structure",
                collapsible: true
            },{
                text: "Algorithms and Data Structures",
                prefix: "algorithm-data/",
                children: [            
                    {
                        text: "Data Structures",
                        prefix: "Part_6-data_structure",
                        children: "structure",
                        collapsible: true
                    },
                    {
                        text: "Algorithm Design",
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
        text: "Water-drop Plan",
        prefix: "water_drop/",
        link: "/en/train/water_drop/README.md",
        children: [
            "application",
            {
                text: "C++",
                prefix: "C/",
                children: "structure",
                collapsible: true
            }, {
                text: "EDA",
                prefix: "eda/",
                children: "structure",
                collapsible: true
            }, {
                text: "AI (Optional)",
                prefix: "ai/",
                children: "structure",
                collapsible: true
            }, {
                text: "RUST (Optional)",
                prefix: "rust/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "iEDA Practice",
        prefix: "practice/",
        link: "/en/train/practice/README.md",
        children: [
            {
                text: "Systems Engineering",
                prefix: "systems/",
                children: "structure",
                collapsible: true
            }, {
                text: "Algorithm Design",
                prefix: "algorithms/",
                children: "structure",
                collapsible: true
            }, {
                text: "AI Modeling",
                prefix: "models/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "Other Training",
        link: "/en/train/others/README.md",
        children: [
            {
                text: "PA",
                link: "https://ysyx.oscc.cc/docs/ics-pa"
            }, {
                text: "One Life One Chip",
                link: "https://ysyx.oscc.cc"
            }
        ],
        collapsible: true
    }],
    "/en/tools/": [{
        text: "iEDA Infrastructure",
        prefix: "ieda-platform/",
        link: "/en/tools/ieda-platform/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "iEDA Toolchain",
        prefix: "ieda-tools/",
        link: "/en/tools/ieda-tools/README.md",
        children: "structure",
        collapsible: true
    }, {        
        text: "Flow Scripts",
        prefix: "auto-scripts/",
        link: "/en/tools/auto-scripts/README.md",
        children: "structure",
        collapsible: true
    }],
    "/en/aieda/": [
        {
        text: "AiEDA Library",
        link: "/en/aieda/library/README.md",
        prefix: "library/",
        children: "structure",
        collapsible: true
    }, {
        text: "AiEDA Model",
        link: "/en/aieda/model/README.md",
        prefix: "model/",
        children: "structure",
        collapsible: true
    }, {
        text: "iPCL Large Model",
        link: "/en/aieda/ipcl/README.md",
        prefix: "ipcl/",
        children: "structure",
        collapsible: true
    },{
        text: "EDA Dataset",
        link: "/en/aieda/dataset/README.md",
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
    "/en/research/": [{
        text: "Publications",
        prefix: "papers/",
        link: "/en/research/papers/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "Reviews",
        prefix: "awesome/",
        link: "/en/research/awesome/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "Research Subjects",
        prefix: "subjects/",
        link: "/en/research/subjects/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "Development Tasks",
        prefix: "tasks/",
        link: "/en/research/tasks/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "Achievements",
        prefix: "achieves/",
        link: "/en/research/achieves/README.md",
        children: "structure",
        collapsible: true
    }],
    "/en/activities/": [{
        text: "Conference",
        prefix: "conferences/",
        link: "/en/activities/conferences/README.md",
        children: [
            {
                text: "Call for Contribution",
                prefix: "notice/",
                children: "structure",
                collapsible: true
            }, {
                text: "Conference Agendas",
                prefix: "agenda/",
                children: "structure",
                collapsible: true
            }
        ],
        collapsible: true
    }, {
        text: "Tutorial",
        prefix: "communication/",
        link: "/en/activities/communication/README.md",
        children: "structure",
        collapsible: true
    },{
        text: "Contest",
        prefix: "contests/",
        link: "/en/activities/contests/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "Tape-out Schedule",
        prefix: "tape-out/",
        link: "/en/activities/tape-out/README.md",
        children: "structure",
        collapsible: true
    }],
    "/en/publicity/": [{
        text: "News",
        prefix: "news/",
        link: "/en/publicity/news/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "Cooperation",
        prefix: "collaborate/",
        link: "/en/publicity/collaborate/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "job Description",
        prefix: "recruit/",
        link: "/en/publicity/recruit/README.md",
        children: "structure",
        collapsible: true
    }, {
        text: "Contact Us",
        link: "connection"
    }],
});
