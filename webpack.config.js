const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/dist/public/js/'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  resolve: {
    // alias: {
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat'
    // },
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  devServer: {
    publicPath: '/public/js/',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
