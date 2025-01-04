const webpack = require("webpack");
const fs = require("fs");
const path = require("path");

const { replace, tokens } = require("./scripts/replaceTokens");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "ita-matrix-powertools.user.js",
    path: __dirname
  },
  optimization: {
    minimize: false,
    moduleIds: "named",
    chunkIds: "named",
    mangleExports: false,
    usedExports: true,
    sideEffects: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: "ts-loader", options: { onlyCompileBundledFiles: true } }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: replace(
        fs.readFileSync(path.resolve(__dirname, "header.js"), "utf8")
      ),
      raw: true
    }),
    new webpack.DefinePlugin(
      Object.keys(tokens).reduce((res, token) => {
        res[token] = JSON.stringify(tokens[token]);
        return res;
      }, {})
    )
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  }
};
