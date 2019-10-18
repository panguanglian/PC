<template>
  <div>
    <div class="color">
      <img src="../../assets/logo.png" />
      <span>商家后台管理</span>
    </div>
    <div class="divbox">
      <div class="loginin">
        <div class="change">
          <div
            :class="arrnum == index ? 'active':''"
            v-for="(item,index) in arr"
            :key="index"
            @click="changes(index)"
          >{{item}}</div>
        </div>
        <div v-if="arrnum ==0 ">
          <el-input placeholder="请输入账户名/手机号" prefix-icon="el-icon-user-solid" v-model="username" class="input"></el-input>
          <el-input type="password" placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="password" class="input"></el-input>
          <div class="button" @click="login_in">登录</div>
          <router-link tag="div" class="button logins" to='enroll'>注册账号，免费入住</router-link>
          <router-link tag="p" class="p" to="Forgetpassword">忘记密码</router-link>
        </div>

         <div v-else>
          <div class="qrcode">
              <img src="../../assets/logo.png">
              <p style="width:100%;text-align:center;font-size:14px;">请使用微信扫描二维码登录</p>
          </div>
        </div>

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
      arr: ["账户登录", "扫码登录"],
      arrnum: 0,
      username: "",
      password:'',
      reusername:'',
      repassword:'', 
      repasswords:'',
      token:null,
    };
  },
  created(){
      
  },
  methods: {
    login_in(){
       var kong = /\s/;//含有空格正则
      if(this.username.length==0||kong.test(this.username)){
        this.$message({message:'请输入账号名或手机号',type:'warning'})
      }else if(this.password.length==0||kong.test(this.password)){
        this.$message({message:'请输入密码',type:'warning'})
      }else{
          this.token=true
          localStorage.setItem("token",this.token)
          this.$message({message:'登录成功',type:'success'})
          this.$router.push({name:'home'})
      }
    },
    changes(index) {
      this.arrnum = index;
    }
  }
};
</script>
<style  scoped>
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
  height: 500px;
  background: #2e7bee;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 200px;
  box-sizing: border-box;
}
.loginin {
  width: 400px;
  background: #fff;
  border-radius: 6px;
  height: 70%;
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
.logins{
  background: #fff;
  color: #2e7bee;
  border: 1px solid #2e7bee;
}
</style>