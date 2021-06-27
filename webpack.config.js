const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const baseConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    filename: "[name].js",
    umdNamedDefine: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
            comments: false,
          },
          compress: {
            // remove console.logs
            // drop_console: true,
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
