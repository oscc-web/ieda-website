<template>
    <div class="home-components">
        <el-divider />
        <el-text>用户评价</el-text>
        <el-row
            :gutter="40"
            justify="center"
            align="middle">
            <el-col
                v-for="(item, i) in evaluationItemList"
                :key="i"
                :span="12">
                <el-card
                    :body-style="cardBodyStyle"
                    shadow="always"
                    :style="item.style">
                    <div v-html="item.text"></div>
                    <div class="evaluations-info">
                        <div class="evaluations-author">{{ item.author }}</div>
                        <div>{{ item.identity }}</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const evaluationItemList = ref([{
        text: "Taichi 编程语⾔和传统的 GPU 编程⽅式⽐起来，<span class='evaluations-highlight'>极其容易学习</span>。并且，Taichi 程序⼀次开发后，可在 iOS、Android、PC 等<span class='evaluations-highlight'>多平台运⾏</span>，满⾜了快⼿魔法表情快速迭代的需求，对繁重的设备部署⼯作起到了<span class='evaluations-highlight'>加速作⽤</span>。",
        author: "马重阳",
        identity: "快手 Y-tech 图形 AI 团队负责人",
        style: ""
    }, {
        text: "我们使用 Taichi 替代部分 GPU shader 代码，大大<span class='evaluations-highlight'>简化了开发难度</span>（特别是在调试上）。Taichi 的<span class='evaluations-highlight'>提前编译模式</span>让我们能够在诸如安卓手机之类的不同平台上运行代码。Taichi 让创造出色的、基于物理的算法变得如此<span class='evaluations-highlight'>容易</span>！",
        author: "Gabriel Huau",
        identity: "OPPO Senior Engineering Manager",
        style: ""
    }, {
        text: "Taichi 在设计上非常质朴。仅需少量代码，就可以实现炫酷的视觉效果和复杂的功能，对我的<span class='evaluations-highlight'>科研工作帮助极大</span>。",
        author: "徐浩",
        identity: "香港科技大学计算机工程专业博士生",
        style: ""
    }, {
        text: "以往教学需要基于 C++ 框架，脚手架代码很多，不管是助教出作业还是学生完成作业都有些束手束脚。用了 Taichi 以后，<span class='evaluations-highlight'>生产力</span>有了较大<span class='evaluations-highlight'>提升</span>，可以做一些更复杂的算法。Taichi 的<span class='evaluations-highlight'>自动微分</span>功能也免去了同学们导数 “怎么算也算不对” 的难题。",
        author: "唐经纬",
        identity: "苏黎世联邦理工学院博士生、助教",
        style: ""
    }]);
    const cardBodyStyle = ref({
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        "height": "160px"
    });
</script>

<style lang="scss">
    .evaluations-highlight {
        font-weight: bold;
    }
</style>

<style lang="scss" scoped>
    .el-row {
        margin: auto;
        width: 100%;
        height: 450px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: space-between;
    }
    .evaluations-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    }
    .evaluations-author {
        margin-top: 30px;
        font-weight: bold;
    }
</style>

