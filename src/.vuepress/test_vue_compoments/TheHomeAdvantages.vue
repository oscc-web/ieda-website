<template>
    <section class="section bg-default section-md">
      <div class="container">
        <div class="row row-30">
          <div class="col-md-6">
            <h2 class="title-icon">
              <span class="icon icon-default mercury-icon-target-2"></span>
              <span class="text-light">关于 <span style="font-weight: bold; color: #DC143C;">iEDA</span></span>
            </h2>
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
            </ul>
            <a class="button button-primary" href="#">查阅更多</a>
          </div>
          <div class="col-md-6">
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
  