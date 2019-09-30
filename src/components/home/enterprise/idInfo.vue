<template>
  <div class="idInfo">
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

    <div class="information">
      <div class="title">
        <strong>1</strong> 企业法定代表人基本信息
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>法定代表人手机号
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入法定代表人手机号" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>姓名
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请填写店铺法定代表人姓名" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>身份证号
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入18位身份证号码" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>上传证件
        </div>
        <div style="flex:2;" class="papers">
          <div class="upPapers">
            <div class="UP">点击上传</div>
          </div>
          <div class="upPapers">
            <div class="UP">点击上传</div>
          </div>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>证件有效日期
        </div>
        <div style="flex:2;" class="date">
          <div class="block">
            <el-date-picker v-model="value3" type="date" placeholder="选择日"></el-date-picker>
          </div>
          <el-checkbox v-model="checked">长期</el-checkbox>
        </div>
      </div>
    </div>

    <div class="information">
      <div class="title">
        <strong>2</strong> 店铺管理人基本信息
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>法人与管理人是否同一人
        </div>
        <div style="flex:2; margin-left: 15px;">
          <el-radio v-model="radio" label="1">是同一个人</el-radio>
          <el-radio v-model="radio" label="2">不是同一个人</el-radio>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>姓名
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请填写店铺法定代表人姓名" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>身份证号
        </div>
        <div style="flex:2;">
          <input type="text" placeholder="请输入18位身份证号码" />
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>上传证件
        </div>
        <div style="flex:2;" class="papers">
          <!-- <div class="upPapers">
            <div class="UP">点击上传</div>
          </div>
          <div class="upPapers">
            <div class="UP">点击上传</div>
          </div> -->
          <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
        </div>
      </div>
      <div class="list">
        <div style="flex:1; text-align: right;">
          <strong>*</strong>证件有效日期
        </div>
        <div style="flex:2;" class="date">
          <div class="block">
            <el-date-picker v-model="value2" type="date" placeholder="选择日"></el-date-picker>
          </div>
          <el-checkbox v-model="checkeds">长期</el-checkbox>
        </div>
      </div>
    </div>
    <div class="operate">
      <div class="last" @click="last">上一步</div>
      <div class="next" @click="next">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      checked: true,
      checkeds: true,
      value3: "",
      value2: "",
      radio: "1",
      imageUrl: ''
    };
  },
  methods: {
    last() {
      this.$router.go(-1);
    },
    next() {
      this.$router.push({ path: "storeInfo" });
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
};
</script>

<style>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
   width: 195px;
    height: 125px;
    display: block;
  }
.idInfo {
  width: 960px;
  margin: 0 auto;
  background: #ffffff;
  /* padding: 2%; */
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px 2px #888888;
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
  margin-right: 20px;
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
  margin-left: 5px;
  /* border: 1px solid #dddddd;
  margin-left: 10px;
  border-radius: 5px; */
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
</style>
