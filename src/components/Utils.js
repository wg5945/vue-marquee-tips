export default {
  insertKeyFrame (rule) {
    if (document.styleSheets && document.styleSheets.length) {
      try {
        document.styleSheets[0].insertRule(rule, 0)
      } catch (ex) {
      }
    } else {
      let style = document.createElement('style')
      style.innerHTML = rule
      document.head.appendChild(style)
    }
  },
  deleteKeyFrame (ruleName) {
    let cssrules = (document.all) ? 'rules' : 'cssRules'
    let i
    for (i = 0; i < document.styleSheets[0][cssrules].length; i += 1) {
      let rule = document.styleSheets[0][cssrules][i]
      if (rule.name === ruleName || rule.selectorText === '.' + ruleName) {
        document.styleSheets[0].deleteRule(i)
        break
      }
    }
  },
  getWidthHeight () {
    let w = window
    let d = document
    let e = d.documentElement
    let g = d.getElementsByTagName('body')[0]
    return {
      width: w.innerWidth || e.clientWidth || g.clientWidth, height: w.innerHeight || e.clientHeight || g.clientHeight
    }
  },
  getTextWidth (text, font) {
    let canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement('canvas'))
    let context = canvas.getContext('2d')
    context.font = font
    let metrics = context.measureText(text)
    return metrics.width
  }
}
