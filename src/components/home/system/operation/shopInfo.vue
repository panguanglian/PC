<template>
  <div style="width: 100%; background: white;">
    <div class="shopInfo">
      <div class="head">商品基本信息</div>
      <div class="lists">
        <div class="variety">
          <div>商品分类:</div>
          <div v-if="classification==''?false : true">{{classification[0].twoList}}</div>
          <div class="amend" @click="amend">修改分类</div>
        </div>
        <div class="variety">
          <div class="title">商品名称:</div>
          <div>
            <div class="int">
              <input type="text" />
            </div>
            <div class="explain">商品标题名称长度至少3个字符，最长50个汉字</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品副标题:</div>
          <div>
            <div class="int">
              <input type="text" />
            </div>
            <div class="explain">商品副标题做商品特殊说明，位于详情页商品名称下面</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品价格:</div>
          <div>
            <div class="int" style="width: 200px;">
              <input type="text" />
            </div>
            <div class="explain">
              <p>商品价格必须是0.01~1000000之间的数字</p>
              <p>若启用了库存配置，请在下方商品库存区域进行管理</p>
              <p>商品规格库存表中如有价格差异，店铺价格显示为价格区间形式</p>
            </div>
          </div>
        </div>
        <div class="variety" v-if="genre.length">
          <div class="title">配件类型:</div>
          <div>
            <div style="width: 800px;">
              <el-checkbox-group v-model="checkList">
                <el-checkbox v-for="(item,index) in genre" :key="index" :label="item.name"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="explain">必须添加一条规格，否则在前台不显示！</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">规格:</div>
          <div>
            <div style="width: 800px;">
              <el-checkbox-group v-model="specification">
                <el-checkbox v-for="(item,index) in genres" :key="index" :label="item.name"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="explain">必须添加一条规格，否则在前台不显示！</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品库存:</div>
          <div>
            <div class="int" style="width: 200px;">
              <input type="text" />
            </div>
            <div class="explain">
              <p>商铺库存数量必须为1~1000000000之间的整数</p>
              <p>若启用了库存配置，则系统自动计算商品的总数，此处无需卖家填写</p>
            </div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品货号:</div>
          <div>
            <div class="int" style="width: 200px;">
              <input type="text" />
            </div>
            <div class="explain">
              <p>商品货号是指卖家个人管理商品的编号，买家不可见</p>
              <p>最多可输入20个字符，支持输入中文、字母、数字、_、/、-和小数点</p>
            </div>
          </div>
        </div>

        <div class="variety">
          <div class="title">商品图片:</div>
          <div>
            <div class="shopImg">
              <form action name="fileinfo">
                <div class="img_box">
                  <div
                    class="img_size"
                    v-for="(item,index) of imgList"
                    :key="index"
                    v-show="imgList.length!=0"
                  >
                    <img v-if="item.file.type.indexOf('image') !== -1" :src="item.file.src" />
                    <div class="pxove_logo" @click="fileDel">×</div>
                  </div>
                  <div class="add_img" @click="fileClick" v-show="addState">
                    <span>+</span>
                  </div>
                  <div @click="uploadImage"></div>
                  <input
                    id="inpu"
                    name="files"
                    style="display: none;"
                    @change="fileChange($event)"
                    type="file"
                    ref="file"
                    accept="image/*"
                    multiple
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="variety">
          <div class="title">商品参数:</div>
          <div class="operations">
            <div class="parameter">
              <div>参数名</div>
              <div>参数值</div>
            </div>
            <div class="operationPar" v-for="(item,index) in operationPar" :key="index">
              <div class="inputPar">
                <input type="text" placeholder="参数名" v-model="item.name" />
              </div>
              <div class="inputPar">
                <input type="text" placeholder="参数值" v-model="item.value" />
              </div>
              <div class="delPar" @click="delPar(index)">删除</div>
            </div>
            <div class="addPar" @click="addPar">添加</div>
          </div>
        </div>

        <div class="variety">
          <div class="title">包装售后:</div>
          <div class="pack">
            <div class="packAfter" v-for="(item,index) in packAfter" :key="index">
              <div class="inputPar">
                <input type="text" placeholder="名称" v-model="item.name" />
              </div>
              <div class="arerPack">
                <textarea name id cols="30" rows="10" placeholder="内容" v-model="item.value"></textarea>
              </div>
              <div class="delPack" @click="delPack(index)">
                <i class="el-icon-error"></i>
              </div>
            </div>
            <div class="addPar" @click="addPack">添加</div>
          </div>
        </div>
        <div class="head">商品物流信息</div>
        <div class="variety">
          <div class="title">所在地:</div>
          <div>
            <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区">
              <el-option
                v-for="item in province"
                :key="item.id"
                :label="item.value"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-select v-model="shi" @change="choseCity" placeholder="市级地区">
              <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
            </el-select>
            <el-select v-model="qu" @change="choseBlock" placeholder="区级地区">
              <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id"></el-option>
            </el-select>
          </div>
        </div>
        <div class="variety">
          <div class="title">运费:</div>
          <div class="freight">
            <div>
              <el-radio v-model="radio" label="1" @change="buy">卖家承担运费</el-radio>
            </div>
            <div>
              <el-radio v-model="radio" label="2" @change="buy">买家承担运费</el-radio>
            </div>
            <div class="money">
              <div>满额免邮金额</div>
              <div class="moneyInput">
                <input type="text" />
              </div>
            </div>
            <div class="template" v-if="deal">
              <div>运费模板</div>
              <div class="examine">
                <div>{{modGenre}}</div>
                <div class="examineBtn" @click="dialogVisible = true">查看我的运费模板</div>
              </div>
            </div>
          </div>
        </div>

        <div class="head">
          <div class="putin">提交</div>
        </div>

        <div>
          <el-dialog title="提示" :visible.sync="dialogVisible" :before-close="handleClose">
            <div>
              <div
                class="modules"
                v-for="(item,index) in modules"
                :key="index"
                @click="ismodule(index)"
              >
                <div class="circle" :class="{bgblue:isbgblue===index}"></div>
                <div>
                  <div style="border: 1px solid #dddddd;">{{item.wayL}}</div>
                  <div class="grid">
                    <div>计量方式</div>
                    <div>快递</div>
                    <div>运送到</div>
                    <div>首件(kg/L)</div>
                    <div>运费(元)</div>
                    <div>续件(kg/L)</div>
                    <div>运费(元)</div>
                  </div>
                  <div class="grid">
                    <div>{{item.measure}}</div>
                    <div>{{item.carriage}}</div>
                    <div>{{item.site}}</div>
                    <div>{{item.first}}</div>
                    <div>{{item.cost}}</div>
                    <div>{{item.extend}}</div>
                    <div>{{item.costs}}</div>
                  </div>
                </div>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirms">确 定</el-button>
            </span>
          </el-dialog>
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
      isbgblue: "",
      dialogVisible: false,
      deal: false,
      radios: "1",
      mapJson: "../../../static/json/map.json",
      province: "",
      sheng: "",
      shi: "",
      shi1: [],
      qu: "",
      qu1: [],
      city: "",
      block: "",
      checkList: [],
      specification: [],
      operationPar: [{ name: "", value: "" }],
      packAfter: [{ name: "", value: "" }],
      radio: "1",
      modGenre: "",
      genre: [
        { name: "制氧机" },
        { name: "净水器" },
        { name: "雾化器" },
        { name: "按摩枕" },
        { name: "电动牙刷" },
        { name: "颈椎按摩仪" }
      ],
      genres: [
        { name: "3.5cm" },
        { name: "1.5cm" },
        { name: "50cm" },
        { name: "3米" },
        { name: "德达制氧机通用" },
        { name: "直径5.5mm" },
        { name: "耳挂式" },

        { name: "DEDAKJ通用" },
        { name: "德达DEDA 1L机" },

        { name: "积水器+水箱胶塞" },
        { name: "雾化通用配件" }
      ],
      modules: [
        {
          measure: "重量",
          carriage: "申通快递",
          site: "全国",
          first: "1",
          cost: "12",
          extend: "1",
          costs: "3",
          wayL: "按摩棒"
        },
        {
          measure: "重量",
          carriage: "申通快递",
          site: "全国",
          first: "1",
          cost: "12",
          extend: "1",
          costs: "3",
          wayL: "耗材"
        }
      ],

      imgList: [],
      addState: true,
      imgLen: 0,
      addshow: "",
      classification:''
    };
  },
  mounted(){
    this.classification=JSON.parse(sessionStorage.getItem('genre'))
    console.log(this.classification[0].twoList)
  },
  methods: {
   
    fileClick() {
      document.getElementById("inpu").click();
    },
    fileChange(el) {
      const list = this.$refs.file;
      // console.log(this.$refs.file.files)
      // 通过DOM取文件数据
      this.fil = list.files;
      let oldLen = this.imgLen;
      let len = this.fil.length;
      if (len > 10) {
        this.$message({
          message: "最多上传10张图片",
          type: "warning"
        });
        return false;
      }

      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
      console.log(this.imgList);
      console.log(this.imgList.length);
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      //总大小
      let then = this;
      this.size = this.size + file.size;
      let reader = new FileReader();
      reader.vue = this;
      reader.readAsDataURL(file);
      reader.onload = function() {
        file.src = this.result;
        this.vue.imgList.push({
          file
        });
        console.log(then.imgList.length);
        if (then.imgList.length < 10) {
          then.addState = true;
        } else {
          then.addState = false;
          then.imgList.length = 10;
          this.$message({
            message: "最多上传10张图片",
            type: "warning"
          });
          console.log(then.imgList);
        }
      };
    },
    fileDel(index) {
      this.imgList.splice(index, 1);
      if (this.imgList.length < 3) {
        this.addState = true;
      } else {
        this.addState = false;
      }
    },
    bytesToSize(bytes) {
      if (bytes === 0) return "0 B";
      let k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    },
    uploadImage: function() {
      var form = document.forms.namedItem("fileinfo");
      var formData = new FormData(form);
      for (var i = 0; i < this.imgList.length; i++) {
        formData.append("file" + [i + 1], this.imgList[i].file);
        console.log(this.imgList);
      }
    },
    addPar() {
      this.operationPar.push({ name: "", value: "" });
    },
    delPar(index) {
      this.operationPar.splice(index, 1);
    },
    addPack() {
      this.packAfter.push({ name: "", value: "" });
    },
    delPack(index) {
      this.packAfter.splice(index, 1);
    },

    //123
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
    },
    buy() {
      if (this.radio == 1) {
        this.deal = false;
      } else {
        this.deal = true;
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    ismodule(index) {
      this.isbgblue = index;
    },
    confirms() {
      this.modGenre = this.modules[this.isbgblue].wayL;
      this.dialogVisible = false;
    },
    amend(){
      this.$router.push({ name: "shipments" });
    }
  },
  created: function() {
    this.getCityData();
  }
};
</script>

<style>
/* .shopImg {
  
} */
.el-dialog {
  width: 60%;
}
.modules {
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 90%;
}
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #dddddd;
  margin-right: 5px;
}
.grid {
  display: flex;
  width: 100%;
}
.grid div {
  width: 120px;
  border: 1px solid #dddddd;
  border-top: none;
  text-align: center;
}
.delPack {
  position: absolute;
  top: 0;
  right: 2px;
  color: red;
}
.arerPack {
  margin-top: 10px;
}
.packAfter {
  border: 1px solid #dddddd;
  padding: 15px;
  position: relative;
  margin-top: 10px;
}
.parameter {
  margin-left: 10px;
}
.parameter div {
  width: 185px;
  display: inline-block;
}
.operationPar {
  display: flex;
  align-items: center;
}
.operationPar div {
  margin-left: 10px;
  margin-top: 10px;
}
.inputPar {
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding-left: 5px;
  overflow: hidden;
}
.delPar {
  padding: 2px 5px;
  background: rgb(236, 54, 54);
  color: white;
  border-radius: 5px;
  font-size: 12px;
}
.addPar {
  width: 30px;
  padding: 2px 5px;
  background: #2e7bee;
  color: white;
  border-radius: 5px;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
}
.blue {
  background: #d3e5f3;
}
.el-checkbox {
  width: 150px;
  margin: 5px;
  margin-right: 25px;
}
.head {
  padding: 10px;
  border: 1px solid #dddddd;
}
.shopInfo {
  width: 97%;

  background: white;
  margin: 0 auto;
  border: 10px solid #efefef;
}
.lists {
  width: 100%;
}
.variety {
  display: flex;
  border: 1px solid #dddddd;
  border-top: none;
  font-size: 14px;
}

.variety > div {
  padding: 10px;
}
.variety > div:first-child {
  border-right: 1px solid #dddddd;
}
.int {
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 1px;
  padding-left: 5px;
  overflow: hidden;
}
.variety input {
  background: none;
  outline: none;
  width: 100%;
  border: none;
}
.explain {
  color: #9f9f9f;
}
.title {
  width: 100px;
  text-align: right;
}

/* 111 */
.img_size {
  width: 150px;
  position: relative;
  width: 150px;
  height: 150px;
  padding: 5px;
}
.img_size img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.img_box {
  width: 100%;
  padding: 0 2%;
  display: flex;
  flex-wrap: wrap;
}
.pxove_logo {
  position: absolute;
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 25px;
  top: 5px;
  right: 5px;
  text-align: center;
  line-height: 15px;
  font-size: 12px;
  color: #777777;
}

.add_img {
  width: 150px;
  height: 150px;
  margin-top: 5px;
  text-align: center;
  line-height: 150px;
  font-size: 30px;
  color: #777777;
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.el-select .el-input__inner {
  border: 1px solid #dddddd;
}
.freight div {
  margin-top: 10px;
}
.money {
  display: flex;
}
.moneyInput {
  border-radius: 4px;
  border: 1px solid #dddddd;
  margin-left: 10px;
  overflow: hidden;
}
.moneyInput input {
  padding-left: 5px;
}
.template {
  border: 1px solid #dddddd;
  padding: 5px;
  width: 900px;
}
.examine {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.examineBtn {
  padding: 5px;
  background: #2e7bee;
  color: white;
  border-radius: 5px;
  margin-left: 10px;
}
.bgblue {
  background: #2e7bee;
}
.putin {
  width: 100px;
  padding: 5px 10px;
  background: #2e7bee;
  border-radius: 5px;
  color: white;
  text-align: center;
  margin: 0 auto;
}
</style>
