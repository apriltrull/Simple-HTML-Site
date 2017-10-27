
const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    target: 'web',

    entry: './public/index.html',
    output: {
      path: srcPath,
      filename: '[name].bundle.js',
      publicPath: '/'
  },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['*', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                  presets: ['es2015', 'react', 'stage-2'],
                  plugins:['transform-decorators-legacy']
                }
            }
        ]
    },
    node: {
      console: true,
      fs:'empty',
      net: 'empty',
      tls: 'empty'
    },
    devtool: 'source-map'
};
