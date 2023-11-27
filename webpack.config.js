const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin')

function getConfig(targetName) {
  const config = {
    entry: `./src/targets/${targetName}/index.js`,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: `./src/targets/${targetName}/index.html`,
        filename: "./index.html"
      })
    ],
    watch: true,
    devtool: 'source-map',
    output: {
      filename: `main.js`,
      path: __dirname + `/build/${targetName === 'public' ? 'public' : ''}`
    }
  }

  if(targetName === 'browser') {
    config.plugins.push(new CopyPlugin({
      patterns: [
        { from: './src/manifest.webapp', to: __dirname + '/build/' }
      ],
    }))
  }

  return config
}

module.exports = [getConfig('browser'), getConfig('public')];