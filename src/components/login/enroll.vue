<template>
  <div class="enroll">
    <div class="color">
      <img src="../../assets/tu.png" />
      <span>海露后台管理</span>
    </div>
    <div class="contents">
      <div class="title">注册账号，免费入驻</div>
      <div class="inputs">
        <input type="text" placeholder="账号，6-20位数字、英文" v-model="account"/>
      </div>
      <div class="inputs">
        <input type="password" placeholder="密码，6-18位字符，必须有数字、英文两种" v-model="password"/>
      </div>
      <div class="inputs">
        <input type="password" placeholder="密码，6-18位字符，必须有数字、英文两种" v-model="passwords"/>
      </div>
      <div class="inputs">
        <input type="text" v-model="phone" placeholder="账号使用者手机号码" />
      </div>
      <div class="verify">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="code" placeholder="短信验证码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :type="zhuantai" @click="codes" :disabled="aaaa">{{txes}}</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="btn" @click="next">注册并前往入驻</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txes: "获取验证码",
      aaaa: false,
      zhuantai: "primary",
      num:60,
      code: "",//验证码
      phone: "",//手机号码
      account:'',//用户账号
      password:'',//密码
      passwords:''//二次密码
    };
  },
  methods: {
    next() {
      var phones = /^1[34578]\d{9}$/; //手机号码格式验证
      var kong = /\s/; //含有空格正则
      var hanzi=/[\u4E00-\u9FA5]/;
    
      if(kong.test(this.account)||this.account.length<6||this.account.length>20){
           this.$message({
                message:'输入的账号格式不正确',
                type:'warning'
            })
      }else if(hanzi.test(this.account)||this.account.length<6||this.account.length>20){
          this.$message({
                message:'账号只能由数子或英文组成',
                type:'warning'
            })
      }else if(kong.test(this.password)||this.password.length<6||this.password.length>20){
          this.$message({
                message:'输入的密码格式不正确',
                type:'warning'
            })
      }else if(hanzi.test(this.password)||this.password.length<6||this.password.length>20){

      }else if(this.password!==this.passwords){
          this.$message({message: '两次输入密码不一致',type: 'warning'});
      }else if(!phones.test(this.phone)){
          this.$message({
                message:'输入的手机号码格式不对',
                type:'warning'
            })
      }else if(kong.test(this.code)||this.code.length<4){
          this.$message({
                message:'请输入验证码',
                type:'warning'
            })
      }else{
         let params=new URLSearchParams();
         params.append('phone',this.phone);
         params.append('code',this.code );
         params.append('landingaccount',this.account);
         params.append('landingpassword',this.password);
         this.axios({
           method:'post',
          url:'/pc/merchantlogin/register',
          data:params
         }).then((res)=>{
          //  console.log(res)
           if(res.data.code==0){
             localStorage.setItem('Access_token',res.data.data.accessToken)
             this.$message({
               message:'注册'+res.data.msg+'',
               type:'success'
             })
             this.$router.push({name:'Choiceoption'})
           }else if(res.data.code==233){
              this.$message({
               message:''+res.data.msg+'',
               type:'error'
             })
           }else if(res.data.code==207){
              this.$message({
               message:''+res.data.msg+'',
               type:'error'
             })
           }else if(res.data.code==807){
              this.$message({
               message:''+res.data.msg+'',
               type:'error'
             })
           }
         })
          
      }
    },
    codes() {
      var phones = /^1[34578]\d{9}$/;
      if (!phones.test(this.phone)) {
        this.$message({
          message: "输入的手机号码格式不对",
          type: "warning"
        });
      } else {
        let params=new URLSearchParams();
        params.append('phone',this.phone);
        this.axios({
          method:'post',
          url:'/pc/merchantlogin/existsms',
          data:params
        })
        .then(res=>{
          
        })
          var t = setInterval(() => {
          if (this.num > 0) {
            this.axios.post()
            this.num = this.num - 1;
            this.zhuantai = "";
            this.aaaa = true;
            this.txes = this.num + "s";
          } else {
            clearInterval(t);
            this.zhuantai = "primary";
            this.aaaa = false;
            this.txes = "重新获取验证码";
            this.num = 60;
          }
        }, 1000);
      }
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
.enroll{
    height: 100%;
    background: #EFF8FB;
}
.color {
  padding: 2%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
  background: white;
}
.color img {
  width: 150px;
  height: 70px;
  margin-right: 10px;
}
.contents {
  width: 1366px;
  height: 749px;
  background: white;
  margin: 0 auto;
  margin-top: 20px;
}

.title {
  font-size: 32px;
  width: 288px;
  height: 43px;
  margin: 0 auto;
  color: #707070;
  padding-top: 100px;
}
.inputs {
  width: 398px;
  height: 38px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #dddddd;
  overflow: hidden;
  margin-top: 20px;
}
.inputs input {
  width: 398px;
  height: 38px;
  border-radius: 5px;
  background: none;
  outline: none;
  border: none;
  padding-left: 10px;
}
.btn {
  width: 400px;
  height: 40px;
  background: #2e7bee;
  border-radius: 5px;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  color: white;
  margin-top: 20px;
  cursor: pointer;
}
.verify {
  width: 400px;
  height: 40px;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
}
.vInput {
  width: 288px;
  height: 38px;
  border-radius: 5px;
  border: 1px solid #dddddd;
}
/* .vInput input {
  width: 288px;
  height: 38px;
  border-radius: 5px;
  background: none;
  outline: none;
  border: none;
  padding-left: 10px;
}
.verifyCode {
  width: 98px;
  height: 38px;
  border: #2e7bee 1px solid;
  border-right: 5px;
  text-align: center;
  line-height: 38px;
} */
</style>
