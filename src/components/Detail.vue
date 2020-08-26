<template>
  <div class="micronews">
    <my-header ></my-header>

  <div class="micronews-container micronews-details-container w1000">
    <div class="layui-fluid">
      <div class="layui-row">
        <div class="layui-col-xs12 layui-col-sm12 layui-col-md8">
          <div class="main" v-for="(v,k) in list">
            <div class="title">
              <h3> ID: {{v.title_id}} {{v.title_name}}</h3>
              <div class="b-txt">
                <span class="label">{{v.cate_name}}</span>
                <a href="#message">
                <span class="icon message" >
                  <i class="layui-icon layui-icon-dialogue"></i>
                  <b>{{v.commont_count}}</b>条
                </span>
                </a>
                <span class="icon time">
                  <i class="layui-icon layui-icon-log"></i>
                  {{v.c_timess}}
                </span>
              </div>
            </div>
            <div class="article" >
              <p>{{v.title_detail}}</p>
              <div class="img-box"><img :src="url+v.img" width="500px" height="500px"></div>
              <div class="share-title">
                <span class="txt">分享:</span>
                <a href="#">
                  <i class="icon layui-icon layui-icon-login-wechat"></i>
                </a>
                <a href="#">
                  <i class="icon layui-icon layui-icon-login-weibo"></i>
                </a>
                <a href="#">
                  <i class="icon layui-icon layui-icon-login-qq"></i>
                </a>
                <button class="layui-btn Collection">
                  ❤<span>已收藏</span>
                </button>
              </div>
            </div>
            <div class="leave-message" id="message">
              <div class="tit-box">
                <span class="tit">网友跟帖</span>
                <span class="num"><b>500</b>条</span>
              </div>
              <div class="content-box">
                <div class="tear-box">
                  <a href="#"><img src="@/assets/static/images/header_img1.png"></a>
                  <form class="layui-form">
                    <div class="layui-form-item layui-form-text">
                      <div class="layui-input-block">
                        <textarea id="onInput" v-model="p_text" placeholder="请输入内容" class="layui-textarea"></textarea>
                      </div>
                    </div>
                    <div class="layui-form-item">
                      <div class="layui-input-block" style="text-align: right;">
                        <div class="message-text">
                          <div class="txt">

                          </div>
                        </div>
                        <button type="button" @click="publish" class="layui-btn micronews-details-Publish">发表</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="ulCommentList">
                  <div class="liCont" v-for="(v,k) in publishList">
                    <a href="#"><img src="@/assets/static/images/header_img1.png"></a>
                    <div class="item-cont" >
                      <div class="cont">
                        <p><span class="name">{{v.user_name}}</span><span class="time">{{v.p_time}}————发布</span></p>
                        <p class="text">{{v.p_text}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 class="layui-btn" v-if="has_more == 1" @click="add">加载更多</h2>
                <h2 class="layui-btn" v-else-if="has_more == 2" >暂无评论</h2>
                <h2 class="layui-btn" v-else >我也是有底线的</h2>
                <div id="micronews-details-test" style="text-align: center;"></div>
              </div>
            </div>
          </div>
        </div>


        <!-- 留言模版引擎 -->

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

                <a href="#">南非金砖会议再造十年辉煌</a>

              </li>
              <li class="list">

                <a href="#">中流击水 奋楫者进_中共十九大</a>

              </li>
              <li class="list">

                <a href="#">你好！新时代_2018全国两会</a>

              </li>
              <li class="list">

                <a href="#">“日销40万”外卖料包厂被曝光，制作过程令人作呕</a>

              </li>
              <a href="details.html"><img src="@/assets/static/images/news_img16.jpg" width="100%"></a>
              <li class="list">

                <a href="#">韩国送的200吨橘子该怎么分？</a>

              </li>
              <li class="list">

                <a href="#">中流击水 奋楫者进_中共十九大</a>

              </li>
              <li class="list">

                <a href="#">你好！新时代_2018全国两会</a>

              </li>
              <li class="list">

                <a href="#">“日销40万”外卖料包厂被曝光，制作过程令人作呕</a>

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
  import Common from "@/mixin/Common";
  export default {
    name: 'HelloWorld',
    mixins: [ Common ],
    data () {
      return {
        list : [],
        publishList : [],
        url : 'http://newadmin.com',
        p_text : '',
        has_more : 1,
        page : 1,
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
      publish : function () {
        let uid = this.getUser()
        let p_text = this.p_text
        let title_id =this.$route.query.id
        this.$http.post('/api/api/publish', {uid:uid,p_text:p_text,title_id:title_id}).then((response) => {
            if(response.body.status != 200){
              layui.layer.alert(response.body.msg);
            }else{
              this.has_more = 1
              layui.layer.alert('评论成功');
              this.p_text = ''

            }
        })
      },
      add : function () {
        let id =this.$route.query.id
        this.$http.post('/api/api/publishList', {id:id,page:this.page}).then((response) => {
          this.page ++
          this.publishList = this.publishList.concat(response.body.data.data)
          if(response.body.data.data.length < 3){
            this.has_more = 3
          }
        })
      }
    },
    watch : {
      list : function (val) {
        for (var i in val){
          this.list[i].c_timess = this.timeDate(val[i].c_times)
        }
      },

    },
    mounted() {
      let id =this.$route.query.id
      this.$http.post('/api/api/newDetail', {id:id}).then((response) => {
        this.list = this.list.concat(response.body.data)
      }, (error) => {
        layui.layer.alert('勿刷接口请稍等');
      })
      
      this.$http.post('/api/api/publishList', {id:id,page:this.page}).then((response) => {
        this.page ++
        this.publishList = this.publishList.concat(response.body.data.data)
        if(this.publishList .length == 0){
          this.has_more = 2
        }
      })

    }
  }
</script>
