<template>
  <div class="flagshipStore">
    
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


        <!-- 商标信息上传 -->

          <div class="TitleTitle">
            <div class="TitleContent">
                <span>2</span>
                <p>商标信息上传</p>
            </div>
        </div>

        <div class="TableTitleShop">
    
          <div class="ThreeCards">
            <div class="TableName">
            <p class="TableP">品牌类型</p>
            </div>
            <div class="CardsInput">
              <div class="InputDiv">
                <el-radio v-model="radio2" label="1">自有品牌</el-radio>
                <el-radio v-model="radio2" label="2">授权品牌</el-radio>
              </div>
              <p>自有品牌即品牌下面的商标，其权利人是您的开店公司或者开店公司的法定代表人:若不是，则是授权品牌。</p>
            </div>
          </div>

          <div class="TableInput">
            <div class="TableName">
            
            <p>品牌名称</p>
            </div>
            <input type="text" placeholder="请输入品牌名称">
          </div>

          <!-- 营业执照 -->
          <div class="TableInput">
            <div class="TableName">
            <p>品牌独占授权书</p>
            </div>
            <div class="TaleButton">
              <button>点击上传</button>
              <p>点击下载<span>授权模板</span>,按照授权模板填写，加盟品牌方授权公司及开店公司红色公章后上传</p>
            </div>
          </div>

          <div class="TableInputAuthorization">
            <div class="TableNameAuthorization">
            
            <p>授权有限期</p>
            </div>
            <div class="AuthorizationInput">
            
                <select name="" id="" class="InputSelect">
                    <option value=""></option>
                    <option value="">2019年1月1日</option>
                    <option value="">2019年1月2日</option>
                </select>
            </div>
          </div>



          <!-- 品牌注册商标 -->
          <div class="TableDeadTrademark">
            <div class="TableBrand">
            
              <p>品牌注册商标</p>
            </div>

            <div class="DeadMainBrand">
                <div class="BrandRadio">
                    <div class="RadioTitle"><p>商标注册人类型</p></div>
                    <div class="RadioBox">
                        <el-radio v-model="radio3" label="1">非自然人（公司）</el-radio>
                        <el-radio v-model="radio3" label="2">自然人（个人）</el-radio>
                    </div>
                </div>
                <div class="BrandRegister">
                    <div class="RegisterTitle">商标注册号</div>
                    <input type="text" placeholder="请输入品牌名称">
                </div>

                <div class="BrandProve">
                    <div class="ProveTitle">商标注册证明</div>
                    <div class="ProveButton">
                        <div class="ButtonBox"><button>点击上传</button></div>
                        <p> 1、请上传《商标注册证》或申请日起已满6个月的《注册申请受理通知书》</p>
                        <p> 2、上传的《商标注册证》或《商标受理通知书》的申请人或注册人必须为开店公司</p>
                        <p> 3、变更中的商标请同时上传《变更受理通知书》和《注册申请受理通知书》</p>
                        <p> 4、转入/已转让的商标需上传《转让受理通知书》或者《转让证明》</p>
                        <p> 5、《商标注册证》续证完成，而原《商标注册证》已经过期，需同时上传《核准续展注册证明》</p>  
                    </div>

                </div>

                <div class="BrandEffective">
                    <div class="EffectiveTitle">证明有效期</div>
                    <select name="" id="" class="EffectiveSelect">
                        <option value=""></option>
                        <option value="">2019年09月01日</option>
                        <option value="">2019年09月02日</option>
                    </select>
                </div>
                <div class="BrandIdentity">
                    <div class="IdentityTitle">持有人身份证明</div>
                    <div class="IdentityButton"><button>点击上传</button></div>
                </div>

            </div>

          </div>

          <div class="XinZengButton">
              <button>新增商标</button>
          </div>
        </div>

        <div class="ZhongButton">
            <button>添加更多品牌</button>
        </div>

        <!-- 店铺基本信息 -->
        <div class="TableTitle">
          <div class="TitleContent">
            <span>3</span>
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
            <button class="Establish">提交</button>
          </div>
        </div>

    </div>
    

  </div>
</template>

<script>
export default {
  name: "flagshipStore",
  data() {
    return {
      radio: '1',
      radio2:'2',
      radio3:'1',
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
    .flagshipStore{
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
    .TableTitleShop{
      margin-top: 50px;
      border: 1px solid #dddddd;
      border-radius: 5px;
    }
    .TitleTitle{
        width: 100%;
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
      margin-top: 20px;
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
      margin-top: 20px;
    }
    .ThreeCards p {
      font-size: 12px;
      letter-spacing: 1px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .ThreeCards .TableP{
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
      height: 35px;
    }
    .CardsInput p{
        
        font-size: 8px;
        color: #9597a6;
    }

    .TableInput .TaleButton{
      margin-left: 10px;
      width: 55%;
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
    .TableInput .TaleButton p{
        margin-top: 5px;
        font-size: 8px;
        color: #9597a6;
    }
    .TableInput .TaleButton span{
        color: #0090fa;
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
      height: 100px;

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


    .TableInputAuthorization{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      margin-top: 20px;
    } 
    .TableNameAuthorization{
      width: 15%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TableNameAuthorization span{
      font-size: 12px;
      color: red;
    }
    .TableNameAuthorization p {
      font-size: 12px;
      letter-spacing: 1px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .TableInputAuthorization .AuthorizationInput{
      margin-left: 10px;
      width: 55%;
      height: 25px;
    }
    .AuthorizationInput select{
      width: 40%;
      height: 25px;
      border-radius: 5px;
      outline: none;
      border: none;
      border: 1px solid #9597a6;
    }
    .TableDeadTrademark{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;   
    }

    .TableBrand{
      width: 15%;
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
    }
    .DeadMainBrand{
      width: 55%;
      margin-left: 10px;
      width: 55%;
      background-color: #f7f7f7;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 10px 20px 20px 20px;
    }
    .DeadMainBrand .BrandRadio{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .BrandRadio .RadioTitle{
        width: 20%;
        font-size: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .BrandRadio .RadioBox{
        font-size: 10px;
        margin-left: 10px;
    }
    .BrandRegister{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .BrandRegister .RegisterTitle{
        width: 20%;
        font-size: 10px;
        display: flex;
        justify-content: flex-end;
    }
    .BrandRegister input{
        width: 55%;
        font-size: 10px;
        height: 25px;
        border-radius: 5px;
        border: 1px solid #dddddd;
        outline: none;
        margin-left: 10px;
    }
    .BrandProve{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
    .BrandProve .ProveTitle{
        width: 20%;
        font-size: 10px;
        display: flex;
        justify-content: flex-end;
    }
    .BrandProve .ProveButton{
        margin-left: 10px;
        width: 70%;
    }
    .ProveButton .ButtonBox{
        width: 100%;
       
    }
    .ButtonBox button{
        width: 30%;
        height: 30px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #dddddd;
        background-color: white;
        font-size: 10px;
    }
    .ProveButton p {
        font-size: 8px;
        color: #9597a6;
    }
    .BrandEffective{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;   
    }
    .BrandEffective .EffectiveTitle{
        width: 20%;
        font-size: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .BrandEffective .EffectiveSelect{
        width: 30%;
        height: 25px;
        margin-left: 10px;
        border: 1px solid #dddddd;
        outline: none;
        border-radius: 5px;
    }
    .BrandIdentity{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;   
    }
    .BrandIdentity .IdentityTitle{
         width: 20%;
        font-size: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .BrandIdentity .IdentityButton{
        width: 30%;
        margin-left: 10px;
    }
    .IdentityButton button{
        width: 60%;
        height: 30px;
        background-color: white;
        border: 1px solid #dddddd;
        font-size: 10px;
        outline: none;
        border-radius: 5px;
    }
    .ZhongButton{
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .ZhongButton button{
        width: 100%;
        height: 30px;
        font-size: 12px;
        outline: none;
        border-radius: 5px;
        background-color: white;
        border: 1px solid #030303;
    }
    .XinZengButton{
        width: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .XinZengButton button{
        width: 15%;
        height: 25px;
        background-color: white;
        outline: none;
        border: 1px solid #030303;
        border-radius: 5px;
        font-size: 12px;
        margin-bottom: 20px;
    }
</style>