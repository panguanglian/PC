<template>
  <div>
    <div class="shipments">
      <div class="classify">
        <div class="seek">
          <!-- <div class="seekInput">
            <input type="text" placeholder="请输入关键词搜索分类" />
          </div>
          <div class="seekBtn">快速搜索分类</div> -->
        </div>
        <div class="commodity">
          <div class="modity">
            <div class="comSeek">
              <!-- <el-input v-model="input" size="small" placeholder="请输入内容">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input> -->
            </div>
            <div class="comList">
              <div
                class="list"
                v-for="(item,index) in list"
                :key="index"
                @click="oneList(index)"
                :class="{blue:oneHue===index}"
              >
                <div class="isdetails">{{item.gcName}}</div>
                <div class="comIcon">
                  <i class="el-icon-caret-right"></i>
                </div>
              </div>
            </div>
            <div class="alter">
              找不到想要的分类？可
              <span>修改主营类目</span>或
              <span>一键开新店</span>
            </div>
          </div>
          <div class="modity">
            <div class="comSeek">
              <!-- <el-input v-model="input" size="small" placeholder="请输入内容">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input> -->
            </div>
            <div class="comList" v-if="oneIndex=='a'? false : true">
              <div
                class="list"
                v-for="(item,index) in list[oneIndex].classList"
                :key="index"
                @click="twoList(index)"
                :class="{blue:twoHue===index}"
              >
                <div class="isdetails">{{item.gcName}}</div>
                <div class="comIcon">
                  <!-- <i class="el-icon-caret-right"></i> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inform">
        <span>发布须知:</span> 准确选择类目有利于商品
        曝光，促进转化；若错放类目将会导
        致流量降权或下架整改。
      </div>
      <div class="shibtn" :class="{shibtns:i==true}" @click="shibtn">我已阅读发布须知，确认创建该类商品</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      input: "",
      oneHue: "",
      twoHue: "",
      threeHue: "",
      oneIndex: "a",
      twoIndex: "a",
      i: false,
      information: [{ oneList: "", twoList: "" }],
      list: [],
      gcId: ""
    };
  },
  created() {
    // depot.get({
    //   url: "/merchant/goods/categorys",
    //   data: {},
    //   cb: res => {
    //     console.log(res);
    //   }
    // });
    //     this.axios.get('/merchant/goods/categorys')
    //         .then((res)=>{
    //             console.log(res.data.data)
    //         })
  },
  mounted() {
    var _this = this;
   
     this.axios({
        method: "get",
        url: "/merchant/goods/categorys",
       
        data: {

        }
      }).then(res => {
        console.log(res);
        _this.list = res.data.data;
      });
  },
  // mounted(){
  //   this.axios.get('/merchant/goods/categorys')
  //       .then((res)=>{
  //           console.log(res.data.data)
  //       })
  // },
  methods: {
    oneList(index) {
      console.log(index);

      if (this.oneIndex == index) {
        this.oneIndex = index;
      } else {
        this.twoIndex = "a";
        this.i = false;
        this.twoHue = "";

        this.information[0].oneList = this.list[index].gcName;
        this.oneIndex = index;
      }
      this.oneIndex = index;
      this.oneHue = index;
    },
    twoList(index) {
      this.twoIndex = index;
      this.twoHue = index;

      this.i = true;
      this.gcId = this.list[this.oneIndex].classList[index].gcId;
      this.information[0].twoList = this.list[this.oneIndex].classList[
        index
      ].gcName;
    },
    // threeList(index) {
    //   this.threeHue = index;
    //   this.i = true;
    //   this.information[0].threeList = this.list[this.oneIndex].children[
    //     this.twoIndex
    //   ].children[index].value;
    // },
    shibtn() {
      if (this.i == false) {
      } else {
        console.log(this.information);

        sessionStorage.setItem("genre", JSON.stringify(this.information));
        this.$router.push({ name: "shopInfo", params: { gcIds: this.gcId } });
      }
    }
  }
};
</script>

<style scoped>
.shipments {
  width: 90%;
  height: 700px;

  margin: 0 auto;
  position: relative;
}

.classify {
  width: 60%;
  height: 600px;
  background: #f3f3f3;
}
.inform {
  width: 250px;

  height: 70px;
  background: #f3f3f3;
  position: absolute;
  right: 3%;
  top: 0px;
  padding: 30px;
  color: #6a6a6a;
}
.inform span {
  color: #225af6;
}
.shibtn {
  width: 380px;
  height: 40px;
  background: #d2d2d2;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  border-radius: 5px;
  color: white;
  margin-top: 40px;

  cursor: no-drop;
}
.seek {
  display: flex;
  width: 90%;

  margin: 0 auto;
  padding-top: 20px;
}
.seekInput {
  width: 80%;
  height: 38px;
  border: 1px solid #dddddd;
  overflow: hidden;
  border-radius: 5px;
  background: white;
}
.seekInput input {
  width: 100%;
  height: 40px;
  background: none;
  outline: none;
  border: none;
  margin-left: 20px;
}
.seekBtn {
  width: 20%;
  height: 40px;
  background: #2e7bee;
  text-align: center;
  line-height: 40px;
  color: white;
  border-radius: 5px;
  margin-left: 20px;
}
.commodity {
  width: 90%;
  margin: 0 auto;
  height: 500px;
  background: white;
  margin-top: 10px;
  display: flex;
}
.commodity > div {
  flex: 1;
}
.modity {
  border: 1px solid #dbdbdb;
}
.comSeek {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
}
.comList {
  width: 75%;
  margin: 0 auto;
  margin-top: 20px;
  height: 290px;
  overflow: auto;
  cursor: pointer;
}
.comList .list {
  display: flex;
  margin-top: 5px;
  border-radius: 5px;
  padding-left: 8px;
}
.comList .list .isdetails {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
}
.comIcon {
  width: 18%;
  text-align: right;
}
.alter {
  width: 70%;
  margin: 0 auto;
  background: #f1f1f1;
  padding: 10px;
  height: 60px;
  border-radius: 5px;
  margin-top: 10px;
}
.alter span {
  color: #225af6;
  cursor: pointer;
}
.blue {
  background: #dbdbdb;
}
.shibtns {
  cursor: pointer;
  background: #2e7bee;
}
</style>
