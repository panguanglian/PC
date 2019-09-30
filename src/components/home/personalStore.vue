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
            <input type="text" placeholder="请输入店铺名称" v-model="name">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>设置密码</p>
            </div>
            <input type="text" placeholder="请输入密码" v-model="password">
          </div>
          <div class="TableInput">
            <div class="TableName">
       
            <p><span>*</span>确认密码</p>
            </div>
            <input type="text" placeholder="请重新输入密码" v-model="quepassword">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>主营类目</p>
            </div>
            <input type="text" placeholder="请输入主营类目">
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
            <input type="text" placeholder="请输入开店人的真实姓名">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>身份证号</p>
            </div>
            <input type="text" placeholder="请输入开店人的身份证号码">
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
            
            <p>证件有限期</p>
            </div>  
            <input type="text" style="text-align: center;">
            <p class="DateDay">年</p>
            <input type="text" style="text-align: center;">
            <p class="DateDay">月</p>
            <input type="text" style="text-align: center;">
            <p class="DateDay">日</p>

            <div class="TableLongTerm">
              <input type="checkbox" v-model="yeartime">
              <p>长期</p>
            </div>
          </div>
        </div>

        <!-- 第三方店铺链接 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>3</span>
            <p>第三方店铺链接</p>
          </div>

          <div class="TableInput">
            <div class="TableName">
            <p>第三方店铺链接</p>
            </div>
            <input type="text" placeholder="填写真实的其他平台链接，若无可不填">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p>入驻邀请码</p>
            </div>
            <input type="text" placeholder="填写邀请人的邀请码,若无可不填 ">
          </div>

          <div class="TableAgreement">
            <input type="checkbox" v-model="checkque" @change="fdfad">
            <p>我已经阅读并同意</p>
            <span>《异业联盟平台合作协议》</span>
          </div>
          
        </div>

        <div class="ReturnButton">
          <div class="ButtonDiv">
            <button class="PreviousStep">上一步</button>
            <button class="Establish">创建店铺</button>
          </div>
        </div>

    </div>


  </div>
</template>

<script>
export default {
  name: "personalStore",
  data() {
    return {
        onesrc:[],
        trwosrc:[],
        checkque:'',
        yeartime:'',
        name:'',
        password:'',
        quepassword:''
        
    }
  },
  methods: {
    fdfad(){

    },
    getFiless(e) {
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
        if (!e || !window.FileReader) return  // 看支持不支持FileReader
        let reader = new FileReader()
        reader.readAsDataURL(files) // 这里是最关键的一步，转换就在这里
        reader.onloadend = function () {
          _this.onesrc = this.result
        }
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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