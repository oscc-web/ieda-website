<template>
    <div class="home-components">
        <el-divider />
        <el-text>用户评价</el-text>
        <el-row
            :gutter="40"
            justify="center"
            align="middle">
            <el-col
                v-for="(item, i) in evaluationsItemList"
                :key="i"
                :md="12"
                :sm="12"
                :xs="24">
                <el-card
                    :body-style="evaluationsBodyStyle"
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

    const evaluationsItemList = ref([{
        text: "iEDA相对传统的封闭EDA芯片设计模式⽐起来，<span class='evaluations-highlight'>极其容易学习</span>。并且，iEDA程序⼀次开发后，可在灵活的扩展自己科研、教学和芯片设计的需求<span class='evaluations-highlight'>多平台运⾏</span>，满⾜了芯片设计者和EDA工具算法研发人员的需求。",
        author: "张三",
        identity: "**芯片设计团队负责人",
        style: ""
    }, {
        text: "我们使用iEDA替代部分C++代码，大大<span class='evaluations-highlight'>简化了开发难度</span>（特别是在调试上）。iEDA的<span class='evaluations-highlight'>提前编译模式</span>让我们能够在不同平台上运行代码。iEDA让创造出色的、基于物理设计的算法变得如此<span class='evaluations-highlight'>容易</span>！",
        author: "李四",
        identity: "** Senior Engineering Manager",
        style: ""
    }, {
        text: "iEDA在设计上非常质朴。仅需少量代码，就可以实现炫酷的GUI和复杂的功能，对我的<span class='evaluations-highlight'>科研工作帮助极大</span>。",
        author: "王五",
        identity: "**大学计算机工程专业博士生",
        style: ""
    }, {
        text: "以往教学需要基于C++框架，脚手架代码很多，不管是助教出作业还是学生完成作业都有些束手束脚。用了iEDA以后，<span class='evaluations-highlight'>生产力</span>有了较大<span class='evaluations-highlight'>提升</span>，可以做一些更复杂的算法。iEDA的<span class='evaluations-highlight'>开源EDA基础底座</span>功能也免去了同学们无法实现EDA课程作业难题。",
        author: "朱八",
        identity: "**博士生、助教",
        style: ""
    }]);
    const evaluationsBodyStyle = ref({
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "space-between",
        "height": "200px"
    });
</script>

<style lang="scss">
    .evaluations-highlight {
        font-weight: bold;
    }
</style>

<style lang="scss" scoped>
    .el-col {
        padding-bottom: 20px;
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

