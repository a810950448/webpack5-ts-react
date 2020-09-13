import webpack from "webpack";
import path from "path";

const config: webpack.Configuration = {
  entry: path.join("../src/index.tsx"), // 入口文件
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "images/[name].[hash:8].[ext]",
              limit: 4096,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "..", "dist"),
  },
};

export { config };
