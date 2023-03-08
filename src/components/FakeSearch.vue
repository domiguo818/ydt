<script lang="ts" setup>
import { useRouter } from "vue-router";
import type { CSSProperties, PropType } from "vue";

defineProps({
  size: {
    type: Object as PropType<CSSProperties>,
  },
});

const router = useRouter();

const onSearch = () => {
  router.push("/search");
};
</script>

<template>
  <div class="rootsearch">
    <div class="on-search" :style="size" @click="onSearch">
      请输入要搜索的内容
    </div>
    <div class="right">搜索</div>
  </div>
</template>

<style lang="scss" scoped>
// 搜索
$design_width: 1440; //设计稿的宽度，根据实际项目调整
$design_height: 900; //设计稿的高度，根据实际项目调整

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
.rootsearch {
  display: flex;
  margin: 15vh auto 0 auto;
  // margin: 0 auto;
  justify-content: center;
}
.on-search {
  width: px2rem(792);
  height: px2rem(52);
  background: #ffffff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14),
    0px 6px 7px 0px rgba(161, 164, 177, 0.15);
  border-top-left-radius: px2rem(26);
  border-bottom-left-radius: px2rem(26);
  border: 1px solid #d7d5d5;
  // margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  color: rgb(134, 144, 156);
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background: rgb(229, 230, 235);
  }
}

.right {
  width: px2rem(108);
  height: px2rem(52);
  background: #3170fe;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.14),
    0px 6px 7px 0px rgba(161, 164, 177, 0.15);
  border-top-right-radius: px2rem(26);
  border-bottom-right-radius: px2rem(26);
  border: 1px solid #d7d5d5;
  // margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    // background: rgb(229, 230, 235);
  }
}
</style>
