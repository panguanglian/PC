<template>
<div>
<div class="nav">
      <router-link tag="div" to="/navbars/home" class="logo">
        <div class="img">
          <img src="" alt />
        </div>
        <div style="font-size:30px;">管理后台</div>
      </router-link>
      <div class="operation">
        <router-link tag="div" to="/home">站内信</router-link>|
        <router-link tag="div" to="/home">客服平台</router-link>|
        <router-link tag="div" to="/home">联系海露</router-link>|
        <router-link tag="div" to="/home">规则中心</router-link>|
        <router-link tag="div" to="/home">帮助中心</router-link>|
        <router-link tag="div" to="/home">下载客户端</router-link>
        <div class="user" @click="usre">
          <div class="head">
            <img src="" alt />
          </div>
          <div class="info">
            <div class="merchant">丝之莎内衣旗舰店</div>
            <div class="idInfo">Hailu98563544</div>
          </div>
          <div>
            <i class="el-icon-caret-bottom"></i>
          </div>
        </div>
        <div class="hint" v-if="hint">
          <div @click="userInfo">账号信息</div>
          <div @click="dialogVisible = true">退出</div>
        </div>
        <!-- <div class="login" @click="dialogVisible = true">退出</div> -->
        <!-- <div class="login">登录</div>|<div class="login">注册</div> -->
      </div>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>是否退出登录</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="signout">确 定</el-button>
      </span>
    </el-dialog>
    <router-view></router-view>

  <div class="hellos">
    
    <div class="hello">
      <div>
        <i class="el-icon-s-home"></i>
        <span style="margin-left: 15px; font-size: 22px;">后台管理</span>
      </div>
      <div class="header">
        <!-- 循环数据在点击调用changeli方法时将当前索引和本条数据传进去,并使用当前数据show的bool值添加或移除样式 -->
        <div
          @click="changeli(index,item)"
          v-for="(item,index) in headerData"
          :key="index"
          class="sidebar"
        >
          <!-- 在这里打印出boll值方便查看 -->
          <!-- <i :class="item.icon"></i> <span>{{item.name}}</span><i :class="item.rigth" style="float: right;"></i> -->
          <div class="barInfo">
            <div>
              <i :class="item.icon"></i>
            </div>
            <div>
              <span>{{item.name}}</span>
            </div>
            <div style="float: right;">
              <i :class="item.rigth"></i>
            </div>
          </div>
          <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
          <div v-show="item.show" class="barOption">
            <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
            <div
              v-for="(a,index) in item.list"
              v-on:click.stop="doThis(a,index)"
              :key="index"
              class="option"
            >{{a}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="contents">
      <div class="isNav">
        <div v-for="(item,index) in isNav" :key="index">
          <i class="el-icon-arrow-right" v-if="isNav[index].nav==''? false : true"></i>
          {{item.nav}}
        </div>
      </div>
      <div class="details">
          
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import sidebar from '../'

export default {
  data() {
    return {
      
      isNav: [{ nav: "后台管理" },{nav:''},{nav:''}],
      headerData: [
        {
          name: "发货管理",
          list: [
            "订单查询",
            "发货中心",
            "物流工具",
            "物流概况",
            "物流工具",
            "物流概况"
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "售后管理",
          list: [
            "订单查询",
            "发货中心",
            "物流工具",
            "物流概况",
            "物流工具",
            "物流概况"
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "商品管理",
          list: [
            "订单查询",
            "发货中心",
            "物流工具",
            "物流概况",
            "物流工具",
            "物流概况"
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "店铺营销",
          list: [
            "订单查询",
            "发货中心",
            "物流工具",
            "物流概况",
            "物流工具",
            "物流概况"
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "数据中心",
          list: [
            "订单查询",
            "发货中心",
            "物流工具",
            "物流概况",
            "物流工具",
            "物流概况"
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "账户资金",
          list: [
            "订单查询",
            "发货中心",
            "物流工具",
            "物流概况",
            "物流工具",
            "物流概况"
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "店铺管理",
          list: [
            "订单查询",
            "发货中心",
            "物流工具",
            "物流概况",
            "物流工具",
            "物流概况"
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        }
      ],
      dialogVisible: false,
      hint: false
    };
  },
  methods: {
    changeli: function(index, item) {
      // 先循环数据中的show将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
      this.headerData.forEach(i => {
        // 判断如果数据中的headerData[i]的show属性不等于当前数据的show属性那么headerData[i]等于false
        if (i.show !== this.headerData[index].show) {
          console.log(i.show);
          i.show = false;
          i.rigth = "el-icon-arrow-right";
        }

        item.rigth = "el-icon-arrow-down";
      });
      // 取反(true或false)
      item.show = !item.show;
      if (item.show == false) {
        item.rigth = "el-icon-arrow-right";
      } else {
        item.rigth = "el-icon-arrow-down";
      }
      // item.rigth='el-icon-arrow-down'
      console.log(item.show);
      console.log(item.name);
      this.isNav[1].nav=item.name
    },
    doThis: function(a,index) {
      console.log(a)
      this.isNav[2].nav=a
    },
    signout() {
      this.dialogVisible = false;
      this.hint = false;
    },
    usre() {
      if (!this.hint) {
        this.hint = true;
      } else {
        this.hint = false;
      }
    },
    userInfo() {
      this.hint = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
}
html {
  height: 100%;
}
body {
  height: 100%;
}

.hellos {
  padding: 20px;
  background: #eff8fb;
  display: flex;
}
.contents {
    width: 1464px;
  margin-left: 35px;
  height: 810px;
  background: white;
  padding: 20px;
  border-radius: 10px;
}
.isNav {
  display: flex;
}
.isNav > div:first-child i {
  display: none;
}
.hello {
  width: 250px;
  height: 800px;
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
}
.sidebar {
  width: 100%;
  border-bottom: 1px solid #eff8fb;
  /* height: 50px; */
  /* line-height: 50px; */
  padding: 20px 0;
}
.sidebar span {
  margin-left: 15px;
  font-size: 22px;
}
.sidebar:first-child {
  border-top: 1px solid #eff8fb;
  margin-top: 20px;
}
.barInfo {
  display: flex;
  align-items: center;
  position: relative;
}
.barInfo > div:last-child {
  position: absolute;
  right: 0;
}
.option {
  width: 100px;
  display: inline-block;
  padding: 8px 0;
  text-align: center;
  color: #707070;
}
.barOption {
  margin-top: 8px;
}
.nav {
  width: 90%;
  height: 80px;
  background: #2e7bee;
  display: flex;
  padding: 0 5%;
  align-items: center;
  color: white;
  /* position: absolute;
  top: 0;
  left: 0; */
}
.nav > div {
  flex: 1;
}
.operation {
  display: flex;
  position: absolute;
  right: 5%;
  align-items: center;
}
.operation > div {
  margin: 0 30px;
  font-size: 20px;
}
.login {
  border: 1px solid white;
  border-radius: 5px;
  padding: 0 20px;
}
.user {
  display: flex;
  align-items: center;
}
.user > div {
  margin-right: 10px;
}
.head {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  overflow: hidden;
}
.head img {
  width: 100%;
  height: 100%;
}
.info {
  font-size: 14px;
}
.logo {
  display: flex;
  align-items: center;
}
.img {
  height: 80px;
  width: 130px;
  margin-right: 5px;
}
.img img {
  width: 100%;
  height: 100%;
}
.hint {
  position: absolute;
  width: 210px;
  height: 100px;
  top: 50px;
  right: 0px;
  color: black;
  -moz-box-shadow: 2px 2px 5px #333333;
  -webkit-box-shadow: 2px 2px 5px #333333;
  box-shadow: 2px 2px 5px #333333;
  border-radius: 10px;
  background: white;
}
.hint > div {
  font-size: 14px;
  text-align: center;
  width: 210px;
  height: 50px;
  line-height: 50px;
}
</style>
