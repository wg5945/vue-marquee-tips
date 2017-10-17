<template>
  <p class="marquee-tips" v-html="content"></p>
</template>

<script>
  const {insertKeyFrame, deleteKeyFrame, getWidthHeight, getTextWidth} = require('./Utils')
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
        let _this = this.$el
        let animationName = 'marquee' + Math.random().toString(36).substring(3, 8)
        deleteKeyFrame(animationName)
        insertKeyFrame(`@keyframes ${animationName} {
          0% {
            text-indent: ${(_this.parentNode ? _this.parentNode.innerWidth || _this.parentNode.clientWidth : getWidthHeight().width) + 10}px
          }
          100% {
            text-indent: ${-getTextWidth(this.content, this.font)}px
          }
        }`)
        insertKeyFrame(`@-webkit-keyframes ${animationName} {
          0% {
            text-indent: ${(_this.parentNode ? _this.parentNode.innerWidth || _this.parentNode.clientWidth : getWidthHeight().width) + 10}px
          }
          100% {
            text-indent: ${-getTextWidth(this.content, this.font)}px
          }
        }`)
        insertKeyFrame(`@-moz-keyframes ${animationName} {
          0% {
            text-indent: ${(_this.parentNode ? _this.parentNode.innerWidth || _this.parentNode.clientWidth : getWidthHeight().width) + 10}px
          }
          100% {
            text-indent: ${-getTextWidth(this.content, this.font)}px
          }
        }`)
        insertKeyFrame(`@-o-keyframes ${animationName} {
          0% {
            text-indent: ${(_this.parentNode ? _this.parentNode.innerWidth || _this.parentNode.clientWidth : getWidthHeight().width) + 10}px
          }
          100% {
            text-indent: ${-getTextWidth(this.content, this.font)}px
          }
        }`)
        _this.style.animation = animationName + ' ' + this.speed + 's' + ' linear infinite'
        _this.style.webkitAnimation = animationName + ' ' + this.speed + 's' + ' linear infinite'
        _this.style.mozAnimation = animationName + ' ' + this.speed + 's' + ' linear infinite'
        _this.style.oAnimation = animationName + ' ' + this.speed + 's' + ' linear infinite'
      }
    },
    watch: {
      content: 'init',
      speed: 'init'
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
