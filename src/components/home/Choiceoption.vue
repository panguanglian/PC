<template>
  <div>
    <div class="color">
      <img src="../../assets/logo.png" />
      <span>商家后台管理</span>
    </div>
    <div class="divbox">
      <p class="optionhang">请选择您经营的行业</p>

      <div class="optioninfo">
          <router-link v-for="(item,index) in arr" :key="index"  tag="div" class="items" :class="index==current?'active':''" to="" @mouseenter="enter(index)" @mouseleave="leave()" >
            <img :src="item.img">
            <p >{{item.title}}</p>
          </router-link>
      </div>
    </div>
    <p class="pclolr"><span>网站地图</span><span>︱法律声明</span><span>︱友情链接</span></p>
    <p style="text-align:center;font-size:14px;margin-top:10px;">© 1998-2038 珠海海露智能物联有限公司 版权所有</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current:0,
      arr:[
          {img:'../../assets/logo.png',title:'美食'},
          {img:'../../assets/logo.png',title:'百货购物'},
          {img:'../../assets/logo.png',title:'酒店住宿'},
          {img:'../../assets/logo.png',title:'旅游景点'},
          {img:'../../assets/logo.png',title:'休闲娱乐'},
          {img:'../../assets/logo.png',title:'生活服务'},
          {img:'../../assets/logo.png',title:'厂商联盟'},
      ]
    };
  },
  created(){
      
  },
  methods: {
    enter(index){
    this.current = index;
   },
   leave(){
    this.current = null;
   }
      
  }
};
</script>
<style  scoped>
.items img{
    width: 80px;
    height: 80px;
}
.items{
    width: 150px;
    height: 200px;
    border-radius: 6px;
    background: #fff;
    margin-right: 20px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-flow: row wrap;
}
.items p{
    text-align: center;
    width: 100%;
}
.items.active{
    box-shadow: 5px 5px 15px #73A8F6;
}
.optioninfo{
    margin-top: 80px;
    display: flex;
    justify-content: center;
}
.optionhang{
    color: #707070;
    font-size: 26px;
    text-align: center;
}
.qrcode{
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
.qrcode img{
  width: 200px;
  height: 200px;
}
.pclolr{
  margin-top: 10px;
  color: #2e7bee;
  text-align: center;

}
.color {
  padding: 2%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
}
.color img {
  width: 50px;
  height: 50px;
}
.divbox {
  height: 600px;
  padding-top: 80px;
  background: #EFF8FB;
  box-sizing: border-box;
}

</style>