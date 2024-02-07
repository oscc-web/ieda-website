
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

////////////

<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <div class="swiper-slide-caption section-lg" style="padding-top: 40%;">
            <div class="container">
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-2">
                  <div class="button-wrap-default" data-caption-animate="fadeInUp" data-caption-delay="450">
                    <a class="button button-secondary-text" :href="slide.button1.link" :style="{ color: 'white', backgroundColor: slide.button1.color }">{{ slide.button1.text }}</a>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="button-wrap-default" data-caption-animate="fadeInUp" data-caption-delay="450">
                    <a class="button button-secondary-text" :href="slide.button2.link" :style="{ color: 'white', backgroundColor: slide.button2.color }">{{ slide.button2.text }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </template>
  
  <script>
  import Swiper from 'swiper';
  
  export default {
    data() {
      return {
        slides: [
          {
            imageUrl: '/res/images/index/logo_place.gif',
            button1: {
              text: '项目介绍',
              color: '#6495ED',
              link: '#'
            },
            button2: {
              text: '团队介绍',
              color: '#DC143C',
              link: '#'
            }
          },
          {
            imageUrl: '/res/images/index/bs5.jpg',
            button1: {
              text: 'EDA流程',
              color: '#6495ED',
              link: '#'
            },
            button2: {
              text: 'EDA工具',
              color: '#DC143C',
              link: '#'
            }
          },
          {
            imageUrl: '/res/images/index/bs5.jpg',
            button1: {
              text: '研究课题',
              color: '#6495ED',
              link: '#'
            },
            button2: {
              text: '流片情况',
              color: '#DC143C',
              link: '#'
            }
          }
        ],
        swiper: null
      };
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 5000
        },
        simulateTouch: false,
        pagination: {
          el: '.swiper-pagination'
        }
      });
    },
    destroyed() {
      if (this.swiper) {
        this.swiper.destroy();
      }
    }
  };
  </script>
  
  <style>
  /* CSS styles here */
  </style>
  