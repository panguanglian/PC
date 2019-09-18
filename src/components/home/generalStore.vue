<template>
  <div class="generalStore">
    
    <div class="StoreTable">

      <!-- 进度栏区域 -->
      <div class="FlagTableComeTel">
        <div class="ComeTelContent">

          <div class="ComeTelTitleone">
            <div class="TitleYuan">1</div>
            <p>身份信息</p>
          </div>

          <div class="ComTelXianone"></div>

          <div class="ComeTelTitleone">
            <div class="TitleYuan">2</div>
            <p>店铺信息</p>
          </div>

          <div class="ComTelXian"></div>

          <div class="ComeTelTitle">
            <div class="TitleYuan">3</div>
            <p>信息提交成功</p>
          </div>

        </div>
      </div>

        <!-- 营业执照信息 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>1</span>
            <p>入驻企业信息</p>
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>主营类目</p>
            </div>
            <input type="text" placeholder="请输入主营类目">
          </div>

          <div class="ThreeCards">
            <div class="TableName">
            <p class="TableP"><span>*</span>是否三证合一</p>
            </div>
            <div class="CardsInput">
              <div class="InputDiv">
                <el-radio v-model="radio" label="1">是</el-radio>
                <el-radio v-model="radio" label="2">否</el-radio>
              </div>
            </div>
          </div>

          <!-- 营业执照 -->
          <div class="TableInput">
            <div class="TableName">
            <p><span>*</span>营业执照</p>
            </div>
            <div class="TaleButton">
              <button>点击上传</button>
            </div>
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>公司名称</p>
            </div>
            <input type="text" placeholder="请输入公司名称">
          </div>

          <div class="TableInput">
            <div class="TablePU">
            
            <p class="PUnified"><span>*</span>统一社会信用代码</p>
            </div>
            <input type="text" placeholder="请输入统一的社会信用代码">
          </div>


          <!-- 营业期限 -->
          <div class="TableDeadline">
            <div class="TableName">
            
              <p><span>*</span>开户许可证或基本账户存款凭证</p>
            </div>

            <div class="DeadlineMain">

              <div class="DeadlineButton">
                <button>点击上传</button>
              </div>  

              <div class="DeadlineTileP">
                <p>若所在地未取消开户许可证核发，请上传开户许可证</p>
                <span>查看《开户许可证》范例</span>
                <p>若所在地取消开户许可证核发，请上传开户银行盖章的基本存款账户凭证</p>
                <span>范例一:《开立银行结算账户清单和申请书》</span>
                <span>范例二:《基本存款账户凭证》范例</span>
              </div>

            </div>

          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>公司经营地址</p>
            </div>
            <input type="text" placeholder="请填写公司的详细地址">
          </div>

        </div>

        <!-- 店铺基本信息 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>2</span>
            <p>店铺基本信息</p>
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
            
            <p><span>*</span>第三方店铺链接</p>
            </div>
            <input type="text" placeholder="填写真实的其他平台链接，若无可不填">
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p><span>*</span>入驻邀请码</p>
            </div>
            <input type="text" placeholder="填写邀请人的邀请码，若无可不填">
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
  name: "generalStore",
  data() {
    return {
      radio: '1'
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
    .generalStore{
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
      margin-top: 50px;
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
    .TablePU{
      width: 18%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TablePU span{
      font-size: 12px;
      color: red;
    }
    .TablePU .PUnified{
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

    /* 三证合一 */
    .ThreeCards{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
    .ThreeCards .TableP span{
      font-size: 12px;
      color: red;
    }
    .ThreeCards p {
      font-size: 12px;
      letter-spacing: 1px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .ThreeCards .CardsInput{
      margin-left: 10px;
      width: 55%;
      height: 25px;
      display: flex;
      justify-content: flex-start;
    }

    .TableInput .TaleButton{
      margin-left: 10px;
      width: 55%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .TableInput .TaleButton button{
      font-size: 12px;
      border-radius: 5px;
      background-color: white;
      color: black;
      width: 20%;
      height: 25px;
      outline: none;
      border: none;
      border: 1px solid #030303;
    }




  .FlagTableComeTel{
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
  }
  .ComeTelContent{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ComeTelContent .ComeTelTitleone{
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ComeTelContent .ComeTelTitle{
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ComeTelTitleone .TitleYuan {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color:#0090fa;
    color: white;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ComeTelTitle .TitleYuan {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color:white;
    border: 1px solid #9597a6;
    color: #9597a6;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ComeTelTitleone p{
    font-size: 15px;
    font-weight: 500;
    text-indent: 10px;
  }
  .ComeTelTitle p{
    font-size: 15px;
    font-weight: 500;
    text-indent: 10px;
    color: #9597a6;
  }
  .ComeTelContent .ComTelXianone{
    width: 20%;
    border: 1px solid #0090fa;
  }
  .ComeTelContent .ComTelXian{
    width: 20%;
    border: 1px solid #9597a6;
  }


  .DeadlineMain{
      margin-left: 10px;
      width: 55%;

  }
  .TableDeadline .DeadlineButton{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .TableDeadline .DeadlineButton button{
      font-size: 12px;
      border-radius: 5px;
      background-color: white;
      color: black;
      width: 20%;
      height: 25px;
      outline: none;
      border: none;
      border: 1px solid #030303;
    }
    .TableDeadline .DeadlineTileP{
      width: 100%;
      margin-top: 10px;
    }
    .DeadlineTileP p{
      font-size: 12px;
      color: #9597a6;
    }
    .DeadlineTileP span{
      font-size: 12px;
      color: #0090fa;
    }

</style>