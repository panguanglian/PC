
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
                <p><span>*</span>酒店名称</p>
                <div>
                    <el-input v-model="username" placeholder="请输入酒店名称"></el-input>
                </div>
            </div>
            <div class="info">
                <p><span>*</span>前台电话</p>
                <div>
                    <el-input v-model="username" placeholder="请输入酒店前台电话"></el-input>
                </div>
            </div>
             
            <div class="info">
                <p><span>*</span>详细地址</p>
                <div>
                    <el-input v-model="username" placeholder="请输入酒店前台电话"></el-input>
                </div>
            </div>
            <div class="info">
                <p><span>*</span>酒店类型</p>
                <div>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="info">
                <p><span>*</span>售价区间</p>
                <div>
                    <el-select v-model="value1" placeholder="请选择">
                        <el-option
                        v-for="item in optionss"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="value2" placeholder="请选择">
                        <el-option
                        v-for="item in optionsss"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="info">
                <p><span>*</span>客房总数</p>
                <div>
                    <el-input v-model="username" placeholder="请输入酒店前台电话"></el-input>
                </div>
            </div>
            

        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     username:'',
     options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],

        optionss: [{
          value: '1',
          label: '10'
        }, {
          value: '2',
          label: '20'
        }, {
          value: '3',
          label: '50'
        }, {
          value: '4',
          label: '100'
        }, {
          value: '5',
          label: '500'
        }],
        
        optionsss: [{
          value: '1',
          label: '10'
        }, {
          value: '2',
          label: '20'
        }, {
          value: '3',
          label: '50'
        }, {
          value: '4',
          label: '100'
        }, {
          value: '5',
          label: '500'
        }],
        value: '',
        value1: [],
        value2: []
    };
  },
  methods: {

  }
};
</script>

<style>
.info>div{
    width: 75%;
}
.info p{
    width: 20%;
    text-align: right;
}
.info p span{
    color: red;
}
.info{
width: 60%;
display: flex;
justify-content: space-between;
margin-top: 20px;
}
.box{
    width: 60%;
    background: #fff;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    padding:  20px 0;
    
}
.color {
  padding: 2%;
  display: flex;
  align-items: center;
  padding-left: 10%;
  color: #2e7bee;
  font-size: 26px;
  font-weight: bold;
  background: #FFF;
}
.color img {
  width: 50px;
  height: 50px;
}
html{
    background: #EFF8FB;
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
