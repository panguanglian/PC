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
      <div class="title">
        <strong class="blue">1</strong> 入驻企业信息
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>主营类目
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入主营类目" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>是否三证合一
        </div>
        <div style="flex:2;  margin-left: 15px;">
          <el-radio v-model="radios" label="1">是</el-radio>
          <el-radio v-model="radios" label="2">否</el-radio>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>营业执照
        </div>
        <div style="flex:2; margin-left: 15px;">
          <div class="UP">点击上传</div>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>公司名称
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入公司名称" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>统一社会信用代码
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入统一社会信用代码" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>开户许可证或基本账户存款凭证
        </div>
        <div style="flex:2; margin-left: 15px;">
          <div class="UP">点击上传</div>
          <div class="explain">
            <div>若所在地未取消开户许可证核发，请上传开户许可证</div>
            <div class="blue">查看《开户许可证》范例</div>
            <div>若所在地取消开户许可证核发，请上传开户银行盖章的基本存款账户凭证</div>
            <div class="blue">范例一：《开立银行结算账户清单和申请书》</div>
            <div class="blue">范例二：《基本存款账户凭证》范例</div>
          </div>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>公司经营地址
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请填写公司经营的详细地址" />
        </div>
      </div>

      <div class="title">
        <strong class="blue">2</strong> 商标信息上传
      </div>
    </div>
    <div class="operate">
        <div class="last" @click="last">上一步</div>
        <div class="next" @click="next">提交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      radios: "2"
    };
  },
  methods: {
    last(){
          this.$router.go(-1)
      },
  }
};
</script>

<style scoped>
.idInfo {
  width: 960px;
  margin: 0 auto;
  background: #ffffff;
  /* padding: 2%; */
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px #888888;
}
.blue{
    color: #0090fa;
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

.UP {
  width: 80px;
  height: 22px;
  border-radius: 10px;
  border: 1px solid #030303;
  text-align: center;
  line-height: 22px;
}
.explain {
  font-size: 12px;
  padding: 10px 0;
  color: #9597A6;
}
.explain div{
    margin-top: 5px;
}
</style>
