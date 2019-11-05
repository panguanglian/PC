<template>
  <div style="height:100%;background:#EFF8FB;">
    <div class="color">
      <img src="../../assets/tu.png" />
      <span>商家入驻</span>
    </div>

    <div class="divbox">
        <div class="loginin">
            <div class="step">
                <div class="step1 active">
                    <div class="tab">1</div>
                    <div>身份信息</div>
                </div>
                <div class="step1 active">
                    <div class="progress"></div>
                    <div class="tab">2</div>
                    <div>店铺信息</div>
                </div>
                <div class="step1 active">
                    <div class="progress"></div>
                    <div class="tab">3</div>
                    <div>信息提交成功</div>
                </div>
            </div>

            <div class="biaodan">
                <div class="form" v-if="successerror">
                   <i class="iconfont icon-xiaolian sizes"></i>
                   <h3 class="hstren">提交资料成功</h3>
                   <p class="ps">店铺审核将在 2 个工作日内完成，如有第三方平台店铺，可先绑定第三方平台店铺</p>
                   <div class="buttonsbox">
                        <div class="buttons" @click="conbacklogin">完成</div>
                   </div>
                </div>
                
            </div>



        </div>
    </div>
        
            
         
        
     
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      successerror:true
    };
  },
  methods: {
      conbacklogin(){
          this.$router.push({name:'login'})
      }
  }
};
</script>
<style  scoped>
.buttons{
    width: 50%;
    background: #2E7BEE;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #fff; 
    border-radius: 6px;

}
.buttonsbox{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.ps{
  font-size: 12px;
    margin-top: 20px;
    color: #9597a6;

}
.hstren{
    width: 100%;
    text-align: center;
    font-size:24px;
    color: #9597A6;
}
.sizes{
    margin-top: 20px;
    font-size: 200px;
    color: #2E7BEE;
}
.form{
    width: 50%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.biaodan{
    width: 100%;
    display: flex;
    justify-content: center;
}
.color {
  padding: 2%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
  background: #FFF;
}
.color img {
  width: 150px;
  height: 70px;
  margin-right: 10px;
}
.divbox {
  height: 700px;
  /* background: #2e7bee; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginin {
  width: 60%;
  background: #fff;
  border-radius: 6px;
  height: 80%;
  padding: 10px 30px;

}
.change {
  display: flex;
  border-bottom: 1px solid #dddddd;
  justify-content: space-around;
  height: 10%;
}
.change div {
  height: 100%;
  color: #707070;
  width: 100%;
  display: flex;
  justify-content: center;
}
.change div.active {
  border-bottom: 1px solid #030303;
  color: #030303;
}
.button{
    margin-top: 25px;
    background: #2e7bee;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 6px;
}
.input{
    margin-top: 25px;
}
.p{
    margin-top: 5px;
    display: flex;
    justify-content: flex-end;
    padding-right: 5px;
    color: #707070;
    font-size: 12px;
}
.step {
  display: flex;
  justify-content: center;
  padding: 2%;
  border-bottom: #dddddd 1px solid;
}
.step .active .tab {
  background: #0090fa;
  color: #ffffff;
  border: 1px solid #0090fa;
}

.step .active .progress {
  background: #0090fa;
}
.step1 {
  display: flex;
}
.step1 div {
  height: 34px;
  line-height: 34px;
  color: #9597a6;
  margin-right: 15px;
}
.step1 .tab {
  width: 34px;
  border-radius: 50%;
  background: #ffffff;
  color: #9597a6;
  text-align: center;
  border: 1px solid #dddddd;
}
.step1 .progress {
  width: 100px;
  height: 2px;
  background: #dddddd;
  margin-top: 16px;
}
</style>