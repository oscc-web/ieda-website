<template>
    <div class="fullscreen-container">
        <el-carousel
            height="100vh"
            width="100%"
            initial-index="0"
            trigger="hover"
            autuplay="true"
            interval="10000"
            indicator-position=""
            background="#ababab"
            arrow="never"
            type=""
            loop="true"
            direction="horizontal"
            pause-on-hover="true">
            <el-carousel-item>
                <el-container>
                    <el-main>
                        <!-- <div style="background-image: url('/res/images/logo/ieda_logo.png');"></div> -->
                        <!-- <el-image :src="/res/images/logo/ieda_logo.png"></el-image> -->
                        <!-- <el-text>图片1</el-text> -->
                        <!-- <img src="/res/images/logo/ieda_logo.png"> -->
                        <img src="/res/images/index/logo_place.gif">
                    </el-main>
                    <el-footer>
                        <el-button
                            size="Large"
                            type="primary"
                            tag="a"
                            href="/project/intro.html"
                            rel="noopener noreferrer">项目介绍
                        </el-button>
                        <el-button
                            size="Large"
                            type="danger"
                            tag="a"
                            href="/project/team.html"
                            rel="noopener noreferrer">团队介绍
                        </el-button>
                    </el-footer>
                </el-container>
            </el-carousel-item>
            <el-carousel-item>
                <el-container>
                    <el-main>
                        <!-- <el-text>图片2</el-text> -->
                        <!-- <img src="/res/images/index/delay_compare300.gif"> -->
                        <img src="/res/images/index/bs5.jpg">
                    </el-main>
                    <el-footer>
                        <el-button
                            size="large"
                            type="primary"
                            tag="a"
                            href="/project/train.html"
                            rel="noopener noreferrer">EDA知识
                        </el-button>
                        <el-button
                            size="large"
                            type="danger"
                            tag="a"
                            href="/project/train.html"
                            rel="noopener noreferrer">实践训练
                        </el-button>
                    </el-footer>
                </el-container>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>


  
<script setup>
</script>


<style scoped lang="scss">
    .fullscreen-container {
        height: 65vh;
        width: 80vw;
        left: -10vw; /* Adjust the bottom spacing as needed */
        position: relative; /* Add position relative to allow z-index to work */
    }
    .el-main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 65vh; 
        width: 80vw;
        img {
            width: 1200px; /* Adjust the width as needed */
            height: 500px; /* Adjust the height as needed */
            object-fit: cover; 
        }
    }
    .el-footer {
        display: flex;
        justify-content: center;
        position: absolute; /* Position the buttons absolutely within the container */
        left: 28vw; /* Adjust the bottom spacing as needed */
        bottom: 32vh; /* Adjust the bottom spacing as needed */
        z-index: 1; /* Ensure buttons appear on top of images */
    }
    .el-button {
        width: 200px;
        height: 50px;
        font-size: 24px; /* Adjust the font size as needed */
        /* or you can use a specific size like: font-size: 16px; */
        + .el-button {
            margin-left: 50px;
        }
    }
</style>
