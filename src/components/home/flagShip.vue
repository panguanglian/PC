<template>
  <div class="flagShip">

    <div class="flagShipContent">
      
      <!-- 进度栏区域 -->
      <div class="FlagTableComeTel">
        <div class="ComeTelContent">

          <div class="ComeTelTitle">
            <div class="TitleYuan">1</div>
            <p>身份信息</p>
          </div>

          <div class="ComTelXian"></div>

          <div class="ComeTelTitle">
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

      <div class="FlagTableInformation">
        <div class="FlagTableInformationContent">

          <!-- 图标区域 -->
          <div class="InformationTitle">
            <div class="Ivg">
              $
            </div>
          </div>

          <!-- 店铺信息提交成功 -->
          <div class="InformationNumber">

            <div class="NumberP">
              <div class="NumberFirst">
                <p>恭喜您的店铺<span>[Charles Keith]</span>编号<span>[94355658]</span>提交资料成功</p>
              </div>
            </div>

            <div class="NumberP">
              <div class="NumberSecond">
                <p class="NumSign">登录账号:</p>
                <p class="Numsman">15456789043</p>
                <p class="NumWebsite">登录网址:</p>
                <p class="NumLink">www.baidu.com</p>
              </div>
            </div>

          </div>

          <!-- 登录按钮 -->
          <div class="InformationButton">
            <button>一键登录</button>
          </div>

          <!-- 下栏信息 -->
          <div class="InformationColumn">
            <div class="ColumnBox">
              <p>店铺审核将在2个工作日内完成</p>
            </div>

            <div class="ColumnBox">
              <p>如果你有第三方平台店铺，请先去绑定第三方平台店铺</p><span>立即绑定</span>
            </div>
            
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "flagShip",
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
    .flagShip{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .flagShipContent{
    margin-top: 20px;
    background-color: white;
    width: 50%;
  }


  .FlagTableComeTel{
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
  }
  .ComeTelContent{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .ComeTelContent .ComeTelTitle{
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .TitleYuan {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color:#0090fa;
    color: white;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ComeTelTitle p{
    font-size: 15px;
    font-weight: 500;
    text-indent: 10px;
  }
  .ComeTelContent .ComTelXian{
    width: 20%;
    border: 1px solid #0090fa;
  }




  .FlagTableInformation{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
  .FlagTableInformationContent{
    width: 100%;
    height: 350px;
  }
  .InformationTitle{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .InformationTitle .Ivg{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #51b118;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight:900;
    
  }
  .InformationNumber{
    width: 100%;
    height: 80px;
  }
  .InformationNumber .NumberP{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    font-size: 14px;
  }
  .NumberP span{
    text-indent: 5px;
    color: #2e7bee;

  }
  .NumberP .NumberFirst p{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .NumberP .NumberSecond{
    width: 38%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .InformationButton{
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .InformationButton button{
    width: 18%;
    height: 30px;
    outline: none;
    border: none;
    background-color: #0090fa;
    color: white;
    font-size: 14px;
    border-radius: 5px;
  }
  .InformationColumn .ColumnBox{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #9597a6;
    margin-top: 10px;
  }
  .ColumnBox span{
    text-indent: 5px;
    color: #0090fa;
  }

</style>