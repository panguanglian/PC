<template>
    <div>
        <div class="nav">
            <router-link tag="div" to="/navbars/home" class="logo">
                <div>商家入驻</div>
            </router-link>
            <div class="operation">
                <router-link tag="div" to='/navbars/contacthailu'>联系海露</router-link>
                | <router-link tag="div" to='/navbars/rulecenter'>规则中心</router-link>
                 |<router-link tag="div" to='/navbars/downloadclient'>下载客户端</router-link>
                <div>159998888</div>|<div class="login" @click="dialogVisible = true">退出</div>
                <!-- <div class="login">登录</div>|<div class="login">注册</div> -->
            </div>
        </div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="signout">确 定</el-button>
            </span>
        </el-dialog>
        <router-view></router-view>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            dialogVisible:false,
        }
    },
    methods:{
        signout(){
            this.dialogVisible=false
            
        },
        
    }
    
}
</script>
<style scoped>
.nav{
        width: 90%;
        height: 80px;
        background: #2E7BEE;
        display: flex;
        padding: 0 5%;
        align-items: center;
        color: white;
    }
.nav>div{
        flex: 1;
    }
    .operation{
        display: flex;
        position: absolute;
        right: 5%;
    }
    .operation>div{
         margin: 0 30px;
    }
    .login{
        border: 1px solid white;
        border-radius: 5px;
        padding: 0 20px;
       
    }
    

</style>