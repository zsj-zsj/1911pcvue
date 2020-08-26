<template>
  <div class="micronews">
    <my-header ></my-header>

  <div class="micronews-container micronews-list-container w1000">
    <h3>新闻</h3>
    <div class="layui-fluid">
      <div class="layui-row">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
          <div class="main">
            <div class="list-item" id="LAY_demo2">
              <div class="item" v-for="(v,k) in list">
                <a href="details.html">
                  <img :src="url+v.img" width="200px" height="100px">
                </a>
                <div class="item-info">
                  <h4>
                    <router-link :to="{name : 'Detail',query:{id:v.title_id}}" style="cursor:pointer"> <p>ID:{{v.title_id}}</p>{{v.title_name}}</router-link>
                  </h4>
                  <div class="b-txt">
                    <span class="label">{{v.cate_name}}</span>
                    <span class="icon message">
                      <i class="layui-icon layui-icon-dialogue"></i>
                      {{v.commont_count}}条
                    </span>
                    <span class="icon time">
                      <i class="layui-icon layui-icon-log"></i>
                      {{v.ctimessss}}
                    </span>
                  </div>
                </div>
              </div>
              <h2 class="layui-btn" v-if="has_more" @click="more">加载更多</h2>
              <h2 class="layui-btn" v-else>我也是有底线的</h2>
            </div>
          </div>
        </div>

        <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
          <div class="popular-info popular-info-tog">
            <div class="layui-card">
              <div class="layui-card-header">
                <h3>资讯推荐</h3>
              </div>
              <div class="layui-card-body">
                <ul class="list-box">
                  <a href="details.html"><img src="@/assets/static/images/news_img15.jpg" width="100%"> </a>
                  <li class="list">

                      <a href="details.html">南非金砖会议再造十年辉煌</a>

                  </li>
                  <li class="list">

                      <a href="details.html">中流击水 奋楫者进_中共十九大</a>

                  </li>
                  <li class="list">

                      <a href="details.html">你好！新时代_2018全国两会</a>

                  </li>
                  <li class="list">

                      <a href="details.html">“日销40万”外卖料包厂被曝光，制作过程令人作呕</a>

                  </li>
                  <a href="details.html"><img src="@/assets/static/images/news_img16.jpg" width="100%"></a>
                  <li class="list">

                      <a href="details.html">韩国送的200吨橘子该怎么分？</a>

                  </li>
                  <li class="list">

                      <a href="details.html">中流击水 奋楫者进_中共十九大</a>

                  </li>
                  <li class="list">

                      <a href="details.html">你好！新时代_2018全国两会</a>

                  </li>
                  <li class="list">

                      <a href="details.html">“日销40万”外卖料包厂被曝光，制作过程令人作呕</a>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <my-footer></my-footer>

  </div>
</template>

<script>
  import MyHeader from "@/components/public/Header";
  import MyFooter from "@/components/public/Footer";

  export default {
    name: 'HelloWorld',
    data () {
      return {
        list : [],
        url : 'http://newadmin.com',
        page : 1,
        has_more : true,
      }
    },
    components : {
      MyFooter : MyFooter,
      MyHeader : MyHeader,
    },
    methods :  {
      timeDate(time){
        let obj = new Date(time * 1000)
        let year = obj.getFullYear()
        let month = obj.getMonth()
        let day = obj.getDay()
        let hour = obj.getHours()
        if( hour < 10 ){
          hour = '' +0 +hour
        }
        let minutes = obj.getMinutes()
        let seconds = obj.getSeconds()
        return ''+year+'-'+month+'-'+day+' '+hour+':' +minutes+':' +seconds
      },
      more : function () {
        let id =this.$route.query.id
        let page =this.page
        this.$http.post('/api/api/cateTitle', {id:id,page:page}).then((response) => {
          this.page ++
          this.list = this.list.concat(response.body.data.data)
          if(response.body.data.data.length < 10){
            this.has_more = false
          }
        }, (error) => {
          // console.log(error)
          layui.layer.alert('勿刷接口请稍等');
        })
      }
    },
    watch : {
      list : function (val) {
        for (var i in val){
          this.list[i].ctimessss = this.timeDate(val[i].c_times)
        }
      }
    },
    mounted() {
      layui.config({
        base: '@/assets/static/js/'
      }).use('index',function(){
        var index = layui.index;
        // 模拟数据
        index.seachBtn()
        index.arrowutil()
      });

      let id =this.$route.query.id
      let page =this.page
      this.$http.post('/api/api/cateTitle', {id:id,page:page}).then((response) => {
        this.page ++
        this.list = this.list.concat(response.body.data.data)
      }, (error) => {
        // console.log(error)
        layui.layer.alert('勿刷接口请稍等');
      })
    }
  }
</script>
