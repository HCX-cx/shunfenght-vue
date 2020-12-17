<template>
  <div id="box">
    <el-form  label-width="80px" :model="adminUser">
      <el-form-item label="电话">
        <el-input v-model="adminUser.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="adminUser.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="danger" @click="login" plain>登录</el-button>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "login",
    data(){
      return{
        labelPosition:'right',
        adminUser:{
          tel:'',
          password:'',
        }
      };
    },
    methods:{
      login:function () {
        axios.post("api/admin/login",this.adminUser).then(res=>{
          if (res.data.code==200){
            this.$router.push("/bofore")
          }else{
            alert(res.data.message)
          }
        })
      }
    }
  }
</script>

<style scoped>

  #box{
    width: 600px;
    margin: auto;
  }
</style>
