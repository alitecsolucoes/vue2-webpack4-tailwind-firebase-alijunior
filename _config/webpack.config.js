'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const proMode = process.env.NODE_ENV !== 'development';
const devMode = !proMode;

console.log(process.env.NODE_ENV)

// const TailWindCSS = require('tailwindcss');
 const tailwindConfig = require(resolve('_config/tailwind.config.js'))

if (proMode){
  console.log( tailwindConfig )
  console.log( 'Building for production...' )
}

if (devMode){
  console.log( 'Starting development server...' )
}



tailwindConfig.purge.enabled = proMode

const versao = '.1.0.0';

module.exports = (env = {}) => ({
  mode: proMode ? 'production' : 'development',
  devtool: proMode ? false : 'eval-source-map', // : 'cheap-module-eval-source-map',
  entry: resolve('src/main.js'),
  output: {
    path: resolve('dist'),
    //publicPath: './', //prefixo dos arquivos substituídos no index.html
    filename: `js/[name]${versao}.[hash].js`,
    //chunkFilename: utils.assetsPath('js/[name].[id].[chunkhash].js') // junior
    chunkFilename: `js/[name]${versao}.[hash].js`,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       //options: { hmr: !env.prod }
      //     },
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              hmr: devMode,
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                //TailWindCSS(tailwindConfig),
                require('tailwindcss')(resolve('_config/tailwind.config.js')),
                require('postcss-preset-env')({ stage: 1 }),
              ],
            },
          },
        ],
      },

      // {
      //   test: /\.html$/i,
      //   use:{
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true,
      //     },
      //   }
      // },
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    ...proMode ? [new CleanWebpackPlugin()] : [],
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    // copy custom static assets
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*', //resolve('static'),
          context: resolve('static'),
          globOptions: {
            ignore: ['.*']
          }
        },
      ],
    }),
    // new CompressionPlugin({
    //   deleteOriginalAssets: true,
    //   filename: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        ['js', 'css'].join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    }),

    //new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    //new webpack.NoEmitOnErrorsPlugin(),
    // keep module.id stable when vendor modules does not change
    //new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting

    ...proMode ?
    [
      new webpack.HashedModuleIdsPlugin({
        context: __dirname,
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20
      })
    ] : [
      new webpack.HotModuleReplacementPlugin(),
    ]

//    new webpack.optimize.ModuleConcatenationPlugin(),

  ],
  optimization: {
    namedModules: devMode,
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    minimize: proMode,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: devMode,
          },
        },
        extractComments: devMode,
      }),
      ...proMode ? [new OptimizeCSSAssetsPlugin({})] : []
    ],
  },
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    //contentBase: resolve('static'),
    overlay: true,
    clientLogLevel: 'warning',
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    //quiet: true, // necessary for FriendlyErrorsPlugin

  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
})
