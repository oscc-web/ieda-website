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
        image: "/res/images/index/home/dac24.jpg",
        tags: ["EDA", "DAC"],
        date: "2024-06-24",
        text: "iEDA团队参加61届Design Automation Conference (DAC)，并做3场学术报告"
    }, {
        image: "https://www.anlogic.com/Public/ueditor/upload/image/20231229/1703853669609094.jpeg",
        tags: ["EDA", "精英挑战赛", "麒麟杯"],
        date: "2023-12-26",
        text: "由iEDA团队参与出题并组织的EDA精英挑战赛赛题二获得竞赛最高奖—麒麟杯奖"
    }, {
        image: "https://ieda.oscc.cc/res/images/publicity/publicity/iccad_first.png",
        tags: ["EDA", "ICCAD", "Contest"],
        date: "2022-10-03",
        text: "CAD Contest ICCAD获奖名单公布，华人包揽所有奖项，获两项冠军，创历史佳绩"
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
