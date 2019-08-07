// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
//自动生成的重写webpack配置文件方式，因提示使用全控制模式,改用全控制方法
// module.exports = {
//   plugins: [
//     // your custom plugins
//   ],
//   module: {
//     rules: [
//       // add your custom rules.
//       {
//         test: /\.(ts|tsx)$/,
//         loader: require.resolve('babel-loader'),
//       }
//     ],
//   },
// };


//全控制模式
module.exports = async ({ config, mode }) => {
  config.module.rules.push( {
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
  });
  return config;
};

