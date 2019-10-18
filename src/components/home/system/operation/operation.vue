<template>
  <div class="overall">
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
          <div>
            <i :class="item.rigth"></i>
          </div>
        </div>
        <!-- 判断当前这条数据的bool值如果是true就打开二级菜单,如果是false就关闭二级菜单 -->
        <div v-show="item.show" class="barOption">
          <!-- 循环二级菜单数据并使用.stop阻止冒泡 -->
          <div
            v-for="(a,index) in item.list"
            v-on:click.stop="doThis(index)"
            :key="index"
            class="option"
          ><router-link tag="div" :to="a.url">{{a.name}}</router-link></div>
          
        </div>
      </div>
    </div>
    
  </div>
  <div class="navs">
      <div class="isnav" v-for="(item,index) in navs" :key="index">
          <!-- <i class="el-icon-arrow-right" v-if="item[index].nav==''? false :true"></i> -->
          {{1}}
      </div>
  <div class="substance">
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
        
        navs:[{nav:'后台管理'},{nav:''},{nav:''}],
      headerData: [
        {
          name: "发货管理",
          list: [
            {name:"订单查询",url:'/system/operation/substance'},
            {name:"发货中心",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
           
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "售后管理",
          list: [
           {name:"订单查询",url:'/system/operation/substance'},
            {name:"发货中心",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "商品管理",
          list: [
            {name:"订单查询",url:'/system/operation/substance'},
            {name:"发货中心",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "店铺营销",
          list: [
           {name:"订单查询",url:'/system/operation/substance'},
            {name:"发货中心",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "数据中心",
          list: [
           {name:"订单查询",url:'/system/operation/substance'},
            {name:"发货中心",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "账户资金",
          list: [
          {name:"订单查询",url:'/system/operation/substance'},
            {name:"发货中心",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        },
        {
          name: "店铺管理",
          list: [
            {name:"订单查询",url:'/system/operation/substance'},
            {name:"发货中心",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
            {name:"物流工具",url:'/system/operation/substance'},
            {name:"物流概况",url:'/system/operation/substance'},
          ],
          show: false,
          icon: "el-icon-s-order",
          rigth: "el-icon-arrow-right"
        }
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
    },
    doThis: function(index) {
      console.log(22);
    }
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
.overall{
    display: flex;
    margin: 20px;
}
.navs{
    
    margin-left: 30px;
}
.hello {
  width: 250px;
  height: 800px;
  background: #ffffff;
  padding: 25px;
  
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
.isnav{
    width: 1424px;
    background: white;
    padding: 20px
}
.substance{
    width: 1464px;
    height: 780px;
    background: white;
}
</style>
