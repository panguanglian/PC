<template>
  <div style="width: 100%; background: white;">
    <div class="shopInfo">
      <div class="head">商品基本信息</div>
      <div class="list">
        <div class="variety">
          <div>商品分类:</div>
          <div>鸡蛋</div>
          <div>修改分类</div>
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
        <div class="variety">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      specification: [],

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

      imgList: [],
      addState: true,
      imgLen:0,
      addshow:''
    };
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
        let oldLen=this.imgLen;
        let len=this.fil.length;
         if(len>10){
          alert('最多可上传10张');
          return false;
        }
      if(this.imgList.length<2){
          this.addState=true
      }else{
          this.addState=false
      }
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
      console.log(this.imgList)
      console.log(this.imgList.length)
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
      this.size = this.size + file.size;
      let reader = new FileReader();
      reader.vue = this;
      reader.readAsDataURL(file);
      reader.onload = function() {
        file.src = this.result;
        this.vue.imgList.push({
          file
        });
      };
      
    },
    fileDel(index) {
        
      this.imgList.splice(index, 1);
      if(this.imgList.length<3){
          this.addState=true
      }else{
          this.addState=false
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
    }
  }
};
</script>

<style>
.shopImg {
  /* width: 800px; */
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
}
.shopInfo {
  width: 97%;

  background: white;
  margin: 0 auto;
  border: 10px solid #efefef;
}
.list {
  width: 100%;
}
.variety {
  display: flex;
  border: 1px solid #dddddd;
  border-top: none;
  font-size: 14px;
}
.variety:first-child {
  border-top: 1px solid #dddddd;
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
</style>
