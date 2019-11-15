<template>
  <div id="app">
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive" ></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style scoped>
#app{
  height: 100%;
}
/* html{
  height: 100%;
  background: #eff8fb;
} */



    
</style>
