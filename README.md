# Webpack multiple output

This is a POC to generate a public and private build as part of a Cozy. We use webpack's multi-compiler mode and return an array of configurations instead of just one in the `webpack.config.js`.