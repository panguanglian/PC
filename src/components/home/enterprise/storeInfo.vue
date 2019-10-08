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
          <input type="text" placeholder="请输入主营类目" v-model="category"/>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>是否三证合一
        </div>
        <div style="flex:2;  margin-left: 15px;">
          <el-radio-group v-model="radio1" @change="choose">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
          </el-radio-group>
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
          <input type="text" placeholder="请输入公司名称" v-model="company"/>
        </div>
      </div>

      <div v-if="show">
        <div class="list">
          <div style="flex:1; text-align: right;">
            <strong>*</strong>营业执照注册号
          </div>
          <div style="flex:2;">
            <input type="text" placeholder="请输入营业执照注册号" v-model="mark"/>
          </div>
        </div>

        <div class="list">
          <div style="flex:1; text-align: right;">
            <strong>*</strong>营业期限
          </div>
          <div style="flex:2;">
            <div class="block">
              <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </div>
        </div>

        <div class="list">
          <div style="flex:1; text-align: right;">
            <strong>*</strong>组织机构代码
          </div>
          <div style="flex:2;">
            <input type="text" placeholder="请输入组织机构代码" v-model="organization"/>
          </div>
        </div>

        <div class="list">
          <div style="flex:1; text-align: right;">
            <strong>*</strong>纳税人识别码
          </div>
          <div style="flex:2;">
            <input type="text" placeholder="请输入纳税人识别码" v-model="taxpayer"/>
          </div>
        </div>

        <div class="list">
          <div style="flex:1; text-align: right;">
            <strong>*</strong>组织机构代码证有效期
          </div>
          <div style="flex:2;">
            <div class="block">
              <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
            </div>
          </div>
        </div>

        <div class="list">
          <div style="flex:1; text-align: right;">
            <strong>*</strong>组织机构代码证
          </div>
          <div style="flex:2; margin-left: 15px; display: flex;">
            <div class="UP">点击上传</div>
            <div style="color: #0090fa; margin-left: 15px;">查看事例</div>
          </div>
        </div>

        <div class="list">
          <div style="flex:1; text-align: right;">
            <strong>*</strong>税务登记证明
          </div>
          <div style="flex:2; margin-left: 15px; display: flex;">
            <div class="UP">点击上传</div>
            <div style="color: #0090fa; margin-left: 15px;">查看事例</div>
          </div>
        </div>
      </div>

      <div class="list" v-else>
        <div style="flex:1; text-align: right;">
          <strong>*</strong>统一社会信用代码
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入统一社会信用代码" v-model="credit"/>
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
          <input type="text" placeholder="请填写公司经营的详细地址" v-model="site"/>
        </div>
      </div>

      <div class="title">
        <strong class="blue">2</strong> 商标信息上传
      </div>
      <div class="brand" v-for="(item, index) in bra" :key="index">
        <div class="list">
          <div style="flex:1; text-align: right;">品牌类型</div>
          <div style="flex:3;  margin-left: 15px;">
            <el-radio-group v-model="radio2[index].radio" @change="brandType(index)">
              <el-radio label="1">自有品牌</el-radio>
              <el-radio label="2">授权品牌</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div
          style="font-size: 12px; margin-left: 230px; color:#9597A6;"
        >自有品牌即品牌下面的商标，其权利人是您的开店公司或者开店公司的法定代表人；若不是，则是授权品牌。</div>
        <div class="list">
          <div style="flex:1; text-align: right;">品牌名称</div>
          <div style="flex:3;">
            <input type="text" placeholder="请填写品牌名称" />
          </div>
        </div>
        <div v-if="show2[index].show">
          <div class="list">
            <div style="flex:1; text-align: right;">品牌独占授权书</div>
            <div style="flex:3; margin-left: 15px;">
              <div class="UP">点击上传</div>
              <div
                style="font-size: 12px; color: #9597A6; margin-top: 5px;"
              >点击下载授权模板，按照授权模板填写，加盖品牌方授权公司及开店公司红色公章后上传</div>
            </div>
          </div>
          <div class="list">
            <div style="flex:1; text-align: right;">授权有效期</div>
            <div style="flex:3;">
              <div class="block">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </div>
            </div>
          </div>
        </div>
        <div class="list" v-for="(item, inde) in item.radio" :key="inde">
          <div style="flex:1; text-align: right;">品牌注册商标</div>
          <div style="flex:3;">
            <div class="trademark">
              <div class="list" v-if="show2[index].show">
                <div style="flex:1; text-align: right;">商标注册人类型</div>
                <div style="flex:3;  margin-left: 15px;">
                  <el-radio-group v-model="bra[index].radio[inde]" @change="registrant(inde)">
                    <el-radio label>非自然人(公司)</el-radio>
                    <el-radio label="1">自然人(个人)</el-radio>
                  </el-radio-group>
                </div>
              </div>
              <div class="list">
                <div style="flex:1; text-align: right;">商标注册号</div>
                <div style="flex:3;">
                  <input type="text" placeholder="请填写品牌名称" />
                </div>
              </div>
              <div class="list">
                <div style="flex:1; text-align: right;">商标注册证明</div>
                <div style="flex:3; margin-left: 15px;">
                  <div class="UP" @click="aa(inde)">点击上传</div>
                  <div class="explain">
                    <div>1、请上传《商标注册证》或申请日起已满6个月的《注册申请受理通知书》</div>
                    <div>2、上传的《商标注册证》或《商标受理通知书》的申请人或注册人必须为开店公司</div>
                    <div>3、变更中的商标请同时上传《变更受理通知书》和《注册申请受理通知书》</div>
                    <div>4、转入/已转让的商标需上传《转让受理通知书》或者《转让证明》</div>
                    <div>5、《商标注册证》续证完成，而原《商标注册证》已经过期，需同时上传《核准续展注册证明》</div>
                  </div>
                </div>
              </div>
              <div class="list">
                <div style="flex:1; text-align: right;">证件有效日期</div>
                <div style="flex:3;" class="date">
                  <div class="block">
                    <el-date-picker
                      v-model="value[index].value[inde]"
                      type="date"
                      placeholder="选择日"
                      @change="chDate(inde)"
                    ></el-date-picker>
                  </div>
                </div>
              </div>
              <div class="list" v-if="bra[index].radio[inde]">
                <div style="flex:1; text-align: right;">持有人身份证明</div>
                <div style="flex:3; margin-left: 15px;">
                  <div class="UP">点击上传</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="addbrand" @click="addbrand(index)">新增商标</div>
      </div>
      <div class="addBrand" @click="addBra">添加更多品牌</div>
      <div class="title">
        <strong class="blue">3</strong> 店铺基本信息
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>店铺名称
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入店铺名称" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>设置密码
        </div>
        <div style="flex:2;">
          <input type="password" placeholder="请输入密码" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>确认密码
        </div>
        <div style="flex:2;">
          <input type="password" placeholder="请重新输入密码" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>第三方店铺链接
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="填写真实的其他平台链接，若无可不填" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>入驻邀请码
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="填写邀请人的邀请码，若无可不填" />
        </div>
      </div>
      <div class="agreement">
        <el-checkbox v-model="checked">我已经阅读并同意</el-checkbox>《异业联盟平台合作协议》
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
      radio1: "1", //是否三证合一
      radio2: [{radio:'1'}], //品牌类型
      radio3: "1", //商标注册人类型
      value1: "", //营业期限
      value2: "", //组织机构代码证有效期
      value3: "", //证件有效日期
      value: [{value:[]}],
      checked: true, //同意合作协议
      show: false,
      show2: [{show : false}],
      show3: false,
      num: 3,
      radio: [""],
      bra: [{ radio: [""] }],
      category:'',//主营类目
      license:'',//营业执照
      company:'',//公司名称
      credit:'',//信用代码
      voucher:'',//开户许可证或基本账户存款凭证
      site:'',//公司经营地址
      mark:'',//营业执照注册号
      organization:'',//组织机构代码
      taxpayer:'',//纳税人识别码
      organizationCard:'',//组织机构代码证
      attest:'',//税务登记证明
    };
  },
  methods: {
    last() {
      this.$router.go(-1);
    },
    next() {
      if(this.category==''){
        this.$message({
            message: "请输入主营类目",
            type: "warning"
          });
      }else if(this.radio1=='1'){
        if(this.license==''){
          this.$message({
            message: "请上传营业执照",
            type: "warning"
          });
        }else if(this.company==''){
          this.$message({
            message: "请输入公司名称",
            type: "warning"
          });
        }else if(this.credit==''){
          this.$message({
            message: "请输入统一社会信用代码",
            type: "warning"
          });
        }else if(this.voucher==''){
          this.$message({
            message: "请上传开户许可证或基本账户存款凭证",
            type: "warning"
          });
        }else if(this.site==''){
          this.$message({
            message: "请输入公司经营地址",
            type: "warning"
          });
        }else{
          this.$router.push({ path: "flagShip" });
        }
      }else{

        this.$router.push({ path: "flagShip" });
      }
      
    },
    choose() {
      console.log(this.radio1);
      if (this.radio1 == 2) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    brandType(index) {
      console.log(this.radio2);
      if (this.radio2[index].radio == 2) {
        this.show2[index].show = true;
      } else {
        this.show2[index].show = false;
        this.show3 = false;
      }
    },
    registrant(inde) {
      console.log(this.radio[inde]);
      // console.log(this.radio3);
      if (this.radio[inde] == 2) {
        this.show3 = true;
      } else {
        this.show3 = false;
      }
    },
    addbrand(index) {
      console.log(index);
      this.value.push();

      this.bra[index].radio.push("");
      console.log(this.radio);
    },
    addBra() {
      
      this.bra.push({ radio: [""] });
      this.radio2.push({radio:'1'});
      this.show2.push({show:false});
      this.value.push({value:[]});
      console.log(this.bra);
    },
    chDate(inde) {
      console.log(inde)
      console.log(this.value[inde].value[inde]);
    },
    aa(inde) {
      console.log(inde);
    }
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
.blue {
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
  margin-left: 12px;
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
  background: white;
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
  background: white;
}
.explain {
  font-size: 12px;
  padding: 10px 0;
  color: #9597a6;
}
.explain div {
  margin-top: 5px;
}
.brand {
  width: 880px;
  padding-bottom: 20px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.trademark {
  width: 600px;

  background: #f7f7f7;
  border-radius: 5px;
  margin-left: 15px;
  padding: 10px 15px 20px 0;
}
.addBrand {
  width: 880px;
  height: 32px;
  border: 1px solid #030303;
  border-radius: 5px;
  text-align: center;
  line-height: 32px;
  margin: 0 auto;
  margin-top: 20px;
}
.addbrand {
  border: 1px solid #030303;
  border-radius: 5px;
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  margin-top: 10px;
  margin-left: 230px;
}
.agreement {
  width: 328px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
