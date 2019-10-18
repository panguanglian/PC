<template>
  <div>
    <div class="color">
      <img src="../../assets/logo.png" />
      <span>商家入驻</span>
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
          <router-link tag="p" class="p" to="Forgetpassword">忘记密码</router-link>
        </div>

         <div v-else>
          <el-input placeholder="请输入账户名/手机号" prefix-icon="el-icon-user-solid" v-model="reusername" class="input"></el-input>
          <el-input type="password" placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="repassword" class="input"></el-input>
          <el-input type="password" placeholder="请再次输入密码" prefix-icon="el-icon-unlock" v-model="repasswords" class="input"></el-input>
          <div class="button">注册</div>
        </div>

      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ["登录", "注册"],
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
</style>