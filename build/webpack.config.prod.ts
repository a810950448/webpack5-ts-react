import merge from "webpack-merge";
import { config } from "./webpack.config";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const prodConfig = merge(config, {
  mode: "production",
  devtool: "eval",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "public/template.html",
      filename: "index.html",
      chunks: "all",
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
  ],
});

export default prodConfig;
