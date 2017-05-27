<template>
  <div id="app">
    <img src="./assets/logo.png" style="width: 20%">
    <br><br>
    <div>
      <MarqueeTips content="我是一个短短的提示！"></MarqueeTips>
      <br>
      <MarqueeTips content="我是一个比较长的提示！拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧~~~~" style="color: red"
                   :speed="3"></MarqueeTips>
      <br>
      <MarqueeTips content="加大字体提示：BigBigBigBig" style="font-size: 30px"
                   font="30px sans-serif"></MarqueeTips>
      <br>
      <div class="room">
        <MarqueeTips content="容器内提示：22222222222222222" :speed="3"></MarqueeTips>
        <br>
        <MarqueeTips content="容器内提示：1111"></MarqueeTips>
      </div>
    </div>
  </div>
</template>

<script>
  import MarqueeTips from './components/MarqueeTips.vue'

  export default {
    name: 'app',
    components: {
      MarqueeTips
    },
    data () {
      return {}
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .room {
    width: 200px;
    margin: 0 auto;
    background-color: orange;
  }
</style>
