import { defineClientConfig } from "@vuepress/client";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.use(ElementPlus);
        Object.keys(ElementPlusIconsVue).forEach(key => {
            app.component(key, ElementPlusIconsVue[key]);
        });
        router.afterEach((to) => {
            if (to.path === '/activities/conferences/') {
                router.push('/activities/conferences/CCF-DAC-23-EDA-session.md')
            }
            if (to.path === '/activities/contests/') {
                router.push('/activities/contests/openDACS-23-contest-t1.md')
            }
            if (to.path === '/activities/tape-out/') {
                router.push('/activities/tape-out/iEDA-Chip-001.md')
            }
            if (to.path === '/aieda/aieda-framework/') {
                router.push('/aieda/aieda-framework/intro.md')
            }
            if (to.path === '/aieda/aieda-model/') {
                router.push('/aieda/aieda-model/aimp.md')
            }
            if (to.path === '/aieda/ibm/') {
                router.push('/aieda/ibm/chip-data.md')
            }
            if (to.path === '/publicity/publicity/') {
                router.push('/publicity/publicity/ICCAD_contest.md')
            }
            if (to.path === '/publicity/recruit/') {
                router.push('/publicity/recruit/recruit.md')
            }
            if (to.path === '/research/achieves/') {
                router.push('/research/achieves/papers.md')
            }
            if (to.path === '/research/subjects/') {
                router.push('/research/subjects/topics.md')
            }
            if (to.path === '/research/tasks/') {
                router.push('/research/tasks/collaborate.md')
            }
            if (to.path === '/tools/auto-scripts/') {
                router.push('/tools/auto-scripts/iflow.md')
            }
            if (to.path === '/tools/ieda-platform/') {
                router.push('/tools/ieda-platform/intro.md')
            }
            if (to.path === '/tools/ieda-tools/') {
                router.push('/tools/ieda-tools/imap.md')
            }
            if (to.path === '/train/eda/') {
                router.push('/train/eda/eda-base.md')
            }
            if (to.path === '/train/practice/') {
                router.push('/train/practice/water-drop-eda.md')
            }
        });
    },
    setup() {},
    rootComponents: []
});