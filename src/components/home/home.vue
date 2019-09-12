<template>
  <div class="home">

    <div class="title">请选择您的店铺类型</div>
    <div class="genre">
      <el-tabs type="border-card">
        <el-tab-pane><div slot="label">个人店</div><div slot="label" class="aa">适合个人/个体工商店户入驻提供身份证等即可开店</div>
          <div class="individual" v-for="(item, i) in personal" :key="`personal_${ i }`" @click="_otherPage(item)">
            <div>{{ item.title }}</div>
            <div>{{ item.text }}</div>
          </div>
          <div class="btn">
            下一步
          </div>
        </el-tab-pane>
        <el-tab-pane><div slot="label">企业店</div><div slot="label" class="aa">适合公司/企业开店提供营业执照等资料即可开店</div>配置管理</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      personal: [
        {
          title: '个人店',
          text: '个人身份开店（无营业执照）',
          link: 'individualBusiness'
        },
        {
          title: '个人店',
          text: '个人身份开店（有营业执照）',
          link: 'personalStore'
        }
      ]
    }
  },
  methods: {
    _otherPage(data) {
      this.$router.push({ path: data.link })
    }
  }
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
  width: 60%;
  border-radius: 5px;
}
</style>