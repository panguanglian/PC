<template>
  <div class="navWeb">
    <!-- 查询搜索 -->
    <div>
      <el-input placeholder="可根据商品名称查询" v-model="searchvalue" style="width:20%;min-width:150px;">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="primary" icon="el-icon-search" @click="sreach">搜索</el-button>
      <!-- <el-button @click="cancel" v-if="sreachs">取消搜索</el-button> -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="出售中的商品" name="first"></el-tab-pane>
        <el-tab-pane label="仓库中的商品" name="second"></el-tab-pane>
        <el-tab-pane label="下架的商品" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <!-- 表格 -->
    <template>
      <el-table :data="shoplift" style="width: 100%">
        <!-- <el-table-column label="" width="120">
          <template>
           
          </template>
        </el-table-column> -->

        <el-table-column label="商品名称" width="300">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.goodsName }}</span>
          </template>
        </el-table-column>

        <el-table-column label="品牌&分类" width="300">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.gcName }}</span>
          </template>
        </el-table-column>

        <el-table-column label="商品状态" width="300">
          <template slot-scope="scope">
            <span
              style="margin-left: 10px"
            >{{scope.row.goodsShow == 1 ? '上架' : (scope.row.goodsShow==0?'下架':'仓库中')}}</span>
          </template>
        </el-table-column>

        <el-table-column label="商品审核状态" width="300">
          <template slot-scope="scope">
            <span
              style="margin-left: 10px"
            >{{scope.row.goodsState==30? '已通过' : (scope.row.goodsState==40?'违规下架':(scope.row.goodsState==50?'审核未通过':'待审核'))}}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              v-if="activeName=='first'?true:(activeName=='second'?true:false)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-if="activeName=='second'?false:true"
            >{{activeName == "first" ? '下架' : '上架'}}</el-button>
            <el-button
              size="mini"
              @click="handDelete(scope.$index, scope.row)"
              v-if="activeName=='third'?true:false"
              type="warning"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totals"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      searchvalue: "",
      activeName: "first",
      currentPage: 1,
      page: 10,
      searchType: "0",
      shoplift: [],
      sreachs: false,
      totals: 0,
      pageNo: "1",
      gcId: "",
      goodsName: "",
      goodsSerial: "",
      storeId: "",
      //选项框
      goodsIdlength:[],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      // cities: cityOptions,
      isIndeterminate: true
      //选项框
    };
  },
  created() {},
  mounted() {
    this.reqursts();
  },
  methods: {
    sreach() {
      this.goodsName = this.searchvalue;

      this.reqursts();
    },
    handleClick(tab, event) {
      if (tab.index) {
        this.searchType = tab.index;
        this.reqursts();
      }
    },
    reqursts() {
      var _this = this;
      let params = new URLSearchParams();
      params.append("searchType", _this.searchType);
      params.append("pageNo", _this.pageNo);
      params.append("gcId", _this.gcId);
      params.append("goodsName", _this.goodsName);
      params.append("goodsSerial", _this.goodsSerial);
      params.append("storeId", _this.storeId);

      this.axios({
        method: "post",
        url: "/merchant/goods/",
        // headers: {
        //   "Access-token": "94bf44b8096b43b3b41f086b4db8607a"
        // },
        data: params
      }).then(res => {
        console.log(res.data.data);
        _this.shoplift = res.data.data.rows;
        _this.totals = res.data.data.total;
        _this.goodsIdlength=[];
        _this.shoplift.forEach(function(item,index){
          _this.goodsIdlength.push(item.goodsId)
        })
        console.log(_this.goodsIdlength)
      });
    },
    // 取消搜索
    // cancel() {},
    handleSizeChange(val) {
      this.reqursts();
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this.reqursts();
    },
    handleEdit(index, row) {
      var _this = this;

      this.$router.push({
        name: "modification",
        params: {
          row: row,
          sgcId: _this.shoplift[index].gcId,
          sgoodids: _this.shoplift[index].goodsId
        }
      });
    },
    handleDelete(index, row) {
      var _this = this;
      if (this.activeName == "first") {
        _this
          .$confirm("确认下架？")
          .then(_ => {
            _this
              .axios({
                method: "get",
                url: "/merchant/goods/downGoods?id=" + row.goodsId,

                data: {}
              })
              .then(res => {
                console.log(res);
                if (res.data.code == 0) {
                  this.$message({
                    message: "下架成功",
                    type: "success"
                  });
                  this.reqursts();
                }
              });
          })
          .catch(_ => {
            console.log(33);
          });
      } else if (this.activeName == "third") {
        _this
          .$confirm("确认上架？")
          .then(_ => {
            _this
              .axios({
                method: "get",
                url: "/merchant/goods/upGoods?id=" + row.goodsId,

                data: {}
              })
              .then(res => {
                console.log(res);
                if (res.data.code == 0) {
                  this.$message({
                    message: "上架成功",
                    type: "success"
                  });
                  this.reqursts();
                }
              });
          })
          .catch(_ => {
            console.log(33);
          });
      }
      console.log(row.goodsId);
    },
   handDelete(index, row){
     var _this = this;
   
     this.axios({
        method: "get",
        url: "/merchant/goods/deleteGoods?id="+row.goodsId,
       
        data: {

        }
      }).then(res => {
        console.log(res);
        if(res.data.code==0){
          this.$message({
                    message: "删除成功",
                    type: "success"
                  });
                  this.reqursts();
        }
      });
     console.log(row.goodsId)
   }
    
  }
};
</script>

<style scoped>
.navWeb {
  padding: 10px 10px;
  box-sizing: border-box;
}
.block {
  position: absolute;
  bottom: 10px;
}
</style>
