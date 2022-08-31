const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/index.ts",
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|ico)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
    hot: true,
  },
  performance: {
    hints: false,
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
};
