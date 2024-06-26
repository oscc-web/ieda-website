
<template>
  <!-- 关于iEDA -->
  <section class="section bg-default section-md">
    <div class="container">
      <div class="row row-30">
        <div class="col-md-6">
          <h2 class="title-icon">
            <span class="icon icon-default mercury-icon-target-2"></span>
            <span class="text-light">
              <div class="title-text">关于iEDA 
                <a class="button button-primary" href="/project/intro/"> 查阅更多</a>
              </div>
            </span>
          </h2>
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
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      counters: [
        { value: 1, title: '设计1个EDA公共基础底座<br>包含：解析器，数据库，管理平台，交互引擎' },
        { value: 11, title: '完成11款EDA工具<br>包含：iMap、iNO、iFP、iPDN、iPL、iCTS、iTO、iRT、iSTA、iPA(iIR)、iDRC等' },
        { value: 3, title: '通过iEDA工具成功进行3次流片<br>2次110nm工艺，1次28nm工艺' },
        { value: 400, title: '在开源社区github和gitee<br>累计超400个标星' },
        { value: 300000, title: 'iEDA代码量超过30万行<br>(不包括第三方库和历史)' },
        { value: 26000, title: 'B站iEDA-视频号<br>已累计播放超26000次' }
      ]
    };
  }
};
</script>

<style scoped>
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
  border: 1px solid #ffffff;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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




<!-- <template>
    <section class="section bg-default section-md">
        <div class="container">
            <div class="row row-30">
                <div class="col-md-6">
                    <h2 class="title-icon"><span class="icon icon-default mercury-icon-target-2"></span><span
                            class="text-light">关于
                            <span style="font-weight: bold; color: #DC143C;">iEDA</span></span></h2>
                    <h4>关于 iEDA 中的 “i”：</h4>
                    <ul class="list-marked-2" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <li>含义 1: Infrastructure</li>
                        <li>含义 2: Intelligent</li>
                    </ul>
                    <h4>目标：</h4>
                    <ul class="list-marked-2" style="margin-top: 1rem; margin-bottom: 1rem;">
                        <li>构建开源数字EDA基础设施</li>
                        <li>探索新的、有价值的EDA研发方法论和技术</li>
                        <li>实现高质量和高性能的EDA工具</li>
                    </ul><a class="button button-primary" href="#">查阅更多</a>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="col-6">
                            <div class="row">
                                <div class="col-6" v-for="(item, index) in counters" :key="index">
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
                </div>
            </div>
        </div>
    </section>

  </template>
  
  <script>
  export default {
    data() {
      return {
        counters: [
          { value: 3, title: '通过iEDA工具<br>成功进行3次流片' },
          { value: 10, title: '已完成10款工具<br>iNO、iFP、iPL、iCTS……' },
          { value: 30, title: '代码量超过30万行<br>(不包括第三方库和历史)' },
          { value: 50, title: '水滴计划EDA人才培养方案，已培养超过50人' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* CSS styles here */
  </style>
   -->