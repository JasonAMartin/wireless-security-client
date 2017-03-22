const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/ClientApp.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/dist/public/js/'),
    publicPath: '/static/js/',
    filename: 'bundle.js'
  },
  resolve: {
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
        test: /\.json$/,
        exclude: [/.idea/, /webpack/, /node_loaders/, /node_modules/],
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.js$/,
        exclude: [/.idea/, /webpack/, /node_loaders/, /node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader'
        ],
        exclude: [/.idea/, /webpack/, /node_loaders/, /node_modules/]
      }
    ]
  }
}

