const widthCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = widthCss({}) // 让next支持css文件