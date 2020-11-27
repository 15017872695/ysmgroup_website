<template>
  <div id="theMainMembers">
    <div class="theMainMembers_Wapper">
      <h1 class="theMainMembers_name">核心成员</h1>
      <h3 class="theMainMembers_userInfo">未来塑造者</h3>
      <div
        class="theMainMembers_Info"
      >余氏集团是由周志佳和余洪全以及陈俊杰创造的。周志佳、余洪全、陈俊杰是在学校时认识的，成了好朋友。他们坚信，有了合适的资源，独奏家和小团队也能执行漂亮的产品。因此，他们制作了余氏集团来帮助开发商和初创公司制作出色的产品——互联网使得"小家伙"能够直接与"大人物"竞争。</div>
      <div class="theMainMembers_userList">
        <div class="animated" data-ani="bounceInLeft">
          <img class="userImg" src="../../assets/img/zhouzhijia.jpg" alt />
          <span class="List_name">周志佳</span>
          <span class="List_zhiwei">副总裁/技术总监</span>
          <p>
            <img src="../../assets/img/QQ.png" alt />
            <img src="../../assets/img/weix.png" alt />
            <img src="../../assets/img/githubb.png" alt />
          </p>
          <span
            class="List_info"
          >周志佳是余氏集团背后的前端开发工程师/董事长。他喜欢为开发人员和初创公司设计和制作 Bootstrap 主题/模板。你可以找到她分享有用的UX和Webdev相关内容。跟着她，如果你喜欢她做什么！</span>
        </div>
        <div class="animated" data-ani="bounceIn">
          <img class="userImg" src="../../assets/img/yuhongquan.jpg" alt />
          <span class="List_name">余洪全</span>
          <span class="List_zhiwei">董事长</span>
          <p>
            <img src="../../assets/img/QQ.png" alt />
            <img src="../../assets/img/weix.png" alt />
            <img src="../../assets/img/githubb.png" alt />
          </p>
          <span
            class="List_info"
          >余洪全是余氏集团背后的前端开发工程师/董事长。他喜欢为开发人员和初创公司设计和制作 Bootstrap 主题/模板。你可以找到她分享有用的UX和Webdev相关内容。跟着她，如果你喜欢她做什么！</span>
        </div>
        <div class="animated" data-ani="bounceInRight">
          <img class="userImg" src="../../assets/img/chenjunjie.jpg" alt />
          <span class="List_name">陈俊杰</span>
          <span class="List_zhiwei">副总裁/项目经理</span>
          <p>
            <img src="../../assets/img/QQ.png" alt />
            <img src="../../assets/img/weix.png" alt />
            <img src="../../assets/img/githubb.png" alt />
          </p>
          <span
            class="List_info"
          >陈俊杰是余氏集团背后的前端开发工程师/董事长。他喜欢为开发人员和初创公司设计和制作 Bootstrap 主题/模板。你可以找到她分享有用的UX和Webdev相关内容。跟着她，如果你喜欢她做什么！</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "theMainMembers",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  watch: {},
  computed: {},
  destroyed() {}
};
</script>
<style lang="scss" scoped>
#theMainMembers {
  width: 100%;
  height: auto;
  background: rgb(245, 245, 245);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #2c3e50;
  padding: 2rem 0;
  box-sizing: border-box;
  .theMainMembers_Wapper {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .theMainMembers_name {
      font-size: 0.7rem;
      font-weight: bold;
      margin-bottom: 0.2rem;
    }
    .theMainMembers_userInfo {
      font-size: 0.4rem;
      margin-bottom: 1rem;
    }
    .theMainMembers_Info {
      font-size: 0.4rem;
      line-height: 0.6rem;
    }
    .theMainMembers_userList {
      width: 100%;
      display: flex;
      height: auto;
      margin-top: 1rem;
      justify-content: space-around;
      flex-wrap: wrap;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        width: 6.2rem;
        height: 100%;
        border-radius: 0.3rem;
        padding: 0 0.2rem;
        box-sizing: border-box;
        transition: 0.5s;
        margin-bottom: 0.2rem;
        padding-bottom: 0.5rem;
        .userImg {
          margin-top: 1rem;
        }
        .List_name {
          font-size: 0.5rem;
          font-weight: bold;
          color: rgb(64, 186, 189);
          margin: 0.3rem;
        }
        .List_zhiwei {
          margin-bottom: 0.5rem;
        }
        .List_info {
          font-size: 0.3rem;
          line-height: 0.4rem;
        }
        img {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        p {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          margin-bottom: 1rem;
          img {
            width: 0.8rem;
            height: 0.8rem;
            margin-right: 0.2rem;
          }
        }
      }
      div:hover {
        box-shadow: 0 0 10px 10px #ccc;
        cursor: pointer;
      }
    }
  }
}
</style>