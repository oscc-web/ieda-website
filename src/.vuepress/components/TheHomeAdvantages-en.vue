
        
<template>
    <div class="home-components">
      <el-divider />
      <!-- <div class="title-text">最新动态</div> -->
      <div class="title-text">About iEDA 
        <a  href="/project/intro/"> More</a>
      </div>
      <div class="col-md-6">
        <div class="counter-container">
          <div class="counter-item" v-for="(item, index) in counters" :key="index">
            <div class="box-counter">
              <div class="box-counter-main">
                <div class="counter">{{ item.value }}</div>
              </div>
              <p class="box-counter-title" v-html="item.title"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // counters: [
      //   { value: 1, title: '设计1个EDA公共基础底座<br>包含：解析器，数据库，管理平台，交互引擎' },
      //   { value: 11, title: '完成11款EDA工具<br>包含：iMap、iNO、iFP、iPDN、iPL、iCTS、iTO、iRT、iSTA、iPA(iIR)、iDRC等' },
      //   { value: 3, title: '通过iEDA工具成功进行3次流片<br>2次110nm工艺，1次28nm工艺' },
      //   { value: 410, title: '在开源社区github和gitee<br>累计超400个标星' },
      //   { value: 300000, title: 'iEDA代码量超过30万行<br>(不包括第三方库和历史)' },
      //   { value: 26000, title: 'B站iEDA-视频号<br>已累计播放超26000次' }
      // ]
      counters: [
        { value: 1, title: 'Designed 1 EDA public infrastructure base <br>including: parser, database, management platform, interaction engine' },
        { value: 11, title: 'Completed 11 EDA tools <br>including: iMap, iNO, iFP, iPDN, iPL, iCTS, iTO, iRT, iSTA, iPA(iIR), iDRC, etc.' },
        { value: 5, title: 'Successfully taped out 5 times through iEDA tools, 2 times with 110nm process and 3 time with 28nm process' },
        { value: 500, title: 'In the open-source communities github and gitee accumulated over 500 stars' },
        { value: 400000, title: 'The code volume of iEDA exceeds 400,000 lines <br>(excluding third-party libraries and history)' },
        { value: 60000, title: 'Bilibili iEDA - Video Account <br>has accumulated over 60,000 plays' }
      ]
      
    };
  }
};
</script>



<style scoped lang="scss">
    .el-col {
        padding-bottom: 20px;
    }
    .el-card {
        height: 440px;
        cursor: pointer;
        transition: all 0.3s;  /* 新增悬停效果 */
        &:hover {
            box-shadow: var(--el-box-shadow-dark) !important;
            transform: translateY(-3px);
        }
    }
    .el-image {
        margin-bottom: 10px;
        pointer-events: none;
        border: 1px solid var(--el-color-info);
    }
    .el-tag + .el-tag {
        margin-left: 5px;
    }
    .news-tags {
        margin-bottom: 5px;
    }
    .news-date {
        margin-bottom: 10px;
        font-size: var(--el-font-size-large)
    }
    .news-text {
        font-weight: bold;
        font-size: 18px;
    }
    .title-text {
        font-weight: bold;
        font-size: 25px;
    }

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

.title-text {
  font-weight: bold;
  font-size: 25px;
}

.counter-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.counter-item {
  background-color: #fff;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.box-counter-main .counter {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.box-counter-title {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #666;
}
</style>

