const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: './example/src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'example/dist')
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: [{ loader: 'ts-loader' }] }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'example/dist'),
      port: 8080
    }
  };
};
