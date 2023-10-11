<template>
    <div class="home-components">
        <el-divider />
        <el-text>合作伙伴</el-text>
        <el-row
            :gutter="20"
            justify="center"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList"
                :key="i"
                :span="4">
                <el-image :src="`/res/images/partners/` + item.image"></el-image>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    const partnersItemList = ref([{
        image: "pcl.jpg"
    }, {
        image: "ict.jpg"
    }, {
        image: "bosc.jpg"
    }, {
        image: "ustc.jpg"
    }, {
        image: "ucas.jpg"
    }, {
        image: "gdut.jpg"
    }, {
        image: "szu.jpg"
    }, {
        image: "sysu.jpg"
    }, {
        image: "fzu.jpg"
    }, {
        image: "mnnu.jpg"
    }, {
        image: "pku.jpg"
    }, {
        image: "hkust.jpg"
    }]);

</script>

<style lang="scss" scoped>
    .el-col {
        display: flex;
        justify-content: center;
    }
    .el-image {
        pointer-events: none;
    }
</style>
