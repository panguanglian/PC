<template>
  <div style="width: 100%; background: white;">
    <div class="shopInfo">
      <div class="head">商品基本信息</div>
      <div class="lists">
        <div class="variety">
          <div class="title">商品分类:</div>
          <div>{{gsName}}</div>
          <div class="amend" @click="amend">修改分类</div>
        </div>
        <div class="variety">
          <div class="title">商品名称:</div>
          <div>
            <div class="int">
              <input type="text" v-model="goodsName" />
            </div>
            <div class="explain">商品标题名称长度至少3个字符，最长50个汉字</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">是否参与推广:</div>
          <div>
            <div>
              <el-radio v-model="isPopularize" label="1">是</el-radio>
              <el-radio v-model="isPopularize" label="0">否</el-radio>
            </div>
            <div class="explain">参与推广后，服务商分享出去被购买后会得到提成</div>
            <div class="explain">勾选推广后，应该设置推广价和提成，服务商可以以进货价进行购买</div>
          </div>
        </div>
        <div class="variety">
          <div class="title">商品副标题:</div>
          <div>
            <div class="int">
              <input type="text" v-model="goodsSubtitle" />
            </div>
            <div class="explain">商品副标题做商品特殊说明，位于详情页商品名称下面</div>
          </div>
        </div>

        <div class="variety">
          <div class="title">是否推荐到购物车:</div>
          <div>
            <div>
              <el-radio v-model="isCartRecommend" label="1">是</el-radio>
              <el-radio v-model="isCartRecommend" label="2">否</el-radio>
            </div>
          </div>
        </div>
        <!-- 1213 -->
        <div v-for="(item,index) in genre" :key="index">
          <div class="variety">
            <div class="title">{{item.spName}}:</div>
            <div>
              <div style="width: 800px;">
                <el-checkbox-group v-model="checkList[index].value">
                  <el-checkbox
                    v-for="(items,sum) in item.specValueList"
                    :key="sum"
                    :label="items.spValueName"
                    @change="format($event,index,sum)"
                  ></el-checkbox>
                </el-checkbox-group>
              </div>
              <div class="explain">必须添加一条规格，否则在前台不显示！</div>
            </div>
          </div>
        </div>
        <div class="variety" v-if="configuration==''?false:true">
          <div class="title">库存配置</div>
          <div>
            <div class="deploy">
              <div>
                <div v-for="(item,index) in genre" :key="index">{{item.spName}}</div>
                <div>价格</div>
                <div>会员价格</div>
                <div>进货价格</div>
                <div>提成</div>
                <div>库存</div>
                <div>商品货号</div>
                <div>重量(kg)</div>
                <div>体积(L)</div>
                <div>是否开启</div>
              </div>
              <div class="deployinput" v-for="(item,index) in configuration" :key="index">
                <!-- <div v-for="(items,inde) in item" :key="inde">{{items}}</div> -->
                <div v-if="genre.length==1?false : true">{{item[0]}}</div>
                <div v-if="genre.length==1?false : true">{{item[1]}}</div>
                <div v-if="genre.length==1?true : false">{{item[0]}}</div>
                <div class="inp">
                  <input type="text" v-model="item[2].specGoodsPrice" />
                </div>
                <div class="inp">
                  <input type="text" v-model="item[2].specGoodsVipPrice" />
                </div>
                <div class="inp">
                  <input type="text" v-model="item[2].specGoodsPurchasePrice" />
                </div>
                <div class="inp">
                  <input type="text" v-model="item[2].commission" />
                </div>
                <div class="inp">
                  <input type="text" v-model="item[2].specGoodsStorage" @change="isInventory(item)" />
                </div>
                <div class="inp">
                  <input type="text" v-model="item[2].specGoodsSerial" />
                </div>
                <div class="inp">
                  <input type="text" v-model="item[2].weight" />
                </div>
                <div class="inp">
                  <input type="text" v-model="item[2].volume" />
                </div>
                <el-checkbox v-model="item[2].specIsOpen">开启规格</el-checkbox>
              </div>
            </div>
          </div>
        </div>

        <div class="variety">
          <div class="title">总商品库存:</div>
          <div>
            <div class="int" style="width: 200px;">
              <input type="text" v-model="goodsTotalStorage" @click="leave" />
            </div>
            <div class="explain">
              <p>商铺库存数量必须为1~1000000000之间的整数</p>
              <p>若启用了库存配置，则系统自动计算商品的总数，此处无需卖家填写</p>
            </div>
          </div>
        </div>
        <!-- <div class="variety">
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
        </div>-->

        <div class="variety">
          <div
            class="title"
          >商品图片： 商品主图：白底正方形图片800*800 提示： 1、图片尺寸为800*800，单张大小不超过 1024K。仅支持 jpg，jpeg，png 格式。 2、图片质量要清晰，不能虚化。建议主图为白色背景正面图。 3.商品列表展示图片默认是第一张</div>
          <div>
            <div class="shopImg">
              <form action name="fileinfo">
                <div class="img_box">
                  <!-- <img src="http://192.168.10.179:8082/api/v1//2019/11/3//27UdAb1572765295849df3f5766de215dbfc988428ca9a37fa.jpg" alt=""> -->
                  <div
                    class="img_size"
                    v-for="(item,index) of isimg"
                    :key="index"
                    v-show="isimg.length!=0"
                  >
                    <img :src="iiimg+item" />
                    <!-- <img v-if="item.file.type.indexOf('image') !== -1" :src="item.file.src" /> -->
                    <div class="pxove_logo" @click="fileDel(index)">×</div>
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
          <div
            class="title"
          >商品PC描述： 1、每张宽度建议1920像素，所有图片宽度一致； 2、每张高度小于等于960像素； 3、每张图片容量应小于等于1024KB； 4、图片格式为：JPG\GIF\PNG ； 5、图片总张数建议大于5张，但不超过30张； 6、为了更好的视觉呈现，图片上的文字字号建议不小于20号</div>
          <div>
            <div class="guarantees">
              <UEditor :config="config" id="ueditor1" ref="ueditor"></UEditor>
            </div>
          </div>
        </div>
        <div class="variety">
          <div class="title">PC商品售后保障描述:</div>
          <div>
            <div class="guarantees">
              <UEditor :config="config" id="ueditor2" ref="ueditorDesc"></UEditor>
            </div>
          </div>
        </div>
        <!-- 122 -->
        <div class="variety">
          <div
            class="title"
          >商品APP描述：1、每张宽度建议750像素，所有图片宽度一致； 2、每张高度小于等于960像素； 3、每张图片容量应小于等于1024KB； 4、图片格式为：JPG\GIF\PNG ； 5、图片总张数建议大于5张，但不超过30张； 6、为了更好的视觉呈现，图片上的文字字号建议不小于20号</div>
          <div>
            <div class="shopImg">
              <form action name="fileinfo">
                <div class="img_box">
                  <div
                    class="img_size"
                    v-for="(item,index) of appimg"
                    :key="index"
                    v-show="appimg.length!=0"
                  >
                    <img :src="iiimg+item" />
                    <div class="pxove_logo" @click="appfileDel(index)">×</div>
                  </div>
                  <div class="add_img" @click="appfileClick" v-show="addStateapp">
                    <span>+</span>
                  </div>
                  <div @click="appuploadImage"></div>
                  <input
                    id="inpus"
                    name="files"
                    style="display: none;"
                    @change="appfileChange($event)"
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
        <!-- 123 -->
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
            <el-select v-model="townValue" placeholder="请选择" value-key="areaId" @change="townVal">
              <el-option
                v-for="item in town"
                :key="item.areaId"
                :label="item.areaName"
                :value="item"
              ></el-option>
            </el-select>
            <el-select
              v-model="districtValue"
              placeholder="请选择"
              value-key="areaId"
              @change="districtVal"
            >
              <el-option
                v-for="item in district"
                :key="item.areaId"
                :label="item.areaName"
                :value="item"
              ></el-option>
            </el-select>
          </div>
        </div>

        <div class="head">其他信息</div>
        <div class="variety">
          <div class="title">商品发布</div>
          <div class="publishChoice">
            <div>
              <el-radio v-model="publish" label="1" @change="publishEvent">立即发布</el-radio>
            </div>
            <div class="publishTime">
              <div>
                <el-radio v-model="publish" label="2" @change="publishEvent">发布时间</el-radio>
              </div>
              <div class="int">
                <input type="text" :disabled="publishTimes" :class="{forbid:publishTimes==true}" />
              </div>
            </div>
            <div>
              <el-radio v-model="publish" label="3" @change="publishEvent">放入仓库</el-radio>
            </div>
          </div>
        </div>
        <div class="variety">
          <div class="title">积分：</div>
          <div>
            <div class="int">
              <input type="text" v-model="goodsIntegral" />
            </div>
          </div>
        </div>
        <div class="variety">
          <div class="title">SEO关键字(Keywords)：</div>
          <div>
            <div class="int">
              <input type="text" v-model="goodsKeywords" />
            </div>
          </div>
        </div>
        <!-- <div class="head">服务与承诺</div>
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
        </div>-->
        <div class="head">
          <div class="putin" @click="present">提交</div>
        </div>
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
      <div class="shipments">
        <div class="classify">
          <div class="seek">
            <!-- <div class="seekInput">
            <input type="text" placeholder="请输入关键词搜索分类" />
          </div>
            <div class="seekBtn">快速搜索分类</div>-->
          </div>
          <div class="commodity">
            <div class="modity">
              <div class="comSeek">
                <!-- <el-input v-model="input" size="small" placeholder="请输入内容">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
                </el-input>-->
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
                </el-input>-->
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
    </el-dialog>
  </div>
</template>

<script>
import UEditor from "@/components/UE/ue.vue";
import axios from "axios";
export default {
  components: { UEditor },
  data() {
    function Map() {
      return {
        // 存储选中的数据
        cache: {},
        // 缓存的数据量
        size: 0,
        // 添加
        add(key, data) {
          this.cache[key] = data;
          this.size++;
        },
        // 删除
        remove(key) {
          if (this.cache[key] == undefined) {
            return;
          }
          this.cache[key] = undefined;
          this.size--;
        },
        // 匹配key前缀删除
        removePrefix(key) {
          for (var arr in this.cache) {
            if (!arr.startsWith(key)) {
              continue;
            }
            this.remove(arr);
          }
        },
        // 匹配key后缀删除
        removeSuffix(key) {
          for (var arr in this.cache) {
            if (!arr.endsWith(key)) {
              continue;
            }
            this.remove(arr);
          }
        },
        // 是否包含key
        hasKey(key) {
          return this.cache[key] == undefined ? false : true;
        },
        // 是否包含key
        getValue(key) {
          return this.cache[key];
        },
        // 清空所有数据
        clear() {
          this.cache = {};
          this.size = 0;
        },
        // 转换成Array
        converList() {
          var result = [];
          for (var arr in this.cache) {
            let data = this.cache[arr];
            if (data == undefined) {
              continue;
            }
            result.push(data);
          }
          return result;
        }
      };
    }
    return {
      // 1
      //2
      input: "",
      oneHue: "",
      twoHue: "",
      threeHue: "",
      oneIndex: "a",
      twoIndex: "a",
      i: false,
      information: [{ oneList: "", twoList: "" }],
      list: [],
      sgcId: "",
      //2
      dialogVisible: false,
      iiimg: "http://192.168.10.179:8082/api/v1",
      abolish: [],
      pitchon: [],
      configuration: "",
      skuMapping: new Map(),
      num: "",
      Version: [
        //库存配置
      ],
      gsName: "",
      sub: "",
      typeAs: [],
      typeBs: [],
      goodsIntegral: "",
      shopName: "",
      lengths: "0",
      isIndeterminate: true,
      goodsName: "", //商品名称
      goodsSubtitle: "", //商品副标题
      goodsStorePrice: "", //商品价格
      goodsStoreVipPrice: "", //商品会员价格
      checkList: [], //配件类型
      isCartRecommend: "1",
      goodsTotalStorage: 0, //商品总库存
      serial: "", //商品货号
      imgList: [], //商品图片
      appimgList: [], //商品APP
      appimg: [],
      regionalAgentCommission: "", //区域代理提成(元)
      serviceProviderCommission: "", //服务商提成
      second: "1",
      presell: "1",
      shoptime: "1",
      goodsKeywords: "", //关键字
      ban: true,
      invoice: true,
      guarantee: true,
      reimburse: true,
      install: true,
      change: true,
      goodsStorePriceInterval: "", //区间价格
      // addfreight: false,
      //1
      isPopularize: "1",
      publishTimes: true,
      isbgblue: "",
      dialogVisible: false,
      deal: false,
      town: [],
      district: [],
      townValue: "",
      districtValue: "",
      speci: true,
      operationPar: [],
      packAfter: [],
      radio: "1",
      modGenre: "",
      genre: [],
      publish: "1",
      isShare: "1",
      transportId: "0",
      goodsCommend: "0",
      goodsShow: "1", //商品上架
      prepareUp: "", //上架时间
      oneCommission: "",
      specOpen: "1", //规格开关
      goodsPcServerBody: "", //PC商品售后保障描述
      brandId: "",
      brandName: "",
      goodsColImg: "",
      fullFreeMail: "",
      goodsTransfeeCharge: "0", //商品运费承担方式 默认 0为买家承担 1为卖家承担
      cityName: "", //市
      cityId: "", //市id
      provinceId: "", //省id
      provinceName: "", //省
      goodsBody: "",
      volumes: "",
      weights: "",
      specName: "",
      isimg: [],
      saveType: "1",
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

      addState: true,
      addStateapp: true,
      imgLen: 0,
      addshow: "",
      classification: "",
      typeId: "",
      //富文本

      config: {
        /*//可以在此处定义工具栏的内容
            toolbars: [
              ['fullscreen', 'source','|', 'undo', 'redo','|','bold', 'italic', 'underline', 'fontborder', 'strikethrough',
                '|','superscript','subscript','|', 'forecolor', 'backcolor','|', 'removeformat','|', 'insertorderedlist', 'insertunorderedlist',
                '|','selectall', 'cleardoc','fontfamily','fontsize','justifyleft','justifyright','justifycenter','justifyjustify','|',
                'link','unlink']
            ],*/
        autoHeightEnabled: false,
        autoFloatEnabled: true, //是否工具栏可浮动
        initialContent: "请输入内容", //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
        autoClearinitialContent: true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
        initialFrameWidth: null,
        initialFrameHeight: 450,
        BaseUrl: "",
        UEDITOR_HOME_URL: "static/ueditor/"
      },
      addFormVisible: false,
      //富文本

      initMapObject: function() {
        return new Map();
      }
    };
  },
  beforeDestroy() {
    this.$refs.ueditor.ueDestoryed();
    this.$refs.ueditorDesc.ueDestoryed();
  },
  mounted() {
    this.classification = JSON.parse(sessionStorage.getItem("genre"));
    // console.log(this.$route.params.sgcId);
    // console.log(this.$route.params.sgoodids);
    // this.original = this.$route.params.row;
    // console.log(JSON.parse(this.original.goodsSpec));
    // console.log(JSON.parse(this.original.goodsImageMore));
    this.gsName = this.$route.params.row.gcName;

    var _this = this;
    let params = new URLSearchParams();
    // params.append("gcId", this.$route.params.sgcId);
    params.append("goodsId", this.$route.params.sgoodids);
    this.axios({
      method: "post",
      url: "/merchant/goods/detail",

      data: params
    }).then(res => {
      console.log(res.data.data);
      _this.genre = res.data.data.specs;
      for (var i = 0; i < _this.genre.length; i++) {
        _this.checkList.push({ value: [] });
      }

      _this.original = res.data.data.goods;
      // 给编辑器赋值
      let ueditorObject = this.$refs.ueditor;
      let ueditorDescObject = this.$refs.ueditorDesc;
      setTimeout(function() {
        ueditorObject.setUEContent(_this.original.goodsPcBody);
        ueditorDescObject.setUEContent(_this.original.goodsPcServerBody);
      }, 1000);
      _this.sgcId = _this.original.gcId;
      //   console.log(JSON.parse(_this.original.goodsSpec));
      var gko = JSON.parse(_this.original.goodsSpec);
      for (var skuArr in gko) {
        // sku选项
        let skuArray = gko[skuArr];
        // console.log(skuArray);

        let specValueList;
        for (var i = 0; i < this.genre.length; i++) {
          if (this.genre[i].spId == skuArr) {
            specValueList = this.genre[i].specValueList;
            break;
          }
        }

        for (var itemArr in skuArray) {
          for (var i = 0; i < specValueList.length; i++) {
            if (specValueList[i].spValueId == itemArr) {
              specValueList[i].checked = true;
              break;
            }
          }
        }
      }
      //   console.info(this.genre)
      for (var i = 0; i < this.genre.length; i++) {
        for (var j = 0; j < this.genre[i].specValueList.length; j++) {
          if (this.genre[i].specValueList[j].checked == true) {
            //   console.log(this.genre[i].specValueList[j])
            //   console.log(this.checkList[i])
            this.checkList[i].value.push(
              this.genre[i].specValueList[j].spValueName
            );
            if (i == 0) {
              this.typeAs.push(this.genre[0].specValueList[j].spValueName);
            } else {
              this.typeBs.push(this.genre[1].specValueList[j].spValueName);
            }
            //   console.log(this.typeAs,this.typeBs)
          }
        }
      }
      this.appimg = _this.original.goodsBody.split(",");
      let opers = res.data.data.packagingVoList;
      for (var item in opers) {
        this.packAfter.push({ name: "", value: "", id: "", goodsId: "" });
        this.packAfter[item].name = opers[item].name;
        this.packAfter[item].value = opers[item].context;
        this.packAfter[item].id = opers[item].id;
        this.packAfter[item].goodsId = opers[item].goodsId;
        console.log(opers[item]);
      }
      //   this.packAfter = res.data.data.packagingVoList;
      let oper = res.data.data.parameterVoList;
      for (var item in oper) {
        this.operationPar.push({ name: "", value: "", id: "", goodsId: "" });
        this.operationPar[item].name = oper[item].parameterName;
        this.operationPar[item].value = oper[item].parameterValue;
        this.operationPar[item].id = oper[item].id;
        this.operationPar[item].goodsId = oper[item].goodsId;
      }
      //   this.operationPar = res.data.data.parameterVoList;
      console.log(this.operationPar);
      this.isimg = _this.original.goodsImageMore.split(",");

      _this.town = res.data.data.areas;
      //   console.log(res.data.data.goodsSpecs);
      var substitute = [];
      for (var i = 0; i < res.data.data.goodsSpecs.length; i++) {
        var gkd = JSON.parse(res.data.data.goodsSpecs[i].specGoodsSpec);

        if (this.checkList.length > 1) {
          for (var x = 0; x < this.checkList[0].value.length; x++) {
            for (var j = 0; j < this.checkList[1].value.length; j++) {
              let key = this.checkList[0].value[x] + this.checkList[1].value[j];
              if (this.skuMapping.hasKey(key)) {
                continue;
              }

              this.skuMapping.add(key, [
                this.checkList[0].value[x],
                this.checkList[1].value[j],
                res.data.data.goodsSpecs[i]
              ]);
            }
          }
        } else {
          for (var x = 0; x < this.checkList[0].value.length; x++) {
            let key = this.checkList[0].value[x];
            if (this.skuMapping.hasKey(key)) {
              continue;
            }
            this.skuMapping.add(key, [
              this.checkList[0].value[x],
              {},
              res.data.data.goodsSpecs[i]
            ]);
          }
        }

        //   substitute.push([this.checkList[0].value[i],this.checkList[1].value[i],res.data.data.goodsSpecs[i]])
      }
      //   console.log(this.checkList)
      //   console.log(this.skuMapping.converList())
      _this.configuration = this.skuMapping.converList();
      //   console.log(_this.configuration)
      _this.former();
    });
    // this.axios({
    //   method: "post",
    //   url:
    //     "/merchant/goods/initPublishPageData?gcId=" +
    //     this.$route.params.row.gcId,
    //   // headers: {
    //   //   "Access-token": "94bf44b8096b43b3b41f086b4db8607a"
    //   // },
    //   data: {}
    // }).then(res => {
    //   console.log(res.data);
    //   _this.typeId = res.data.data.typeId;
    //   _this.genre = res.data.data.specs;
    //   console.log(_this.genre);
    //   _this.town = res.data.data.areas;
    //   for (var i = 0; i < _this.genre.length; i++) {
    //     _this.checkList.push({ value: [] });
    //   }
    // });
  },
  methods: {
    former() {
      this.goodsName = this.original.goodsName; //商品名称
      this.goodsSubtitle = this.original.goodsDescription; //副标题
      this.isCartRecommend = this.original.isCartRecommend; //是否推荐到购物车
      this.goodsPcServerBody = this.original.goodsPcServerBody; //PC商品售后保障描述
      this.townValue = this.original.provinceName; //显示区名
      this.provinceId = this.original.provinceId; //区id
      this.provinceName = this.original.provinceName; //区名
      this.districtValue = this.original.cityName; //显示市名
      this.cityName = this.original.cityName; //市名
      this.cityId = this.original.cityId; //市id
      this.typeId = this.original.typeId;
      this.goodsIntegral = this.original.goodsIntegral;
      this.goodsKeywords = this.original.goodsKeywords;
      //  this.goodsName=this.original.goodsName
      //  this.goodsName=this.original.goodsName
      //  this.goodsName=this.original.goodsName
    },
    openWindow: function() {
      this.addFormVisible = true;
    },
    //获取文档内容
    getContent: function() {
      let content = this.$refs.ueditor.getUEContent();
      // console.log(content);
      alert(content);
    }, //123
    //图片管理
    appfileClick() {
      document.getElementById("inpus").click();
    },
    appfileChange(el) {
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
      this.appfileList(el.target);
      el.target.value = "";
      console.log(this.appimgList);
      // console.log(this.appimgList.length);
    },
    appfileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.appfileAdd(files[i]);
        } else {
          //文件夹处理
          this.appfolders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    appfolders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.appfoldersAdd(file[i]);
          } else {
            _this.appfolders(file[i]);
          }
        }
      });
    },
    appfoldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.appfileAdd(file);
      });
    },
    appfileAdd(file) {
      //总大小
      let then = this;
      this.size = this.size + file.size;
      let reader = new FileReader();
      reader.vue = this;
      reader.readAsDataURL(file);
      reader.onload = function() {
        file.src = this.result;
        this.vue.appimgList.push({
          file
        });
        let form = new FormData();
        form.append("file", file, file.name);
        // console.log(form);
        then
          .axios({
            method: "post",
            url: "/pc/merchantsettledin/save.do",
            data: form,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            console.log(res);
            let img = res.data.data.path;
            then.appimg.push(img);
          });
        // console.log(then.appimgList.length);
        if (then.appimgList.length < 10) {
          then.addStateapp = true;
        } else {
          then.addStateapp = false;
          then.appimgList.length = 10;
          then.$message({
            message: "最多上传10张图片",
            type: "warning"
          });
          //   console.log(then.appimgList);
        }
      };
    },
    appfileDel(index) {
      this.appimg.splice(index, 1);
      this.appimgList.splice(index, 1);
      if (this.appimgList.length < 3) {
        this.addStateapp = true;
      } else {
        this.addStateapp = false;
      }
    },
    appbytesToSize(bytes) {
      if (bytes === 0) return "0 B";
      let k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    },
    appuploadImage: function() {
      var form = document.forms.namedItem("fileinfo");
      var formData = new FormData(form);
      for (var i = 0; i < this.appimgList.length; i++) {
        formData.append("file" + [i + 1], this.appimgList[i].file);
        // console.log(this.appimgList);
      }
    },
    //图片管理

    fileClick() {
      document.getElementById("inpu").click();
    },
    fileChange(el) {
      const list = this.$refs.file;
      //   console.log(this.$refs.file.files);
      // 通过DOM取文件数据
      this.fil = list.files;
      let filess = el.target.files;
      //   console.log(filess);

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
      //   console.log(this.imgList);

      // console.log(this.imgList.length);
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
        let form = new FormData();
        form.append("file", file, file.name);
        // console.log(form);
        then
          .axios({
            method: "post",
            url: "/pc/merchantsettledin/save.do",
            data: form,
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            console.log(res);
            let img = res.data.data.path;
            then.isimg.push(img);
          });
        console.log(then.isimg.join(","));
        if (then.imgList.length < 10) {
          then.addState = true;
        } else {
          then.addState = false;
          then.imgList.length = 10;
          then.$message({
            message: "最多上传10张图片",
            type: "warning"
          });
          //   console.log(then.imgList);
        }
      };
    },
    fileDel(index) {
      this.imgList.splice(index, 1);
      this.isimg.splice(index, 1);

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
        // console.log(this.imgList);
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
      var _this = this;

      this.axios({
        method: "get",
        url: "/merchant/goods/categorys",

        data: {}
      }).then(res => {
        console.log(res);
        _this.list = res.data.data;
      });
      //   this.$router.push({ name: "shipments" });
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    //88888
    oneList(index) {
      //   console.log(index);

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
      this.sgcId = this.list[this.oneIndex].classList[index].gcId;
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
        var _this = this;
        this.axios({
          method: "post",
          url: "/merchant/goods/initPublishPageData?gcId=" + this.sgcId,

          data: {}
        }).then(res => {
          //   console.log(res.data);
          if (res.data.code == 0) {
            _this.typeId = res.data.data.typeId;
            _this.genre = res.data.data.specs;
            _this.checkList = [];
            for (var i = 0; i < _this.genre.length; i++) {
              _this.checkList.push({ value: [] });
            }
            _this.dialogVisible = false;
            _this.gsName = this.information[0].twoList;
            this.skuMapping.clear();
            _this.configuration = "";
            // console.log(_this.configuration)
          }
        });
      }
    },
    //88888
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

    forIcon(index) {},
    townVal(selVal) {
      var _this = this;

      this.provinceId = selVal.areaId;
      this.provinceName = selVal.areaName;

      this.axios({
        method: "get",
        url: "/merchant/goods/getChildArea?id=" + selVal.areaId,
        // headers: {
        //   "Access-token": "94bf44b8096b43b3b41f086b4db8607a"
        // },
        data: {}
      }).then(res => {
        _this.district = res.data.data;
        // console.log(_this.district);
      });
    },
    districtVal(selVal) {
      this.cityId = selVal.areaId;
      this.cityName = selVal.areaName;
    },
    format(e, index, sum) {
      let clickTarget = this.genre[index].specValueList[sum];
      //库存配置
      if (this.genre.length < 2) {
        if (e == false) {
          let removeKey = clickTarget.spValueName;
          this.typeAs = this.checkList[index].value;
          if (this.typeAs.length == 0) {
            this.skuMapping.clear();
          } else {
            this.skuMapping.removePrefix(removeKey);
          }
        } else {
          this.typeAs = this.checkList[index].value;
          for (var i = 0; i < this.typeAs.length; i++) {
            let key = this.typeAs[i];
            if (this.skuMapping.hasKey(key)) {
              continue;
            }
            this.skuMapping.add(key, [
              this.typeAs[i],
              {},
              {
                specGoodsPrice: "",
                specGoodsVipPrice: "",
                specGoodsPurchasePrice: "",
                commission: "",
                specGoodsStorage: "0",
                specGoodsSerial: "",
                weight: "",
                volume: "",
                specIsOpen: true
              }
            ]);
          }
        }
      } else {
        if (e == false) {
          // 需要删除的key前缀
          let removeKey = clickTarget.spValueName;
          if (index == 0) {
            this.typeAs = this.checkList[index].value;
            if (this.typeAs.length == 0) {
              this.skuMapping.clear();
            } else {
              this.skuMapping.removePrefix(removeKey);
            }
          } else {
            this.typeBs = this.checkList[index].value;
            if (this.typeBs.length == 0) {
              this.skuMapping.clear();
            } else {
              this.skuMapping.removeSuffix(removeKey);
            }
          }
        } else {
          if (index == 0) {
            this.typeAs = this.checkList[index].value;
          } else {
            this.typeBs = this.checkList[index].value;
          }
          for (var i = 0; i < this.typeAs.length; i++) {
            for (var j = 0; j < this.typeBs.length; j++) {
              let key = this.typeAs[i] + this.typeBs[j];
              if (this.skuMapping.hasKey(key)) {
                continue;
              }

              this.skuMapping.add(key, [
                this.typeAs[i],
                this.typeBs[j],
                {
                  specGoodsPrice: "",
                  specGoodsVipPrice: "",
                  specGoodsPurchasePrice: "",
                  commission: "",
                  specGoodsStorage: "0",
                  specGoodsSerial: "",
                  weight: "",
                  volume: "",
                  specIsOpen: true
                }
              ]);
            }
          }
        }
      }
      this.configuration = this.pitchon = this.skuMapping.converList();
      //   console.log(this.configuration);
      //   console.log(this.genre);
      var goodsSpecId = this.genre[index].spId;
      var spValueId = clickTarget.spValueId;
      var spValueName = clickTarget.spValueName;

      //   console.log(goodsSpecId);
      // for(var i=0;i<this.genre.length;i++){

      // }
    },
    publishEvent() {
      // console.log(this.publish);
      if (this.publish == 2) {
        this.publishTimes = false;
      } else {
        this.publishTimes = true;
      }
    },
    leave() {
      var a = 0;
      if (this.configuration.length == 0) {
      } else {
        this.configuration.forEach(item => {
          a = a + parseInt(item[2].specGoodsStorage);
        });
      }

      this.goodsTotalStorage = a;
    },
    getGoodsSpec() {
      let that = this;
      // let goodsSpec = [];
      let goodsSpec = {};

      this.genre.forEach(function(item, index) {
        let spValue = {};
        item.specValueList.forEach(function(subItem, subIndex) {
          if (that.checkList[index].value.indexOf(subItem.spValueName) < 0) {
            return;
          }
          spValue[subItem.spValueId] = subItem.spValueName;
        });
        let spData = {};
        goodsSpec[item.spId] = spValue;
        // goodsSpec.push(spData);
        // goodsSpec[item.spId] = spData;
      });
      return JSON.stringify(goodsSpec);
    },
    getGoodsSpecJson() {
      let that = this;
      let cache = [];
      this.checkList.forEach(function(item, index) {
        cache[index] = that.initMapObject();
        let checkVal = item.value;
        that.genre[index].specValueList.forEach(function(subItem, subIndex) {
          if (checkVal.indexOf(subItem.spValueName) < 0) {
            return;
          }
          let tmp = {};
          tmp[subItem.spValueId] = subItem.spValueName;
          cache[index].add(subItem.spValueId, tmp);
        });
      });
      let _tmp = that.initMapObject();
      if (cache.length >= 2) {
        cache[0].converList().forEach(function(item) {
          cache[1].converList().forEach(function(subItem) {
            let keyVal0 = that.getObjectAttr(item, 0);
            let keyVal1 = that.getObjectAttr(subItem, 0);
            let obj = {};
            obj[keyVal0[0]] = keyVal0[1];
            obj[keyVal1[0]] = keyVal1[1];
            _tmp.add(keyVal0[1] + keyVal1[1], JSON.stringify(obj));
          });
        });
      } else if (cache.length == 1) {
        cache[0].converList().forEach(function(item) {
          let keyVal0 = that.getObjectAttr(item, 0);
          _tmp.add(keyVal0[1], JSON.stringify(item));
        });
      }
      let specNameObject = {};
      that.genre.forEach(function(item, index) {
        specNameObject[item.spId] = item.spName;
      });
      let specName = JSON.stringify(specNameObject);
      that.specName = specName;
      let result = [];
      this.skuMapping.converList().forEach(function(item) {
        let key = item[0] + item[1];
        let specGoodsSpec = _tmp.getValue(key);
        result.push({
          specName: specName,
          specGoodsPrice: item[2].specGoodsPrice,
          specGoodsVipPrice: item[2].specGoodsVipPrice,
          specGoodsPurchasePrice: item[2].specGoodsPurchasePrice,
          commission: item[2].commission,
          specGoodsSerial: item[2].specGoodsSerial,
          weight: item[2].weight,
          volume: item[2].volume,
          specGoodsStorage: item[2].specGoodsStorage,
          specGoodsSpec: specGoodsSpec,
          specIsOpen: item[2].specIsOpen ? "1" : "0"
        });
      });
      return JSON.stringify(result);
    },
    getObjectAttr(obj, index) {
      let currentIndex = 0;
      for (var arr in obj) {
        if (currentIndex == index) {
          return [arr, obj[arr]];
        }
        currentIndex++;
      }
    },
    isInventory(item) {
      if (item[2].specGoodsStorage == "") {
        item[2].specGoodsStorage = 0;
      }
      this.leave();
    },
    present() {
      var _this = this;
      let goodsSpec = this.getGoodsSpec();
      let goodsSpecJson = this.getGoodsSpecJson();
      //   console.info(goodsSpec);
      //   console.info(goodsSpecJson);
      let isimg = this.isimg;
      console.log(this.isimg.join(","));
      let firstimg = JSON.stringify(this.isimg[0]);
      let goodsbody = this.appimg;
      let jpackges = JSON.stringify(this.packAfter);
      let jparamss = JSON.stringify(this.operationPar);
      if (this.publish == 1 || this.publish == 2) {
        this.goodsShow = 1;
      } else if (this.publish == 3) {
        this.goodsShow = 2;
      }
      //JSON.stringify(this.operationPar)
      // var aa= ''

      // this.isimg.forEach(function(item, index){
      //   aa+=item
      // })
      // console.log(aa)

      //判断
      if (this.goodsName == "") {
        this.$message({
          message: "商品名称未填写",
          type: "warning"
        });
      } else if (
        this.goodsName.length < 3 ||
        this.goodsName.length > 50 ||
        /\s+/g.test(this.goodsName)
      ) {
        this.$message({
          message: "商品名称不符合规范",
          type: "warning"
        });
      } else if (this.goodsSubtitle == "") {
        this.$message({
          message: "商品副标题未填写",
          type: "warning"
        });
      } else if (/\s+/g.test(this.goodsSubtitle)) {
        this.$message({
          message: "商品副标题不符合规范",
          type: "warning"
        });
      } else if (this.configuration == "") {
        this.$message({
          message: "必须添加一条规格，否则在前台不显示",
          type: "warning"
        });
      } else {
        let isSubmit = true;
        for (var i = 0; i < this.configuration.length; i++) {
          if (this.configuration[i][2].specGoodsPrice == "") {
            this.$message({
              message: "还有价格未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.configuration[i][2].specGoodsVipPrice == "") {
            this.$message({
              message: "还有会员价格未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.configuration[i][2].specGoodsPurchasePrice == "") {
            this.$message({
              message: "还有进货价格未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.configuration[i][2].commission == "") {
            this.$message({
              message: "还有提成未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.configuration[i][2].specGoodsStorage == "") {
            this.$message({
              message: "还有库存未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.configuration[i][2].specGoodsSerial == "") {
            this.$message({
              message: "还有商品货号未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.configuration[i][2].weight == "") {
            this.$message({
              message: "还有重量未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.configuration[i][2].volume == "") {
            this.$message({
              message: "还有体积未填写",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.isimg == "") {
            this.$message({
              message: "请上传商品图片",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.provinceId == "") {
            this.$message({
              message: "请选择所在地",
              type: "warning"
            });
            isSubmit = false;
            break;
          } else if (this.cityName == "") {
            this.$message({
              message: "请选择所在地",
              type: "warning"
            });
            break;
            isSubmit = false;
          } else {
            for (var i = 0; i < this.operationPar.length; i++) {
              if (this.operationPar[i].name == "") {
                this.$message({
                  message: "还有参数名称未填写",
                  type: "warning"
                });
                isSubmit = false;
                break;
              } else if (this.operationPar[i].value == "") {
                this.$message({
                  message: "还有参数值未填写",
                  type: "warning"
                });
                isSubmit = false;
                break;
              } else {
                for (var i = 0; i < this.packAfter.length; i++) {
                  if (this.packAfter[i].name == "") {
                    this.$message({
                      message: "还有包装售后名称未填写",
                      type: "warning"
                    });
                    isSubmit = false;
                    break;
                  } else if (this.packAfter[i].value == "") {
                    this.$message({
                      message: "还有包装售后内容未填写",
                      type: "warning"
                    });
                    isSubmit = false;
                    break;
                  }
                }
              }
            }
          }
        }
        if (isSubmit == true) {
          //这里
          let params = new URLSearchParams();
          params.append("goodsName", this.goodsName);
          params.append("goodsDescription", this.goodsSubtitle);
          params.append("gcId", this.sgcId);
          params.append("gcName", this.gsName);
          params.append("brandId", this.brandId);
          params.append("typeId", this.typeId);
          params.append("specOpen", this.specOpen);
          params.append("specName", this.specName);
          params.append("goodsImage", firstimg);
          params.append("goodsImageMore", isimg.join(","));
          params.append("goodsStorePrice", this.goodsStorePrice);
          params.append("goodsStoreVipPrice", this.goodsStoreVipPrice);
          params.append(
            "goodsStorePriceInterval",
            this.goodsStorePriceInterval
          );
          params.append("weight", this.weights);
          params.append("volume", this.volumes);
          params.append("goodsShow", this.goodsShow);
          params.append("prepareUp", this.prepareUp);
          params.append("goodsCommend", this.goodsCommend);
          params.append("goodsKeywords", this.goodsKeywords);
          params.append("goodsPcBody", this.$refs.ueditor.getUEContent());
          params.append(
            "goodsPcServerBody",
            this.$refs.ueditorDesc.getUEContent()
          );
          params.append("goodsSpec", goodsSpec);
          params.append("goodsSpecJson", goodsSpecJson);
          params.append("isShare", this.isShare);
          params.append("isCartRecommend", this.isCartRecommend);
          params.append("transportId", this.transportId);
          params.append("fullFreeMail", this.fullFreeMail);
          params.append("goodsIntegral", this.goodsIntegral);
          params.append("goodsBody", goodsbody.join(","));
          params.append("cityId", this.cityId);
          params.append("cityName", this.cityName);
          params.append("provinceId", this.provinceId);
          params.append("provinceName", this.provinceName);
          params.append("goodsTransfeeCharge", this.goodsTransfeeCharge);
          params.append("oneCommission", this.oneCommission);
          params.append("goodsTotalStorage", this.goodsTotalStorage);
          params.append("jpackge", jpackges);
          params.append("jparams", jparamss);
          params.append("saveType", this.saveType);
          params.append("isPopularize", this.isPopularize);
          params.append("goodsId", this.$route.params.sgoodids);
          this.axios({
            method: "post",
            url: "/merchant/goods/saveGoods",

            data: params
          }).then(res => {
            console.log(res);
            if (res.data.code == 0) {
              this.$router.push({ name: "goods" });
              this.$message({
                message: '修改成功',
                type: "success"
              });
            } else {
              this.$message({
                message: res.data.msg,
                type: "warning"
              });
            }
          });
        }
      }
    }
  }
};
</script>

<style>
.sblock {
  border: 1px solid #dddddd;
  height: 40px;
}
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
  width: 120px;
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
.deploy {
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 5px;
}
.deployinput {
  border-top: 1px solid #dddddd;
  padding-top: 10px;
}
.deploy > div {
  /* display: flex; */
  margin-top: 10px;
}
.deploy > div div {
  display: inline-block;
  margin-right: 15px;
  width: 122px;
}
.deploy > div div:first-child {
  width: 80px;
}
.deploy .inp {
  width: 120px;
  border: 1px solid #dddddd;
  border-radius: 5px;
}
.publishTime {
  display: flex;
}
.publishTime div {
  margin-right: 10px;
}
.publishChoice > div {
  margin-top: 10px;
}
.forbid {
  cursor: no-drop;
}
.guarantees {
  width: 1000px;
}
.textareas {
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 5px;
}
.textareas textarea {
  width: 99%;
  resize: none;
  outline: none;
  border: none;
}
/* 888 */
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
