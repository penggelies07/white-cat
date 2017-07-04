var genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = function (config, env) {
  var config = genDefaultConfig(config, env)

  config.resolve.extensions.push('.ts', '.tsx')

  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader'
  })

  return config
}
