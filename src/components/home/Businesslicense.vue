<template>
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
          <div class="TableInput">
            <div class="TableName">
            <p><span>*</span>设置密码</p>
            </div>
            <input type="password" placeholder="输入英文或数字或小数点" v-model="password" onkeyup="value=value.replace(/[^\w\.]/ig,'')" @change="passwords"/>
          </div>
          <div class="TableInput">
            <div class="TableName">
       
            <p><span>*</span>确认密码</p>
            </div>
            <input type="password" placeholder="请再次输入密码" v-model="confirmpassword" onkeyup="value=value.replace(/[^\w\.]/ig,'')">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>主营类目</p>
            </div>
            <input type="text" placeholder="请输入主营类目"  v-model="Category">
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
            <input type="text" style="text-align: center;" v-model="years" :disabled='yeartime' onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="4">
            <p class="DateDay">年</p>
            <input type="text" style="text-align: center;" v-model="months" :disabled='yeartime' onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="2">
            <p class="DateDay">月</p>
            <input type="text" style="text-align: center;" v-model="days" :disabled='yeartime' onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="2">
            <p class="DateDay">日</p>

            <div class="TableLongTerm">
              <el-checkbox v-model="yeartime">长期</el-checkbox>
            </div>
          </div>
        </div>

    <!-- 营业执照信息 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>3</span>
            <p>营业执照信息</p>
          </div>

          <div class="TableInput">
            <div class="TableName">
            <p><span>*</span>是否三证合一</p>
            </div>
             <div class="fjakljfl">
                 <el-radio-group v-model="resource">
                <el-radio label="0" >是</el-radio>
                <el-radio label="1" >否</el-radio>
                </el-radio-group>
             </div>
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>统一社会信用代码</p>
            </div>
            <input type="text" placeholder="请输入统一社会信用代码" v-model="resourcenumber">
          </div>
          
          <div class="TableDeadline">
            <div class="TableName">
            <p><span>*</span>营业期限</p>
            </div>  
            <input type="text" style="text-align: center;" v-model="yearss" :disabled='yeartimes' onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="4">
            <p class="DateDay">年</p>
            <input type="text" style="text-align: center;" v-model="monthss" :disabled='yeartimes' onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="2">
            <p class="DateDay">月</p>
            <input type="text" style="text-align: center;" v-model="dayss" :disabled='yeartimes' onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="2">
            <p class="DateDay">日</p>

            <div class="TableLongTerm">
              <el-checkbox v-model="yeartimes">长期</el-checkbox>
            </div>
          </div>

          <div class="TableInput">
            <div class="TableName">
            <p><span>*</span>营业执照</p>
            </div>
             <div class="fjakljfl">
                <input type="file" class="dsfafd" @change="getFilesss"  multiple accept="image/png,image/jpeg,image/gif,image/jpg" id="filesss">
                <label for="filesss" class="upImgbtns" >点击上传</label>
                <img :src="strwisrc" v-if="strwisrc.length!=0" class="imgstrwi">
             </div>
          </div>

        </div>

        <!-- 第三方店铺链接 -->

        <div class="TableTitle">

          <div class="TitleContent">
            <span>4</span>
            <p>第三方店铺链接</p>
          </div>

          <div class="TableInput">
            <div class="TableName">
            <p>第三方店铺链接</p>
            </div>
            <input type="text" placeholder="填写真实的其他平台链接，若无可不填" v-model="shoplink">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p>入驻邀请码</p>
            </div>
            <input type="text" placeholder="填写邀请人的邀请码,若无可不填 " v-model="Invitationcode">
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
</template>

<script>
export default {
  data() {
    return {
        resource:'0',//三证
        onesrc:[],//第一张照片
        trwosrc:[],//第二张照片
        strwisrc:[],//第三张照片
        checkque:false,//同意平台协议
        yeartime:false,//身份证是否长期
        yeartimes:false,//营业执照是否长期
        shopName:'',//店铺名称
        password:'',//密码
        confirmpassword:'',//确认密码
        Category:'',//类目
        years:'',//证件年
        months:'',//证件月
        days:'',//证件日
        yearss:'',//营业证件年
        monthss:'',//营业证件月
        dayss:'',//营业证件日
        name:'',//姓名
        idnumber:'',//身份证号码0000000000
        Invitationcode:'',//第三方店铺链接
        shoplink:'',//邀请码
        yeartimevalue:'长期',//身份证是长期
        yeartimesvalue:'长期',//营业执照是长期
        resourcenumber:'',//统一社会信用代码
    }
  },
  
  methods: {
   creatshop(){
     var kong = /\s/;//含有空格正则
     if(this.shopName.length==0||kong.test(this.shopName)){
        this.$message({message: '店铺名称含有为空格或者为空',type: 'warning'});
     }else if(this.password==0||this.password.length<6||this.password.length>20){
            this.$message({message: '密码不能为空或者低于6位数或者超过20位数',type: 'warning'});
     }else if(this.confirmpassword!=this.password){
            this.$message({message: '两次密码不相同',type: 'warning'});
     }else if(this.Category.length==0||kong.test(this.Category)){
         this.$message({message: '类目含有为空格或者为空',type: 'warning'});
     }else if(this.name.length==0||kong.test(this.name)){
          this.$message({message: '姓名含有为空格或者为空',type: 'warning'});
     }else if(this.idnumber.length!=18||kong.test(this.idnumber)){
        this.$message({message: '身份证号码输入错误',type: 'warning'});
     }else if(this.onesrc.length==0||this.trwosrc.length==0){
            this.$message({message: '请上传完整的身份证图片',type: 'warning'});
     }else if(this.strwisrc.length==0){
            this.$message({message: '请上传营业执照图片',type: 'warning'});
     }else if(this.resourcenumber.length==0||kong.test(this.resourcenumber)){
            this.$message({message: '统一社会信用代码含有为空格或者为空',type: 'warning'});
     }else if(!this.checkque){
          this.$message({message: '请阅读同意平台协议',type: 'warning'});
     }else if(!this.yeartime){
        if(this.years.length==0||kong.test(this.years)||this.months.length==0||kong.test(this.months)||this.days.length==0||kong.test(this.days)){
          this.$message({message: '身份证年限含有为空格或者为空',type: 'warning'});
        }else if(!this.yeartimes){
            if(this.yearss.length==0||kong.test(this.yearss)||this.monthss.length==0||kong.test(this.monthss)||this.dayss.length==0||kong.test(this.dayss)){
              this.$message({message: '营业执照年限含有为空格或者为空',type: 'warning'});
            }else{
                var obj={
                  shopName:this.shopName,
                  password:this.password,
                  Category:this.Category,
                  name:this.name,
                  idnumber:this.idnumber,
                  years:this.years,
                  months:this.months,
                  days:this.days,
                  yearss:this.yearss,
                  monthss:this.monthss,
                  dayss:this.dayss,
                  onesrc:this.onesrc,
                  trwosrc:this.trwosrc,
                  strwisrc:this.strwisrc,
                  resource:this.resource,
                  Invitationcode:this.Invitationcode,
                  shoplink:this.shoplink,
                  resource:this.resource,
                  

                }
                console.log(obj)
                this.$message({
                  message:"创建店铺成功",
                  type:'success'
                })
                setTimeout(() => {
                  this.$router.push({name:"flagShip"})
                }, 1000);
            
            }
                
              
        }else{
            var obj={
                shopName:this.shopName,
                password:this.password,
                Category:this.Category,
                name:this.name,
                idnumber:this.idnumber,
                years:this.years,
                months:this.months,
                days:this.days,
                onesrc:this.onesrc,
                trwosrc:this.trwosrc,
                strwisrc:this.strwisrc,
                resource:this.resource,
                Invitationcode:this.Invitationcode,
                shoplink:this.shoplink,
                resource:this.resource,
                yeartimesvalue:this.yeartimesvalue,

              }
              console.log(obj)
              this.$message({
                message:"创建店铺成功",
                type:'success'
              })
              setTimeout(() => {
                this.$router.push({name:"flagShip"})
              }, 1000);
        }
          
        
     }else{

       if(!this.yeartimes){
            if(this.yearss.length==0||kong.test(this.yearss)||this.monthss.length==0||kong.test(this.monthss)||this.dayss.length==0||kong.test(this.dayss)){
              this.$message({message: '营业执照年限含有为空格或者为空',type: 'warning'});
            }else{
                var obj={
                  shopName:this.shopName,
                  password:this.password,
                  Category:this.Category,
                  name:this.name,
                  idnumber:this.idnumber,
                  yearss:this.yearss,
                  monthss:this.monthss,
                  dayss:this.dayss,
                  onesrc:this.onesrc,
                  trwosrc:this.trwosrc,
                  strwisrc:this.strwisrc,
                  resource:this.resource,
                  Invitationcode:this.Invitationcode,
                  shoplink:this.shoplink,
                  resource:this.resource,
                  yeartimevalue:this.yeartimevalue,
                }
                console.log(obj)
                this.$message({
                  message:"创建店铺成功",
                  type:'success'
                },1000)
                setTimeout(() => {
                  this.$router.push({name:"flagShip"})
                });
            
            }
                
              
        }else{
            var obj={
                shopName:this.shopName,
                password:this.password,
                Category:this.Category,
                name:this.name,
                idnumber:this.idnumber,
                years:this.years,
                months:this.months,
                days:this.days,
                onesrc:this.onesrc,
                trwosrc:this.trwosrc,
                strwisrc:this.strwisrc,
                resource:this.resource,
                Invitationcode:this.Invitationcode,
                shoplink:this.shoplink,
                resource:this.resource,
                yeartimesvalue:this.yeartimesvalue,
                yeartimevalue:this.yeartimevalue,

              }
              console.log(obj)
              this.$message({
                message:"创建店铺成功",
                type:'success'
              })
              setTimeout(() => {
                this.$router.push({name:"flagShip"})
              }, 1000);
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
        var filess = e.target.files[0]
        if (!e || !window.FileReader) return  // 看支持不支持FileReader
        let readers = new FileReader()
        readers.readAsDataURL(filess) // 这里是最关键的一步，转换就在这里
        readers.onloadend = function () {
          _this.trwosrc = this.result
        }
      },
      getFile (e) {
        let _this = this
        var files = e.target.files[0]
        if (!e || !window.FileReader) return 
        let reader = new FileReader()
        reader.readAsDataURL(files) 
        reader.onloadend = function () {
          _this.onesrc = this.result
        }
      },
      getFilesss (e) {
        let _this = this
        var filesss = e.target.files[0]
        if (!e || !window.FileReader) return 
        let readersss = new FileReader()
        readersss.readAsDataURL(filesss)
        readersss.onloadend = function () {
          _this.strwisrc = this.result
        }
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .StoreTable{
      margin-top: 20px;
      width: 50%;
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