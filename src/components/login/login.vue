<template>
  <div style="background: white; height: 100%;">
    <div class="color">
      <img src="../../assets/tu.png" />
      <span>商家后台管理</span>
    </div>
    <div class="divbox">
      <img src="../../assets/login_img.png" class="box_img">
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
          <el-input placeholder="请输入账户名" prefix-icon="el-icon-user-solid" v-model="username" class="input"></el-input>
          <el-input type="password" placeholder="请输入密码" prefix-icon="el-icon-unlock" v-model="password" class="input"></el-input>
          <div class="button shou" @click="login_in">登录</div>
          <router-link tag="div" class="button logins shou" to='enroll'>注册账号，免费入驻</router-link>
          <!-- <router-link tag="p" class="p shou" to="Forgetpassword">忘记密码</router-link> -->
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

      <el-dialog
        title="审核未通过或未填写入驻信息"
        :visible.sync="dialogVisible"
        width="30%"
        >
        <span>是否前往填写入驻信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="queding">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ["账户登录" ],//"扫码登录"
      arrnum: 0,
      username: "",
      password:'',
      token:null,
      dialogVisible: false,
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
          let params = new URLSearchParams;
          params.append('landingAccount',this.username);
          params.append('landingPassword',this.password);
          this.axios({
            method:'post',
            url:'/pc/merchantlogin/land',
            data:params,
          }).then((res)=>{
            console.log(res.data)
            if(res.data.code==0){
              if(res.data.data.result==309){
                localStorage.setItem('Access_token',res.data.data.Access_token)
                this.$message({message:'未填写信息,请填写信息',type:'warning'})
                sessionStorage.setItem("numid",'')
                this.$router.push({name:'Businesslicense'})
                this.dialogVisible=true
              }else if(res.data.data.result==308){
                localStorage.setItem('Access_token',res.data.data.Access_token)
                sessionStorage.setItem("numid",res.data.data.mcMemberId)
                this.$message({message:'该账号信息审核不通过,请重新填写',type:'warning'})
                this.$router.push({name:'Businesslicense'})
                this.dialogVisible=true
              }else if(res.data.data.result==307){
                this.$message({message:'信息正在审核中....',type:'warning'})
              }else{
                // console.log(res.data.data.netWorkName)
                  this.$message({message:'登录成功',type:'success'})
                  localStorage.setItem('Access_token',res.data.data.Access_token)
                  localStorage.setItem('names',res.data.data.netWorkName)
                  localStorage.setItem('numni',res.data.data.landingAccount)
                  localStorage.setItem('numid',res.data.data.mcMemberId)
                  console.log(res.data.data.mcMemberId)
                  this.$router.push({name:'system',})
              }
            }else if(res.data.code==801){
              this.$message({message:'账号未注册',type:'warning'})
            }else if(res.data.code==802){
              this.$message({message:'账号或密码错误',type:'warning'})
            }else if(res.data.code==999){
                this.$message({message:'登录超时',type:'warning'})
            }
          })
      }

    },
    changes(index) {
      this.arrnum = index;
    },
    queding(){
      this.dialogVisible=false
      this.$router.push({name:'Businesslicense'})
    }
  }
};
</script>
<style scoped>

.shou{
  cursor: pointer;
}
html{
  background: white;
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
  font-size: 00.9rem

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
  width: 150px;
  height: 70px;
  margin-right: 10px;
}
.divbox {
  height: 500px;
  background: #EFF8FB;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 200px;
  box-sizing: border-box;

}
.box_img{
  position: absolute;
  left: 200px;
  top: 200px;
  width: 400px;
  height: 400px;
}
.loginin {
  width: 400px;
  background: #fff;
  border-radius: 6px;
  height: 70%;
  padding: 10px 30px;
  box-shadow: 1px 4px 25px -6px #8AB6F8;
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
  cursor: pointer;
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
