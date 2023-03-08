<script lang="ts" setup>
  import type { optionListArrayInterface } from '../interface'
  import type { PropType } from 'vue'
  import { useRouter } from 'vue-router'
  import FakeSearch from './FakeSearch.vue'

  const router = useRouter()

  defineProps({
    optionList: {
      type: Array as PropType<optionListArrayInterface[]>,
      required: true
    }
  })

  const goLink = (target: optionListArrayInterface): void => {
    console.log(target)

    if (target.url && target.title === 'IRS目录') {
      router.push(target.url)
    }
  }
</script>

<template>
  <div id="HeaderBanner">
    <div class="HeaderBanner-background">
      <FakeSearch :size="{ width: '400px', height: '32px' }" />

      <ul class="option-ul">
        <li
          class="option-item"
          v-for="(item, index) in optionList"
          :key="index"
          @click="goLink(item)"
        >
          <img class="option-img" :src="item.img" />
          <p class="option-title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #HeaderBanner {
    width: 800px;
    margin: auto;
    background: rgb(244, 246, 248);
    min-height: 100vh;

    .HeaderBanner-background {
      width: 100%;
      height: 240px;
      background: url('../assets/app/blue_bg_img.png') no-repeat;
      background-size: 100% 240px;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .option-ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
        .option-item {
          width: 80px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .option-img {
            width: 40px;
          }
          .option-title {
            margin-top: 10px;
            color: #fff;
          }
        }
      }
    }
  }
</style>
