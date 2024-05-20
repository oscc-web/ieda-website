<template>
    <el-carousel :interval="5000" type="card" height="300px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </template>
  
  <style scoped>
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>

<!--   
  
  <template>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </template>
  
  <style scoped>
  .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
   -->

<!-- 
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
 -->
