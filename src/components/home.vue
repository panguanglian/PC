<template>
  <div class="home">
    <div class="title">请选择您的店铺类型</div>
    <div class="">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
        activeName: 'second'
    };
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  width: 100%;
  text-align: center;
  margin: 2% 0;
  font-size: 18px;
}
</style>