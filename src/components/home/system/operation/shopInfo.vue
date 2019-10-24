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
              <input type="text" v-model="shopName" />
            </div>
            <div class="explain">商品标题名称长度至少3个字符，最长50个汉字</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品副标题:</div>
          <div>
            <div class="int">
              <input type="text" v-model="shopNames" />
            </div>
            <div class="explain">商品副标题做商品特殊说明，位于详情页商品名称下面</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品价格:</div>
          <div>
            <div class="int" style="width: 200px;">
              <input type="text" v-model="shopPrice" />
            </div>
            <div class="explain">
              <p>商品价格必须是0.01~1000000之间的数字</p>
              <p>若启用了库存配置，请在下方商品库存区域进行管理</p>
              <p>商品规格库存表中如有价格差异，店铺价格显示为价格区间形式</p>
            </div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品会员价格:</div>
          <div>
            <div class="int" style="width: 200px;">
              <input type="text" v-model="shopPrices" />
            </div>
            <div class="explain">
              <p>商品价格必须是0.01~1000000之间的数字</p>
              <p>若启用了库存配置，请在下方商品库存区域进行管理</p>
              <p>商品规格库存表中如有价格差异，店铺价格显示为价格区间形式</p>
            </div>
          </div>
        </div>
        <!-- <div class="variety">
          <div class="title">商品描述:</div>
          <div>
            <div class="shoparea">
              <textarea name id cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>-->
       <div v-for="(item,index) in genre" :key="index">
          <div class="variety">
          <div class="title">{{item.spName}}:</div>
          <div>
            <div style="width: 800px;">
              <el-checkbox-group v-model="checkList">
                <el-checkbox
                  v-for="(items,index) in item.specValueList"
                  :key="index"
                  :label="items.specName"
                ></el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="explain">必须添加一条规格，否则在前台不显示！</div>
          </div>
          
        </div>
        <div class="variety">
          <div>库存配置</div>
          <div>132</div>
        </div>
       </div>
        <!-- <div class="variety">
          <div class="title">商品规格:</div>
          <div>
            <div style="width: 800px;">
              <div class="explain">最多添加2个商品规格</div>
              <div class="format" v-for="(item,index) in specification" :key="index">
                <div class="isSelect">
                  <div>
                    <el-select v-model="item.value" placeholder="请选择">
                      <el-option
                        v-for="item in item.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </div>
                  <div>删除规格</div>
                </div>
                <div class="isRests">
                  <div style="display: flex;">
                    <div class="formatList" v-for="item in item.formatList" :key="item">
                      {{item}}
                      <div class="forIcon" @click="forIcon(index)">
                        <i class="el-icon-error"></i>
                      </div>
                    </div>
                  </div>
                  <div class="product">
                    <div class="productInt">
                      <input type="text" placeholder="请输入产品规格" v-model="item.foInput" />
                    </div>
                    <div class="productBtn" @click="productBtn(index)">添加</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>-->
        <div class="variety">
          <div class="title">商品库存:</div>
          <div>
            <div class="int" style="width: 200px;">
              <input type="text" v-model="inventory" />
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
              <input type="text" v-model="serial" />
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
            <el-select v-model="townValue" placeholder="请选择">
              <el-option
                v-for="item in town"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-select v-model="districtValue" placeholder="请选择">
              <el-option
                v-for="item in district"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
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
                <!-- <div class="examineBtn" @click="addfreight = true">新增运费模板</div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="head">服务与承诺</div>
        <div class="variety">
          <div class="title">是否二手:</div>
          <div>
            <el-radio v-model="second" label="1">非二手</el-radio>
            <el-radio v-model="second" label="2">二手</el-radio>
          </div>
        </div>
        <div class="variety">
          <div class="title">是否预售:</div>
          <div>
            <el-radio v-model="presell" label="1">非预售</el-radio>
            <el-radio v-model="presell" label="2">预售</el-radio>
          </div>
        </div>
        <div class="variety">
          <div class="title">发货时间承诺:</div>
          <div>
            <el-radio v-model="shoptime" label="1">当日发货</el-radio>
            <el-radio v-model="shoptime" label="2">24小时</el-radio>
            <el-radio v-model="shoptime" label="3">48小时</el-radio>
          </div>
        </div>
        <div class="variety">
          <div class="title">发票:</div>
          <div>
            <el-checkbox v-model="invoice">有</el-checkbox>
          </div>
        </div>
        <div class="variety">
          <div class="title">承诺:</div>
          <div>
            <div>
              <el-checkbox v-model="reimburse">七天无理由退货</el-checkbox>
            </div>
            <div>
              <el-checkbox v-model="install">海露会员可以免费安装、免费检测水质</el-checkbox>
            </div>
            <div>
              <el-checkbox v-model="change">免费包换两次滤芯</el-checkbox>
            </div>
            <div>
              <el-checkbox v-model="guarantee">免费售后免费售后保障</el-checkbox>
            </div>
            <div>
              <el-checkbox v-model="ban" disabled>假一赔十 该类商品，必须支持假一赔十服务</el-checkbox>
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

        <!-- <div>
          <el-dialog title="模板基础信息" :visible.sync="addfreight" :before-close="handleClose">
            <div class="basicsInfo">
              <div class="infoName">
                <div>模板名称</div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div class="infoSite">
                <div>发货地址</div>
                <div>
                  <input type="text" />
                </div>
              </div>
              <div class="contract">
                <div>包邮配送区域</div>
                <div>
                  <el-checkbox
                    :indeterminate="isIndeterminate"
                    v-model="checkAll"
                    @change="handleCheckAllChange"
                  >全选</el-checkbox>
                  <div style="margin: 15px 0;"></div>
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
              <div>
                <div>买家付邮费区域</div>
                <div>
                  <div>设置指定区域运费</div>
                </div>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="addfreight = false">取 消</el-button>
              <el-button type="primary" @click="addfreight = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // 1

      isIndeterminate: true,
      shopName: "", //商品名称
      shopNames: "", //商品副标题
      shopPrice: "", //商品价格
      shopPrices: "", //商品会员价格
      checkList: [], //配件类型

      inventory: "", //商品库存
      serial: "", //商品货号
      imgList: [], //商品图片
      second: "1",
      presell: "1",
      shoptime: "1",
      ban: true,
      invoice: true,
      guarantee: true,
      reimburse: true,
      install: true,
      change: true,
      // addfreight: false,
      //1
      isbgblue: "",
      dialogVisible: false,
      deal: false,
      town: [],
      district: [],
      townValue: "",
      districtValue:'',

      operationPar: [{ name: "", value: "" }],
      packAfter: [{ name: "", value: "" }],
      radio: "1",
      modGenre: "",
      genre: [],

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

      // imgList: [],
      addState: true,
      imgLen: 0,
      addshow: "",
      classification: ""
    };
  },

  mounted() {
    // console.log(this.$router.params.gcIds)
    this.classification = JSON.parse(sessionStorage.getItem("genre"));
    // console.log(this.classification[0].twoList);
    var _this = this;
    this.axios.post("/merchant/goods/initPublishPageData?gcId="+this.$route.params.gcIds).then(res => {
      console.log(res.data.data);
      _this.genre=res.data.data.specs
      // _this.town=res.data.data
    });
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
          then.$message({
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
    amend() {
      this.$router.push({ name: "shipments" });
    },
    productBtn(index) {
      if (this.specification[index].foInput == "") {
        this.$message({
          message: "输入不能为空",
          type: "warning"
        });
      } else {
        this.specification[index].formatList.push(
          this.specification[index].foInput
        );
        this.specification[index].foInput = "";
      }
    },
    // handleCheckAllChange(val) {
    //   this.checkedCities = val ? cityOptions : [];
    //   this.isIndeterminate = false;
    // },
    // handleCheckedCitiesChange(value) {
    //   let checkedCount = value.length;
    //   this.checkAll = checkedCount === this.cities.length;
    //   this.isIndeterminate =
    //     checkedCount > 0 && checkedCount < this.cities.length;
    // },
    forIcon(index) {}
  }
  // created: function() {
  //   console.log(this.$route.params.gcIds)
  //   this.getCityData();
  // }
};
</script>

<style>
.shopImg {
  width: 900px;
}
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
  width: 50px;
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
.shoparea {
  width: 800px;
  border: 1px solid #dddddd;
  overflow: hidden;
}
.shoparea textarea {
  width: 100%;
  border: none;
  resize: none;
  outline: none;
  padding: 10px;
}
.format {
  width: 800px;
  margin-top: 10px;
}
.isSelect {
  width: 90%;
  padding: 5px;
  background: #f1f1f1;
}
.isSelect > div {
  display: inline-block;
}
.isSelect > div:first-child {
  width: 200px;
  background: white;
}
.isSelect > div:last-child {
  float: right;
  line-height: 40px;
  margin-right: 20px;
  color: #2e7bee;
}
.isRests {
  width: 90%;
  padding: 5px;
  background: rgb(252, 249, 249);
}
.product {
  display: flex;
  align-items: center;
  padding: 20px;
}
.productInt {
  border: 1px solid #dddddd;
  width: 120px;
  border-radius: 5px;
  padding: 2px;
  background: white;
}
.productBtn {
  margin-left: 20px;
  color: #2e7bee;
}
.formatList {
  padding: 3px 20px;
  border: 1px solid #dddddd;
  font-size: 14px;
  border-radius: 5px;
  margin-left: 20px;
  position: relative;
}
.forIcon {
  width: 5px;
  height: 5px;
  position: absolute;
  top: -2px;
  right: 10px;
}

.basicsInfo {
  width: 100%;
}
.basicsInfo > div {
  display: flex;
  /* align-items: center; */
  margin-top: 20px;
}
.basicsInfo > div > div:first-child {
  width: 120px;
  text-align: right;
}
.basicsInfo input {
  border: none;
  width: 100%;
  outline: none;
  height: 100%;
  padding: 0 10px;
}
.infoName > div:last-child {
  width: 500px;
  border: 1px solid #dddddd;
  margin-left: 20px;
  border-radius: 5px;
  height: 28px;
  overflow: hidden;
}
.infoSite > div:last-child {
  width: 500px;
  border: 1px solid #dddddd;
  margin-left: 20px;
  border-radius: 5px;
  height: 28px;
  overflow: hidden;
}
.contract > div:last-child {
  width: 60%;
  border: 1px solid #dddddd;
  padding: 10px;
  background: #f5f5f5;
  margin-left: 20px;
}
</style>
