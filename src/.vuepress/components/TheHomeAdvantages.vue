        
<template>
    <div class="home-components">
      <el-divider />
      <div class="title-text">关于iEDA 
        <a  href="/project/intro/"> 查阅更多</a>
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
      counters: [
        { value: 1, title: '设计1个EDA公共基础底座<br>包含：解析器，数据库，管理平台，交互引擎' },
        { value: 11, title: '完成11款EDA工具<br>包含：iMap、iNO、iFP、iPDN、iPL、iCTS、iTO、iRT、iSTA、iPA(iIR)、iDRC等' },
        { value: 5, title: '通过iEDA工具成功进行5次流片<br>2次110nm工艺，3次28nm工艺' },
        { value: 500, title: '在开源社区github和gitee<br>累计超500个标星' },
        { value: 400000, title: 'iEDA代码量超过40万行<br>(不包括第三方库和历史)' },
        { value: 60000, title: 'B站iEDA-视频号<br>已累计播放超50000次' }
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

