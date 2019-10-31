<template>
  <div class="overall">
    <div class="hello">
      <div>
        <i class="el-icon-s-home" style="font-size:20px;"></i>
        <span style="margin-left: 15px; font-size: 20px;">后台管理</span>
      </div>
      <div class="header">
        <div
          @click="changeli(index,item)"
          v-for="(item,index) in headerData"
          :key="index"
          class="sidebar"
        >
          <div class="barInfo" @click="curnum=null">
            <div>
              <i :class="item.icon" style="font-size:20px;"></i>
            </div>
            <div>
              <span style="font-size:20px;">{{item.name}}</span>
            </div>
            <div>
              <i :class="item.rigth"></i>
            </div>
          </div>

          <div v-show="item.show" class="barOption">
            <div
              v-for="(a,index) in item.list"
              v-on:click.stop="doThis(a,index)"
              :key="index"
              class="option"
              :class="curnum==index?'active':''"
            >
              <router-link tag="div" :to="a.url">{{a.name}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="navs">
      <div class="isnav" style="display: flex;">
        <div v-for="(item,index) in navs" :key="index">
          <i class="el-icon-arrow-right" v-if="item.nav==''? false : true"></i>
          {{item.nav}}
        </div>
      </div>

      <div class="shipments">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      navs: [{ nav: "后台管理" }, { nav: "" }, { nav: "" }],
      curnum:null,
      headerData: [
        {
          name: "发货管理",
          list: [
            // { name: "订单查询", url: "/system/operation/goods" },
            { name: "发货中心", url: "/system/operation/shipments" },
            // { name: "物流工具", url: "/system/operation/shipments" },
            // { name: "物流概况", url: "/system/operation/shipments" },
            // { name: "物流工具", url: "/system/operation/shipments" },
            // { name: "物流概况", url: "/system/operation/shipments" }
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        // {
        //   name: "售后管理",
        //   list: [
        //     { name: "订单查询", url: "/system/operation/shipments" },
        //     { name: "发货中心", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" }
        //   ],
        //   show: false,
        //   icon: "el-icon-s-order",
        //   rigth: "el-icon-arrow-right"
        // },
        // {
        //   name: "商品管理",
        //   list: [
        //     { name: "订单查询", url: "/system/operation/shipments" },
        //     { name: "发货中心", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" }
        //   ],
        //   show: false,
        //   icon: "el-icon-s-order",
        //   rigth: "el-icon-arrow-right"
        // },
        // {
        //   name: "店铺营销",
        //   list: [
        //     { name: "订单查询", url: "/system/operation/shipments" },
        //     { name: "发货中心", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" }
        //   ],
        //   show: false,
        //   icon: "el-icon-s-order",
        //   rigth: "el-icon-arrow-right"
        // },
        // {
        //   name: "数据中心",
        //   list: [
        //     { name: "订单查询", url: "/system/operation/shipments" },
        //     { name: "发货中心", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" }
        //   ],
        //   show: false,
        //   icon: "el-icon-s-order",
        //   rigth: "el-icon-arrow-right"
        // },
        // {
        //   name: "账户资金",
        //   list: [
        //     { name: "订单查询", url: "/system/operation/shipments" },
        //     { name: "发货中心", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" }
        //   ],
        //   show: false,
        //   icon: "el-icon-s-order",
        //   rigth: "el-icon-arrow-right"
        // },
        // {
        //   name: "店铺管理",
        //   list: [
        //     { name: "订单查询", url: "/system/operation/shipments" },
        //     { name: "发货中心", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" },
        //     { name: "物流工具", url: "/system/operation/shipments" },
        //     { name: "物流概况", url: "/system/operation/shipments" }
        //   ],
        //   show: false,
        //   icon: "el-icon-s-order",
        //   rigth: "el-icon-arrow-right"
        // }
      ]
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
      this.navs[1].nav = item.name;
      // this.navs[2].nav=''
    },
    doThis: function(a, index) {
      this.navs[2].nav = a.name;
      this.curnum=index
    },
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height: 100%;
  background: #eff8fb;
}
body {
  height: 100%;
}
.overall {
  display: flex;
  margin: 20px;
}
.navs {
  margin-left: 30px;
  width: 1600px;
}
.hello {
  width: 200px;
  min-height: 800px;
  background: #ffffff;
  padding: 20px;
  box-sizing: border-box;
}
.sidebar {
  width: 100%;
  border-bottom: 1px solid #eff8fb;
  cursor: pointer;
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
.option.active{
  background: #2e7bee;
  color: #ffffff;
}
.barOption {
  margin-top: 8px;
}
.isnav {
  width: 98%;
  background: white;
  padding: 1%;
}
.isnav div:first-child i {
  display: none;
}
.shipments {
  width: 100%;
  height: 800px;
  background: white;
}
</style>
