const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ZipWebpackPlugin = require("zip-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/background.ts",
  output: {
    filename: "background.js",
    path: path.resolve(__dirname, "../build/chrome_build"),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/popup/popup.js", to: "popup.js" },
        { from: "src/popup/popup.html", to: "popup/popup.html" },
        { from: "src/popup/popup.css", to: "popup/popup.css" },
        { from: "src/manifest_chrome.json", to: "manifest.json" },
        { from: "src/assets/icons/*.png", to: "assets/icons/[name][ext]" },
        { from: "src/css/*.css", to: "css/[name][ext]" },
      ],
    }),
    new ZipWebpackPlugin({
      path: path.resolve(__dirname, "../build/"),
      filename: "chrome_build.zip",
      cleanStaleWebpackAssets: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
