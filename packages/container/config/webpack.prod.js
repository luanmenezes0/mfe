const { merge } = require("webpack-merge");
const ModuleFederarionPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commomConfig = require("./webpack.common");
const packageJson = require("../package.json");

//https://d2ib7o2zcjldd2.cloudfront.net/

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederarionPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commomConfig, prodConfig);
