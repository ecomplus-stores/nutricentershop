// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/AShare.html': path.resolve(__dirname, 'template/js/custom-js/html/AShare.html')
      //'./js/AShare.js': path.resolve(__dirname, 'template/js/custom-js/js/AShare.js')
    }
  }
})
