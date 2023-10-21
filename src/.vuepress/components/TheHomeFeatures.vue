<template>
    <div class="home-components">
        <el-divider />
        <el-text>平台特性</el-text>
        <el-row
            :gutter="20"
            justify="center"
            align="middle">
            <el-col
                v-for="(item, i) in featuresItemList"
                :key="i"
                :md="6"
                :sm="12"
                :xs="24">
                <el-card
                    :body-style="featuresBodyStyle"
                    shadow="always">
                    <div>
                        <el-image
                            class="features-icon"
                            :src="item.icon">
                        </el-image>
                        <div>{{ item.name }}</div>
                        <el-image
                            class="features-image"
                            v-if="item.type === 'image'"
                            :src="item.media">
                        </el-image>
                        <video
                            v-else-if="item.type === 'video'"
                            :src="item.media">
                        </video>
                        <div>{{ item.text }}</div>
                        <div v-if="item.note" v-html="item.note"></div>
                    </div>
                    <div>
                        <el-button text>
                            详细信息
                            <el-icon class="el-icon--right">
                                <ArrowRight />
                            </el-icon>
                        </el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import { ArrowRight } from "@element-plus/icons-vue";

    const featuresItemList = ref([{
        icon: "https://taichi-lang.cn/language/hpc.svg",
        name: "高性能并行计算",
        type: "video",
        media:  "https://taichi-lang.cn/language/hpc.mp4",
        text: "10亿粒子MPM仿真，据我们所知世界上最高分辨率的单GPU仿真",
        note: ""
    }, {
        icon: "https://taichi-lang.cn/language/automatic-differentiation.svg",
        name: "自动微分",
        type: "video",
        media:  "https://taichi-lang.cn/language/automatic-differentiation.mp4",
        text: "使用自动微分实现软体机器人控制",
        note: "* 比PyTorch、TensorFlow、JAX等框架<a href='https://arxiv.org/pdf/1910.00935.pdf' target='_bank'>显著提速</a>"
    }, {
        icon: "https://taichi-lang.cn/language/flexible-layout.svg",
        name: "灵活数据布局",
        type: "image",
        media:  "https://taichi-lang.cn/language/flexible-layout.png",
        text: "使用SNode语法，不改变计算代码即可快速尝试行优先、列优先等高性能内存排布",
        note: ""
    }, {
        icon: "https://taichi-lang.cn/language/spatially-sparse-data-structures.svg",
        name: "空间稀疏数据结构",
        type: "video",
        media:  "https://taichi-lang.cn/language/spatially-sparse-data-structures.mp4",
        text: "使用空间稀疏数据结构实现的流体仿真",
        note: ""
    }]);
    const featuresBodyStyle = ref({
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        // "height": "98%",
        "text-align": "center"
    });
</script>

<style lang="scss" scoped>
    .el-col {
        padding-bottom: 20px;
    }
    .el-card {
        height: 500px;
        .el-button {
            font-size: var(--el-font-size-large)
        }
        .el-image {
            pointer-events: none;
        }
        .features-icon {
            height: 75px;
        }
        .features-image,
        video {
            width: 230px;
            height: 135px;
            margin-bottom: 25px;
        }
        div:nth-child(2) {
            margin: 15px 0px 25px 0px;
            font-size: 20px;
        }
        div:nth-child(5) {
            margin-top: 15px;
            font-size: var(--el-font-size-small)
        }
    }
</style>
