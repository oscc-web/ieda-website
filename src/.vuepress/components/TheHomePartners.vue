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
                <el-image :src="`/res/images/index/` + item.image"></el-image>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
       imageUrl: 'example.jpg',
       imageWidth: 100,
       imageHeight: 100
    }
  },
  mounted () {
    this.imageWidth = this.$el.offsetWidth;
    this.imageHeight = this.$el.offsetHeight;
  }
}
</script>
<script setup>
    import { ref } from "vue";
    
    const partnersItemList = ref([{
        image: "pcl.png"
    }, {
        image: "ict.jpg"
    }, {
        image: "bosc.jpg"
    }, {
        image: "ucas.jpg"
    }, {
        image: "fzu.jpg"
    }, {
        image: "mnnu.png"
    }, {
        image: "gdut.png"
    }, {
        image: "szu.jpg"
    }, {
        image: "ustc.png"
    }, {
        image: "cuhk.jpg"
    }, {
        image: "sysu.jpg"
    }, {
        image: "pku.png"
    }, {
        image: "imecas.jpg"
    }, {
        image: "bhu.jpg"
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
    .container{
        width: 10%;
        margin: auto;
    }
    .image{
        width: 10px;
        height: 100px;
    }
</style>
