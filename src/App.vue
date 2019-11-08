<template>
  <div id="app">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './assets/css/reset.css';
@import './assets/css/common.css';
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
