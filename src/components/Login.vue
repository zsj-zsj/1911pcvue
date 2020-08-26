<template>
  <div class="micronews">
    <my-header ></my-header>
    <div class="micronews-login-container">
      <div class="form-box">
        <h3>登录</h3>
        <div class="wrap">
          <form class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="" v-model="user_name" placeholder="请输入用户名或手机号" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" name="" v-model="pwd"  placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="*" @click="but" onclick="return false">登录</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <router-link :to="{name : 'Reg'}" class="layui-btn" style="cursor:pointer">去注册</router-link>
              </div>
            </div>
            <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyHeader from "@/components/public/Header";
  export default {
    name: 'HelloWorld',
    data () {
      return {
        user_name : '',
        pwd : '',
        tt : 1
      }
    },
    components : {
      MyHeader : MyHeader,
    },
    methods : {
      but(){
        if(this.user_name == ''){
          layui.layer.alert('请输入手机号或用户名')
          return
        }
        if(this.pwd == ''){
          layui.layer.alert('请输入密码')
          return
        }
        this.$http.post('/api/api/login', {user_name:this.user_name,pwd:this.pwd,tt:this.tt}).then((response) => {
          if(response.body.status != 200 ){
            layui.layer.alert(response.body.msg)
          }else{
            // layui.layer.open({
            //   type : 0,
            //   content : '登录成功',
            //   shade : [0.5 , '#393D49' ],
            // })
            sessionStorage.setItem('uid', response.body.data.user_id)
            this.$router.push({name: 'Index'})
          }
        }, (error) => {
          console.log(error)
        })
      },
    },
    mounted() {
      layui.config({
        base: '@/assets/static/js/'
      }).use('index',function(){
        var index = layui.index;
        index.banner()
        index.seachBtn()
        index.arrowutil()
      });
    }
  }
</script>
