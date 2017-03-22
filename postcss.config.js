const postcssAutoprefixer = require('autoprefixer')
const postcssVars = require('postcss-css-variables')
const postcssCalc = require('postcss-calc')
const postcssStylelint = require('stylelint')
const styleWarningBreaker = require('style-warning-breaker')
const globalStyleConstants = require('./src/lib/styles/constants.global');

module.exports = (webpack) => ({
  plugins: [
    postcssStylelint,
    styleWarningBreaker,
    postcssVars({variables: globalStyleConstants}),
    postcssCalc,
    postcssAutoprefixer({remove: false})
  ]
})
