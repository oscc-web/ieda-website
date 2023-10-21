<template>
    <div class="home-components">
        <el-divider />
        <el-text>最新动态</el-text>
        <el-row
            :gutter="20"
            justify="center"
            align="middle">
            <el-col
                v-for="(item, i) in newsItemList"
                :key="i"
                :md="8"
                :sm="8"
                :xs="24">
                <el-card
                    :body-style="newsBodyStyle"
                    shadow="always">
                    <el-image :src="item.image"></el-image>
                    <div class="news-tags">
                        <el-tag
                            v-for="(tag, j) in item.tags"
                            :key="j"
                            effect="dark">
                            {{ tag }}
                        </el-tag>
                    </div>
                    <div class="news-date">{{ item.date }}</div>
                    <div class="news-text">{{ item.text }}</div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const newsItemList = ref([{
        image: "https://www.chipsalliance.org/news/verilator-model-generation-performance-improvements-and-initial-multithreaded-verilation-support/Accelerating-model-generation-in-Verilator--blog-CHIPS.svg",
        tags: ["Verilator"],
        date: "2023-09-29",
        text: "Verilator模型生成性能改进和对多线程验证的初步支持"
    }, {
        image: "https://www.chipsalliance.org/news/progress-in-open-source-systemverilog-uvm-support-in-verilator/scaling-verilator--chips-alliance.png",
        tags: ["Verilator", "SV", "UVM"],
        date: "2023-07-21",
        text: "Verilator对开源SystemVerilog和UVM支持的进展"
    }, {
        image: "https://www.chipsalliance.org/news/open-source-rtl-ci-testing-and-verification-for-caliptra-veer/CI-driven-testing-for-VeeR_blog_chips.png",
        tags: ["RISC-V"],
        date: "2023-07-04",
        text: "面向Caliptra RISC-V VeeR内核的RTL测试和验证（基于开源和CI驱动方法）"
    }]);
    const newsBodyStyle = ref({
        "display": "flex",
        "flex-direction": "column"
    });
</script>

<style scoped lang="scss">
    .el-col {
        padding-bottom: 20px;
    }
    .el-card {
        height: 450px;
        cursor: pointer;
    }
    .el-image {
        margin-bottom: 10px;
        pointer-events: none;
        border: 1px solid var(--el-color-info);
    }
    .el-tag + .el-tag {
        margin-left: 5px;
    }
    .news-tags {
        margin-bottom: 5px;
    }
    .news-date {
        margin-bottom: 10px;
        font-size: var(--el-font-size-large)
    }
    .news-text {
        font-weight: bold;
        font-size: 25px;
    }
</style>
