<template>
  <div>
    <div class="color">
      <img src="../../assets/tu.png" />
      <span>商家入驻</span>
    </div>

    <div class="divbox">
        <div class="loginin">
            <div class="step">
                <div class="step1 active">
                    <div class="tab">1</div>
                    <div>身份验证</div>
                </div>
                <div class="step1">
                    <div class="progress"></div>
                    <div class="tab">2</div>
                    <div>重置密码</div>
                </div>
                <div class="step1">
                    <div class="progress"></div>
                    <div class="tab">3</div>
                    <div>完成</div>
                </div>
            </div>

            <div class="biaodan">
                <div class="form">
                  <div class="dian">
                        <p>请输入你需要找回登录密码的账户名/手机号</p>
                        <el-input v-model="username" placeholder="请输入账户名/手机号"></el-input>
                    </div>
                    <div class="dian">
                        <p>您注册时填写的手机号码</p>
                        <el-input v-model="phone" placeholder="请输入注册时的手机号码"></el-input>
                    </div>
                    <div class="dian">
                        <p>验证码</p>
                        <el-form :inline="true"  class="demo-form-inline">
                            <el-form-item>
                            <el-input v-model="code" placeholder="请输入短信验证码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button :type="zhuantai" @click="codes" :disabled="aaaa" >{{txes}}</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="buttons">
                        <div class="comback" @click="comback">
                            返回登录
                        </div>
                        <div class="neix" @click="neststep">下一步</div>
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
      username:'',
      phone:'',
      code:'',
      txes:"发送验证码",
      num:60,
      zhuantai:'primary',
      aaaa:false
    };
  },
  methods: {
    neststep(){
        var phones= /^1[34578]\d{9}$///手机号码格式验证
        var kong = /\s/;//含有空格正则
          if(!phones.test(this.phone)){
              this.$message({
                message:'输入的手机号码格式不对',
                type:'warning'
            })
          }else if(kong.test(this.username)||this.username.length==0){
              this.$message({
                message:'请输入账户名/手机号',
                type:'warning'
            })
          }else if(kong.test(this.code)||this.code.length<4){
              this.$message({
                message:'请输入验证码',
                type:'warning'
            })
          }else{
              //请求后台验证

              //通过后跳转
              this.$router.push({name:'Forgetpasswordtwo'})
          }
    },
    comback(){
      this.$router.push({name:'login'})
    },
    codes(){
        var phones= /^1[34578]\d{9}$/
        if(this.phone.length==0||!phones.test(this.phone)){
            this.$message({
                message:'输入的手机号码格式不对',
                type:'warning'
            })
        }else{
             var t = setInterval(() => {
                if(this.num>0){
                this.num=this.num-1
                this.zhuantai=''
                this.aaaa=true
                this.txes=this.num+'s'
                }else{
                    clearInterval(t);
                    this.zhuantai='primary'
                    this.aaaa=false
                    this.txes="重新获取验证码"
                    this.num=60
                }

            }, 1000);
        }
           
    },
    changes(index) {
      this.arrnum = index;
    }
  }
};
</script>
<style  scoped>
.neix{
    background: #2e7bee;
    color: #fff;
}
.comback{
    border: 1px solid #DDDDDD;
    color: #9597A6;
}
.buttons div{
    width: 45%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
}
.buttons{
    display: flex;
    justify-content: space-between;
}
.dian p{
    font-size: 12px;
    color: #9597A6;
    margin-bottom: 5px;
}
.dian{
    margin-bottom: 20px;
}
.form{
    width: 50%;
    margin-top: 20px;
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
  width: 160px;
  height: 2px;
  background: #dddddd;
  margin-top: 16px;
}
</style>