
<template>
    <div class="home-components">
        <el-divider />
        <el-text></el-text>
        <el-row
            :gutter="30"
            justify="center"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>逻辑综合小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_LS"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>布局小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_PL"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>布线小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_RT"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>物理验证小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_PV"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>签核小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_SO"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>平台小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_Platform"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>云平台小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_cloud"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
        <el-divider />
        <el-text>芯片设计小组</el-text>
        <el-row
            :gutter="30"
            justify="left"
            align="middle">
            <el-col
                v-for="(item, i) in partnersItemList_BE"
                :key="i"
                :span="partnerObj.col"
                style="text-align:center;">
                <el-image
                    :src="`/res/images/project/team/` + item.image"
                    :style="{
                        'width': '100px',
                        'max-width': partnerObj.width,
                        'transform': 'scale(' + item.scale + ')'
                    }">
                </el-image>
                <div class="home-components">{{ item.name }}</div>
                <div class="home-components">{{ item.email }}</div>
            </el-col>
        </el-row>
    </div>
</template>


<script lang="ts" setup>
    import { onMounted, onUnmounted, ref, shallowRef } from "vue";

    const partnersItemList = shallowRef([
        {
        image: "解壁伟.png",
        name: '解壁伟',
        email: 'xiebiwei@ict.ac.cn',
        scale: 1
    }, {
        image: "李兴权.png",
        name: '李兴权',
        email: 'fzulxq@gmail.com',
        scale: 1
    }]);

    const partnersItemList_LS = shallowRef([
       {
        image: "倪利伟.png",
        scale: 0.8
    }, {
        image: "刘俊锋.jpg",
        scale: 1
    }, {
        image: "林晓泽.png",
        scale: 1
    }, {
        image: "杨宗霖.jpg",
        scale: 1
    }, {
        image: "王瑞.png",
        scale: 1
    }]);

    const partnersItemList_PL = shallowRef([
        {
        image: "陈仕健.png",
        scale: 1
    }, {
        image: "邱奕杭.png",
        scale: 1
    }, {
        image: "何波.png",
        scale: 1
    }, {
        image: "黄富兴.png",
        scale: 1
    }]);

    const partnersItemList_RT = shallowRef([
    {
        image: "曾智圣.png",
        scale: 1
    }, {
        image: "刘继康.png",
        scale: 1
    }]);
    
    const partnersItemList_PV = shallowRef([
    {
        image: "李逸帆.png",
        scale: 1
    },{
        image: "郭帆.png",
        scale: 1
    }]);
    
    const partnersItemList_SO = shallowRef([
    {
        image: "陶思敏.png",
        scale: 0.8
    }, {
        image: "龙帅英.png",
        scale: 1
    }, {
        image: "刘贺.png",
        scale: 1
    }, {
        image: "杨博.png",
        scale: 1
    }, {
        image: "吴鸿熙.png",
        scale: 1
    }, {
        image: "李伟国.png",
        scale: 1
    }, {
        image: "梁宇耀.png",
        scale: 1
    }, {
        image: "邵哲青.png",
        scale: 1
    }]);
    
    const partnersItemList_AI = shallowRef([
    {
        image: "黄志鹏.png",
        scale: 1
    }, {
        image: "赵杰.png",
        scale: 0.8
    }, {
        image: "叶欣雨.png",
        scale: 1
    }, {
        image: "赵雪岩.png",
        scale: 1
    }, {
        image: "刘睿之.png",
        scale: 1
    }, {
        image: "刘悦佐.png",
        scale: 1
    }]);
    
    const partnersItemList_Platform = shallowRef([
    {
        image: "黄增荣.png",
        scale: 1
    }, {
        image: "伍振东.png",
        scale: 1
    }]);
    
    const partnersItemList_cloud = shallowRef([
    {
        image: "王昊.png",
        scale: 1
    }, {
        image: "蔡建峰.png",
        scale: 1
    }]);
    
    const partnersItemList_BE = shallowRef([
    {
        image: "庄楚楠.png",
        scale: 1
    }, {
        image: "刘柏均.png",
        scale: 1
    }]);


    const partnerObj = ref({
        col: 8,
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
        partnerObj.value.col = (window.innerWidth >= 1200) ? 5  :
                               (window.innerWidth >= 800 ) ? 8  :
                               (window.innerWidth >= 600 ) ? 12 : 24;
        partnerObj.value.width = (window.innerWidth >= 1200) ? "90%" :
                                 (window.innerWidth >=  800) ? "80%" : "70%";
    }
</script>

<style lang="scss" scoped>
</style>



<!-- <template>
    <div class="col-md-12 row">
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <center><img :src="teamMembers[0].image" alt="..." class="img-rounded img-responsive center-block" :style="{ borderRadius: '15px', backgroundColor: 'transparent', boxShadow: '0px 0px 8px 5px #ccc', width: '8rem', height: '10rem' }"></center>
        <p><center>{{ teamMembers[0].name }}&nbsp;&nbsp;&nbsp;&nbsp;{{ teamMembers[0].role }}<br>{{ teamMembers[0].email }}</center></p>
        <p><center>{{ teamMembers[0].quote }}</center></p>
      </div>
      <div class="col-md-3">
        <center><img :src="teamMembers[1].image" alt="..." class="img-rounded img-responsive center-block" :style="{ borderRadius: '15px', backgroundColor: 'transparent', boxShadow: '0px 0px 8px 5px #ccc', width: '8rem', height: '10rem' }"></center>
        <p><center>{{ teamMembers[1].name }}&nbsp;&nbsp;&nbsp;&nbsp;{{ teamMembers[1].role }}<br>{{ teamMembers[1].email }}</center></p>
        <p><center>{{ teamMembers[1].quote }}</center></p>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  /* 根据需要添加样式 */
  </style> -->

<!-- 
  const partnersItemList_LS = shallowRef([
        {
        image: "解壁伟.png",
        name: '解壁伟',
        email: 'xiebiwei@ict.ac.cn',
        scale: 1
    }, {
        image: "李兴权.png",
        name: '李兴权',
        email: 'fzulxq@gmail.com',
        scale: 1
    }, {
        image: "倪利伟.png",
        scale: 0.8
    }, {
        image: "刘俊锋.jpg",
        scale: 1
    }, {
        image: "林晓泽.png",
        scale: 1
    }, {
        image: "杨宗霖.jpg",
        scale: 1
    }, {
        image: "王瑞.png",
        scale: 1
    }, {
        image: "陈仕健.png",
        scale: 1
    }, {
        image: "邱奕杭.png",
        scale: 1
    }, {
        image: "何波.png",
        scale: 1
    }, {
        image: "黄富兴.png",
        scale: 1
    }, {
        image: "曾智圣.png",
        scale: 1
    }, {
        image: "刘继康.png",
        scale: 1
    }, {
        image: "郭帆.png",
        scale: 1
    }, {
        image: "陶思敏.png",
        scale: 0.8
    }, {
        image: "龙帅英.png",
        scale: 1
    }, {
        image: "刘贺.png",
        scale: 1
    }, {
        image: "杨博.png",
        scale: 1
    }, {
        image: "吴鸿熙.png",
        scale: 1
    }, {
        image: "李伟国.png",
        scale: 1
    }, {
        image: "梁宇耀.png",
        scale: 1
    }, {
        image: "邵哲青.png",
        scale: 1
    }, {
        image: "黄志鹏.png",
        scale: 1
    }, {
        image: "赵杰.png",
        scale: 0.8
    }, {
        image: "叶欣雨.png",
        scale: 1
    }, {
        image: "赵雪岩.png",
        scale: 1
    }, {
        image: "刘睿之.png",
        scale: 1
    }, {
        image: "刘悦佐.png",
        scale: 1
    }, {
        image: "邓钦艺.png",
        scale: 1
    }, {
        image: "王昊.png",
        scale: 1
    }, {
        image: "蔡建峰.png",
        scale: 1
    }, {
        image: "黄增荣.png",
        scale: 1
    }, {
        image: "庄楚楠.png",
        scale: 1
    }, {
        image: "伍振东.png",
        scale: 1
    }]); -->
