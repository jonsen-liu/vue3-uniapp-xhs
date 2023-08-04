<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
page {
  width: 100vw;
  min-height: 100vh;
}
.demo-page {
  background-color: #f7f8fa;
  padding-bottom: calc(50rpx + constant(safe-area-inset-bottom));
  padding-bottom: calc(50rpx + env(safe-area-inset-bottom));
}
</style>
