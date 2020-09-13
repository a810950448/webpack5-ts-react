import merge from "webpack-merge";
import { config } from "./webpack.config";
import CleanWebpackPlugin from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

const prodConfig = merge(config, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join("../public/template.html"),
    }),
    // new MiniCssExtractPlugin({
    //   filename: "css/[name].css",
    //   chunkFilename: "css/[id].css",
    // }),
  ],
});

export default prodConfig;
