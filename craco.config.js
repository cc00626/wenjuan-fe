/* eslint-disable no-undef */
module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
}
