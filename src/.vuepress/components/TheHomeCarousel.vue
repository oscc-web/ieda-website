<template>
  <el-carousel :interval="5000" type="card" height="300px">
    <el-carousel-item v-for="(item, index) in imageItems" :key="index">
      <div class="carousel-container">
        <img :src="item.url" alt="Carousel Image" class="carousel-image"/>
        <div class="carousel-text">{{ item.text }}</div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imageItems: [
        { url: '/res/images/publicity/ISEDA/tutorial.jpg', text: 'iEDA团队在ISEDA 2024介绍Tutorial' },
        { url: '/res/images/index/logo_place.gif', text: '用iEDA工具做的芯片版图logo' },
        { url: '/res/images/index/home/IMG_4033.png', text: 'Andrew B. Kahng在介绍国际知名的开源EDA工具' },
        { url: '/res/images/index/home/wh-ab.jpg', text: 'iEDA团队成员王昊和Andrew B. Kahng在ETH的合影' },
        // { url: '/res/images/index/iEDA-tapeout.png', text: '三次流片成功' }
      ]
    };
  }
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  background-color: rgba(119, 116, 116, 0.5);
  padding: 6px;
  border-radius: 2px;
}
</style>

<!-- 
<template>
  <el-carousel :interval="5000" type="card" height="300px">
    <el-carousel-item v-for="(item, index) in imageUrls" :key="index">
      <img :src="item" alt="Carousel Image" class="carousel-image"/>
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imageUrls: [
        // '/res/images/index/iEDA-tapeout.png',
        // '/res/images/index/main-picture.png',
        '/res/images/publicity/ISEDA/tutorial.jpg',
        '/res/images/index/logo_place.gif',
        '/res/images/index/home/IMG_4033.png',
        '/res/images/index/home/wh-ab.jpg',
        // 'https://example.com/image6.jpg'
      ]
    };
  }
};
</script>

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

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style> -->

  

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
