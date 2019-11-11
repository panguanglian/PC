
<template>
<!-- 旗舰店-企业身份信息 -->

  <div class="idInfo">
    <div class="step">
      <div class="step1 active">
        <div class="tab">1</div>
        <div>身份信息</div>
      </div>
      <div class="step1">
        <div class="progress"></div>
        <div class="tab">2</div>
        <div>店铺信息</div>
      </div>
      <div class="step1">
        <div class="progress"></div>
        <div class="tab">3</div>
        <div>信息提交成功</div>
      </div>
    </div>

    <div class="information">
      <div class="title">
        <strong>1</strong> 企业法定代表人基本信息
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>法定代表人手机号
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入法定代表人手机号" v-model="phone" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>姓名
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请填写店铺法定代表人姓名" v-model="usName" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>身份证号
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入18位身份证号码" v-model="idCard" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>上传证件
        </div>
        <div style="flex:2;" class="papers">
          <div class="upImg">
            <span v-if="onesrc.length==0">身份证正面</span>
            <img :src="onesrc" v-if="onesrc.length!=0" />
            <input
              type="file"
              class="dsfafd"
              @change="getFile"
              multiple
              accept="image/png, image/jpeg, image/gif, image/jpg"
              id="file"
            />
            <label  class="upImgbtn" v-if="onesrc.length==0">点击上传</label>
            <label  class="upseccs" v-else>上传成功</label>
          </div>
          <div class="upImg">
            <span v-if="trwosrc.length==0">身份证背面</span>
            <img :src="trwosrc" v-if="trwosrc.length!=0" />
            <input
              type="file"
              class="dsfafd"
              @change="getFiless"
              multiple
              accept="image/png, image/jpeg, image/gif, image/jpg"
              id="files"
            />
            <label  class="upImgbtn" v-if="trwosrc.length==0">点击上传</label>
            <label  class="upseccs" v-else>上传成功</label>
          </div>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>证件有效日期
        </div>
        <div style="flex:2;" class="date">
          <div class="block">
            <el-date-picker v-model="value" type="date" placeholder="选择日"></el-date-picker>
          </div>
          <el-checkbox v-model="checked">长期</el-checkbox>
        </div>
      </div>
    </div>

    <div class="information">
      <div class="title">
        <strong>2</strong> 店铺管理人基本信息
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>法人与管理人是否同一人
        </div>
        <div style="flex:2; margin-left: 15px;">
          <el-radio-group v-model="radio" @change="radios">
            <el-radio :label="1">是同一人</el-radio>
            <el-radio :label="2">不是同一人</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div v-if="idshifou">
          <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>姓名
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请填写店铺法定代表人姓名" v-model="usNames" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>身份证号
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入18位身份证号码" v-model="idCards" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>上传证件
        </div>
        <div style="flex:2;" class="papers">
          <div class="upImg">
            <span v-if="onesrcx.length==0">身份证正面</span>
            <img :src="onesrcx" v-if="onesrcx.length!=0" />
            <input
              type="file"
              class="dsfafd"
              @change="a"
              multiple
              accept="image/png, image/jpeg, image/gif, image/jpg"
              id="filex"
            />
            <label  class="upImgbtn" v-if="onesrcx.length==0">点击上传</label>
            <label  class="upseccs" v-else>上传成功</label>
          </div>
          <div class="upImg">
            <span v-if="trwosrcx.length==0">身份证背面</span>
            <img :src="trwosrcx" v-if="trwosrcx.length!=0" />
            <input
              type="file"
              class="dsfafd"
              @change="b"
              multiple
              accept="image/png, image/jpeg, image/gif, image/jpg"
              id="filesx"
            />
            <label  class="upImgbtn" v-if="trwosrcx.length==0">点击上传</label>
            <label  class="upseccs" v-else>上传成功</label>
          </div>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>证件有效日期
        </div>
        <div style="flex:2;" class="date">
          <div class="block">
            <el-date-picker v-model="values" type="date" placeholder="选择日"></el-date-picker>
          </div>
          <el-checkbox v-model="checkeds" @change="longtime">长期</el-checkbox>
        </div>
      </div>
      </div>
      
    </div>
    <div class="operate">
      <div class="last" @click="last">上一步</div>
      <div class="next" @click="next">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      onesrc: [], //身份证正面1
      trwosrc: [], //身份证背面1
      onesrcx: [], //身份证正面2
      trwosrcx: [], //身份证背面2
      checked: true, //是否长期1
      checkeds: true, //是否长期2
      value: "", //选择日期1
      values: "", //选择日期2
      radio: 1, //是否同一人
      phone: "", //手机号
      usName: "", //用户名1
      usNames: "", //用户名2
      idCard: "", //身份证号1
      idCards: "", //身份证号2
      upShow: true,
      idshifou:false,
    };
  },
  methods: {
    last() {
      this.$router.go(-1);
    },
    next() {
      if (this.phone == ""||!/^1[34578]\d{9}$/.test(this.phone)) {
        this.$message({ message: "请输入正确的手机号码",type: "warning"});
      } else if (this.usName == ""||!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(this.usName)) {
        this.$message({message: "请填写店铺法定代表人姓名",type: "warning"});
      } else if (this.idCard == ""||!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(this.idCard)) {
        this.$message({message: "请输入法人代表正确的18位身份证号码",type: "warning"});
      } else if (this.onesrc == ""||this.trwosrc == "") {
        this.$message({message: "请上传法人代表身份证正背面照",type: "warning"});
      } else if (!this.checked) {//法人证件不是长期的时候
        if(this.value==""){
          this.$message({message: "请选择法人代表证件有效日期",type: "warning"});
        }else if(this.radio==1){//管理人和法人同一人
              var obj={
                onesrc:this.onesrc,//法人身份证正面
                trwosrc:this.trwosrc,//法人身份证背面
                value:this.value,//法人身份证有效期
                radio:this.radio,//同一个人
                phone:this.phone,//法人手机号码
                usName:this.usName,//法人姓名
                idCard:this.idCard,//法人身份证号码
              }
              console.log(obj)
              this.$router.push({ name: "storeInfoFlagship",params: {idInfo: obj} });
              
        }else if(this.radio!= 1){//管理人和法人不同一人
          if(this.usNames == ""||!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(this.usNames)){
            this.$message({message: "请填写店铺管理人姓名",type: "warning"});
          }else if(this.idCards == ""||!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(this.idCards)){
              this.$message({message: "请输入管理人正确的18位身份证号码",type: "warning"});
          }else if(this.onesrcx == ""||this.trwosrcx == ""){
              this.$message({message: "请上传管理人身份证正背面照",type: "warning"});
          }else if(!this.checkeds){//管理人证件不是长期的时候
              if(this.values==''){
                  this.$message({message: "请选择管理人证件有效日期",type: "warning"});
              }else{
                var obj={
                  onesrc:this.onesrc,//法人身份证正面
                  trwosrc:this.trwosrc,//法人身份证背面          
                  radio:this.radio,//不同一个人
                  phone:this.phone,//手机号码
                  usName:this.usName,//法人姓名
                  idCard:this.idCard,//法人身份证号码
                  usNames:this.usNames,//管理人姓名
                  idCards:this.idCards,//管理人身份证号码
                  onesrcx:this.onesrcx,//管理人的证件正面
                  trwosrcx:this.trwosrcx,//管理人的证件背面
                  values:this.values ,//管理人证件有效期  
                }
                this.$router.push({name:'storeInfoFlagship',params:{data:obj}})
              }
          }else{
            var obj={
                  onesrc:this.onesrc,//法人身份证正面
                  trwosrc:this.trwosrc,//法人身份证背面          
                  radio:this.radio,//不同一个人
                  phone:this.phone,//手机号码
                  usName:this.usName,//法人姓名
                  idCard:this.idCard,//法人身份证号码
                  usNames:this.usNames,//管理人姓名
                  idCards:this.idCards,//管理人身份证号码
                  onesrcx:this.onesrcx,//管理人的证件正面
                  trwosrcx:this.trwosrcx,//管理人的证件背面
                  checkeds:this.checkeds ,//管理人证件有效期长期  
                }
                this.$router.push({name:'storeInfoFlagship',params:{data:obj}})

          }
        }

        //
      }else{
         if(this.radio==1){//管理人和法人同一人
              var obj={
                onesrc:this.onesrc,//法人身份证正面
                trwosrc:this.trwosrc,//法人身份证背面
                checked:this.checked,//法人身份证长期    
                radio:this.radio,//同一个人
                phone:this.phone,//法人手机号码
                usName:this.usName,//法人姓名
                idCard:this.idCard,//法人身份证号码
              }
              this.$router.push({name:'storeInfoFlagship',params:{data:obj}})
        }else if(this.radio!= 1){//管理人和法人不同一人
          if(this.usNames == ""||!/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/.test(this.usNames)){
            this.$message({message: "请填写店铺管理人姓名",type: "warning"});
          }else if(this.idCards == ""||!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(this.idCards)){
              this.$message({message: "请输入管理人正确的18位身份证号码",type: "warning"});
          }else if(this.onesrcx == ""||this.trwosrcx == ""){
              this.$message({message: "请上传管理人身份证正背面照",type: "warning"});
          }else if(!this.checkeds){//管理人证件不是长期的时候
              if(this.values==''){
                  this.$message({message: "请选择管理人证件有效日期",type: "warning"});
              }else{
                var obj={
                  onesrc:this.onesrc,//法人身份证正面
                  trwosrc:this.trwosrc,//法人身份证背面
                  checked:this.checked,//法人身份证长期             
                  radio:this.radio,//不同一个人
                  phone:this.phone,//手机号码
                  usName:this.usName,//法人姓名
                  idCard:this.idCard,//法人身份证号码
                  usNames:this.usNames,//管理人姓名
                  idCards:this.idCards,//管理人身份证号码
                  onesrcx:this.onesrcx,//管理人的证件正面
                  trwosrcx:this.trwosrcx,//管理人的证件背面
                  values:this.values ,//管理人证件有效期  
                }
                
              }
          }else{
              var obj={
                  onesrc:this.onesrc,//法人身份证正面
                  trwosrc:this.trwosrc,//法人身份证背面
                  checked:this.checked,//法人身份证长期          
                  radio:this.radio,//不同一个人
                  phone:this.phone,//手机号码
                  usName:this.usName,//法人姓名
                  idCard:this.idCard,//法人身份证号码
                  usNames:this.usNames,//管理人姓名
                  idCards:this.idCards,//管理人身份证号码
                  onesrcx:this.onesrcx,//管理人的证件正面
                  trwosrcx:this.trwosrcx,//管理人的证件背面
                  checkeds:this.checkeds ,//管理人证件有效期长期  
                }
                console.log(obj)
                this.$router.push({ name: "storeInfoFlagship",params: {idInfo: obj} });
                
          }
        }

      }
    },






    getFiless(e) {
      let _this = this;
      var filess = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let readers = new FileReader();
      readers.readAsDataURL(filess); // 这里是最关键的一步，转换就在这里
      readers.onloadend = function() {
        _this.trwosrc = this.result;
        console.log(_this.trwosrc);
      };
    },
    getFile(e) {
      let _this = this;
      var files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.onesrc = this.result;
        console.log(_this.onesrc);
      };
    },
    b(e) {
      let _this = this;
      var filess = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let readers = new FileReader();
      readers.readAsDataURL(filess); // 这里是最关键的一步，转换就在这里
      readers.onloadend = function() {
        _this.trwosrcx = this.result;
      };
    },
    a(e) {
      let _this = this;
      var files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.onesrcx = this.result;
      };
    },
    radios(){
      if(this.radio == 1){
        this.idshifou=false
      }else{
        this.idshifou=true
        this.onesrcx=''
        this.usNames=''
        this.trwosrcx=''
        this.idCards=''
        this.values=''
        this.checkeds=false

      }
    },
    longtime(){
      if(this.checked){

      }
    }
    
  }
};
</script>

<style scoped>
.upImg {
  border: 1px solid #ddd;
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
.dsfafd {
  /* display: none; */
  position: absolute;
  opacity: 0;
  width: 200px;
  height: 100%;
  z-index: 999;
  left: 0%;
}
.upImg img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.upImg.active {
  border: 1px solid #0090fa;
}
.upImgbtn {
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
.upseccs {
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
.papers .upWin {
  width: 100%;
  height: 20%;
  background: #0090fa;
  position: absolute;
  bottom: 0;
  left: -10px;
  border-radius: 0%;
  border: none;
  text-align: center;
  color: white;
  font-size: 12px;
  line-height: 220%;
}
.idInfo {
  width: 960px;
  margin: 0 auto;
  background: #ffffff;
  /* padding: 2%; */
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px #888888;
}
.operate {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 50px 0;
}
.operate div {
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  margin: 0 20px;
}
.last {
  border: 1px solid #030303;
  background: white;
}
.next {
  border: 1px solid #0090fa;
  background: #0090fa;
  color: white;
}
.block {
  margin-right: 20px;
}
.date {
  margin-left: 15px;
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
.information {
  padding: 2%;
}
.list {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  color: #030303;
}
.list strong {
  color: red;
}
.list > div > input {
  width: 64%;
  padding: 5px 5px;
  border-radius: 5px;
  background: none;
  outline: none;
  border: 1px solid #ccc;
  margin-left: 10px;
}
.title {
  margin: 20px 0;
}
.papers {
  display: flex;
}
.papers div {
  width: 195px;
  height: 125px;
  border: 1px solid #dddddd;
  margin-left: 10px;
  border-radius: 5px;
}
.date {
  display: flex;
}
.upPapers {
  position: relative;
}
.papers .UP {
  width: 80px;
  height: 22px;
  border-radius: 10px;
  border: 1px solid #030303;
  text-align: center;
  line-height: 22px;
  position: absolute;
  bottom: 10px;
  left: 50px;
}
</style>
