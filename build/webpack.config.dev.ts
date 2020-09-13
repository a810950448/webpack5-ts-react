import merge from "webpack-merge";
import { config } from "./webpack.config";

const devConfig = merge(config, {
  mode: "development",
  devtool: "source-map",
});

export default devConfig;
