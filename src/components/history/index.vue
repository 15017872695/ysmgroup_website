<!--  -->
<template>
  <div id="History">
    <div class="history_title">集团发展史</div>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
        <img :src="item" />
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 左右箭头 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "History",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      carouselArr: [require("../../assets/img/hero-1.jpg"),require("../../assets/img/hero-2.jpg"),require("../../assets/img/hero-3.jpg"),],
      imgIndex: 1,

      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,

        //循环
        loop: true,

        //设定初始化时slide的索引

        initialSlide: 0,

        //自动播放

        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },

        //滑动速度
        speed: 800,

        //滑动方向
        direction: "horizontal",

        //小手掌抓取滑动
        grabCursor: true,

        //滑动之后回调函数
        on: {
          slideChangeTransitionStart: function() {
            this.imgIndex = this.realIndex + 1; //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
          }
        },

        //分页器设置

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        }
      }
    };
  },

  //监听属性 类似于data概念
  computed: {},

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {},

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},

  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
#History {
  width: 100%;
  height: auto;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  box-sizing: border-box;
  .history_title{
      font-size: 0.8rem;
      margin-bottom:0.2rem;

  }
}
</style>