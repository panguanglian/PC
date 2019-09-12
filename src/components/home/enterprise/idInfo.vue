<template>
  <div class="idInfo">
    <div class="step">

      <div class="step1 active">
          <div class="tab">1</div>
          <div>身份信息</div>

      </div>
      <div class="step1 active">
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
        <div class="title"><span>1</span>企业法定代表人基本信息</div>
        <div class="list">
            <div style="flex:1; text-align: right;"><span>*</span>法定代表人手机号</div>
            <div style="flex:2;"><input type="text" placeholder="请输入法定代表人手机号"></div>
        </div>
        <div class="list">
            <div style="flex:1; text-align: right;"><span>*</span>姓名</div>
            <div style="flex:2;"><input type="text" placeholder="请填写店铺法定代表人姓名"></div>
        </div>
        <div class="list">
            <div style="flex:1; text-align: right;"><span>*</span>身份证号</div>
            <div style="flex:2;"><input type="text" placeholder="请输入18位身份证号码"></div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.idInfo {
  width: 46%;
  margin: 0 auto;
  background: #ffffff;
  /* padding: 2%; */
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px #888888;
}
.step{
    display: flex;
    justify-content: center;
    padding: 2%;
    border-bottom: #dddddd 1px solid;
}
.step .active .tab{
    background: #0090FA;
    color: #ffffff;
    border: 1px solid #0090FA;
}

.step .active .progress{
    background: #0090FA;
}
.step1{
    display: flex;
    
}
.step1 div{
    height: 34px;
    line-height: 34px;
    color: #9597A6;
    margin-right: 15px;
}
.step1 .tab{
    width: 34px;
    border-radius: 50%;
    background: #ffffff;
    color: #9597A6;
    text-align: center;
    border: 1px solid #dddddd;
}
.step1 .progress{
    width: 160px;
    height: 2px;
    background: #dddddd;
    margin-top: 16px;
}
.information{
    padding: 2%;
}
.list{
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
}
.list span{
    color: red;
}
.list div input{
    width: 60%;
    padding: 5px 5px;
    border-radius: 5px;
    background:none;  
    outline:none;  
    border:1px solid #ccc;
    margin-left: 10px;
}
.title{
    margin: 20px 0;
}
</style>