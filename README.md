[![npm](https://img.shields.io/npm/v/vue-marquee-tips.svg)](https://www.npmjs.com/package/vue-marquee-tips)
[![npm](https://img.shields.io/badge/license-MIT-blue.svg)](https://www.npmjs.com/package/vue-marquee-tips)

# vue-marquee-tips

> A Vue component to marquee

## Demo
<p align="center">
   <a href="https://wg5945.github.io/vue-marquee-tips">
    <img src="https://wg5945.github.io/vue-marquee-tips/static/img/home.png" width="100" alt="">
  </a>
  <br>
  <a href="https://wg5945.github.io/vue-marquee-tips">
    online demo >>
  </a>
</p>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## Usage

### NPM

```shell
npm install vue-marquee-tips --save-dev
```

```javascript
import MarqueeTips from 'vue-marquee-tips'
export default {
  components: {
    MarqueeTips
  }
}
```
```html
<MarqueeTips content="我是一个短短的提示！"></MarqueeTips>
<MarqueeTips content="我是一个比较长的提示！拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧拉吧~~~~" style="color: red" :speed="3"></MarqueeTips>
<MarqueeTips content="加大字体提示：BigBigBigBig" style="font-size: 30px" font="30px sans-serif"></MarqueeTips>
             
<div style="width: 200px;margin: 0 auto;background-color: orange;">
  <MarqueeTips content="容器内提示：22222222222222222" :speed="3"></MarqueeTips>
  <MarqueeTips content="容器内提示：1111"></MarqueeTips>
</div>
```
## Options

| Name  | Type |  Default |  Description |
|---|---|---|---|
| `content`  | `String`  | `undefined`  |  tooltips's content |
| `font`  | `String`  |  `16px sans-serif` | tooltips's font  |
| `speed`  | `Number`  |  `5` |  animation-duration |

## License

MIT
