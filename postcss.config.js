module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    'postcss-pxtorem': {
      // 1rem大小
      // 1rem大小需要设置为37.5，并且量出来的大小需要 / 2
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
