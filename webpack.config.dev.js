const webpack = require('webpack');

export default {
  devtool: 'cheap-module-eval-source-map',

  entry: ['webpack-hot-middleware/client',
          './client/index.js',
  ],

  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
    publicPath: '/dist/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules',
      },
      {
        test: /\.jsx*$/,
        exclude: [/node_modules/, /.+\.config.js/],
        loader: 'babel',
        query: {
          presets: ['react-hmre'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT: JSON.stringify(true)
      },
    }),
  ],
};
