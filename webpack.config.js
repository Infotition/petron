const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "production",

  entry: "./src/index.ts",
  target: "node",
  externals: [
    /^[a-z\-0-9]+$/, // Ignore node_modules folder
  ],
  devtool: false,

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    libraryTarget: "commonjs",
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/config", to: "config" }],
    }),
  ],
};
