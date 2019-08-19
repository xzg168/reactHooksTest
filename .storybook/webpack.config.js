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
module.exports = async ({ config, mode, defaultConfig }) => {
  config.resolve.extensions = [
    '.mjs',
    '.web.ts',
    '.ts',
    '.web.tsx',
    '.tsx',
    '.web.js',
    '.js',
    '.json',
    '.web.jsx',
    '.jsx',
  ];
  config.module.rules[2].use[1].options.modules = true;
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'babel-loader',
    options: {
      presets: ['react-app'],
      plugins: [['import', { libraryName: 'antd', style: true }]],
    },
  });
  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'less-loader',
        options: {
          //modifyVars: {"@primary-color": "#000000"}, // 如果要自定义主题样式
          javascriptEnabled: true,
        },
      },
    ],
  });
  return config;
};
