<template>
  <div>
    <input type="radio" id="one" :value="1" v-model="picked">
    <label for="one">又短又慢的提示</label>
    <br>
    <input type="radio" id="two" :value="2" v-model="picked">
    <label for="two">又长又快的提示</label>
    <br><br><br>
    <MarqueeTips content="我是一个短短的提示！" v-if="picked==1"></MarqueeTips>
    <MarqueeTips content="我是一个比较长的提示！拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧~~~~" v-else style="color: red" :speed="3"></MarqueeTips>
  </div>
</template>

<script>
  import MarqueeTips from '../components/MarqueeTips.vue'

  export default{
    components: {
      MarqueeTips
    },
    data () {
      return {
        picked: 1
      }
    },
    computed: {},
    created () {},
    beforeDestroy () {},
    mounted () {},
    methods: {}
  }
</script>

<style>
</style>
