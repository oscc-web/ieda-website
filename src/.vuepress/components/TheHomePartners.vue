<template>
    <div class="home-components">
        <el-divider />
        <el-text>合作伙伴</el-text>
        <el-row
            :gutter="10"
            justify="center"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/index/` + item.image"
                    :style="{
                        'width': '150px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, onUnmounted, ref, shallowRef } from "vue";

    const partnersItemList = shallowRef([{
        image: "pcl.png",
        scale: 1
    }, {
        image: "ict.jpg",
        scale: 1
    }, {
        image: "bosc.jpg",
        scale: 0.8
    }, {
        image: "ucas.jpg",
        scale: 1
    }, {
        image: "fzu.jpg",
        scale: 1
    }, {
        image: "mnnu.png",
        scale: 1
    }, {
        image: "gdut.png",
        scale: 1
    }, {
        image: "szu.jpg",
        scale: 1
    }, {
        image: "ustc.png",
        scale: 1
    }, {
        image: "cuhk.jpg",
        scale: 1
    }, {
        image: "sysu.jpg",
        scale: 1
    }, {
        image: "pku.png",
        scale: 1
    }, {
        image: "imecas.jpg",
        scale: 1
    }, {
        image: "bhu.jpg",
        scale: 1
    }, {
        image: "hkust.jpg",
        scale: 0.8
    }]);
    const partnerObj = ref({
        col: 4,
        width: "90%"
    });

    onMounted(() => {
        getWindowWidth();
        window.addEventListener("resize", getWindowWidth);
    });
    onUnmounted(() => {
        window.removeEventListener("resize", null);
    });
    const getWindowWidth = () => {
        partnerObj.value.col = (window.innerWidth >= 1200) ? 4  :
                               (window.innerWidth >= 800 ) ? 6  :
                               (window.innerWidth >= 600 ) ? 12 : 24;
        partnerObj.value.width = (window.innerWidth >= 1200) ? "90%" :
                                 (window.innerWidth >=  800) ? "80%" : "70%";
    }
</script>

<style lang="scss" scoped>
</style>
