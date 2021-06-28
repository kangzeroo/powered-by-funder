const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("---- process.env.NODE_ENV");
console.log(process.env.NODE_ENV);

const baseConfig = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  output: {
    path:
      process.env.NODE_ENV === "production"
        ? path.resolve(__dirname, "dist")
        : path.resolve(__dirname, "demo"),
    libraryTarget: "umd",
    filename: "[name].js",
    umdNamedDefine: true,
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
        options: {
          declaration: false,
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "react/jsx-dev-runtime": "react/jsx-dev-runtime.js",
      "react/jsx-runtime": "react/jsx-runtime.js",
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            // removing comments
            comments: process.env.NODE_ENV === "production" ? true : false,
            ascii_only: true,
          },
          compress: {
            // remove console.logs
            drop_console: process.env.NODE_ENV === "production" ? true : false,
          },
        },
      }),
    ],
  },
  target: "web",
};

module.exports = [
  {
    ...baseConfig,
    entry: {
      "funder-lib": "./build/index.js",
      "funder-lib.min": "./build/index.js",
    },
    output: {
      ...baseConfig.output,
      filename: "funder.js",
      library: "Funder",
    },
  },
];
