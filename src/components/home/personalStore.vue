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
            <input type="text" placeholder="请输入店铺名称">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>设置密码</p>
            </div>
            <input type="text" placeholder="请输入密码">
          </div>
          <div class="TableInput">
            <div class="TableName">
       
            <p><span>*</span>确认密码</p>
            </div>
            <input type="text" placeholder="请重新输入密码">
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
              <div class="A">
                <div class="Aimg"><img src="" alt=""></div>
                <div class="Abutton"><button>点击上传</button></div>
              </div>
              <div class="B">
                <div class="Bimg"><img src="" alt=""></div>
                <div class="BDiv">
                  <p>上传成功</p>
                </div>
              </div>
            </div>
          </div>
          <div class="TableDeadline">
            <div class="TableName">
            
            <p><span>*</span>证件有限期</p>
            </div>  
            <input type="text" style="text-align: center;">
            <p class="DateDay">年</p>
            <input type="text" style="text-align: center;">
            <p class="DateDay">月</p>
            <input type="text" style="text-align: center;">
            <p class="DateDay">日</p>

            <div class="TableLongTerm">
              <input type="checkbox" name="长期" id="">
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
            <p><span>*</span>第三方店铺链接</p>
            </div>
            <input type="text" placeholder="填写真实的其他平台链接，若无可不填">
          </div>
          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>入驻邀请码</p>
            </div>
            <input type="text" placeholder="填写邀请人的邀请码,若无可不填 ">
          </div>

          <div class="TableAgreement">
            <input type="checkbox" name="" id="">
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

    }
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    .TableInput span{
      font-size: 12px;
      color: red;
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
    .Certificates .A{
      width: 48%;
      height: 120px;
      border-radius: 5px;
      border: 1px solid #9597a6;
    }
    .Certificates .B{
      width: 48%;
      height: 120px;
      border-radius: 5px;
      border: 1px solid #9597a6;
    }
    .A .Aimg{
      width: 100%;
      height: 85px;
    }
    .Aimg img{
      width: 100%;
      height: 85px;
    }
    .B .Bimg{
      width: 100%;
      height: 85px;
    }
    .Bimg img{
      width: 100%;
      height: 85px;
    }
    .BDiv{
      width: 100%;
      height: 35px;
      background-color: #0090fa;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .BDiv p {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .A .Abutton{
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Abutton button{
      outline: none;
      border: none;
      width: 35%;
      height: 20px;
      border-radius: 10px;
      font-size: 2px;
      background-color: white;
      border: 1px solid #9597a6;
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