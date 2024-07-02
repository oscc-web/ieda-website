<template><div>
    <div class="contributors">
      <div v-for="(row, index) in rows" :key="index" class="row">
        <div v-for="contributor in row" :key="contributor.username" class="contributor">
          <img :src="contributor.avatarUrl" :alt="contributor.username" class="avatar" style="zoom:70%">
          <span class="username">{{ contributor.username }}</span>
        </div>
      </div>    
    </div>
</div></template>
  
 <script>
  export default {
    data() {
      return {
        contributors: [],
        contributors: [],
        gitee_rows: [],
        rows: []
      };
    },
    async created() {
      try {
        const response = await fetch('https://api.github.com/repos/OSCC-Project/iEDA/contributors');
        const contributors = await response.json();
        this.contributors = contributors.map(contributor => ({
          username: contributor.login,
          avatarUrl: contributor.avatar_url
        }));
        this.splitIntoRows();
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    },
    methods: {
      splitIntoRows() {
        const itemsPerRow = 7; // 每行显示的头像数量
        for (let i = 0; i < this.contributors.length; i += itemsPerRow) {
          this.rows.push(this.contributors.slice(i, i + itemsPerRow));
        }
      }
    }
  };
</script>
  
<style>
  .contributors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .row {
    display: flex;
  }
  
  .contributor {
    margin: 10px;
    text-align: center;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  
  .username {
    display: block;
    margin-top: 3px;
  }
</style>




