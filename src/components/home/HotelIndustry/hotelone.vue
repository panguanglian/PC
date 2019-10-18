
<template>
  <!-- 旗舰店-企业身份信息 -->

  <div class="idInfo">
    <div class="color">
      <img src="../../../assets/logo.png" />
      <span>商家入驻</span>
    </div>

    <div style="display:flex;justify-content:center;flex-flow:row wrap;">
      <div class="step">
        <div class="step1 active">
          <div class="tab">1</div>
          <div>基本信息</div>
        </div>
        <div class="step1">
          <div class="progress"></div>
          <div class="tab">2</div>
          <div>提交资质</div>
        </div>
        <div class="step1">
          <div class="progress"></div>
          <div class="tab">3</div>
          <div>信息提交成功</div>
        </div>
      </div>
      <div class="box">
        <div class="info">
          <p>
            <span>*</span>酒店名称
          </p>
          <div>
            <el-input v-model="username" placeholder="请输入酒店名称"></el-input>
          </div>
        </div>
        <div class="info">
          <p>
            <span>*</span>前台电话
          </p>
          <div>
            <el-input v-model="phonenumber" placeholder="请输入酒店前台电话"></el-input>
          </div>
        </div>
        <div class="info">
          <p>
            <span>*</span>前台电话
          </p>
          <div>
            <el-select
              v-model="sheng"
              @change="choseProvince"
              placeholder="省级地区"
              style="margin-bottom:10px;"
            >
              <el-option
                v-for="item in province"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-select
              v-model="shi"
              @change="choseCity"
              placeholder="市级地区"
              style="margin-bottom:10px;"
            >
              <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="qu" @change="choseBlock" placeholder="区级地区">
              <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
        <div class="info">
          <p>
            <span>*</span>详细地址
          </p>
          <div>
            <el-input v-model="address" placeholder="请输入酒店前台电话"></el-input>
          </div>
        </div>
        <div class="info">
          <p>
            <span>*</span>酒店类型
          </p>
          <div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="info">
          <p>
            <span>*</span>售价区间
          </p>
          <div>
            <el-select v-model="value1" placeholder="请选择" style="margin-bottom:10px;">
              <el-option
                v-for="item in optionss"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择">
              <el-option
                v-for="item in optionsss"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="info">
          <p>
            <span>*</span>客房总数
          </p>
          <div>
            <el-input v-model="roomnumber" placeholder="请输入酒店前台电话"></el-input>
          </div>
        </div>
        <div class="info">
          <p>
            <span>*</span>酒店图片
          </p>
          <div style="display:flex;align-items:center;">
            <div class="upImg">
              <span v-if="onesrc.length==0">外观图片</span>
              <img :src="onesrc" v-if="onesrc.length!=0" />
              <input
                type="file"
                class="dsfafd"
                @change="getFile"
                multiple
                accept="image/png, image/jpeg, image/gif, image/jpg"
                id="file"
              />
              <label class="upImgbtn" v-if="onesrc.length==0" for="file">点击上传</label>
              <label class="upseccs" v-else for="file">重新上传</label>
            </div>
            <div class="upImg">
              <span v-if="twosrc.length==0">大堂/设施</span>
              <img :src="twosrc" v-if="twosrc.length!=0" />
              <input
                type="file"
                class="dsfafd"
                @change="getFiles"
                multiple
                accept="image/png, image/jpeg, image/gif, image/jpg"
                id="files"
              />
              <label class="upImgbtn" v-if="twosrc.length==0" for="files">点击上传</label>
              <label class="upseccs" v-else for="files">重新上传</label>
            </div>
            <div class="upImg">
              <span v-if="sreensrc.length==0">大堂/设施</span>
              <img :src="sreensrc" v-if="sreensrc.length!=0" />
              <input
                type="file"
                class="dsfafd"
                @change="getFiless"
                multiple
                accept="image/png, image/jpeg, image/gif, image/jpg"
                id="filess"
              />
              <label class="upImgbtn" v-if="sreensrc.length==0" for="filess">点击上传</label>
              <label class="upseccs" v-else for="filess">重新上传</label>
            </div>
          </div>
        </div>
        <div class="dafd">
            <div class="buttons">
            下一步
        </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      
      value: "",
      value1: [],
      value2: [],
      mapJson: "../static/json/map.json",
      province: "",
      sheng: "",
      shi: "",
      shi1: [],
      qu: "",
      qu1: [],
      city: "",
      block: "",
      onesrc: [],
      twosrc: [],
      sreensrc: [],
      phonenumber:'',
    address:'',
    roomnumber:'',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],

      optionss: [
        {
          value: "1",
          label: "10"
        },
        {
          value: "2",
          label: "20"
        },
        {
          value: "3",
          label: "50"
        },
        {
          value: "4",
          label: "100"
        },
        {
          value: "5",
          label: "500"
        }
      ],

      optionsss: [
        {
          value: "1",
          label: "10"
        },
        {
          value: "2",
          label: "20"
        },
        {
          value: "3",
          label: "50"
        },
        {
          value: "4",
          label: "100"
        },
        {
          value: "5",
          label: "500"
        }
      ],
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
          // console.log(this.E)
        }
      }
    },
    // 选区
    choseBlock: function(e) {
      this.E = e;
      // console.log(this.E)
    },
    getFile(e) {
      let _this = this;
      var files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.onesrc = this.result;
        // console.log(this.result);
      };
    },
    getFiles(e) {
      let _this = this;
      var files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.twosrc = this.result;
        // console.log(_this.twosrc);
      };
    },
    getFiless(e) {
      let _this = this;
      var files = e.target.files[0];
      if (!e || !window.FileReader) return; // 看支持不支持FileReader
      let reader = new FileReader();
      reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
      reader.onloadend = function() {
        _this.sreensrc = this.result;
        // console.log(this.result);
      };
    }
  },
  created: function() {
    this.getCityData();
  }
};
</script>

<style>
.dafd{
    margin: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
}
.buttons{
    width: 150px;
    height: 30px;
    color: #fff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0090fa;
}
.upImg {
  border: 1px solid #ddd;
  width: 150px;
  height: 150px;
  border-radius: 6px;
  position: relative;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
  font-size: 24px;
}
.dsfafd {
  /* display: none; */
  position: absolute;
  opacity: 0;
  width: 200px;
  height: 100%;
  z-index: 999;
  left: 0%;
}
.upImg img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
}
.upImg.active {
  border: 1px solid #0090fa;
}
.upImgbtn {
  position: absolute;
  left: 30%;
  bottom: 5%;
  width: 35%;
  height: 15%;
  border-radius: 15px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
.upseccs {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  background: #0090fa;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
}
.info > div {
  width: 75%;
}
.info p {
  width: 20%;
  text-align: right;
}
.info p span {
  color: red;
}
.info {
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.box {
  width: 60%;
  background: #fff;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  padding: 20px 0;
  margin-bottom: 20px;
}
.color {
  padding: 2%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
  background: #fff;
}
.color img {
  width: 50px;
  height: 50px;
}
html {
  background: #eff8fb;
}

.step {
  display: flex;
  justify-content: center;
  padding: 2%;
  box-sizing: border-box;
  border-bottom: #dddddd 1px solid;
  background: #ffffff;
  margin-top: 20px;
  width: 60%;
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
.upPapers {
  position: relative;
}
.papers .UP {
  width: 80px;
  height: 22px;
  border-radius: 10px;
  border: 1px solid #030303;
  text-align: center;
  line-height: 22px;
  position: absolute;
  bottom: 10px;
  left: 50px;
}
.color {
  padding: 2%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
}
.color img {
  width: 50px;
  height: 50px;
}
</style>
