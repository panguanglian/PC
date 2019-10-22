<template>
  <div class="navWeb">
    <!-- 查询搜索 -->
      <div >
          <el-input
            placeholder="请输入查询订单"
            v-model="searchvalue" style="width:20%;min-width:150px;">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
           <el-button type="primary" icon="el-icon-search" @click="sreach">搜索</el-button>
           <el-button  @click="cancel" v-if="sreachs">取消搜索</el-button>
      </div>
      <!-- 表格 -->
      <template>
        <el-table
          :data="dsffdf"
          style="width: 100%">
          <el-table-column
            label="编号"
            width="120">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>

          <el-table-column
            label="姓名"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
              :total="tableData.length">
            </el-pagination>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        searchvalue:'',
        currentPage: 1,
        page:10,
        dsffdf:[],
         tableData: [
           {date: '95271',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '95272',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '95272',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '95273',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '95273',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '95274',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '952745',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '952756',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '95277',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
           {date: '95277',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'},
            {date: '95277',name: '王小虎',address: '上海市普陀区金沙江路 1516 弄'}
          ],
           sreachs:false,
    };
  },
  created(){
        for(let i=0;i<10;i++){
          
            this.dsffdf.push(this.tableData[i])
          
        }
  },
  methods: {
    sreach(){
      if(this.searchvalue.length==0||this.searchvalue==''){
        this.$message({
          type:'warning',
          message:'请输入搜索内容'
        })
      }else{
        console.log(this.searchvalue)
      this.sreachs=true
      }
      
    },
    // 取消搜索
    cancel(){
      for(let i=0;i<10;i++){
            this.dsffdf.push(this.tableData[i])
        }
        this.sreachs=false
    },
     handleSizeChange(val){
       console.log(val)
      },
      handleCurrentChange(val) {
        console.log(val)
      },
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  }
};
</script>

<style scoped>
.navWeb{
  padding:10px 10px;
  box-sizing: border-box;
  
}

</style>
