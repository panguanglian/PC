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

<style>
html{
  height: 100%;
  
}
body{
  height: 100%;
}
#app{
  height: 100%;
}
*{
  margin: 0;
}


    
</style>
