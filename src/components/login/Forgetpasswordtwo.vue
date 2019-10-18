<template>
  <div>
    <div class="color">
      <img src="../../assets/logo.png" />
      <span>商家入驻</span>
    </div>

    <div class="divbox">
        <div class="loginin">
            <div class="step">
                <div class="step1 active">
                    <div class="tab">1</div>
                    <div>身份验证</div>
                </div>
                <div class="step1 active">
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
                        <p>输入新的密码</p>
                        <el-input v-model="password" placeholder="密码由6-20位字母和数字组合" type="password" onKeyUp="value=value.replace(/[\W]/g,'')" @change="whatchs"></el-input>
                    </div>

                    <div class="dian">
                        <p>再次输入新的密码</p>
                        <el-input v-model="passwordtwo" placeholder="密码由6-20位字母和数字组合" type="password" onKeyUp="value=value.replace(/[\W]/g,'')"></el-input>
                    </div>
                   
                    <div class="buttons">
                        <div class="comback" @click="comback">
                            上一步
                        </div>
                        <div class="neix" @click="neststep">确定重置</div>
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
      password:'',
      passwordtwo:'',
    };
  },
  methods: {
    neststep(){
        var kong = /\s/;//含有空格正则
        if(kong.test(this.password)||this.password.length<6||this.password>20){
              this.$message({
                message:'输入的密码格式不正确',
                type:'warning'
            })
          }else if(this.password!==this.passwordtwo){
               this.$message({message: '两次输入密码不一致',type: 'warning'});
          }else{
              //请求后台验证

              //通过后跳转
              this.$router.push({name:'Forgetpasswordsuccess'})
          }
    },
    comback(){
      window.history.back(-1)
    },  
    changes(index) {
      this.arrnum = index;
    },
    whatchs(){
        if(this.password.length<6){
            this.$message({message: '密码不能低于6位数',type: 'warning'});
        }else if(this.password.length>20){
                this.$message({message: '密码不能超过20位数',type: 'warning'});
        }
    },
    whatchstwo(){
        if(this.password!=this.passwordtwo){
            this.$message({message: '两次输入密码不一致',type: 'warning'});
        }
            
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
  width: 50px;
  height: 50px;
}
.divbox {
  height: 700px;
  background: #2e7bee;
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