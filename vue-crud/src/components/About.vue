<template>
  <div class="container">
    <img class="banner" src="../assets/banner.jpeg" alt="my banner">
    <h1 class="page-header">关于</h1>
    <p>CRUD是指在做计算处理时的增加(Create)、读取查询(Read)、更新(Update)和删除(Delete)几个单词的首字母简写。crud主要被用在描述软件系统中数据库或者持久层的基本操作功能。</p>
    <p>基于Vue的CRUD项目 版本0.0.1</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .banner{
    display: inline-block;
    width:100%;
    height:auto;
  }
</style>
