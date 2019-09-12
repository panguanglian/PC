<template>
  <div id="app">
      <div class="nav">
      <div class="logo">
          <div>这是logo</div>
          <div>商家入驻</div>
      </div>
      <div class="operation">
          |<div>联系海露</div>
          |<div>规则中心</div>
          |<div>下载客户端</div>
          <div>159998888</div>
          |<div>退出</div>
        
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
  margin: 0;
}
html{
  background: #EFF8FB;
}
.nav{
        width: 90%;
        height: 80px;
        background: #2E7BEE;
        display: flex;
        padding: 0 5%;
        align-items: center;
        color: white;
    }
    .nav>div{
        flex: 1;
    }
    .operation{
        display: flex;
        position: absolute;
        right: 5%;
    }
    .operation>div{
        
         margin: 0 30px;
         /* border-left: 1px solid white; */
    }
    .operation>div:last-child{
        border: 1px solid white;
        border-radius: 5px;
        padding: 0 20px;
       
    }
    .logo{
      display: flex;
    }
</style>
