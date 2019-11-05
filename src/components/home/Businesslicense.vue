<template>
<div style="height:100%;background:#EFF8FB;">
  <div class="color">
      <img src="../../assets/tu.png" />
      <span>商家后台管理</span>
  </div>

  <div class="personalStore">
    <div class="StoreTable">
        <!-- 店铺信息 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>1</span>
            <p>店铺信息</p>
          </div>
          <div class="TableInput">
            <div class="TableName">
              <p><span>*</span>店铺名称</p>
            </div>
            <input type="text" placeholder="请输入店铺名称" v-model="shopName">
          </div>
        </div>



        <!-- 开店人基本信息 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>2</span>
            <p>开店人基本信息</p>
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>姓名</p>
            </div>
            <input type="text" placeholder="请输入开店人的真实姓名" v-model="name">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>手机号</p>
            </div>
            <input type="text" placeholder="请输入经营者手机号" v-model="phonenumber">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>身份证号</p>
            </div>
            <input type="text" placeholder="请输入开店人的身份证号码" v-model="idnumber">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>上传证件</p>
            </div>
            <div class="Certificates">
              
             <div class="upImg">
               <span v-if="onesrc.length==0">身份证正面</span>
               <img :src="onesrc" v-if="onesrc.length!=0" >
              <input type="file" class="dsfafd" @change="getFile"  multiple accept="image/png,image/jpeg,image/gif,image/jpg" id="file">
              <label for="file" class="upImgbtn" v-if="onesrc.length==0" >点击上传</label>
              <label for="file" class="upseccs" v-else >上传成功</label>
             </div>
             <div class="upImg">
                <span v-if="trwosrc.length==0">身份证背面</span>
               <img :src="trwosrc" v-if="trwosrc.length!=0" >
              <input type="file" class="dsfafd" @change="getFiless"  multiple accept="image/png,image/jpeg,image/gif,image/jpg" id="files">
              <label for="files" class="upImgbtn" v-if="trwosrc.length==0" >点击上传</label>
              <label for="files" class="upseccs" v-else >上传成功</label>
             </div>
            </div>

          </div>
          <div class="TableDeadline">
            <div class="TableName">
            <p><span>*</span>证件有限期</p>
            </div>
            <div class="Certificates">
              
              <div class="block">
                <el-date-picker
                  v-model="years"
                  type="date"
                  format='yyyy-MM-dd'
                  value-format='yyyy-MM-dd'
                  placeholder="选择日期">
                </el-date-picker>
              </div>

              <div class="TableLongTerm">
                <el-checkbox v-model="yeartime">长期</el-checkbox>
              </div>
              </div>  
          </div>
        </div>

    <!-- 营业执照信息 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>3</span>
            <p>营业执照</p>
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>注册号／信用代码</p>
            </div>
            <input type="text" placeholder="请输入营业执照上的注册号或统一社会信用代码" v-model="resourcenumber">
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>执照名称</p>
            </div>
            <input type="text" placeholder="营业执照“名称”一栏的内容" v-model="resourcename">
          </div>
          
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>法人姓名</p>
            </div>
            <input type="text" placeholder="营业执照上法人或经营者姓名" v-model="legalperson">
          </div>

          <div class="TableDeadline">
            <div class="TableName">
            <p><span>*</span>营业期限</p>
            </div>
            <div class="Certificates">  
            <div class="block">
                <el-date-picker
                  v-model="yearss"
                  type="date"
                  format='yyyy-MM-dd'
                  value-format='yyyy-MM-dd'
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            <div class="TableLongTerm">
              <el-checkbox v-model="yeartimes">长期</el-checkbox>
            </div>
            </div>
          </div>

          <div class="TableInput">
            <div class="TableName">
            <p><span>*</span>营业执照</p>
            </div>
             <div class="fjakljfl">
                <div class="upImg">
               <span v-if="strwisrc.length==0">工商营业执照</span>
               <img :src="strwisrc" v-if="strwisrc.length!=0" >
              <input type="file" class="dsfafd" @change="getFilesss"  multiple accept="image/png,image/jpeg,image/gif,image/jpg" id="filesss">
              <label for="filesss" class="upImgbtn" v-if="strwisrc.length==0" >点击上传</label>
              <label for="filesss" class="upseccs" v-else >上传成功</label>
            </div>
             </div>
          </div>
          <div class="TableAgreement">
            <el-checkbox v-model="checkque">我已经阅读并同意<span>《异业联盟平台合作协议》</span></el-checkbox>
          </div>

        </div>
        <div class="ReturnButton">
          <div class="ButtonDiv">
            <button class="PreviousStep" @click="comback">上一步</button>
            <button class="Establish" @click="creatshop">创建店铺</button>
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
        onesrc:[],//身份证正面
        trwosrc:[],//身份证背面面
        strwisrc:[],//营业执照照片
        checkque:false,//同意平台协议
        yeartime:false,//身份证是否长期
        yeartimes:false,//营业执照是否长期
        phonenumber:'',//手机号码
        shopName:'',//店铺名称
        years:'',//身份证件期限
        yearss:'',//营业证件期限
        name:'',//姓名
        idnumber:'',//身份证号码
        resourcenumber:'',//注册号/信用代码
        resourcename:'',//执照名称
        legalperson:'',//法人
        onesrcurl:'',//身份证正面照url 
        trwosrcurl:'',//身份证背面照url
        strwisrcurl:'',//营业执照url
        numid:'',
    }
  },
  created(){
    this.numid=sessionStorage.getItem('numid')
  },
  
  methods: {
   creatshop(){
     var kong = /\s/;//含有空格正则
     var phones = /^1[34578]\d{9}$/;//手机正则
     var xing = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;//中文姓名正则
     if(this.shopName.length==0||kong.test(this.shopName)){
        this.$message({message: '店铺名称含有为空格或者为空',type: 'warning'});
     }else if(!xing.test(this.name)){
          this.$message({message: '姓名含有为空格或者为空',type: 'warning'});
     }else if(!phones.test(this.phonenumber)){
        this.$message({message: '手机号码格式不正确',type: 'warning'});
     }else if(this.idnumber.length!=18||kong.test(this.idnumber)){
        this.$message({message: '身份证号码输入错误',type: 'warning'});
     }else if(this.onesrc.length==0||this.trwosrc.length==0){
            this.$message({message: '请上传完整的身份证图片',type: 'warning'});
     }else if(this.strwisrc.length==0){
            this.$message({message: '请上传营业执照图片',type: 'warning'});
     }else if(this.resourcenumber.length==0||kong.test(this.resourcenumber)){
            this.$message({message: '注册号／信用代码含有为空格或者为空',type: 'warning'});
     }else if(this.resourcename.length==0||kong.test(this.resourcename)){
            this.$message({message: '执照名称含有为空格或者为空',type: 'warning'});
     }else if(!xing.test(this.legalperson)){
            this.$message({message: '法人姓名格式不正确',type: 'warning'});
     }else if(!this.checkque){
          this.$message({message: '请阅读同意平台协议',type: 'warning'});
     }else if(!this.yeartime){
        if(this.years.length==""){
          this.$message({message: '身份证年限为空',type: 'warning'});
        }else if(!this.yeartimes){
            if(this.yearss.length==''){
              this.$message({message: '营业执照年限为空',type: 'warning'});
            }else{
              //身份证不为长期且营业执照不为长期
                let params = new URLSearchParams;
                params.append('businessname',this.resourcename);
                params.append('idcard',this.idnumber);
                params.append('idcardimgx',this.onesrcurl);
                params.append('idcardimgy',this.trwosrcurl);
                params.append('idcardtermofvalidity',this.years);
                params.append('licensedate',this.yearss);
                params.append('licensepositive',this.strwisrcurl);
                params.append('longtermcertificate',this.yeartime);
                params.append('longtermlicense',this.yeartimes);
                params.append('nameoflegalperson',this.legalperson);
                params.append('phone',this.phonenumber);
                params.append('realname',this.name);
                params.append('shopname',this.shopName);
                params.append('businesslicensenumber',this.resourcenumber);
                  // console.log(this.numid)
                if(!this.numid){
                    // console.log(1)
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/entryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      console.log(res.data)
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }else{
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/updEntryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      console.log(res.data)
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }
                
            }
        }else{
            //身份证不为长期且营业执照为长期

               let params = new URLSearchParams;
                params.append('businessname',this.resourcename);
                params.append('idcard',this.idnumber);
                params.append('idcardimgx',this.onesrcurl);
                params.append('idcardimgy',this.trwosrcurl);
                params.append('idcardtermofvalidity',this.years);
                params.append('licensedate',"");
                params.append('licensepositive',this.strwisrcurl);
                params.append('longtermcertificate',this.yeartime);
                params.append('longtermlicense',this.yeartimes);
                params.append('nameoflegalperson',this.legalperson);
                params.append('phone',this.phonenumber);
                params.append('realname',this.name);
                params.append('shopname',this.shopName);
                params.append('businesslicensenumber',this.resourcenumber);
                
                if(!this.numid){
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/entryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }else{
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/updEntryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }
        }
          
        
     }else{
       if(!this.yeartimes){
            if(this.yearss.length==''){
              this.$message({message: '营业执照年限为空',type: 'warning'});
            }else{
                //身份证为长期且营业执照不为长期
                 let params = new URLSearchParams;
                params.append('businessname',this.resourcename);
                params.append('idcard',this.idnumber);
                params.append('idcardimgx',this.onesrcurl);
                params.append('idcardimgy',this.trwosrcurl);
                params.append('idcardtermofvalidity',"");
                params.append('licensedate',this.yearss);
                params.append('licensepositive',this.strwisrcurl);
                params.append('longtermcertificate',this.yeartime);
                params.append('longtermlicense',this.yeartimes);
                params.append('nameoflegalperson',this.legalperson);
                params.append('phone',this.phonenumber);
                params.append('realname',this.name);
                params.append('shopname',this.shopName);
                params.append('businesslicensenumber',this.resourcenumber);
                if(!this.numid){
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/entryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }else{
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/updEntryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }
            
            }
                
              
        }else{
               //身份证为长期且营业执照为长期
               let params = new URLSearchParams;
                params.append('businessname',this.resourcename);                                      
                params.append('idcard',this.idnumber);
                params.append('idcardimgx',this.onesrcurl);
                params.append('idcardimgy',this.trwosrcurl);
                params.append('idcardtermofvalidity',"");
                params.append('licensedate',""); 
                params.append('licensepositive',this.strwisrcurl);
                params.append('longtermcertificate',this.yeartime);
                params.append('longtermlicense',this.yeartimes);
                params.append('nameoflegalperson',this.legalperson);
                params.append('phone',this.phonenumber);
                params.append('realname',this.name);
                params.append('shopname',this.shopName);
                params.append('businesslicensenumber',this.resourcenumber);
                if(!this.numid){
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/entryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }else{
                    this.axios({
                      method:'post',
                      url:'/pc/merchantsettledin/updEntryInformation',
                      // headers: { 
                      //   'Access-token' : localStorage.getItem('Access_token')
                      // },
                      data:params
                    }).then((res)=>{
                      if(res.data.code==0){
                        this.$message({
                          message:"提交信息成功",
                          type:'success'
                        });
                        setTimeout(() => {
                          this.$router.push({name:"flagShip"})
                        }, 1000);
                      }else{
                        this.$message({
                          message:"登录失败",
                          type:'warning'
                        });
                      }
                    })
                }
        }    
     }

   },
   passwords(){
      if(this.password.length<6){
         this.$message({message: '密码不能低于6位数',type: 'warning'});
      }
      if(this.password.length>20){
        this.$message({message: '密码不能超过20位数',type: 'warning'});
      }
   },
   comback(){
     window.history.back(-1)
   },
    getFiless(e){
        let _this = this
        let filess = e.target.files[0]
        console.log(filess)
        let params = new FormData();
        params.append('file',filess,filess.name);
        this.axios({
          method:'post',
          url:'/pc/merchantsettledin/save.do',
          headers: { 
            "Content-Type": "multipart/form-data",
          // 'Access-token' : localStorage.getItem('Access_token')
          },
          data:params
        }).then((res)=>{
          console.log(res)
          if(res.data.code==0){
              if (!e || !window.FileReader) return  // 看支持不支持FileReader
              let readers = new FileReader()
              readers.readAsDataURL(filess) // 这里是最关键的一步，转换就在这里
              readers.onloadend = function () {
                _this.trwosrc = this.result
                _this.trwosrcurl=res.data.data.path
                console.log(_this.trwosrcurl)
              }

          }
        })
        // console.log(filess)
        
      },
      getFile (e) {
        let _this = this
        var files = e.target.files[0]
        let params = new FormData();
        params.append('file',files,files.name);
        this.axios({
          method:'post',
          url:'/pc/merchantsettledin/save.do',
          headers: { "Content-Type": "multipart/form-data" },
          data:params
        }).then((res)=>{
          console.log(res)
            if (!e || !window.FileReader) return 
            let reader = new FileReader()
            reader.readAsDataURL(files) 
            reader.onloadend = function () {
              _this.onesrc = this.result
              _this.onesrcurl = res.data.data.path
              console.log(_this.onesrcurl)
            }
        })
        
      },
      getFilesss (e) {
        let _this = this
        var filesss = e.target.files[0]
        let params = new FormData();
        params.append('file',filesss,filesss.name);
        this.axios({
          method:'post',
          url:'/pc/merchantsettledin/save.do',
          headers: { "Content-Type": "multipart/form-data", },
          data:params
        }).then((res)=>{
          if (!e || !window.FileReader) return 
            let readersss = new FileReader()
            readersss.readAsDataURL(filesss)
            readersss.onloadend = function () {
              _this.strwisrc = this.result
              _this.strwisrcurl = res.data.data.path
              console.log(_this.strwisrcurl)

          }
        })
        
      }
  },
  beforeDestroy(){
      sessionStorage.removeItem('numid')
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tesu{
  width:55%;
  margin-left: 10px;
}
.color {
  padding: 1%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
  background: #fff;
}
.color img {
  width: 150px;
  height: 70px;
  margin-right: 10px;
}
.imgstrwi{
    width: 80%;
    height: 200px;
    margin-left: 5px;
}
.upImgbtns{
    margin-left: 5px;
    width: 15%;
    height: 30px;
    border: 1px solid #DDDDDD;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #ddd;
}
.fjakljfl{
    width: 55%;
    display: flex;
    align-items: center;
}
.upImg{
    border:  1px solid #ddd;
    width: 200px;
    height: 125px;
    border-radius: 6px;
    position: relative;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ddd;
    font-size: 24px;
}
.dsfafd{
  display: none;
}
.upImg img{
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.upImg.active{
  border:  1px solid #0090fa;
}
.upImgbtn{
  position: absolute;
  left: 30%;
  bottom: 5%;
  width: 35%;
  height: 15%;
  border-radius: 15px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

}
.upseccs{
  position: absolute;
  bottom: 0;
    width: 100%;
  height: 20px;
  background: #0090fa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
}

    *{
      margin: 0;
    }
    /* 第一块信息区域 */
    .personalStore{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .StoreTable{
      margin-top: 20px;
      width: 60%;
      background-color: white;
      padding: 40px 100px 0px 100px;
    }
    .TableTitle{
      margin-top: 15px;
    }
    .TitleContent{
      margin-bottom: 30px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .TitleContent span{
      font-size: 20px;
      color: #0090fa;
    }
    .TitleContent p {
      text-indent: 5px;
      font-size: 15px;
      letter-spacing: 1px;
    }
    .TableInput{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .TableName{
      width: 15%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TableInput p {
      font-size: 12px;
      letter-spacing: 1px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TableInput input{
      margin-left: 10px;
      width: 55%;
      height: 25px;
      border-radius: 5px;
      outline: none;
      border: none;
      border: 1px solid #9597a6;
    }
    input::-webkit-input-placeholder{
      text-indent: 10px;
      color: #9597a6;
    }
    .Certificates{
      margin-left: 10px;
      width: 55%;
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
   




    /* 开店人基本信息 */
    .TableDeadline{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .TableName{
      width: 15%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TableName span{
      font-size: 12px;
      color: red;
    }
    .TableName p {
      font-size: 12px;
      letter-spacing: 1px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TableDeadline input{
      margin-left: 10px;
      width: 8%;
      height: 25px;
      border-radius: 5px;
      outline: none;
      border: none;
      border: 1px solid #9597a6;
    }
    .TableDeadline .DateDay{
      width: 4%;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    .TableLongTerm{
      width: 15%;
      height: 25px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TableLongTerm input{
      width: 15%;
      margin-right: 5px; 
    }
    .TableLongTerm p{
      font-size: 12px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      letter-spacing: 2px;
    }


    /* 第三方店铺链接区域 */
    .TableAgreement{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .TableAgreement p{
      margin-left: 5px;
      font-size: 12px;
    }
    .TableAgreement span{
      font-size: 10px;
      color: #0090fa;
    }


    .ReturnButton{
      width: 100%;
      height: 250px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ReturnButton .ButtonDiv{
      width: 55%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;

    }
    .ButtonDiv .PreviousStep{
      width: 45%;
      height: 50px;
      background-color: white;
      color: #030303;
      border-radius: 5px;
      border: none;
      outline: none;
      border: 1px solid #9597a6;
    }
    .ButtonDiv .Establish{
      width: 45%;
      height: 50px;
      background-color: #0090fa;
      color: white;
      border-radius: 5px;
      border: none;
      outline: none;
    }

</style>