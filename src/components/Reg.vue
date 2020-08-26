<template>
  <div class="micronews">
    <my-header ></my-header>

    <div class="micronews-login-container">
      <div class="form-box">
        <h3>注册</h3>
        <div class="wrap">
          <div class="layui-form"> <!-- 提示：如果你不想用form，你可以换成div等任何一个普通元素 -->
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" v-model="user_name"  id="name" placeholder="请输入用户名" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" v-model="pwd"  id="password" placeholder="请输入密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="password" v-model="pwds"   placeholder="确认密码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" v-model="imgCode"  placeholder="请输入图片验证码" autocomplete="off" class="layui-input">
                <img @click="getImg()"  :src="srcCodeImg">
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text"  v-model="mobile"  placeholder="请输入手机号" autocomplete="off" class="layui-input">
                <input  v-if="is_send==0" type="button" id="veriCodeBtn" @click="sendcode()" value="获取验证码" class="obtain layui-btn">
                <button v-else type="button" class="layui-btn">{{time}}秒后重新获取</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" v-model="mobileCode"  id="phone" placeholder="请输入手机验证码" autocomplete="off" class="layui-input">
              </div>
            </div>
            <div class="layui-form-item agreement">
              <div class="layui-input-block">
                <input type="checkbox" name="like1[write]" @click="check()" v-model="dis"  lay-skin="primary" title="我已阅读并同意" >
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <button class="layui-btn"  lay-submit lay-filter="*" @click="but()"  onclick="return false">注册</button>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                <router-link :to="{name : 'Login'}" class="layui-btn" style="cursor:pointer">去登录</router-link>
              </div>
            </div>
          </div>
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
        pwds : '',
        mobile : '',
        mobileCode : '',
        is_send : 0,
        time : 60,
        dis : false,
        imgCode : '',
        srcCodeImg : '',
        sid : '',
        reg_type : 1,
      }
    },
    components : {
      MyHeader : MyHeader,
    },
    methods : {
      getImg(){
        this.srcCodeImg = this.srcCodeImg + '&rand='+Math.random()
      },
      sendcode : function(){
        if(this.mobile == ''){
          layui.layer.alert('请输入手机号')
          return
        }
        // let reg = /^1[3|6|9|8]\d{9}$/
        let reg = /^1{1}\d{10}$/
        if(!reg.test(this.mobile)){
          layui.layer.alert('手机号格式不对')
          return
        }
        if(this.imgCode == ''){
          layui.layer.alert('请输入图片验证码')
          return;
        }
        this.$http.post('/api/api/sendModile', {mobile:this.mobile,sid:this.sid,imgCode:this.imgCode,type:this.reg_type}).then((response) => {
          if(response.body.status != 200){
            layui.layer.alert(response.body.msg);
            return false
          }else{
            this.getImg()
            this.is_send = 1
            this.flushTime()
            this.time = 60
          }
        }, (error) => {
          console.log(error)
        })

      },
      flushTime:function(){
        let that = this;
        let intval = setInterval( function(){
          that.time--;
          if( that.time < 1 ){
            that.is_send = 0
            that.time = '获取验证码'
            clearInterval(intval)
          }
        } , 1000);
      },
      but(){
        if(this.user_name == ''){
          layui.layer.alert('请输入用户名')
            return
        }
        if(this.pwd == ''){
          layui.layer.alert('请输入密码')
          return
        }
        if(this.pwd.length<6){
          layui.layer.alert('密码长度不够')
          return
        }
        if(this.pwd != this.pwds ){
          layui.layer.alert('密码不一致')
          return
        }
        if(this.mobile == ''){
          layui.layer.alert('请输入手机号')
          return
        }
        let reg = /^1{1}\d{10}$/
        if(!reg.test(this.mobile)){
          layui.layer.alert('手机号格式不对')
          return
        }
        if(this.mobileCode == ''){
          layui.layer.alert('请输入验证码')
          return
        }
        this.$http.post('/api/api/reg', {user_name: this.user_name,
          pwd : this.pwd,
          pwds : this.pwds,
          mobile:this.mobile,
          reg_type : this.reg_type,
          mobileCode:this.mobileCode}).then((response) => {
            if(response.body.status != 200){
                layui.layer.alert(response.body.msg)
            }else{
              // layui.layer.alert('注册成功')
              this.$router.push({name: 'Login'})
            }
        }, (error) => {
          console.log(error)
        })
      },
    },
    mounted() {
      this.$http.post('/api/api/getImgCodeUrl').then(success=>{
        this.srcCodeImg = success.body.data.url
        this.sid = success.body.data.sid
      },error=>{
        layui.layer.alert('图片请求失败')
      })

      layui.config({
        base: '@/assets/static/js/'
      }).use('index',function(){
        var index = layui.index;
        index.banner()
        index.seachBtn()
        index.arrowutil()
      });
      this.getImg()
    }
  }
</script>
