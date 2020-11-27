<template>
  <div id="Home">
    <navBar @selectFun="scrollTo" :navIndex="tabIndex"></navBar>
    <div class="contaner">
      <!-- 背景视频模块 -->
      <div class="homepage-hero-module">
        <div class="video-container">
          <div :style="fixStyle" class="filter"></div>
          <video muted :style="fixStyle" autoplay loop class="fillWidth" v-on:canplay="canplay">
            <source src="../assets/img/触摸灯.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
            <source src="../assets/img/触摸灯.mp4" type="video/webm" />浏览器不支持 video 标签，建议升级浏览器。
          </video>
          <div class="poster hidden" v-if="!vedioCanPlay">
            <img :style="fixStyle" src="../assets/img/sp94ls.jpg" alt />
          </div>
        </div>
        <div class="viedo-Fixed">
          <span class="animated" data-ani='bounceInLeft'>铸科技之典范、行世间之风采</span>
          <span class="animated" data-ani='bounceInRight'>《用 “科技” 创造未来》</span>
          <span class="rightan">滑动查看更多</span>
          <img src="../assets/img/xia.png" alt />
        </div>
      </div>

      <!-- 主题内容模块 -->
      <div id="js-content">
        <!-- 主要成员列表模块 -->
        <the-Main-Members class="loucen"></the-Main-Members>
        <!-- 关于我们模块 -->
        <about class="loucen"></about>
        <!-- 发展历史模块 -->
        <history class="loucen"></history>
        <!-- 联系我们模块 -->
        <contact-Us class="loucen"></contact-Us>

      </div>
    </div>
  </div>
</template>

<script>
import navBar from "../components/navBar";
import theMainMembers from "../components/theMainMembers";
import about from "../components/about";
import contactUs from "../components/contactUs";
import history from "../components/history";
export default {
  name: "Home",
  data() {
    return {
      vedioCanPlay: false,
      fixStyle: "",
      tabIndex: 0 // 导航下标
    };
  },
  components: { navBar, theMainMembers,about, contactUs, history},
  created() {},
  methods: {
    canplay() {
      this.vedioCanPlay = true;
    },
    dataScroll() {
      // 滚动页面
      const navContents = document.querySelectorAll(".loucen");
      const offsetTopArr = [];
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop);
      });
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      let st = scrollTop; // + document.querySelector('.header_box').offsetHeight;
      let navIndex = 0;
      for (let i = 0; i < offsetTopArr.length; i++) {
        if (st >= offsetTopArr[i]) {
          navIndex = i;
        }
      }
      this.tabIndex = navIndex;
      
    },

    scrollTo(index) {
      console.log(index)
      // 点击导航
      const targetOffsetTop = document.querySelector(
        `.loucen:nth-child(${index + 1})`
      ).offsetTop;
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      const STEP = 50;
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp();
      } else {
        // 往下滑
        smoothDown();
      }
      function smoothDown() {
        // 下滑函数
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          let st = scrollTop; // - document.querySelector('.header_box').offsetHeight
          document.body.scrollTop = st;
          document.documentElement.scrollTop = st;
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown);
        }
      }

      function smoothUp() {
        // 上滑函数
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          let st = scrollTop; // - document.querySelector('.header_box').offsetHeight
          document.body.scrollTop = st;
          document.documentElement.scrollTop = st;
          requestAnimationFrame(smoothUp);
        }
      }
    },
    handleAnimate() {
      let top =
        pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let vh = document.documentElement.clientHeight;
      let dom = document.querySelectorAll(".animated");
      [].slice.call(dom).forEach(v => {
        if (top + vh > v.offsetTop) {
          var delay = v.dataset.delay;
          if (delay) {
            setTimeout(() => {
              v.style.opacity = 1;
              v.classList.add(v.dataset.ani);
            }, delay);
          } else {
            v.style.opacity = 1;
            v.classList.add(v.dataset.ani);
          }
        } else {
          v.classList.remove(v.dataset.ani);
          v.style.opacity = 0;
        }
      });
    }
  },
  mounted: function() {
    
    window.addEventListener("scroll", this.dataScroll, false); // 监听页面滚动事件

    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      const windowAspectRatio = windowHeight / windowWidth;
      let videoWidth;
      let videoHeight;
      if (windowAspectRatio < 0.5625) {
        videoWidth = windowWidth;
        videoHeight = videoWidth * 0.5625;
        this.fixStyle = {
          height: windowWidth * 0.5625 + "px",
          width: windowWidth + "px",
          "margin-bottom": (windowHeight - videoHeight) / 2 + "px",
          "margin-left": "initial"
        };
      } else {
        videoHeight = windowHeight;
        videoWidth = videoHeight / 0.5625;
        this.fixStyle = {
          height: windowHeight + "px",
          width: windowHeight / 0.5625 + "px",
          "margin-left": (windowWidth - videoWidth) / 2 + "px",
          "margin-bottom": "initial"
        };
      }
    };
    window.onresize();

    this.$nextTick(() => {
      this.handleAnimate(); //初始化第一次加载时在视口内就执行动画
      addEventListener("scroll", this.handleScroll);
      addEventListener("scroll", this.handleAnimate);
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this.dataScroll);
    removeEventListener("scroll", this.handleScroll); //避免影响其他页面
    removeEventListener("scroll", this.handleAnimate);
  }
};
</script>

<style lang="scss" scoped>
#Home {
  width: 100%;
  height: 100%;
  .contaner {
    width: 100%;
    height: auto;
  }
}

.homepage-hero-module,
.video-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.viedo-Fixed {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  left: 0;
  top: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.viedo-Fixed > span:nth-child(1) {
  font-size: 0.6rem;
}
.viedo-Fixed > span:nth-child(2) {
  font-size: 0.5rem;
  margin-top: 0.5rem;
}
.viedo-Fixed img {
  position: absolute;
  bottom: 1.5rem;
}

.video-container .poster img,
.video-container video {
  z-index: 0;
  position: absolute;
}

.video-container .filter {
  z-index: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
}

.rightan {
  -webkit-animation: rightan 1s infinite;
  -webkit-animation-fill-mode: both;
  position: absolute;
  margin-bottom: 2.5rem;
  display: flex;
  width: 2rem;
  font-size: 0.25rem;
  justify-content: center;
  align-items: center;
}

/*箭头动画*/
@-webkit-keyframes rightan {
  from {
    bottom: 2%;
    opacity: 0;
  }
  to {
    bottom: 0%;
    opacity: 1;
  }
}

.bounceInLeft{
	animation: bounceInLeft 2s ease-in;
 }
 .bounceInRight{
	animation: bounceInRight 2s ease-in;
 }
 .bounceIn{
	animation: bounceIn 2s ease-in;
 }
 .zoomInLeft{
	animation: zoomInLeft 2s ease-in;
 }
 .zoomIn{
	animation: zoomIn 2s ease-in;
 }
 .zoomInRight{
	animation: zoomInRight 2s ease-in;
 }
</style>
