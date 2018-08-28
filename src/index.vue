<template>
  <div class="wrapper">
    <image :src="logo" class="logo" />
      <img :src="logo"  class="logo">
    <text class="greeting">The environment is ready!The environment is ready!The environment is ready!The environment is ready!</text>
    <HelloWorld/><input type="text" class="textInput" placeholder="请输入点东西吧"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
var modal = weex.requireModule('modal')
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  created () {
    console.log('will show toast')
    modal.toast({
      message: '初始化成功。',
      duration: 5
    })
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
    lines:1
  }
  .textInput{
      height:80px;
      padding:10px;
      font-size:32px;
      width:750px;
      border-bottom-width:1px;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
