<script lang="ts" setup>
import { IconList, IconDown, IconUser } from "@arco-design/web-vue/es/icon";
import YingYong from "../../assets/home/yingyong.png";
import ShuJu from "../../assets/home/shuju.png";
import MuLu from "../../assets/home/mulu.png";
import ZuJian from "../../assets/home/zujian.png";
import YunZiYuan from "../../assets/home/yunziyuan.png";
import AnQuan from "../../assets/home/anquan.png";
import XiangMu from "../../assets/home/xiangmu.png";
import { useRouter } from "vue-router";
import FakeSearch from "../../components/FakeSearch.vue";

const router = useRouter();

const onClick = () => {
  console.log(1);
  router.push("/specialTopicDatabase");
};

const optionList = [
  {
    img: YingYong,
    text: "应用",
    path: "/app",
    bg: "/src/assets/home/jx1.png",
    hgt: "232px",
    hover: "/src/assets/home/hover1.png",
    content: ["应用目录", "应用编目", "应用发布"],
    top: "230px",
  },
  {
    img: ShuJu,
    text: "数据",
    path: "/data",
    bg: "/src/assets/home/jx2.png",
    hgt: "212px",
    hover: "/src/assets/home/hover2.png",
    top: "210px",
  },
  {
    img: MuLu,
    text: "目录",
    path: "/list",
    bg: "/src/assets/home/jx3.png",
    hgt: "202px",
    hover: "/src/assets/home/hover3.png",
    top: "190px",
  },
  {
    img: ZuJian,
    text: "组件",
    path: "",
    bg: "/src/assets/home/jx4.png",
    hgt: "201px",
    hover: "/src/assets/home/hover4.png",
    top: "190px",
  },
  {
    img: YunZiYuan,
    text: "云资源",
    path: "",
    bg: "/src/assets/home/jx5.png",
    hgt: "202px",
    hover: "/src/assets/home/hover5.png",
    top: "190px",
  },
  {
    img: AnQuan,
    text: "安全",
    path: "/security",
    bg: "/src/assets/home/jx6.png",
    hgt: "212px",
    hover: "/src/assets/home/hover6.png",
    top: "210px",
  },
  {
    img: XiangMu,
    text: "项目",
    path: "/project",
    bg: "/src/assets/home/jx7.png",
    hgt: "232px",
    hover: "/src/assets/home/hover7.png",
    top: "230px",
  },
] as const;

const optionClick = (path: string): void => {
  if (path) {
    router.push(path);
  }
};
</script>

<template>
  <div class="root">
    <!-- 导航栏 -->
    <div id="menu">
      <div class="option">
        <a-dropdown trigger="hover">
          <a-button type="text">
            <icon-list />
            快捷菜单
            <icon-down />
          </a-button>
          <template #content>
            <a-doption>数据目录</a-doption>
            <a-doption @click="onClick"> 专题库 </a-doption>
            <a-doption>数据全生命周期</a-doption>
            <a-doption>项目全生命期</a-doption>
          </template>
        </a-dropdown>

        <!-- <div class="user">
          提交工单
          <icon-user />
          xxxxxx
        </div> -->
      </div>
    </div>

    <!-- 标题 -->
    <h1 class="title">临安区一体化智能化公共数据平台</h1>
    <h6 class="title2">LIN'AN INTEGRATED INTELLIGENT PUBLIC DATA PLATFORM</h6>

    <FakeSearch />

    <!-- 选项列表 -->
    <div id="option-bpx">
      <div v-for="(item, index) in optionList" :key="index" class="bigbox">
        <div
          class="option-item"
          @click="optionClick(item.path)"
          :style="{
            background: `url(${item.bg}) no-repeat`,
            backgroundSize: '100%',
            height: `${item.hgt}`,
          }"
        >
          <img class="option-img" :src="item.img" />
          <h3 class="option-text">{{ item.text }}</h3>
        </div>

        <div
          class="hoverbox"
          :style="{
            background: `url(${item.hover})`,
            backgroundSize: '100%',
            top: `${item.top}`,
          }"
        >
          <span v-for="c in item.content" :key="c">{{ c }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$design_width: 720; //设计稿的宽度，根据实际项目调整
$design_height: 450; //设计稿的高度，根据实际项目调整

@function px2rem($px) {
  $design_font_size: 12;
  @return ($px/$design_font_size) + rem;
}
.screen-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: aqua;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .screen {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: px2rem($design_width);
    height: px2rem($design_height);
    background: pink;
    .section {
      height: px2rem(200);
      width: px2rem(200);
      border: 1px solid #000;
      line-height: px2rem(200);
      font-size: px2rem(100);
      margin: px2rem(20);
      text-align: center;
      display: inline-block;
    }
  }
}
.root {
  background: url("../../assets/home/20230220-175159.jpg") no-repeat;

  background-size: 100% 100%;
  // width: px2rem(720);
  height: 100vh;
  // background-attachment: fixed;
}
#menu {
  height: 60px;
  // background: #ffffff;
  // border-bottom: 1px solid #eee;
  position: relative;
  display: flex;
  align-items: center;

  .option {
    position: absolute;
    // margin: auto;
    display: inline-flex;
    justify-content: flex-end;
    width: 800px;
    align-items: center;
    right: px2rem(100);
    // left: 0;
    // margin: auto;

    .a-dropdown {
      font-size: 17px;
      cursor: pointer;
    }
  }
}

.title {
  font-size: 32px;
  text-align: center;
  // margin-top: 100px;
  color: #ffffff;
  margin-bottom: 10px;
}
.title2 {
  // font-size: 32px;
  text-align: center;
  font-weight: 200;
  // margin-top: 100px;
  color: #ffffff;
  margin-bottom: 40px;
}

#option-bpx {
  width: 70vw;
  margin: 5vh auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  user-select: none;
  .bigbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    &:hover .hoverbox {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hoverbox {
      position: absolute;
      // top: px2rem(170);
      display: none;
      padding: 30px 0;
      width: px2rem(110);
      height: px2rem(100);
      background: url("../../assets/home/hover1.jpg");
      span {
        margin-bottom: 10px;
      }
    }
    .option-item {
      width: px2rem(147);
      height: px2rem(142);

      // background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      margin-right: 10px;
      .option-img {
        width: px2rem(48);
      }

      .option-text {
        margin-top: 10px;
        color: #333;
      }
    }
  }
}
.arco-btn-text,
.arco-btn-text[type="button"],
.arco-btn-text[type="submit"] {
  color: #ffffff;
  background-color: transparent;
  border: 1px solid transparent;
}
</style>
