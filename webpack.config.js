const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/main.js",
    style: "./src/style.css"
  },
  output: {
    filename: "bundle.[hash:4].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].[hash:4].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          "css-loader"
        ]
      }
    ]
  }
};
