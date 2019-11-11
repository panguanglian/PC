<template>
  <div class="claimCate">
    <div class="color">
      <img src="../../../assets/logo.png" />
      <span>海露后台管理系统</span>
    </div>
    <div class="contents">
      <div class="step">
        <div class="step1 active">
          <div class="tab">1</div>
          <div>身份信息</div>
        </div>
        <div class="step1">
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

      <div class="linkage">
        <span style="margin-right: 10px;">省/市/区</span>
        <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区">
          <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></el-option>
        </el-select>
        <el-select v-model="shi" @change="choseCity" placeholder="市级地区">
          <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
        </el-select>
        <el-select v-model="qu" @change="choseBlock" placeholder="区级地区">
          <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id"></el-option>
        </el-select>
      </div>

      <div class="shopName">
        <div style="margin-right: 10px;">门店名称</div>
        <div class="inupts">
          <el-input v-model="shopName" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="shopName">
        <div style="margin-right: 10px;">门店地址</div>
        <div class="inupts">
          <el-input v-model="shopSite" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="btn">搜索</div>
      <div class="count">
        <div class="xian"></div>
        <div class="shu">共16个店铺</div>
        <div class="xian"></div>
      </div>
      <div class="choice">
        <div class="choiceTitle">
          <div>门店名称</div>
          <div>地址</div>
          <div>电话</div>
          <div>认领</div>
        </div>
        <div class="options" v-for="(item,index) in option" :key="index">
          <div>{{item.name}}</div>
          <div>{{item.site}}</div>
          <div>{{item.phone}}</div>
          <div><div>选择店铺</div></div>
        </div>
        <div class="found">没有找到您的门店？<span>点击创建</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      mapJson: "../static/json/map.json",
      province: "",
      sheng: "",
      shi: "",
      shi1: [],
      qu: "",
      qu1: [],
      city: "",
      block: "",
      shopName: "",
      shopSite: "",
      option:[
        {name:'啡域咖啡（广场店）',site:'广东省珠海市香洲区扬名广场1号店铺',phone:'13547435498'}
      ]
    };
  },
  methods: {
    // 加载china地点数据，三级
    getCityData: function() {
      var that = this;
      axios
        .get(this.mapJson)
        .then(function(response) {
          if (response.status == 200) {
            var data = response.data;
            that.province = [];
            that.city = [];
            that.block = [];
            // 省市区数据分类
            for (var item in data) {
              if (item.match(/0000$/)) {
                //省
                that.province.push({
                  id: item,
                  value: data[item],
                  children: []
                });
              } else if (item.match(/00$/)) {
                //市
                that.city.push({ id: item, value: data[item], children: [] });
              } else {
                //区
                that.block.push({ id: item, value: data[item] });
              }
            }
            // 分类市级
            for (var index in that.province) {
              for (var index1 in that.city) {
                if (
                  that.province[index].id.slice(0, 2) ===
                  that.city[index1].id.slice(0, 2)
                ) {
                  that.province[index].children.push(that.city[index1]);
                }
              }
            }
            // 分类区级
            for (var item1 in that.city) {
              for (var item2 in that.block) {
                if (
                  that.block[item2].id.slice(0, 4) ===
                  that.city[item1].id.slice(0, 4)
                ) {
                  that.city[item1].children.push(that.block[item2]);
                }
              }
            }
          } else {
            console.log(response.status);
          }
        })
        .catch(function(error) {
          console.log(typeof +error);
        });
    },
    // 选省
    choseProvince: function(e) {
      for (var index2 in this.province) {
        if (e === this.province[index2].id) {
          console.log(this.province[index2].id); //你选择的省级编码
          console.log(this.province[index2].value); //省级编码 对应的汉字
          this.shi1 = this.province[index2].children;
          this.shi = this.province[index2].children[0].value;
          this.qu1 = this.province[index2].children[0].children;
          this.qu = this.province[index2].children[0].children[0].value;
          this.E = this.qu1[0].id;
        }
      }
    },
    // 选市
    choseCity: function(e) {
      for (var index3 in this.city) {
        if (e === this.city[index3].id) {
          this.qu1 = this.city[index3].children;
          this.qu = this.city[index3].children[0].value;
          this.E = this.qu1[0].id;
          console.log(this.E);
          // console.log(this.shi1[index3].value);
        }
      }
    },
    // 选区
    choseBlock: function(e) {
      this.E = e;
      console.log(this.E);
    }
  },
  created: function() {
    this.getCityData();
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
}
.claimCate {
  height: 100%;
  background: #eff8fb;
}

.color {
  padding: 2%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
  background: white;
}
.color img {
  width: 50px;
  height: 50px;
}
.contents {
  width: 1366px;
  height: 749px;
  background: white;
  margin: 0 auto;
  margin-top: 20px;
}

.step {
  display: flex;
  justify-content: center;
  padding: 2%;
  /* border-bottom: #dddddd 1px solid; */
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
.linkage {
  margin: 0 auto;
  width: 737px;
  margin-top: 50px;
}
.shopName {
  width: 737px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
}
.inupts {
  width: 662px;
}
.btn {
  width: 200px;
  height: 40px;
  background: #2e7bee;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
  line-height: 40px;
  color: white;
}
.count {
  display: flex;
  width: 250px;
  margin: 0 auto;
  align-items: center;
  font-size: 12px;
  margin-top: 40px;
  color: #9597a6;
}
.xian {
  width: 84px;
  height: 1px;
  background: #9597a6;
}
.shu {
  margin: 0 10px;
}
.choice{
  width: 1066px;
  margin: 0 auto;
  margin-top: 20px;
}
.choiceTitle{
  width: 100%;
  display: flex;
  height: 40px;
  background: #EFF8FB;
}
.choiceTitle>div{
  flex: 1;
  text-align: center;
  line-height: 40px;
  color: #2F343C;
}
.options{
  width: 1064px;
  display: flex;
  height: 40px;
  background: white;
   border:1px solid #DADBE6;
  border-bottom: none;
}
.options>div{
  flex: 1;
  text-align: center;
  line-height: 40px;
 
}
.found{
  width: 1064px;
  
  height: 40px;
  background: white;
   border:1px solid #DADBE6;
 text-align: center;
  line-height: 40px;
}
.found span{
  color: #2E7BEE;
}
</style>
