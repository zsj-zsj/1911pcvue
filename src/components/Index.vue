<template>
  <div class="micronews">


    <my-header ></my-header>


    <div class="layui-fulid micronews-banner w1000">
    <div class="layui-carousel imgbox" id="micronews-carouse">
      <div carousel-item>
        <div>
          <p class="title">去南非旅行需要做什么准备</p>
          <a href="list.html"><img src="@/assets/static/images/news_img1.jpg"></a>
        </div>
        <div>
          <p class="title">去南非旅行需要做什么准备</p>
          <a href="list.html"><img src="@/assets/static/images/news_img1.jpg"></a>
        </div>
      </div>
    </div>
  </div>


  <div class="micronews-container w1000">
    <div class="layui-fluid">
      <div class="layui-row">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
          <div class="main">
            <div class="list-item" id="LAY_demo2" v-for="(v,k) in list">
              <div class="item">
                <a href="details.html">
                <img :src="url+v.img" width="200px" height="100px">
                </a>
                <div class="item-info">
                  <h4><router-link :to="{name : 'Detail',query:{id:v.title_id}}" style="cursor:pointer"> <p>ID:{{v.title_id}}</p>{{v.title_name}}</router-link></h4>
                  <div class="b-txt">
                    <span class="label">{{v.cate_name}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md4">
          <div class="popular-info">
            <div class="layui-card">
              <div class="layui-card-header">
                <h3>热门资讯</h3>
              </div>
              <div class="layui-card-body">
                <ul class="list-box">
                  <li class="list">

                     <a href="list.html">你和我的倾城时光</a><i class="heat-icon"></i>

                  </li>
                  <li class="list">

                     <a href="list.html">顶级酒店内幕被曝光</a><i class="heat-icon"></i>

                  </li>
                  <li class="list">

                     <a href="list.html">王思聪抽奖</a><i class="heat-icon"></i>

                  </li>
                  <li class="list">

                     <a href="list.html">王者荣耀上官婉儿</a>

                  </li>
                  <li class="list">

                     <a href="list.html">妻子的浪漫旅行</a>

                  </li>
                  <li class="list">

                     <a href="list.html">海底捞回应员工偷拍</a>

                  </li>
                  <li class="list">

                     <a href="list.html">扎克伯格禁止高管用iPhone</a>

                  </li>
                  <li class="list">

                     <a href="list.html">王思聪抽手机壳送手机</a>

                  </li>
                  <li class="list">

                     <a href="list.html">每天闹钟20次提醒男友抽奖 </a>

                  </li>
                  <li class="list">

                      <a href=list.html#">詹姆斯收藏比赛用球</a>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <my-footer title=""></my-footer>

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
      url : 'http://newadmin.com'
    }
  },
  components : {
    MyFooter : MyFooter,
    MyHeader : MyHeader,
  },
  methods :  {

  },
  mounted() {
    layui.use('index',function(){
      var index = layui.index;
      index.banner()
      index.seachBtn()
      index.arrowutil()
    });
    this.$http.post('/api/api/descIndex',).then((response) => {
      // console.log(response)
      this.list = this.list.concat(response.body.data)
    }, (error) => {
      layui.layer.alert('勿刷接口请稍等');
    })

  }
}
</script>
