<template>
  <p class="marquee-tips">{{content}}</p>
</template>

<script>
  import utils from './Utils'
  export default{
    name: 'MarqueeTips',
    props: {
      content: String,
      font: {
        type: String,
        default: '16px sans-serif'
      },
      speed: {
        type: Number,
        default: 5
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.init()
      })
    },
    methods: {
      init () {
        let animationName = 'marquee' + Math.round(new Date().getTime() / 1000)
        utils.deleteKeyFrame(animationName)
        utils.insertKeyFrame(`@keyframes ${animationName} {
          0% {
            text-indent: ${utils.getWidthHeight().width + 10}px
          }
          100% {
            text-indent: ${-utils.getTextWidth(this.content, this.font)}px
          }
        }`)
        document.getElementsByClassName('marquee-tips')[0].style.animation = animationName + ' ' + this.speed + 's' + ' linear infinite'
      }
    },
    watch: {
      content: 'init'
    }
  }
</script>

<style>
  .marquee-tips {
    text-align: left;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
  }
</style>
