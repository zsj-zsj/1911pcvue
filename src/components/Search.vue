<template>
  <div class="micronews">
    <my-header ></my-header>

  <div class="micronews-container micronews-search-container w1000">
    <div class="layui-fluid">
      <p class="num">为您找到相关结果为<span> &nbsp;1770000&nbsp; </span>个</p>
      <div class="item-list">
        <div class="item">
          <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元 </a><span class="time">3小时前</span></h4>
          <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
        </div>
        <div class="item">
          <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元</a> <span class="time">3小时前</span></h4>
          <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
        </div>
        <div class="item">
          <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元</a> <span class="time">3小时前</span></h4>
          <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
        </div>
        <div class="item">
          <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元</a> <span class="time">3小时前</span></h4>
          <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
        </div>
        <div class="item">
          <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元 </a> <span class="time">3小时前</span></h4>
          <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
        </div>
        <div class="item">
          <h4><a href="details.html">AI人才抢夺"生猛":应届博士年薪涨到80万元 </a> <span class="time">3小时前</span></h4>
          <p>人工智能(AI)人才薪水之高、涨幅之大,颇有令人瞠目结舌之感。 一年前,针对AI领域的应届毕业生,硕士生约莫能拿到30万元的年薪,博士生则高达50万元。有企业给应届生的薪水拔高了10%~20%；也有企业上涨幅度更大，尤其是给博士生的薪水从去年的50万元年薪倏地蹿到80万元；也有准备布局AI领域的新锐企业</p>
        </div>
      </div>
      <div id="micronews-search-test" style="text-align: center; padding:30px 0"></div>
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

      }
    },
    components : {
      MyFooter : MyFooter,
      MyHeader : MyHeader,
    },
    methods : function () {

    },
    mounted() {
      layui.config({
        base: '@/assets/static/js/'
      }).use('index',function(){
        var index = layui.index;
        index.Page('micronews-search-test',50)
        index.omitted('.item p',150)
        index.seachBtn()
        index.arrowutil()
      });
    }
  }
</script>
