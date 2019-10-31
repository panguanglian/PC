<template>
  <div class="home">
    <div class="nav">
      <router-link tag="div" to="/system/operation" class="logo">
        <div class="img">
          <img src="" alt />
        </div>
        <div style="font-size:30px;">管理后台</div>
      </router-link>
      <div class="operation">
        <router-link tag="div" to="/system/information">站内信</router-link>|
        <router-link tag="div" to="/system/Customerservice">客服平台</router-link>|
        <router-link tag="div" to="/system/Contactus">联系海露</router-link>|
        <router-link tag="div" to="/system/RuleCenter">规则中心</router-link>|
        <router-link tag="div" to="/system/helpcenter">帮助中心</router-link>|
        <router-link tag="div" to="/system/Downloadclient">下载客户端</router-link>
        <div class="user" @click="usre">
          <div class="head">
              <img src="../../../assets/touxiang.png" alt="">
          </div>
          <div class="info">
            <div class="merchant">{{shopName}}</div>
            <div class="idInfo">{{Accountnumber}}</div>
          </div>
          <div>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
        <div class="hint" v-if="hint">
          <div @click="userInfo">账号信息</div>
          <div @click="tuichu">退出</div>
        </div>
        <!-- <div class="login" @click="dialogVisible = true">退出</div> -->
        <!-- <div class="login">登录</div>|<div class="login">注册</div> -->
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="signout">确 定</el-button>
      </span>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogVisible: false,
      hint:false,
      shopName:''+localStorage.getItem('names')+'',//店铺名称
      Accountnumber:''+localStorage.getItem('numni')+'',//账号名称
    };
  },

  methods: {
    tuichu(){
      let params = new URLSearchParams;
      params.append('Access_token',localStorage.getItem("Access_token"))
      this.axios({
        method:'post',
        url:'/pc/merchantlogin/outlogin',
        data:params,
      })
      this.dialogVisible = true;
      localStorage.removeItem("Access_token");
      this.$router.push({name:'login'})
      
    },
    signout() {
      this.dialogVisible = false;
      this.hint=false
    },
    usre() {
        if(!this.hint){
            this.hint=true
        }else{
            this.hint=false
        }
      
    },
    userInfo(){
       this.hint=false
       this.$router.push({name:'accountinformation'})
    }
  }
};
</script>
<style scoped>
html{
  height: 100%;
  
}
body{
  height: 100%;
}
.home{
  height: 100%;
  background: #EFF8FB;
  
}
.nav {
  width: 90%;
  height: 80px;
  background: #2e7bee;
  display: flex;
  padding: 0 5%;
  align-items: center;
  color: white;
}
.nav > div {
  flex: 1;
}
.operation {
  display: flex;
  position: absolute;
  right: 5%;
  align-items: center;
}
.operation > div {
  margin: 0 30px;
  font-size: 20px;
  cursor: pointer;
}
.login {
  border: 1px solid white;
  border-radius: 5px;
  padding: 0 20px;
}
.user {
  display: flex;
  align-items: center;
}
.user > div {
  margin-right: 10px;
}
.head {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  overflow: hidden;
}
.head img{
    width: 100%;
    height: 100%;
}
.info {
  font-size: 14px;
}
.logo {
  display: flex;
  align-items: center;
}
.img {
  height: 80px;
  width: 130px;
  margin-right: 5px;
}
.img img {
  width: 100%;
  height: 100%;
}
.hint {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 50px;
  right: 0px;
  color: black;
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
  border-radius: 10px;
  background: white;
  z-index: 999;
}
.hint>div{
    font-size: 14px;
    text-align: center;
    width: 150px;
    height: 50px;
    line-height: 50px;
}
</style>