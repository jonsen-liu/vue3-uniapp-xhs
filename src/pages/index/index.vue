<script lang="ts" setup>
import { ref } from 'vue'
import { useMainStore } from '@/store/main'

import testButton from '../../components/testButton/index.vue'

const mainStore = useMainStore()

const num = ref(0)

const clickButton = () => {
  mainStore.increment()
  num.value++
}
</script>

<template>
  <view class="demo-page">
    <button @click="clickButton">123123</button>
    <testButton @test="clickButton"></testButton>
    <view class="demo-title__center">
      <view>pinia count {{ mainStore.count }}</view>
      <view>pinia double {{ mainStore.double }}</view>
      <view>ref num {{ num }}</view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.demo-title__center {
  font-size: 28rpx;
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20rpx;
  box-sizing: border-box;
}
</style>
