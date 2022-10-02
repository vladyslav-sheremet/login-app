const { defineConfig } = require('@vue/cli-service')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/assets/styles/variables.scss";`,
      }
    }
  }
}
