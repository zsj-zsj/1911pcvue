<template>
  <div id="class">
    <div class="micronews-header-wrap">
      <div class="micronews-header w1000 layui-clear">
        <h1 class="logo">
          <a href="index.html">
            <img src="@/assets/static/images/LOGO.png" alt="logo">
            <span class="layui-hide">LOGO</span>
          </a>
        </h1>
        <p class="nav">
<!--          <router-link :to="{name : 'Index'}" v-model="lessclass" class="active" style="cursor:pointer">最新</router-link>-->

          <a style="cursor:pointer;"  @click="cate(v.cate_id)" v-bind:class="{active:v.cate_id==addatyle}" v-for="(v,k) in list " > {{v.cate_name}} </a>
        </p>
        <div class="search-bar">
          <form class="layui-form" action="">
            <div class="layui-form-item">
              <div class="layui-input-block">
                <input type="text" name="title" placeholder="搜索你要的内容" autocomplete="off" class="layui-input">
                <button class="layui-btn search-btn"  formnovalidate><i class="layui-icon layui-icon-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div class="login">
          <router-link :to="{name : 'Login'}" style="cursor:pointer">登录</router-link>

         <router-link :to="{name : 'Reg'}" style="cursor:pointer">注册</router-link>
<!--           <a href="login.html">-->
<!--           <img src="@/assets/static/images/header.png" style="width: 36px; height: 36px;">-->
<!--           </a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "@/assets/layui/css/layui.css"
  import "@/assets/layui/layui.js"
  import "@/assets/static/css/main.css"
  import "@/assets/static/js/index.js"

  export default {
    name: 'HelloWorld',
    data () {
      return {
        list : [],
        addatyle: this.$route.query.id,
      }
    },
    methods :  {
      cate(cate_id){
        this.addatyle = cate_id
        if(this.addatyle == 1 ){
          this.$router.push({name: 'Index'})
          return
        }
        this.$router.push({name: 'List',query: {id: cate_id}})
      }
    },
    watch: {
      '$route'(to, from) {
        this.$router.go(0);
      },
    },
    mounted() {
      if(this.$route.query.id==undefined){
        this.addatyle = 1
      }
      this.$http.post('/api/api/cateNew', ).then((response) => {
        this.list = this.list.concat(response.body.data)
      }, (error) => {
        layui.layer.alert('勿刷接口请稍等');
      })
    }
  }
</script>
