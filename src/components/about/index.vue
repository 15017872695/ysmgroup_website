<template>
  <div id="about">
    <span class="animated " data-ani='bounceInLeft'>为什么要选择余氏集团</span>
    <span class="animated " data-ani='bounceInRight'>余氏集团旗下使用当前以及超前的前端技术，并包含有用的组件和小部件，以加快您的应用开发</span>
    <div>
      <img src="../../assets/img/H.png" alt />
      <img src="../../assets/img/icon-css.png" alt />
      <img src="../../assets/img/jQuery.png" alt />
      <img src="../../assets/img/vue.png" alt />
      <img src="../../assets/img/react.png" alt />
    </div>
    <div>
      <div  class="animated " data-ani='zoomInLeft'>
        <img src="../..//assets/img/figure-1.png" alt />
        <span>以模块化开发为中心</span>
        <span>定制 UX/UI 设计，以增强应用的用户体验。让 AppKit 负责设计，这样您就可以在没有设计资源的情况下进行开发。</span>
      </div>
      <div  class="animated " data-ani='zoomIn'>
        <img src="../..//assets/img/figure-2.png" alt />
        <span>增压式应用开发</span>
        <span>AppKit 为开发人员提供了现成的前端解决方案，因此您可以集中精力使应用的后端强大且令人敬畏。它使小团队能够创造出大事。</span>
      </div>
      <div  class="animated " data-ani='zoomInRight'>
        <img src="../..//assets/img/figure-3.png" alt />
        <span>移动优先</span>
        <span>建立在流行的引导框架，所以设计是"移动第一"和完全响应。对于初创公司来说，构建一个在移动设备中也工作的 HTML5 Webapp 是使产品起步的最经济高效的方法。</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  mounted() {},
  created() {},
  watch: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
#about {
  width: 100%;
  height: auto;
  background: #fff;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 3rem;
  box-sizing: border-box;
  span:nth-child(1) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  span:nth-child(2) {
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
  }
  div:nth-child(3) {
    display: flex;
    width: 30%;
    justify-content: space-around;
    margin-bottom: 0.5rem;
    img {
      width: 1rem;
      height: 1rem;
    }
  }
  div:nth-child(4) {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 30%;
      span:nth-child(2){
          font-size: 0.5rem;
          margin-top: 0.2rem;
          color: #40babd;
          font-weight: bold;
      }
      span:nth-child(3){
          font-size: 0.35rem;
          line-height: 0.45rem;
      }
    }
    div:nth-child(3){
        img{
            margin-top: 0.3rem;
        }
        span:nth-child(2){
            margin-top: 1.2rem;
        }
        span:nth-child(3){
          margin-top: 0.5rem;
        }
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
}
</style>