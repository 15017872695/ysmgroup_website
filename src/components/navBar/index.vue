<template>
  <header id="navBar" :class="isClass?'navActive':''" ref="stickyBox">
    <h1 class="logo">
      <a href>
        <span>
          <img src="../../assets/img/HTMLicon.png" class="logoImg" alt />
        </span>
        <span>余氏集团</span>
      </a>
    </h1>
    <div class="navList">
      <ul id="ul">
        <li
          :class="{active:selTab == index}"
          v-for="(item, index) in navList"
          :key="index"
          :data-id="item.id"
          @click="tabFun(index)"
        >
          <a class="listA">{{item.name}}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "navBar",
  props: ["navIndex"],
  data() {
    return {
      selTab: this.navIndex,
      navList: [
        { name: "主要成员", id: "1" },
        { name: "关于我们", id: "2" },
        { name: "发展历史", id: "3" },
        { name: "未来规划", id: "4" },
        { name: "产品展示", id: "5" },
        { name: "集团核心", id: "6" },
        { name: "联系我们", id: "7" }
      ],
      offsetTop: 0,
      isClass: false,
      curindex: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollx, true);
  },
  methods: {
    //   吸顶效果
    handleScrollx() {
      let _this = this;
      //   console.log("滚动高度", window.pageYOffset);
      //   console.log("距离顶部高度",this.$refs.stickyBox.getBoundingClientRect().top);
      this.isClass = window.pageYOffset > 50;
    },
    tabFun(i) {
      // 滚动导航的下标
      this.selTab = i;
      this.$emit("selectFun", i);
    }
  },
  watch: {
    navIndex(val) {
      this.selTab = val;
    }
  }
};
</script>

<style lang="scss" scoped>
#navBar {
  width: 100%;
  display: flex;
  height: 1.2rem;
  padding: 0 2rem;
  box-sizing: border-box;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 9999;
  transition: background 1s;
  .logoImg {
    width: 0.6rem;
    margin-right: 0.1rem;
  }
  .navList {
    width: 10rem;
    display: flex;
    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 0.28rem;
      font-weight: 800;
      li {
        border-bottom: 3px solid rgba(0, 0, 0, 0);
        padding-bottom:0.2rem;
        box-sizing: border-box;
        transition: 0.3s;
      }
      li:hover{
        border-bottom: 3px solid #40babd;
        cursor: pointer;
        a{
          color: #40babd !important;
        }
      }
    }
  }
}
.listA {
  color: #fff !important;
  opacity: 0.5;
}
.cur {
  color: #fff;
  opacity: 1;
  border-bottom: 3px solid orange;
}
.logo {
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.4rem;
    color: #fff;
    font-weight: 800;
    text-shadow: 3px 3px 0 rgba(42, 43, 42, 0.5);
  }
}
.navActive {
  background: #fff;
  box-shadow: 0 0 5px 5px #999;
  a {
    color: #2c3e50 !important;
    opacity: 1;
  }
}
</style>