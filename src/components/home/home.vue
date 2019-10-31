<template>
  <div class="home">

    <div class="title">请选择您的店铺类型</div>
    <div class="genre">
      <el-tabs type="border-card">
        <el-tab-pane>
          <div slot="label">个人店</div><div slot="label" class="aa">适合个人/个体工商店户入驻提供身份证等即可开店</div>
          <div class="individual" v-for="(item, i) in personal" :key="`personal_${ i }`" @click="_otherPage(item)">
            <div>{{ item.title }}</div>
            <div>{{ item.text }}</div>
          </div>
          <div class="selectBtn">下一步</div>
        </el-tab-pane>
        <!-- <el-tab-pane>
          <div slot="label">企业店</div>
          <div slot="label" class="aa">适合公司/企业开店提供营业执照等资料即可开店</div>
          <p>暂无内容，请谅解
            <el-select v-model="value8" filterable placeholder="请选择" value-key="id" @change="currentSel">
    <el-option v-for="item in options" :key="item.code" :label="item.label" :value="item"></el-option>
 </el-select>
          </p>
          
          <div class="individual" v-for="(item, i) in firm" :key="`firm${ i }`" @click="idinfo(item)">
            <div>{{ item.title }}</div>
            <div>{{ item.text }}</div>
          </div>
            
          <div class="selectBtns">下一步</div>
        </el-tab-pane> -->
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      options: [
        {
          value: "选项1",
          id: 1,
          code: "xuanxiang1",
          label: "黄金糕"
        },
        {
          code: "xuanxiang2",
          id: 2,
          value: "选项2",
          label: "双皮奶"
        },
        {
          id: 3,
          value: "选项3",
          code: "xuanxiang3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          id: 4,
          code: "xuanxiang4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭",
          id: 5,
          code: "xuanxiang5"
        },
        
      ],
      value8:'',
      personal: [
        {title: '个体工商店', text: '个人身份开店（有营业执照）',link: '/Businesslicense'},
      ],
      firm: [],
    }
  },
  methods: {
    _otherPage(data) {
      this.$router.push({ path: data.link })
    },
     idinfo(data){
      this.$router.push({path: data.link})
    },
    currentSel(selVal) {
       this.code = selVal.code;
       this.name = selVal.label;
       console.log("选择的name为：" + this.name, "选择的code为:" + this.code);
       console.log(selVal);
     },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

.aa {
  position: absolute;
  top: 20px;
  width: 100%;
  left: 0;
  font-size: 12px;
}

.individual {
  margin: 0 auto;
  border: 1px solid #dddddd;
  width: 50%;
  border-radius: 5px;
  margin-top: 20px;
  padding: 5px 30px;
  font-size: 14px;
}
.individual div:last-child {
  color: #707070;
}
.selectBtn {
  margin: 0 auto;
  width: 20%;
  text-align: center;
  background: #0090fa;
  margin-top: 174px;
  padding: 10px 5px;
  color: white;
  border-radius: 5px;
}
.selectBtns {
  margin: 0 auto;
  width: 20%;
  text-align: center;
  background: #0090fa;
  margin-top: 30px;
  padding: 10px 5px;
  color: white;
  border-radius: 5px;
}
</style>
<style>
  .el-tabs__nav {
  width: 100%;
  display: flex;
}
.el-tabs__nav div {
  flex: 1;
  text-align: center;
  height: 60px;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  height: 60px;
}
</style>