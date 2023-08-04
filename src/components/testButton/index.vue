<script lang="ts" setup>
const emits = defineEmits<{
  (e: 'test'): void
}>()

const handleClick = () => {
  console.log('点击了')
  emits('test')
}
</script>

<template>
  <view
    @click="handleClick"
    class="test"
  >
    点我
  </view>
</template>

<style lang="scss" scoped>
.test {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  border-radius: 10rpx;
  border: 1rpx solid #ccc;
  box-sizing: border-box;
}
</style>
