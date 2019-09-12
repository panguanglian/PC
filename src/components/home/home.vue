<template>
  <div class="home">
    <div class="title">请选择您的店铺类型</div>
    <div class="genre">
      <el-tabs type="border-card">
        <el-tab-pane><div slot="label">个人店</div><div slot="label" class="aa">适合个人/个体工商店户入驻提供身份证等即可开店</div>
          <div class="individual" style="margin-top: 50px;">
            <div>个人店</div>
            <div>个人身份开店（无营业执照）</div>
          </div>
          <div class="individual">
            <div>个体店</div>
            <div>个体工商户开店（有营业执照）</div>
          </div>
          <div class="selectBtn">
            下一步
          </div>
        </el-tab-pane>
        <el-tab-pane><div slot="label">企业店</div><div slot="label" class="aa">适合公司/企业开店提供营业执照等资料即可开店</div>
          <div class="individual" style="margin-top: 50px;">
            <div>旗舰店</div>
            <div>经营1个自有品牌或1级授权品牌旗舰店</div>
          </div>
          <div class="individual">
            <div>专卖店</div>
            <div>经营1个自有品牌或授权销售专卖店</div>
          </div>
          <div class="individual">
            <div>专营店</div>
            <div>经营1个或多个自有/他人品牌的专营店</div>
          </div>
          <div class="individual">
            <div>普通店</div>
            <div>普通企业店铺</div>
          </div>
          <div class="selectBtns">
            下一步
          </div>
        </el-tab-pane>
      </el-tabs>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.title {
  width: 100%;
  text-align: center;
  margin: 2% 0;
  font-size: 18px;
}
.genre {
  width: 50%;
  margin: 0 auto;
}
.el-tabs__nav{
  width: 100%;
  display: flex;
}
.el-tabs__nav div{
  flex: 1;
  text-align: center;
  height: 60px;
}
.aa{
  position: absolute;
  top: 20px;
  width: 100%;
  left: 0;
  font-size: 12px;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  height: 60px;
}
.individual{
  margin: 0 auto;
  border: 1px solid #dddddd;
  width: 50%;
  border-radius: 5px;
  margin-top: 20px;
  padding: 5px 30px;
  font-size: 14px;
}
.individual div:last-child{
  color: #DDDDDD;
}
.selectBtn{
  margin: 0 auto;
  width: 20%;
  text-align: center;
  background: #0090FA;
  margin-top: 174px;
  padding: 10px 5px;
  color: white;
  border-radius: 5px;
}
.selectBtns{
  margin: 0 auto;
  width: 20%;
  text-align: center;
  background: #0090FA;
  margin-top: 30px;
  padding: 10px 5px;
  color: white;
  border-radius: 5px;
}
</style>